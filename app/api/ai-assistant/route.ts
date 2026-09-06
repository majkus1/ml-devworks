import { NextRequest, NextResponse } from "next/server";
import { isAiAssistantEnabled, streamChat, type OpenAIMessage } from "@/lib/ai-assistant/openai";
import { buildSystemPrompt } from "@/lib/ai-assistant/system-prompt";
import { checkRateLimit, getClientIp } from "@/lib/ai-assistant/rate-limit";
import { parseLang, parseMessages, parsePageContext } from "@/lib/ai-assistant/validate";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

const CHAT_LIMIT = 20;
const CHAT_WINDOW_MS = 10 * 60 * 1000;
const MAX_BODY_BYTES = 64 * 1024;

function ndjson(payload: Record<string, unknown>) {
  return `${JSON.stringify(payload)}\n`;
}

export async function POST(request: NextRequest) {
  if (!isAiAssistantEnabled()) {
    return NextResponse.json({ error: "unavailable" }, { status: 503 });
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "payload_too_large" }, { status: 413 });
  }

  const ip = getClientIp(request.headers);
  const limit = checkRateLimit(`chat:${ip}`, CHAT_LIMIT, CHAT_WINDOW_MS);
  if (!limit.ok) {
    return NextResponse.json(
      { error: "rate_limited", retryAfterSeconds: limit.retryAfterSeconds },
      { status: 429, headers: { "Retry-After": String(limit.retryAfterSeconds) } },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const source = (body ?? {}) as Record<string, unknown>;
  const messages = parseMessages(source.messages);
  if (!messages || messages[messages.length - 1].role !== "user") {
    return NextResponse.json({ error: "invalid_request" }, { status: 400 });
  }

  const lang = parseLang(source.lang);
  const pageContext = parsePageContext(source.pageContext);

  const openAiMessages: OpenAIMessage[] = [
    { role: "system", content: buildSystemPrompt(lang, pageContext) },
    ...messages,
  ];

  const encoder = new TextEncoder();
  const decoder = new TextDecoder();

  let upstream: ReadableStream<Uint8Array>;
  try {
    upstream = await streamChat(openAiMessages, { signal: request.signal });
  } catch (error) {
    console.error("AI assistant upstream error:", error);
    return NextResponse.json({ error: "upstream" }, { status: 502 });
  }

  const reader = upstream.getReader();
  const stream = new ReadableStream<Uint8Array>({
    async pull(controller) {
      try {
        const { done, value } = await reader.read();
        if (done) {
          controller.enqueue(encoder.encode(ndjson({ type: "done" })));
          controller.close();
          return;
        }
        controller.enqueue(encoder.encode(ndjson({ type: "delta", text: decoder.decode(value, { stream: true }) })));
      } catch (error) {
        console.error("AI assistant stream error:", error);
        controller.enqueue(encoder.encode(ndjson({ type: "error", code: "upstream" })));
        controller.close();
      }
    },
    cancel() {
      reader.cancel().catch(() => undefined);
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "application/x-ndjson; charset=utf-8",
      "Cache-Control": "no-store",
      "X-Accel-Buffering": "no",
    },
  });
}
