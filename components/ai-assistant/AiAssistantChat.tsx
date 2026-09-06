"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { AI_ASSISTANT_LIMITS } from "@/lib/ai-assistant/types";
import { useAiAssistant } from "./AiAssistantProvider";
import { assistantContent } from "./content";
import MessageMarkdown from "./MessageMarkdown";
import SendToOwnerForm from "./SendToOwnerForm";

interface AiAssistantChatProps {
  variant: "inline" | "panel";
  onClose?: () => void;
  autoFocus?: boolean;
}

function SparkIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8" />
    </svg>
  );
}

function AssistantAvatar() {
  return (
    <div className="shrink-0 w-8 h-8 rounded-full bg-primary/15 border border-primary/40 flex items-center justify-center text-primary" aria-hidden="true">
      <SparkIcon className="w-4 h-4" />
    </div>
  );
}

function TypingDots() {
  return (
    <span className="inline-flex items-center gap-1 h-5" aria-hidden="true">
      {[0, 1, 2].map((index) => (
        <motion.span
          key={index}
          className="w-1.5 h-1.5 rounded-full bg-primary"
          animate={{ opacity: [0.3, 1, 0.3], y: [0, -2, 0] }}
          transition={{ duration: 1, repeat: Infinity, delay: index * 0.15 }}
        />
      ))}
    </span>
  );
}

export default function AiAssistantChat({ variant, onClose, autoFocus = false }: AiAssistantChatProps) {
  const {
    lang,
    hydrated,
    messages,
    streamingText,
    status,
    error,
    limitReached,
    userMessageCount,
    sendMessage,
    retryLast,
    stop,
    reset,
    sentEmail,
  } = useAiAssistant();
  const t = assistantContent[lang];
  const reduceMotion = useReducedMotion();

  const [input, setInput] = useState("");
  const [showSendForm, setShowSendForm] = useState(false);
  const [liveMessage, setLiveMessage] = useState("");
  const listRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const stickToBottomRef = useRef(true);

  const isStreaming = status === "streaming";
  const hasAssistantReply = messages.some((m) => m.role === "assistant");
  const isPanel = variant === "panel";

  useEffect(() => {
    if (autoFocus) textareaRef.current?.focus();
  }, [autoFocus]);

  const handleScroll = useCallback(() => {
    const element = listRef.current;
    if (!element) return;
    const distance = element.scrollHeight - element.scrollTop - element.clientHeight;
    stickToBottomRef.current = distance < 80;
  }, []);

  useEffect(() => {
    const element = listRef.current;
    if (!element || !stickToBottomRef.current) return;
    element.scrollTop = element.scrollHeight;
  }, [messages, streamingText, status, error]);

  useEffect(() => {
    if (isStreaming) setLiveMessage(t.a11y.assistantTyping);
    else if (messages.length && messages[messages.length - 1].role === "assistant") setLiveMessage(t.a11y.assistantDone);
  }, [isStreaming, messages, t.a11y.assistantDone, t.a11y.assistantTyping]);

  const resizeTextarea = useCallback(() => {
    const element = textareaRef.current;
    if (!element) return;
    element.style.height = "auto";
    element.style.height = `${Math.min(element.scrollHeight, 140)}px`;
  }, []);

  const submit = useCallback(
    async (text: string) => {
      const trimmed = text.trim();
      if (!trimmed || isStreaming || limitReached) return;
      setInput("");
      stickToBottomRef.current = true;
      requestAnimationFrame(resizeTextarea);
      await sendMessage(trimmed);
    },
    [isStreaming, limitReached, resizeTextarea, sendMessage],
  );

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey && !event.nativeEvent.isComposing) {
      event.preventDefault();
      void submit(input);
    }
  };

  const handleReset = () => {
    if (!messages.length) return;
    if (window.confirm(t.resetConfirm)) {
      reset();
      setShowSendForm(false);
      textareaRef.current?.focus();
    }
  };

  const canRetry = Boolean(error) && messages[messages.length - 1]?.role === "user";

  const bubbleMotion = reduceMotion
    ? {}
    : { initial: { opacity: 0, y: 8 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] as const } };

  return (
    <div className={`relative flex flex-col ${isPanel ? "h-full" : "h-[640px] md:h-[680px]"} bg-background-lighter border border-primary/20 ${isPanel ? "" : "rounded-2xl"} overflow-hidden`}>
      {/* Nagłówek */}
      <div className="flex items-center gap-3 px-5 py-4 border-b border-primary/15 bg-background/60">
        <AssistantAvatar />
        <div className="min-w-0 flex-1">
          <p className="font-semibold text-white text-base leading-tight truncate">{t.chatTitle}</p>
          <p className="text-sm text-gray-400 flex items-center gap-1.5 mt-0.5">
            <span className={`inline-block w-1.5 h-1.5 rounded-full ${isStreaming ? "bg-amber-400" : "bg-primary"}`} aria-hidden="true" />
            {isStreaming ? t.chatStatusTyping : t.chatStatusOnline}
          </p>
        </div>
        {messages.length > 0 && (
          <button
            type="button"
            onClick={handleReset}
            className="text-sm text-gray-400 hover:text-primary transition-colors px-2.5 py-1.5 rounded-lg hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {t.reset}
          </button>
        )}
        {isPanel && onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label={t.close}
            className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-300 hover:text-white hover:bg-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        )}
      </div>

      {/* Lista wiadomości */}
      <div
        ref={listRef}
        onScroll={handleScroll}
        role="log"
        aria-label={t.a11y.log}
        aria-busy={isStreaming}
        className="flex-1 overflow-y-auto overscroll-contain px-4 md:px-5 py-5 space-y-5"
      >
        <div className="flex gap-3">
          <AssistantAvatar />
          <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-background border border-primary/15 px-4 py-3.5 text-gray-200 text-base leading-relaxed">
            {t.welcome}
          </div>
        </div>

        {hydrated && messages.length === 0 && (
          <div className="pl-0 sm:pl-11 space-y-2">
            <p className="text-xs uppercase tracking-[0.14em] text-gray-500 font-semibold px-1">{t.chipsLabel}</p>
            <div className="flex flex-col gap-2">
              {t.chips.map((chip) => (
                <button
                  key={chip}
                  type="button"
                  onClick={() => void submit(chip)}
                  className="group flex items-center justify-between gap-3 text-left text-[15px] px-4 py-3 rounded-xl bg-primary/[0.07] border border-primary/25 text-gray-100 hover:bg-primary/15 hover:border-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <span>{chip}</span>
                  <svg className="shrink-0 text-primary opacity-60 group-hover:opacity-100 transition-opacity" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((message) =>
          message.role === "user" ? (
            <motion.div key={message.id} {...bubbleMotion} className="flex justify-end">
              <div className="max-w-[90%] rounded-2xl rounded-tr-md bg-primary/15 border border-primary/30 px-4 py-3.5 text-white text-base leading-relaxed whitespace-pre-wrap">
                <span className="sr-only">{t.a11y.userLabel}: </span>
                {message.content}
              </div>
            </motion.div>
          ) : (
            <motion.div key={message.id} {...bubbleMotion} className="flex gap-3">
              <AssistantAvatar />
              <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-background border border-primary/15 px-4 py-3.5 text-gray-200">
                <span className="sr-only">{t.a11y.assistantLabel}: </span>
                <MessageMarkdown text={message.content} />
              </div>
            </motion.div>
          ),
        )}

        {isStreaming && (
          <div className="flex gap-3">
            <AssistantAvatar />
            <div className="max-w-[90%] rounded-2xl rounded-tl-md bg-background border border-primary/15 px-4 py-3.5 text-gray-200">
              {streamingText ? (
                <>
                  <MessageMarkdown text={streamingText} />
                  <span className="inline-block w-0.5 h-4 ml-0.5 align-middle bg-primary animate-pulse" aria-hidden="true" />
                </>
              ) : (
                <TypingDots />
              )}
            </div>
          </div>
        )}

        {error && (
          <div className="pl-11">
            <div className="flex flex-wrap items-center gap-3 p-3 bg-red-500/10 border border-red-500/50 rounded-lg text-red-200 text-sm" role="alert">
              <span className="flex-1 min-w-[12rem]">{t.errors[error]}</span>
              {canRetry && (
                <button
                  type="button"
                  onClick={() => void retryLast()}
                  className="px-3 py-1.5 rounded-md bg-background border border-red-400/60 text-white hover:border-red-300 transition-colors"
                >
                  {t.retry}
                </button>
              )}
            </div>
          </div>
        )}

        {limitReached && !isStreaming && (
          <div className="pl-11">
            <p className="p-3 bg-amber-400/10 border border-amber-400/40 rounded-lg text-amber-100 text-sm">{t.limitReached}</p>
          </div>
        )}
      </div>

      <div className="sr-only" aria-live="polite" aria-atomic="true">
        {liveMessage}
      </div>

      {/* Stopka: kompozytor + CTA */}
      <div className="border-t border-primary/15 bg-background/60 px-4 md:px-5 pt-4 pb-4 space-y-3">
        {sentEmail && (
          <p className="text-sm text-primary bg-primary/10 border border-primary/30 rounded-lg px-3.5 py-2.5" role="status">
            {t.sentBanner(sentEmail)}
          </p>
        )}

        <div className="flex items-end gap-2.5">
          <label htmlFor={`ai-input-${variant}`} className="sr-only">
            {t.inputPlaceholder}
          </label>
          <textarea
            ref={textareaRef}
            id={`ai-input-${variant}`}
            rows={1}
            value={input}
            disabled={limitReached}
            maxLength={AI_ASSISTANT_LIMITS.maxMessageChars}
            onChange={(event) => {
              setInput(event.target.value);
              resizeTextarea();
            }}
            onKeyDown={handleKeyDown}
            placeholder={limitReached ? t.limitReached : t.inputPlaceholder}
            className="flex-1 resize-none px-4 py-3.5 text-base leading-6 bg-background border border-primary/25 rounded-xl placeholder:text-gray-500 focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 transition-colors disabled:opacity-60 min-h-[52px] max-h-[160px]"
          />
          {isStreaming ? (
            <button
              type="button"
              onClick={stop}
              className="shrink-0 h-[52px] px-4 rounded-xl bg-background border border-primary/40 text-white font-medium hover:border-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {t.stop}
            </button>
          ) : (
            <button
              type="button"
              onClick={() => void submit(input)}
              disabled={!input.trim() || limitReached}
              aria-label={t.send}
              className="shrink-0 h-[52px] w-[52px] flex items-center justify-center rounded-xl bg-primary text-background hover:bg-primary-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
          )}
        </div>

        {hasAssistantReply && (
          <div className="space-y-1.5">
            <button
              type="button"
              onClick={() => setShowSendForm(true)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gradient-to-r from-primary to-primary-dark text-background font-semibold text-[15px] hover:from-primary-light hover:to-primary transition-colors shadow-[0_0_20px_rgba(0,255,136,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 4h16v16H4z" />
                <path d="m4 7 8 6 8-6" />
              </svg>
              {t.sendToOwner}
            </button>
            <p className="text-xs text-gray-400 text-center leading-snug">{t.sendToOwnerHint}</p>
          </div>
        )}

        <div className="flex items-center justify-between gap-3 text-xs text-gray-500 leading-snug">
          <p className="min-w-0">{t.disclaimer}</p>
          <span className="shrink-0 hidden md:inline text-gray-600">{t.inputHint}</span>
          {userMessageCount > 0 && (
            <span className="shrink-0 text-gray-600 tabular-nums" aria-label={`${userMessageCount}/${AI_ASSISTANT_LIMITS.maxUserMessages}`}>
              {userMessageCount}/{AI_ASSISTANT_LIMITS.maxUserMessages}
            </span>
          )}
        </div>
      </div>

      <AnimatePresence>{showSendForm && <SendToOwnerForm onClose={() => setShowSendForm(false)} />}</AnimatePresence>
    </div>
  );
}
