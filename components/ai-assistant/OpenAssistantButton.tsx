"use client";

import type { ReactNode } from "react";
import { useAiAssistant } from "./AiAssistantProvider";

interface OpenAssistantButtonProps {
  children: ReactNode;
  className?: string;
  /** Gdy asystent jest wyłączony, przycisk prowadzi pod ten adres. */
  fallbackHref?: string;
}

/**
 * Przycisk do osadzania w treści stron (np. "Zapytaj asystenta AI").
 * Jeśli na stronie jest sekcja inline asystenta, przewija do niej i ustawia fokus w polu;
 * w przeciwnym razie otwiera pływający panel.
 */
export default function OpenAssistantButton({ children, className = "", fallbackHref = "/#contact" }: OpenAssistantButtonProps) {
  const { enabled, open } = useAiAssistant();

  if (!enabled) {
    return (
      <a href={fallbackHref} className={className}>
        {children}
      </a>
    );
  }

  const handleClick = () => {
    const inlineSection = document.getElementById("ai-advisor");
    if (inlineSection) {
      inlineSection.scrollIntoView({ behavior: "smooth", block: "start" });
      window.setTimeout(() => {
        document.getElementById("ai-input-inline")?.focus({ preventScroll: true });
      }, 650);
      return;
    }
    open();
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children}
    </button>
  );
}
