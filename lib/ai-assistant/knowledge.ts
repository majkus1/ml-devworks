import { getServices, type SiteLang } from "@/lib/services";
import { serviceDetails, type ServiceDetailId } from "@/lib/service-details";
import { homeFaq } from "@/lib/home-faq";
import { getAutomationExamples } from "@/lib/automation-examples";
import { blogPosts } from "@/lib/blog";

const cache: Partial<Record<SiteLang, string>> = {};

/**
 * Buduje tekstową bazę wiedzy dla asystenta AI z danych, które już zasilają stronę.
 * Wynik jest cache'owany per język na czas życia procesu.
 */
export function buildKnowledgeBase(lang: SiteLang): string {
  const cached = cache[lang];
  if (cached) return cached;

  const isPl = lang === "pl";
  const services = getServices(lang);
  const lines: string[] = [];

  lines.push(isPl ? "## Firma" : "## Company");
  lines.push(
    isPl
      ? "ML DevWorks to marka doświadczonego programisty z Krakowa (Michał Lipka). Klient pracuje bezpośrednio z programistą, bez pośredników. AI przyspiesza analizę i prototypowanie, ale architektura, bezpieczeństwo i jakość kodu pozostają po stronie programisty. Współpraca zdalna w całej Polsce i UE, po polsku i angielsku."
      : "ML DevWorks is the brand of an experienced developer from Krakow, Poland (Michał Lipka). Clients work directly with the developer, no intermediaries. AI speeds up analysis and prototyping, while architecture, security, and code quality remain the developer's responsibility. Remote cooperation across Poland and the EU, in Polish and English.",
  );
  lines.push(
    isPl
      ? "Kontakt: office@ml-devworks.com, +48 516 598 792, Rynek Główny 34/15, 31-010 Kraków. Po dokładnym opisie problemu Michał wraca zwykle w ciągu 2-5 dni z bezpłatnym, interaktywnym prototypem albo konkretną propozycją kolejnych kroków."
      : "Contact: office@ml-devworks.com, +48 516 598 792, Rynek Główny 34/15, 31-010 Kraków. After a clear description of the problem, Michał usually comes back within 2-5 days with a free interactive prototype or a concrete proposal of next steps.",
  );
  lines.push("");

  lines.push(isPl ? "## Usługi (ceny orientacyjne netto)" : "## Services (indicative net prices)");
  for (const service of services) {
    lines.push(`### ${service.title}`);
    lines.push(`${isPl ? "Strona" : "Page"}: https://ml-devworks.com${service.href}`);
    lines.push(service.description);
    const detail = serviceDetails[service.id as ServiceDetailId]?.[lang];
    if (detail) {
      lines.push(`${isPl ? "Definicja" : "Definition"}: ${detail.definition}`);
      lines.push(`${isPl ? "Typowe problemy" : "Typical problems"}: ${detail.pains.join(" ")}`);
      lines.push(`${isPl ? "Zakres" : "Deliverables"}: ${detail.deliverables.join(", ")}`);
      lines.push(`${isPl ? "Dla kogo" : "For whom"}: ${detail.industries.join(", ")}`);
      lines.push(`${isPl ? "Budżet" : "Budget"}: ${detail.price}`);
      lines.push(`${isPl ? "Czas realizacji" : "Timeline"}: ${detail.timeline}`);
      for (const item of detail.faq) {
        lines.push(`Q: ${item.q}`);
        lines.push(`A: ${item.a}`);
      }
    }
    lines.push("");
  }

  lines.push(isPl ? "## Co najczęściej automatyzuję (przykłady procesów)" : "## What I automate most often (process examples)");
  for (const example of getAutomationExamples(lang)) {
    lines.push(`- ${example.title}: ${example.problem} ${isPl ? "Rozwiązanie" : "Solution"}: ${example.solution} ${isPl ? "Efekt" : "Effect"}: ${example.effect}`);
  }
  lines.push("");

  lines.push(isPl ? "## Najczęstsze pytania" : "## Frequently asked questions");
  for (const item of homeFaq[lang]) {
    lines.push(`Q: ${item.q}`);
    lines.push(`A: ${item.a}`);
  }
  lines.push("");

  lines.push(isPl ? "## Artykuły na blogu (można polecać)" : "## Blog articles (can be recommended)");
  for (const post of blogPosts) {
    const href = isPl ? `/blog/${post.slug}` : `/en/blog/${post.slugEn}`;
    lines.push(`- ${post.title[lang]}: https://ml-devworks.com${href}`);
  }

  const result = lines.join("\n");
  cache[lang] = result;
  return result;
}
