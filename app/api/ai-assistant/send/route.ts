import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { completeChat, getSummaryModel, isAiAssistantEnabled } from "@/lib/ai-assistant/openai";
import { buildSummaryPrompt } from "@/lib/ai-assistant/system-prompt";
import { checkRateLimit, getClientIp } from "@/lib/ai-assistant/rate-limit";
import { escapeHtml, parseContact, parseLang, parseMessages } from "@/lib/ai-assistant/validate";
import type { ChatApiMessage, ConversationSummary } from "@/lib/ai-assistant/types";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

const SEND_LIMIT = 3;
const SEND_WINDOW_MS = 10 * 60 * 1000;
const MAX_BODY_BYTES = 96 * 1024;

function transcriptToText(messages: ChatApiMessage[], lang: "pl" | "en") {
  const userLabel = lang === "pl" ? "Klient" : "Client";
  return messages.map((m) => `${m.role === "user" ? userLabel : "AI"}: ${m.content}`).join("\n\n");
}

async function summarize(messages: ChatApiMessage[], lang: "pl" | "en"): Promise<ConversationSummary | null> {
  if (!isAiAssistantEnabled()) return null;
  try {
    const raw = await completeChat(
      [
        { role: "system", content: buildSummaryPrompt() },
        { role: "user", content: transcriptToText(messages, lang) },
      ],
      { model: getSummaryModel(), json: true, maxTokens: 500, temperature: 0.2 },
    );
    const parsed = JSON.parse(raw) as Partial<ConversationSummary>;
    const pick = (key: keyof ConversationSummary) =>
      typeof parsed[key] === "string" ? (parsed[key] as string).trim() : "";
    return {
      topic: pick("topic"),
      industry: pick("industry"),
      problem: pick("problem"),
      proposedSolution: pick("proposedSolution"),
      estimate: pick("estimate"),
      nextStep: pick("nextStep"),
    };
  } catch (error) {
    console.error("AI assistant summary error:", error);
    return null;
  }
}

function renderSummaryHtml(summary: ConversationSummary | null) {
  if (!summary) {
    return `<p style="color:#666;">Podsumowanie AI niedostępne (błąd generowania). Pełna rozmowa poniżej.</p>`;
  }
  const rows: [string, string][] = [
    ["Temat", summary.topic],
    ["Branża", summary.industry],
    ["Problem", summary.problem],
    ["Proponowane rozwiązanie", summary.proposedSolution],
    ["Szacunek z rozmowy", summary.estimate],
    ["Sugerowany następny krok", summary.nextStep],
  ];
  return `<table style="border-collapse:collapse;width:100%;">${rows
    .filter(([, value]) => value)
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 10px 6px 0;vertical-align:top;color:#666;white-space:nowrap;"><strong>${label}</strong></td><td style="padding:6px 0;vertical-align:top;">${escapeHtml(value)}</td></tr>`,
    )
    .join("")}</table>`;
}

function renderSummaryText(summary: ConversationSummary | null) {
  if (!summary) return "Podsumowanie AI niedostępne.";
  return [
    `Temat: ${summary.topic}`,
    `Branża: ${summary.industry}`,
    `Problem: ${summary.problem}`,
    `Proponowane rozwiązanie: ${summary.proposedSolution}`,
    `Szacunek z rozmowy: ${summary.estimate}`,
    `Sugerowany następny krok: ${summary.nextStep}`,
  ].join("\n");
}

export async function POST(request: NextRequest) {
  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > MAX_BODY_BYTES) {
    return NextResponse.json({ error: "payload_too_large" }, { status: 413 });
  }

  const ip = getClientIp(request.headers);
  const limit = checkRateLimit(`send:${ip}`, SEND_LIMIT, SEND_WINDOW_MS);
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

  // Honeypot: boty wypełniają ukryte pole. Odpowiadamy sukcesem, ale nic nie wysyłamy.
  if (typeof source.website === "string" && source.website.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  const messages = parseMessages(source.messages);
  const contact = parseContact(source.contact);
  const lang = parseLang(source.lang);
  const consent = source.consent === true;
  const pageUrl = typeof source.pageUrl === "string" ? source.pageUrl.slice(0, 300) : "";

  if (!messages || messages.length < 2 || !messages.some((m) => m.role === "assistant")) {
    return NextResponse.json({ error: "invalid_messages" }, { status: 400 });
  }
  if (!contact) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }
  if (!consent) {
    return NextResponse.json({ error: "consent_required" }, { status: 400 });
  }

  const gmailEmail = process.env.GMAIL_EMAIL;
  const gmailPassword = process.env.GMAIL_PASSWORD;
  const ownerEmail = process.env.OWNER_EMAIL || gmailEmail;
  if (!gmailEmail || !gmailPassword || !ownerEmail) {
    console.error("AI assistant send: mail credentials not configured");
    return NextResponse.json({ error: "mail_not_configured" }, { status: 500 });
  }

  const summary = await summarize(messages, lang);
  const sentAt = new Date();
  const sentAtLabel = sentAt.toLocaleString("pl-PL", { timeZone: "Europe/Warsaw" });
  const userLabel = lang === "pl" ? "Klient" : "Client";

  const contactRows: [string, string][] = [
    ["E-mail", contact.email],
    ["Imię", contact.name ?? "-"],
    ["Telefon", contact.phone ?? "-"],
    ["Firma", contact.company ?? "-"],
    ["Język rozmowy", lang.toUpperCase()],
    ["Strona", pageUrl || "-"],
    ["Wysłano", sentAtLabel],
    ["Zgoda na kontakt", `tak (${sentAt.toISOString()})`],
  ];

  const transcriptHtml = messages
    .map((m) => {
      const isUser = m.role === "user";
      return `<div style="margin:0 0 12px 0;padding:12px 14px;border-radius:8px;background:${isUser ? "#e8fff3" : "#f5f5f5"};border-left:4px solid ${isUser ? "#00cc6a" : "#999"};">
  <div style="font-size:12px;color:#666;margin-bottom:4px;"><strong>${isUser ? userLabel : "Asystent AI"}</strong></div>
  <div style="white-space:pre-wrap;font-size:14px;line-height:1.5;color:#222;">${escapeHtml(m.content)}</div>
</div>`;
    })
    .join("");

  const subjectTopic = summary?.topic || (lang === "pl" ? "rozmowa o automatyzacji" : "automation conversation");
  const subjectWho = contact.company || contact.name || contact.email;

  const html = `
<div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;color:#222;">
  <h2 style="color:#00cc6a;border-bottom:2px solid #00ff88;padding-bottom:10px;">Nowa rozmowa z asystenta AI - ML DevWorks</h2>

  <div style="background:#f5f5f5;padding:16px 20px;border-radius:6px;margin:20px 0;">
    <h3 style="margin:0 0 10px 0;color:#333;font-size:16px;">Dane kontaktowe</h3>
    <table style="border-collapse:collapse;">
      ${contactRows
        .map(
          ([label, value]) =>
            `<tr><td style="padding:4px 12px 4px 0;color:#666;"><strong>${label}</strong></td><td style="padding:4px 0;">${
              label === "E-mail" ? `<a href="mailto:${escapeHtml(value)}">${escapeHtml(value)}</a>` : escapeHtml(value)
            }</td></tr>`,
        )
        .join("")}
    </table>
  </div>

  <div style="background:#fff;border:1px solid #e5e5e5;border-left:4px solid #00ff88;padding:16px 20px;border-radius:6px;margin:20px 0;">
    <h3 style="margin:0 0 10px 0;color:#333;font-size:16px;">Podsumowanie AI</h3>
    ${renderSummaryHtml(summary)}
  </div>

  <h3 style="color:#333;font-size:16px;margin:28px 0 12px 0;">Pełna transkrypcja (${messages.length} wiadomości)</h3>
  ${transcriptHtml}

  <div style="margin-top:30px;padding-top:16px;border-top:1px solid #ddd;color:#666;font-size:12px;">
    <p>Odpowiedz na ten e-mail, aby skontaktować się bezpośrednio z klientem (reply-to ustawione na jego adres).</p>
    <p>Odpowiedzi asystenta AI mogą zawierać nieścisłości - zweryfikuj zakres i widełki przed wyceną.</p>
  </div>
</div>`;

  const text = [
    "Nowa rozmowa z asystenta AI - ML DevWorks",
    "",
    "Dane kontaktowe:",
    ...contactRows.map(([label, value]) => `${label}: ${value}`),
    "",
    "Podsumowanie AI:",
    renderSummaryText(summary),
    "",
    `Pełna transkrypcja (${messages.length} wiadomości):`,
    "",
    transcriptToText(messages, lang),
    "",
    "---",
    "Odpowiedz na ten e-mail, aby skontaktować się bezpośrednio z klientem.",
  ].join("\n");

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: { user: gmailEmail, pass: gmailPassword },
    });

    await transporter.sendMail({
      from: `"ML DevWorks AI Asystent" <${gmailEmail}>`,
      to: ownerEmail,
      replyTo: contact.email,
      subject: `[AI Asystent] ${subjectWho} - ${subjectTopic}`,
      html,
      text,
    });

    if (process.env.AI_SEND_CLIENT_COPY === "true") {
      const isPl = lang === "pl";
      await transporter.sendMail({
        from: `"ML DevWorks" <${gmailEmail}>`,
        to: contact.email,
        replyTo: "office@ml-devworks.com",
        subject: isPl ? "Kopia Twojej rozmowy z asystentem ML DevWorks" : "Copy of your conversation with the ML DevWorks assistant",
        text: [
          isPl
            ? "Dziękuję za wiadomość. Michał Lipka (ML DevWorks) otrzymał Twoją rozmowę i odezwie się w ciągu 2-5 dni."
            : "Thank you for your message. Michał Lipka (ML DevWorks) received your conversation and will reply within 2-5 days.",
          "",
          transcriptToText(messages, lang),
        ].join("\n"),
      });
    }
  } catch (error) {
    console.error("AI assistant send error:", error);
    return NextResponse.json({ error: "send_failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
