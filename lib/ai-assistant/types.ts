import type { SiteLang } from "@/lib/services";

export type ChatRole = "user" | "assistant";

export interface ChatMessage {
  id: string;
  role: ChatRole;
  content: string;
  createdAt: number;
}

export interface ChatApiMessage {
  role: ChatRole;
  content: string;
}

export interface ChatRequestBody {
  messages: ChatApiMessage[];
  lang: SiteLang;
  pageContext?: string;
}

export interface SendContact {
  email: string;
  name?: string;
  phone?: string;
  company?: string;
}

export interface SendRequestBody {
  messages: ChatApiMessage[];
  lang: SiteLang;
  contact: SendContact;
  consent: boolean;
  /** Honeypot: must stay empty. */
  website?: string;
  pageUrl?: string;
}

export interface ConversationSummary {
  topic: string;
  industry: string;
  problem: string;
  proposedSolution: string;
  estimate: string;
  nextStep: string;
}

export const AI_ASSISTANT_LIMITS = {
  maxUserMessages: 20,
  maxMessageChars: 1500,
  maxTotalChars: 24000,
} as const;
