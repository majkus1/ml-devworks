import type { SiteLang } from "@/lib/services";
import { AI_ASSISTANT_LIMITS, type ChatApiMessage, type SendContact } from "@/lib/ai-assistant/types";

export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function isLang(value: unknown): value is SiteLang {
  return value === "pl" || value === "en";
}

/**
 * Normalizuje wiadomości z klienta: tylko role user/assistant, przycięte treści,
 * limity długości. Zwraca null, gdy struktura jest niepoprawna.
 */
export function parseMessages(raw: unknown): ChatApiMessage[] | null {
  if (!Array.isArray(raw) || raw.length === 0) return null;

  const messages: ChatApiMessage[] = [];
  let total = 0;
  let userCount = 0;

  for (const item of raw) {
    if (!item || typeof item !== "object") return null;
    const role = (item as { role?: unknown }).role;
    const content = (item as { content?: unknown }).content;
    if ((role !== "user" && role !== "assistant") || typeof content !== "string") return null;

    const text = content.trim();
    if (!text) continue;
    if (role === "user") {
      if (text.length > AI_ASSISTANT_LIMITS.maxMessageChars) return null;
      userCount += 1;
    }
    total += text.length;
    if (total > AI_ASSISTANT_LIMITS.maxTotalChars) return null;
    messages.push({ role, content: text.slice(0, 4000) });
  }

  if (messages.length === 0) return null;
  if (userCount > AI_ASSISTANT_LIMITS.maxUserMessages) return null;
  return messages;
}

export function parseLang(raw: unknown): SiteLang {
  return isLang(raw) ? raw : "pl";
}

export function parsePageContext(raw: unknown): string | undefined {
  if (typeof raw !== "string") return undefined;
  const text = raw.replace(/[\r\n]+/g, " ").trim();
  return text ? text.slice(0, 120) : undefined;
}

export function parseContact(raw: unknown): SendContact | null {
  if (!raw || typeof raw !== "object") return null;
  const source = raw as Record<string, unknown>;
  const email = typeof source.email === "string" ? source.email.trim() : "";
  if (!EMAIL_REGEX.test(email) || email.length > 200) return null;

  const optional = (key: string, max: number) => {
    const value = source[key];
    if (typeof value !== "string") return undefined;
    const text = value.replace(/[\r\n]+/g, " ").trim();
    return text ? text.slice(0, max) : undefined;
  };

  return {
    email,
    name: optional("name", 100),
    phone: optional("phone", 40),
    company: optional("company", 120),
  };
}

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
