import type { SiteLang } from "@/lib/services";

export interface FaqItem {
  q: string;
  a: string;
}

export const homeFaq: Record<SiteLang, FaqItem[]> = {
  pl: [
    {
      q: "Czym zajmuje się ML DevWorks?",
      a: "ML DevWorks to marka doświadczonego programisty z Krakowa. Tworzę strony internetowe, aplikacje webowe i mobilne, systemy rezerwacji, sklepy internetowe oraz automatyzacje AI dla firm.",
    },
    {
      q: "Czy pracuję bezpośrednio z programistą?",
      a: "Tak. Kontakt, analiza, decyzje techniczne, prototyp i finalne wdrożenie są prowadzone bezpośrednio przeze mnie, bez rozbudowanego procesu agencyjnego.",
    },
    {
      q: "Jak AI pomaga w realizacji projektu?",
      a: "Narzędzia AI przyspieszają analizę, prototypowanie i wybrane etapy pracy. Architektura, bezpieczeństwo, jakość kodu i efekt końcowy pozostają po mojej stronie.",
    },
    {
      q: "Jakie projekty mogę zlecić?",
      a: "Najczęściej są to strony firmowe, landing pages, aplikacje dla firm, panele administracyjne, integracje CRM/API, systemy rezerwacji online, e-commerce i automatyzacje procesów.",
    },
    {
      q: "Co mogę zautomatyzować w mojej firmie?",
      a: "Najczęściej obsługę zapytań i zgłoszeń, kwalifikację leadów, przepisywanie danych między systemami, raportowanie, obsługę zamówień i rezerwacji oraz powtarzalną pracę biurową. Na stronie działa asystent AI, który w kilka minut podpowie, od czego zacząć w Twojej firmie.",
    },
    {
      q: "Czy można dostać prototyp przed decyzją o wdrożeniu?",
      a: "Po dokładnym opisie pomysłu lub problemu wracam zwykle w ciągu 2-5 dni z kierunkiem rozwiązania, zakresem i w wielu przypadkach interaktywnym prototypem do omówienia.",
    },
  ],
  en: [
    {
      q: "What does ML DevWorks do?",
      a: "ML DevWorks is the brand of an experienced developer from Krakow. I build websites, web and mobile apps, booking systems, online stores, and AI automation for companies.",
    },
    {
      q: "Will I work directly with the developer?",
      a: "Yes. Communication, analysis, technical decisions, prototype, and final delivery are handled directly by me, without a heavy agency process.",
    },
    {
      q: "How does AI help in the project?",
      a: "AI tools speed up analysis, prototyping, and selected implementation steps. Architecture, security, code quality, and the final result remain my responsibility.",
    },
    {
      q: "What projects can I request?",
      a: "Typical projects include business websites, landing pages, company apps, admin panels, CRM/API integrations, online booking systems, e-commerce, and process automation.",
    },
    {
      q: "What can I automate in my company?",
      a: "Most often: handling enquiries and tickets, lead qualification, copying data between systems, reporting, order and booking handling, and repetitive office work. The AI advisor on this website can suggest where to start in your company within a few minutes.",
    },
    {
      q: "Can I get a prototype before deciding on implementation?",
      a: "After a clear description of the idea or problem, I usually return within 2-5 days with a solution direction, scope, and often an interactive prototype for discussion.",
    },
  ],
};
