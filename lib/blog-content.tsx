import { ReactNode } from "react";
import StronaInternetowaDlaFirmyContent from "@/components/blog-posts/StronaInternetowaDlaFirmyContent";
import SystemRezerwacjiDlaSalonuContent from "@/components/blog-posts/SystemRezerwacjiDlaSalonuContent";
import AutomatyzacjaProcesowAIContent from "@/components/blog-posts/AutomatyzacjaProcesowAIContent";
import CzyAIWystarczyDoStronyContent from "@/components/blog-posts/CzyAIWystarczyDoStronyContent";

const POST_CONTENT: Record<string, (lang: "pl" | "en") => ReactNode> = {
  "strona-internetowa-dla-firmy-jak-wybrac-wykonawce": (lang) => (
    <StronaInternetowaDlaFirmyContent lang={lang} />
  ),
  "system-rezerwacji-online-dla-salonu-kosmetycznego-co-wybrac-i-ile-to-trwa": (lang) => (
    <SystemRezerwacjiDlaSalonuContent lang={lang} />
  ),
  "kiedy-firmie-oplaca-sie-automatyzacja-procesow-z-ai": (lang) => (
    <AutomatyzacjaProcesowAIContent lang={lang} />
  ),
  "czy-ai-wystarczy-do-stworzenia-strony-lub-aplikacji": (lang) => (
    <CzyAIWystarczyDoStronyContent lang={lang} />
  ),
};

export function getPostContent(slug: string, lang: "pl" | "en"): ReactNode | null {
  const render = POST_CONTENT[slug];
  return render ? render(lang) : null;
}
