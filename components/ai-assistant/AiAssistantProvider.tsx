"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import type { SiteLang } from "@/lib/services";
import { AI_ASSISTANT_LIMITS, type ChatMessage } from "@/lib/ai-assistant/types";

const STORAGE_KEY = "mld-ai-assistant-v1";

export type AssistantStatus = "idle" | "streaming" | "error";
export type AssistantErrorCode = "rate_limited" | "unavailable" | "upstream" | "network" | "invalid";

interface StoredState {
  v: 1;
  messages: ChatMessage[];
  sentAt: number | null;
  sentEmail: string | null;
}

interface AssistantContextValue {
  enabled: boolean;
  lang: SiteLang;
  hydrated: boolean;
  messages: ChatMessage[];
  streamingText: string;
  status: AssistantStatus;
  error: AssistantErrorCode | null;
  userMessageCount: number;
  limitReached: boolean;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  sendMessage: (text: string) => Promise<void>;
  retryLast: () => Promise<void>;
  stop: () => void;
  reset: () => void;
  sentAt: number | null;
  sentEmail: string | null;
  markSent: (email: string) => void;
  inlineVisible: boolean;
  setInlineVisible: (visible: boolean) => void;
}

const AssistantContext = createContext<AssistantContextValue | null>(null);

function createId() {
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 8)}`;
}

function trackEvent(event: string, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  const dataLayer = (window as unknown as { dataLayer?: unknown[] }).dataLayer;
  if (Array.isArray(dataLayer)) dataLayer.push({ event, ...payload });
}

function readStorage(): StoredState | null {
  try {
    const raw = window.sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as Partial<StoredState>;
    if (parsed.v !== 1 || !Array.isArray(parsed.messages)) return null;
    return {
      v: 1,
      messages: parsed.messages.filter(
        (m): m is ChatMessage =>
          !!m && (m.role === "user" || m.role === "assistant") && typeof m.content === "string" && typeof m.id === "string",
      ),
      sentAt: typeof parsed.sentAt === "number" ? parsed.sentAt : null,
      sentEmail: typeof parsed.sentEmail === "string" ? parsed.sentEmail : null,
    };
  } catch {
    return null;
  }
}

function writeStorage(state: StoredState) {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // sessionStorage może być niedostępne (tryb prywatny, blokada) - ignorujemy.
  }
}

export function AiAssistantProvider({ enabled, children }: { enabled: boolean; children: ReactNode }) {
  const pathname = usePathname();
  const lang: SiteLang = pathname?.startsWith("/en") ? "en" : "pl";

  const [hydrated, setHydrated] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [streamingText, setStreamingText] = useState("");
  const [status, setStatus] = useState<AssistantStatus>("idle");
  const [error, setError] = useState<AssistantErrorCode | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [sentAt, setSentAt] = useState<number | null>(null);
  const [sentEmail, setSentEmail] = useState<string | null>(null);
  const [inlineVisible, setInlineVisible] = useState(false);

  const messagesRef = useRef<ChatMessage[]>([]);
  const abortRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const stored = readStorage();
    if (stored) {
      messagesRef.current = stored.messages;
      setMessages(stored.messages);
      setSentAt(stored.sentAt);
      setSentEmail(stored.sentEmail);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    writeStorage({ v: 1, messages, sentAt, sentEmail });
  }, [hydrated, messages, sentAt, sentEmail]);

  const commitMessages = useCallback((next: ChatMessage[]) => {
    messagesRef.current = next;
    setMessages(next);
  }, []);

  const userMessageCount = useMemo(() => messages.filter((m) => m.role === "user").length, [messages]);
  const limitReached = userMessageCount >= AI_ASSISTANT_LIMITS.maxUserMessages;

  const stop = useCallback(() => {
    abortRef.current?.abort();
  }, []);

  const runConversation = useCallback(
    async (history: ChatMessage[]) => {
      setStatus("streaming");
      setStreamingText("");
      setError(null);

      const controller = new AbortController();
      abortRef.current = controller;
      let accumulated = "";

      const finish = (errorCode: AssistantErrorCode | null) => {
        if (accumulated.trim()) {
          commitMessages([
            ...messagesRef.current,
            { id: createId(), role: "assistant", content: accumulated.trim(), createdAt: Date.now() },
          ]);
        }
        setStreamingText("");
        setError(errorCode);
        setStatus(errorCode ? "error" : "idle");
        abortRef.current = null;
      };

      try {
        const response = await fetch("/api/ai-assistant", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          signal: controller.signal,
          body: JSON.stringify({
            lang,
            pageContext: typeof document !== "undefined" ? document.title : undefined,
            messages: history.map(({ role, content }) => ({ role, content })),
          }),
        });

        if (!response.ok || !response.body) {
          const code: AssistantErrorCode =
            response.status === 429
              ? "rate_limited"
              : response.status === 503
                ? "unavailable"
                : response.status === 400 || response.status === 413
                  ? "invalid"
                  : "upstream";
          finish(code);
          return;
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let buffer = "";
        let failed: AssistantErrorCode | null = null;

        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });
          const lines = buffer.split("\n");
          buffer = lines.pop() ?? "";
          for (const line of lines) {
            if (!line.trim()) continue;
            try {
              const event = JSON.parse(line) as { type: string; text?: string; code?: string };
              if (event.type === "delta" && event.text) {
                accumulated += event.text;
                setStreamingText(accumulated);
              } else if (event.type === "error") {
                failed = "upstream";
              }
            } catch {
              // Niepełna linia - dopełni się w kolejnym chunku.
            }
          }
        }

        finish(failed);
      } catch (caught) {
        const aborted = caught instanceof DOMException && caught.name === "AbortError";
        finish(aborted ? null : "network");
      }
    },
    [commitMessages, lang],
  );

  const sendMessage = useCallback(
    async (rawText: string) => {
      const text = rawText.trim().slice(0, AI_ASSISTANT_LIMITS.maxMessageChars);
      if (!text || status === "streaming" || !enabled) return;
      if (messagesRef.current.filter((m) => m.role === "user").length >= AI_ASSISTANT_LIMITS.maxUserMessages) return;

      const userMessage: ChatMessage = { id: createId(), role: "user", content: text, createdAt: Date.now() };
      const history = [...messagesRef.current, userMessage];
      commitMessages(history);
      trackEvent("ai_assistant_message", { lang, user_messages: history.filter((m) => m.role === "user").length });
      await runConversation(history);
    },
    [commitMessages, enabled, lang, runConversation, status],
  );

  /** Ponawia ostatnie zapytanie bez dodawania kolejnej wiadomości użytkownika. */
  const retryLast = useCallback(async () => {
    const history = messagesRef.current;
    if (status === "streaming" || !enabled || !history.length || history[history.length - 1].role !== "user") return;
    await runConversation(history);
  }, [enabled, runConversation, status]);

  const reset = useCallback(() => {
    abortRef.current?.abort();
    commitMessages([]);
    setStreamingText("");
    setStatus("idle");
    setError(null);
    setSentAt(null);
    setSentEmail(null);
    trackEvent("ai_assistant_reset", { lang });
  }, [commitMessages, lang]);

  const markSent = useCallback(
    (email: string) => {
      setSentAt(Date.now());
      setSentEmail(email);
      trackEvent("ai_assistant_send", { lang });
    },
    [lang],
  );

  const open = useCallback(() => {
    setIsOpen(true);
    trackEvent("ai_assistant_open", { lang, path: pathname });
  }, [lang, pathname]);

  const close = useCallback(() => setIsOpen(false), []);

  const value = useMemo<AssistantContextValue>(
    () => ({
      enabled,
      lang,
      hydrated,
      messages,
      streamingText,
      status,
      error,
      userMessageCount,
      limitReached,
      isOpen,
      open,
      close,
      sendMessage,
      retryLast,
      stop,
      reset,
      sentAt,
      sentEmail,
      markSent,
      inlineVisible,
      setInlineVisible,
    }),
    [
      enabled,
      lang,
      hydrated,
      messages,
      streamingText,
      status,
      error,
      userMessageCount,
      limitReached,
      isOpen,
      open,
      close,
      sendMessage,
      retryLast,
      stop,
      reset,
      sentAt,
      sentEmail,
      markSent,
      inlineVisible,
    ],
  );

  return <AssistantContext.Provider value={value}>{children}</AssistantContext.Provider>;
}

export function useAiAssistant() {
  const context = useContext(AssistantContext);
  if (!context) {
    throw new Error("useAiAssistant must be used within AiAssistantProvider");
  }
  return context;
}
