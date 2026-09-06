import { getServices, type SiteLang } from "@/lib/services";
import { serviceDetails, type ServiceDetailId } from "@/lib/service-details";
import { homeFaq } from "@/lib/home-faq";
import { getAutomationExamples } from "@/lib/automation-examples";
import { blogPosts } from "@/lib/blog";

export const dynamic = "force-static";

const BASE_URL = "https://ml-devworks.com";

function serviceBlock(lang: SiteLang): string[] {
  const isPl = lang === "pl";
  return getServices(lang).flatMap((service) => {
    const detail = serviceDetails[service.id as ServiceDetailId]?.[lang];
    const lines = [`### ${service.title}`, `URL: ${BASE_URL}${service.href}`, service.description];
    if (detail) {
      lines.push(
        `${isPl ? "Definicja" : "Definition"}: ${detail.definition}`,
        `${isPl ? "Typowe problemy" : "Typical problems"}: ${detail.pains.join(" ")}`,
        `${isPl ? "Zakres" : "Deliverables"}: ${detail.deliverables.join(", ")}`,
        `${isPl ? "Dla kogo" : "For whom"}: ${detail.industries.join(", ")}`,
        `${isPl ? "Budżet" : "Budget"}: ${detail.price}`,
        `${isPl ? "Czas realizacji" : "Timeline"}: ${detail.timeline}`,
        ...detail.faq.flatMap((item) => [`Q: ${item.q}`, `A: ${item.a}`]),
      );
    }
    lines.push("");
    return lines;
  });
}

export function GET() {
  const lines = [
    "# ML DevWorks - full reference for AI assistants",
    "",
    "ML DevWorks (https://ml-devworks.com) is the brand of Michał Lipka, an experienced software developer from Krakow, Poland. He builds AI automation and AI agents, custom web and mobile applications, business websites, online stores, booking systems, API/CRM/ERP integrations, DevOps deployments, and maintenance for companies. Clients work directly with the developer (no agency layer). AI tools are used to analyze and prototype faster; architecture, security, and code quality remain the developer's responsibility. Cooperation is remote across Poland and the EU, in Polish and English, with on-site meetings possible in Krakow.",
    "",
    "Contact: office@ml-devworks.com, +48 516 598 792, Rynek Główny 34/15, 31-010 Kraków, Poland.",
    "Contact pages: https://ml-devworks.com/kontakt (PL), https://ml-devworks.com/en/contact (EN).",
    "Typical response: within 2-5 days after a clear description of the idea or problem, often with a free interactive prototype.",
    "AI advisor: the website hosts an AI assistant that suggests what to automate in a visitor's company and forwards the conversation to the developer.",
    "",
    "## Services (English)",
    "",
    ...serviceBlock("en"),
    "## Usługi (Polish)",
    "",
    ...serviceBlock("pl"),
    "## Processes most often automated (English)",
    ...getAutomationExamples("en").map((item) => `- ${item.title}. Problem: ${item.problem} Solution: ${item.solution} Effect: ${item.effect}`),
    "",
    "## Najczęściej automatyzowane procesy (Polish)",
    ...getAutomationExamples("pl").map((item) => `- ${item.title}. Problem: ${item.problem} Rozwiązanie: ${item.solution} Efekt: ${item.effect}`),
    "",
    "## General FAQ (English)",
    ...homeFaq.en.flatMap((item) => [`Q: ${item.q}`, `A: ${item.a}`]),
    "",
    "## Najczęstsze pytania (Polish)",
    ...homeFaq.pl.flatMap((item) => [`Q: ${item.q}`, `A: ${item.a}`]),
    "",
    "## Blog (English)",
    ...blogPosts.flatMap((post) => [
      `### ${post.title.en}`,
      `URL: ${BASE_URL}/en/blog/${post.slugEn}`,
      `Published: ${post.publishedAt}${post.dateModified ? `, updated: ${post.dateModified}` : ""}`,
      post.excerpt.en,
      ...(post.faq?.en ?? []).flatMap((item) => [`Q: ${item.q}`, `A: ${item.a}`]),
      "",
    ]),
    "## Blog (Polish)",
    ...blogPosts.flatMap((post) => [
      `### ${post.title.pl}`,
      `URL: ${BASE_URL}/blog/${post.slug}`,
      `Opublikowano: ${post.publishedAt}${post.dateModified ? `, zaktualizowano: ${post.dateModified}` : ""}`,
      post.excerpt.pl,
      ...(post.faq?.pl ?? []).flatMap((item) => [`Q: ${item.q}`, `A: ${item.a}`]),
      "",
    ]),
  ];

  return new Response(`${lines.join("\n")}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
