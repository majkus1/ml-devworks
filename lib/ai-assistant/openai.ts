/**
 * Minimalny klient OpenAI Chat Completions oparty na fetch (bez SDK).
 * Klucz API jest używany wyłącznie po stronie serwera.
 */

export interface OpenAIMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

const OPENAI_URL = "https://api.openai.com/v1/chat/completions";

export function isAiAssistantEnabled() {
  return Boolean(process.env.OPENAI_API_KEY) && process.env.AI_ASSISTANT_ENABLED !== "false";
}

export function getChatModel() {
  return process.env.OPENAI_MODEL || "gpt-4o-mini";
}

export function getSummaryModel() {
  return process.env.OPENAI_SUMMARY_MODEL || getChatModel();
}

function authHeaders() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) throw new Error("OPENAI_API_KEY is not configured");
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  };
}

/**
 * Zwraca strumień czystego tekstu (delty odpowiedzi modelu).
 */
export async function streamChat(
  messages: OpenAIMessage[],
  options: { model?: string; signal?: AbortSignal; maxTokens?: number; temperature?: number } = {},
): Promise<ReadableStream<Uint8Array>> {
  const response = await fetch(OPENAI_URL, {
    method: "POST",
    headers: authHeaders(),
    signal: options.signal,
    body: JSON.stringify({
      model: options.model || getChatModel(),
      messages,
      stream: true,
      temperature: options.temperature ?? 0.4,
      max_tokens: options.maxTokens ?? 700,
    }),
  });

  if (!response.ok || !response.body) {
    const errorText = await response.text().catch(() => "");
    throw new Error(`OpenAI error ${response.status}: ${errorText.slice(0, 300)}`);
  }

  const decoder = new TextDecoder();
  const encoder = new TextEncoder();
  const reader = response.body.getReader();
  let buffer = "";

  return new ReadableStream<Uint8Array>({
    async pull(controller) {
      const { done, value } = await reader.read();
      if (done) {
        controller.close();
        return;
      }

      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() ?? "";

      for (const rawLine of lines) {
        const line = rawLine.trim();
        if (!line.startsWith("data:")) continue;
        const payload = line.slice(5).trim();
        if (!payload || payload === "[DONE]") continue;

        try {
          const json = JSON.parse(payload);
          const delta: string | undefined = json?.choices?.[0]?.delta?.content;
          if (delta) controller.enqueue(encoder.encode(delta));
        } catch {
          // Niepełna linia JSON - zostanie dopełniona w kolejnym chunku.
        }
      }
    },
    cancel() {
      reader.cancel().catch(() => undefined);
    },
  });
}

export async function completeChat(
  messages: OpenAIMessage[],
  options: { model?: string; json?: boolean; maxTokens?: number; temperature?: number } = {},
): Promise<string> {
  const response = await fetch(OPENAI_URL, {
    method: "POST",
    headers: authHeaders(),
    body: JSON.stringify({
      model: options.model || getChatModel(),
      messages,
      temperature: options.temperature ?? 0.2,
      max_tokens: options.maxTokens ?? 600,
      ...(options.json ? { response_format: { type: "json_object" } } : {}),
    }),
  });

  if (!response.ok) {
    const errorText = await response.text().catch(() => "");
    throw new Error(`OpenAI error ${response.status}: ${errorText.slice(0, 300)}`);
  }

  const json = await response.json();
  return json?.choices?.[0]?.message?.content ?? "";
}
