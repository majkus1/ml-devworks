import Link from "next/link";
import AutomationExamplesSection from "@/components/AutomationExamplesSection";

interface Props {
  lang: "pl" | "en";
}

export default function CoMoznaZautomatyzowacContent({ lang }: Props) {
  const isPl = lang === "pl";
  const automationHref = isPl ? "/uslugi/automatyzacja-i-ai" : "/en/services/automation-and-ai";
  const contactHref = isPl ? "/kontakt#ai-advisor" : "/en/contact#ai-advisor";

  return (
    <div className="space-y-10 text-gray-300 leading-relaxed">
      <p className="text-lg">
        {isPl
          ? "Automatyzacje AI dla firm to nie „wdrożenie sztucznej inteligencji w organizacji”, tylko zdjęcie z ludzi konkretnych, powtarzalnych czynności: odpowiadania na te same pytania, przepisywania danych, składania raportów i pilnowania statusów. W tym artykule pokazuję 12 procesów, które w małych i średnich firmach automatyzuję najczęściej, z typowym problemem, rozwiązaniem, efektem i orientacyjnym budżetem."
          : "AI automation for companies is not an abstract 'AI rollout'. It means taking specific, repetitive tasks off people's plates: answering the same questions, re-entering data, compiling reports, and chasing statuses. In this article I show 12 processes I automate most often in small and mid-sized companies, with the typical problem, solution, effect, and indicative budget."}
      </p>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Czym są automatyzacje AI dla firm (i czym nie są)" : "What AI automation for companies is (and is not)"}
        </h2>
        <p className="mb-4">
          {isPl
            ? "Automatyzacja AI to połączenie trzech elementów: klasycznego workflow (dane przechodzą automatycznie między systemami), integracji (CRM, mail, sklep, arkusze, ERP rozmawiają ze sobą przez API) i modelu językowego, który rozumie tekst - potrafi przeczytać maila, sklasyfikować zgłoszenie, wyciągnąć dane z faktury albo odpowiedzieć klientowi."
            : "AI automation combines three elements: classic workflow (data flows automatically between systems), integrations (CRM, email, store, spreadsheets, ERP talk to each other through APIs), and a language model that understands text - it can read an email, classify a ticket, extract data from an invoice, or reply to a customer."}
        </p>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>{isPl ? "Automatyzacja nie zastępuje zespołu. Przejmuje powtarzalną część pracy, a ludzie dostają trudniejsze sprawy z gotowym kontekstem." : "Automation does not replace the team. It takes over the repetitive part of the work and people receive harder cases with ready context."}</li>
          <li>{isPl ? "Nie każdy proces potrzebuje AI. Jeśli reguły są proste (formularz -> CRM -> mail), wystarczy workflow bez modelu językowego - taniej i przewidywalniej." : "Not every process needs AI. If the rules are simple (form -> CRM -> email), a workflow without a language model is enough - cheaper and more predictable."}</li>
          <li>{isPl ? "Dobra automatyzacja ma miernik: czas reakcji, godziny zaoszczędzone tygodniowo, liczba błędów, procent spraw zamkniętych bez człowieka." : "Good automation has a metric: response time, hours saved per week, error count, share of cases closed without a human."}</li>
        </ul>
      </section>

      <AutomationExamplesSection
        lang={lang}
        compact
        headingLevel="h2"
        id="12-procesow"
        heading={isPl ? "12 procesów, które warto zautomatyzować" : "12 processes worth automating"}
      />

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Jak wybrać pierwszy proces do automatyzacji" : "How to choose the first process to automate"}
        </h2>
        <p className="mb-4">
          {isPl
            ? "Najczęstszy błąd to próba zautomatyzowania wszystkiego naraz. Lepiej wybrać jeden proces, który spełnia trzy warunki:"
            : "The most common mistake is trying to automate everything at once. It is better to pick one process that meets three conditions:"}
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {(isPl
            ? [
                ["Powtarzalny", "Dzieje się codziennie lub co tydzień w podobny sposób. Jednorazowe zadania nie zwracają kosztu automatyzacji."],
                ["Mierzalny", "Wiesz (albo możesz szybko policzyć), ile godzin i błędów generuje miesięcznie."],
                ["Bolesny", "Opóźnia sprzedaż, irytuje klientów albo blokuje jedną osobę, bez której proces staje."],
              ]
            : [
                ["Repetitive", "It happens daily or weekly in a similar way. One-off tasks do not repay the automation cost."],
                ["Measurable", "You know (or can quickly calculate) how many hours and errors it generates per month."],
                ["Painful", "It delays sales, annoys customers, or blocks one person without whom the process stops."],
              ]
          ).map(([title, description]) => (
            <article key={title} className="bg-background-lighter border border-primary/20 rounded-xl p-5">
              <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <p className="mt-4">
          {isPl
            ? "Prosty test: jeśli proces zabiera zespołowi 3-5 godzin tygodniowo, to przy koszcie godziny pracy 60-100 zł mówimy o 10 000-25 000 zł rocznie. Automatyzacja od 2 500 zł netto zwraca się w takim przypadku w kilka miesięcy."
            : "A quick test: if a process takes the team 3-5 hours per week, at an hourly cost of PLN 60-100 that is PLN 10,000-25,000 per year. Automation from PLN 2,500 net pays back within a few months in such a case."}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Ile kosztują automatyzacje AI dla firm" : "How much AI automation for companies costs"}
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {(isPl
            ? [
                ["Prosta automatyzacja", "od 2 500 zł netto", "Jeden proces, 2-3 systemy, np. formularz -> klasyfikacja AI -> CRM -> powiadomienie. Wdrożenie 3-14 dni roboczych."],
                ["Agent AI z bazą wiedzy", "od ok. 8 000 zł netto", "Agent odpowiadający klientom lub zespołowi na podstawie dokumentów firmy, z eskalacją do człowieka i logowaniem rozmów."],
                ["Integracja wielosystemowa lub aplikacja", "wycena po analizie", "CRM, ERP, płatności, magazyn, panel administracyjny i raporty. Realizacja etapami, pierwszy etap zwykle 2-6 tygodni."],
              ]
            : [
                ["Simple automation", "from PLN 2,500 net", "One process, 2-3 systems, e.g. form -> AI classification -> CRM -> notification. Delivery in 3-14 business days."],
                ["AI agent with a knowledge base", "from about PLN 8,000 net", "An agent answering customers or the team based on company documents, with escalation to a human and conversation logging."],
                ["Multi-system integration or app", "estimated after analysis", "CRM, ERP, payments, inventory, admin panel, and reports. Delivered in stages, the first stage usually 2-6 weeks."],
              ]
          ).map(([title, price, description]) => (
            <article key={title} className="bg-background-lighter border border-primary/20 rounded-xl p-5">
              <h3 className="text-xl font-bold text-primary mb-2">{title}</h3>
              <p className="font-semibold text-white mb-2">{price}</p>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <p className="mt-4">
          {isPl ? (
            <>
              Do kosztu wdrożenia dolicz koszt użycia modeli AI (zwykle kilkadziesiąt do kilkuset złotych miesięcznie przy typowym wolumenie zapytań) oraz ewentualne utrzymanie. Szczegóły liczenia zwrotu opisuję w artykule{" "}
              <Link href="/blog/ile-kosztuje-automatyzacja-procesow-w-firmie-i-jak-liczyc-roi">Koszt automatyzacji procesów i ROI dla firm</Link>.
            </>
          ) : (
            <>
              Add the cost of AI model usage to the implementation cost (usually tens to a few hundred PLN per month at a typical enquiry volume) plus optional maintenance. I describe ROI calculation in detail in{" "}
              <Link href="/en/blog/how-much-does-business-process-automation-cost-and-how-to-calculate-roi">Business Process Automation Cost and ROI</Link>.
            </>
          )}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Automatyzacja z użyciem agentów AI: co zmienia w praktyce" : "Automation with AI agents: what changes in practice"}
        </h2>
        <p className="mb-4">
          {isPl
            ? "Klasyczny workflow działa według sztywnych reguł: jeśli pole X = Y, zrób Z. Agent AI radzi sobie z tym, czego nie da się opisać regułami - z tekstem napisanym przez człowieka. Dlatego największy skok daje tam, gdzie wejściem jest mail, wiadomość na czacie, PDF albo rozmowa telefoniczna."
            : "A classic workflow follows rigid rules: if field X = Y, do Z. An AI agent handles what cannot be described with rules - text written by a human. That is why it makes the biggest difference where the input is an email, a chat message, a PDF, or a phone call."}
        </p>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>{isPl ? "Rozumie intencję: „chciałbym przełożyć termin” i „nie dam rady jutro” trafiają do tej samej kategorii." : "Understands intent: 'I would like to reschedule' and 'I cannot make it tomorrow' land in the same category."}</li>
          <li>{isPl ? "Dopytuje o brakujące dane zamiast odrzucać zgłoszenie." : "Asks for missing data instead of rejecting the request."}</li>
          <li>{isPl ? "Uruchamia akcje: tworzy zadanie w CRM, rezerwuje termin, wysyła ofertę ze wzoru." : "Triggers actions: creates a CRM task, books a slot, sends a quote from a template."}</li>
          <li>{isPl ? "Wie, kiedy przekazać sprawę człowiekowi - i przekazuje ją z podsumowaniem, a nie od zera." : "Knows when to hand over to a human - and hands over with a summary, not from scratch."}</li>
        </ul>
        <p className="mt-4">
          {isPl ? (
            <>
              Więcej o tym, kiedy agent AI się opłaca, a kiedy wystarczy prosty chatbot, w artykule{" "}
              <Link href="/blog/agenci-ai-w-obsludze-klienta-kiedy-sie-oplacaja">Agenci AI w obsłudze klienta</Link>.
            </>
          ) : (
            <>
              More on when an AI agent pays off and when a simple chatbot is enough in{" "}
              <Link href="/en/blog/ai-agents-in-customer-service-when-they-are-worth-it">AI Agents in Customer Service</Link>.
            </>
          )}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Najczęstsze błędy przy automatyzacji firmy" : "Common mistakes when automating a company"}
        </h2>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>{isPl ? "Automatyzowanie chaosu: jeśli proces nie ma właściciela ani reguł, AI go nie naprawi. Najpierw porządek, potem automat." : "Automating chaos: if a process has no owner or rules, AI will not fix it. Order first, automation second."}</li>
          <li>{isPl ? "Brak eskalacji: agent, który nie umie powiedzieć „przekażę to człowiekowi”, frustruje klientów bardziej niż formularz." : "No escalation: an agent that cannot say 'I will pass this to a person' frustrates customers more than a form."}</li>
          <li>{isPl ? "Uzależnienie od jednego narzędzia no-code z abonamentem liczonym od każdej operacji - koszt rośnie razem z sukcesem." : "Dependence on one no-code tool with a per-operation subscription - the cost grows together with success."}</li>
          <li>{isPl ? "Wysyłanie do modelu wszystkich danych klientów bez potrzeby. Do modelu trafia tylko to, co konieczne, reszta zostaje w Twoim systemie." : "Sending all customer data to the model unnecessarily. Only what is required goes to the model; the rest stays in your system."}</li>
          <li>{isPl ? "Brak pomiaru: bez liczby „przed” nie udowodnisz efektu „po”." : "No measurement: without a 'before' number you cannot prove the 'after' effect."}</li>
        </ul>
      </section>

      <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6 md:p-8 border border-primary/20">
        <h2 className="text-xl font-bold text-white mb-4">
          {isPl ? "Sprawdź, które z tych 12 procesów są w Twojej firmie" : "Check which of these 12 processes exist in your company"}
        </h2>
        <p className="mb-4">
          {isPl
            ? "Opisz asystentowi AI, czym się zajmujecie i co zabiera Wam najwięcej czasu. Dostaniesz 2-3 kierunki z orientacyjnym budżetem, a rozmowę możesz jednym kliknięciem wysłać do mnie - wracam w 2-5 dni z bezpłatnym prototypem."
            : "Describe to the AI advisor what you do and what takes the most of your time. You get 2-3 directions with an indicative budget, and you can send the conversation to me with one click - I come back within 2-5 days with a free prototype."}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href={contactHref} className="inline-flex items-center gap-2 px-6 py-3 bg-primary font-semibold rounded-lg hover:bg-primary-dark transition-colors !text-black !no-underline">
            {isPl ? "Zapytaj asystenta AI" : "Ask the AI advisor"}
            <span aria-hidden="true">→</span>
          </Link>
          <Link href={automationHref} className="inline-flex items-center gap-2 px-6 py-3 bg-background-lighter border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors !no-underline">
            {isPl ? "Zobacz usługę automatyzacji AI" : "View the AI automation service"}
          </Link>
        </div>
      </section>
    </div>
  );
}
