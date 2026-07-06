import { ReactNode } from "react";
import { blogPosts } from "@/lib/blog";
import StronaInternetowaDlaFirmyContent from "@/components/blog-posts/StronaInternetowaDlaFirmyContent";
import SystemRezerwacjiDlaSalonuContent from "@/components/blog-posts/SystemRezerwacjiDlaSalonuContent";
import AutomatyzacjaProcesowAIContent from "@/components/blog-posts/AutomatyzacjaProcesowAIContent";
import CzyAIWystarczyDoStronyContent from "@/components/blog-posts/CzyAIWystarczyDoStronyContent";
import SocialMediaVsStronaFirmowaContent from "@/components/blog-posts/SocialMediaVsStronaFirmowaContent";
import KompleksoweUslugiProgramistyczneContent from "@/components/blog-posts/KompleksoweUslugiProgramistyczneContent";
import KosztAutomatyzacjiROIContent from "@/components/blog-posts/KosztAutomatyzacjiROIContent";
import SystemRezerwacjiDlaFirmyUslugowejContent from "@/components/blog-posts/SystemRezerwacjiDlaFirmyUslugowejContent";
import AgenciAIObslugaKlientaContent from "@/components/blog-posts/AgenciAIObslugaKlientaContent";
import IntegracjaSystemowContent from "@/components/blog-posts/IntegracjaSystemowContent";

const POST_CONTENT: Record<string, (lang: "pl" | "en") => ReactNode> = {
  "ile-kosztuje-automatyzacja-procesow-w-firmie-i-jak-liczyc-roi": (lang) => (
    <KosztAutomatyzacjiROIContent lang={lang} />
  ),
  "system-rezerwacji-dla-firmy-uslugowej-funkcje-integracje-platnosci-wdrozenie": (lang) => (
    <SystemRezerwacjiDlaFirmyUslugowejContent lang={lang} />
  ),
  "agenci-ai-w-obsludze-klienta-kiedy-sie-oplacaja": (lang) => (
    <AgenciAIObslugaKlientaContent lang={lang} />
  ),
  "integracja-systemow-w-firmie-api-crm-erp-jak-zaczac": (lang) => (
    <IntegracjaSystemowContent lang={lang} />
  ),
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
  "social-media-czy-wlasna-strona-firmowa-co-bardziej-sie-oplaca": (lang) => (
    <SocialMediaVsStronaFirmowaContent lang={lang} />
  ),
  "kompleksowe-uslugi-programistyczne-dla-firm-jak-dobrac-rozwiazanie-do-branzy": (lang) => (
    <KompleksoweUslugiProgramistyczneContent lang={lang} />
  ),
};

export function getPostContent(slug: string, lang: "pl" | "en"): ReactNode | null {
  const plSlug =
    blogPosts.find((post) => post.slug === slug || post.slugEn === slug)?.slug ?? slug;
  const render = POST_CONTENT[plSlug];
  return render ? render(lang) : null;
}
