import Link from "next/link";

interface Props {
  lang: "pl" | "en";
}

export default function AutomatyzacjaObslugiZgloszenContent({ lang }: Props) {
  const isPl = lang === "pl";
  const automationHref = isPl ? "/uslugi/automatyzacja-i-ai" : "/en/services/automation-and-ai";
  const contactHref = isPl ? "/kontakt#ai-advisor" : "/en/contact#ai-advisor";

  const levels = isPl
    ? [
        ["Poziom 1: formularz + reguły", "Ustrukturyzowany formularz zgłoszenia, automatyczne przypisanie do kolejki po kategorii, potwierdzenie z numerem sprawy i SLA. Bez AI. Najtańszy start, ale klient nadal musi „wpasować się” w formularz.", "od 2 500 zł netto"],
        ["Poziom 2: chatbot z bazą wiedzy", "Bot odpowiada na powtarzalne pytania (status zamówienia, godziny, cennik, zwroty) na podstawie dokumentów firmy i przekazuje resztę do zespołu. Obsługuje 30-50% wolumenu.", "od ok. 6 000 zł netto"],
        ["Poziom 3: agent AI z akcjami", "Agent czyta zgłoszenie z maila, czatu lub formularza, klasyfikuje je, dopytuje, sprawdza dane w systemie (CRM, sklep, helpdesk), rozwiązuje sprawę albo eskaluje z podsumowaniem. Obsługuje 40-70% wolumenu.", "od ok. 8 000-15 000 zł netto"],
      ]
    : [
        ["Level 1: form + rules", "A structured request form, automatic routing to a queue by category, confirmation with a case number and SLA. No AI. The cheapest start, but the customer still has to 'fit' the form.", "from PLN 2,500 net"],
        ["Level 2: chatbot with a knowledge base", "A bot answers repetitive questions (order status, opening hours, pricing, returns) based on company documents and passes the rest to the team. Handles 30-50% of volume.", "from about PLN 6,000 net"],
        ["Level 3: AI agent with actions", "The agent reads the request from email, chat, or a form, classifies it, asks follow-ups, checks data in systems (CRM, store, helpdesk), resolves the case or escalates with a summary. Handles 40-70% of volume.", "from about PLN 8,000-15,000 net"],
      ];

  const flow = isPl
    ? [
        ["Wpływ zgłoszenia", "Mail, formularz, czat na stronie, Messenger, WhatsApp, telefon (transkrypcja). Wszystko trafia do jednej kolejki."],
        ["Klasyfikacja", "AI rozpoznaje typ sprawy (reklamacja, status, pytanie o ofertę, awaria), pilność i klienta. Dokleja dane z CRM."],
        ["Odpowiedź lub akcja", "Powtarzalne sprawy dostają odpowiedź od razu. Agent może sprawdzić status zamówienia, umówić termin serwisu, wysłać instrukcję."],
        ["Eskalacja", "Sprawy nietypowe, emocjonalne lub o wysokiej wartości idą do człowieka z podsumowaniem, historią i proponowaną odpowiedzią."],
        ["Zamknięcie i pomiar", "Sprawa zamyka się w helpdesku/CRM, klient dostaje ankietę, a Ty raport: czas pierwszej odpowiedzi, % spraw bez człowieka, tematy."],
      ]
    : [
        ["Request intake", "Email, form, website chat, Messenger, WhatsApp, phone (transcription). Everything lands in one queue."],
        ["Classification", "AI recognizes the case type (complaint, status, offer question, breakdown), urgency, and the customer. It attaches CRM data."],
        ["Reply or action", "Repetitive cases get an immediate reply. The agent can check an order status, schedule a service visit, or send instructions."],
        ["Escalation", "Unusual, emotional, or high-value cases go to a human with a summary, history, and a proposed reply."],
        ["Closure and measurement", "The case closes in the helpdesk/CRM, the customer gets a survey, and you get a report: first response time, % of cases without a human, topics."],
      ];

  const metrics = isPl
    ? [
        ["Czas pierwszej odpowiedzi", "Z godzin do sekund dla spraw powtarzalnych. To metryka, którą klienci czują najbardziej."],
        ["Procent spraw bez udziału człowieka", "Realistycznie 40-60% po 2-3 miesiącach dostrajania bazy wiedzy."],
        ["Czas obsługi sprawy przez agenta (człowieka)", "Krótszy, bo dostaje sprawę już sklasyfikowaną, z danymi i propozycją odpowiedzi."],
        ["Liczba zgłoszeń na osobę", "Rośnie bez wzrostu zatrudnienia - to główne źródło ROI w contact center."],
      ]
    : [
        ["First response time", "From hours to seconds for repetitive cases. This is the metric customers feel the most."],
        ["Share of cases without a human", "Realistically 40-60% after 2-3 months of tuning the knowledge base."],
        ["Handling time per (human) agent", "Shorter, because the case arrives classified, with data and a proposed reply."],
        ["Tickets per person", "Grows without hiring - the main source of ROI in a contact center."],
      ];

  return (
    <div className="space-y-10 text-gray-300 leading-relaxed">
      <p className="text-lg">
        {isPl
          ? "Automatyzacja obsługi zgłoszeń to proces, w którym AI odbiera zgłoszenie klienta (mail, formularz, czat, telefon), rozpoznaje, o co chodzi, odpowiada na sprawy powtarzalne i przekazuje trudniejsze do zespołu z gotowym kontekstem. Dotyczy tak samo helpdesku w firmie IT, contact center w e-commerce, jak i biura, które obsługuje zamówienia mailem. Poniżej pokazuję, gdzie ginie czas, trzy poziomy automatyzacji, przykładowy przepływ, integracje, koszty i ryzyka."
          : "Customer support automation is a process in which AI receives a customer request (email, form, chat, phone), recognizes what it is about, answers repetitive cases, and passes harder ones to the team with ready context. It applies equally to an IT helpdesk, an e-commerce contact center, and an office that handles orders by email. Below I show where time is lost, three automation levels, an example flow, integrations, costs, and risks."}
      </p>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Gdzie ginie czas w obsłudze zgłoszeń i klientów" : "Where time is lost in ticket and customer handling"}
        </h2>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>{isPl ? "Czytanie i ręczne kategoryzowanie: ktoś musi otworzyć każdego maila, żeby wiedzieć, czy to reklamacja, pytanie o status czy spam." : "Reading and manual categorization: someone must open every email to know whether it is a complaint, a status question, or spam."}</li>
          <li>{isPl ? "Te same pytania w kółko: „gdzie moja przesyłka”, „jak zwrócić”, „czy macie na stanie”, „ile kosztuje”." : "The same questions over and over: 'where is my parcel', 'how do I return', 'is it in stock', 'how much does it cost'."}</li>
          <li>{isPl ? "Szukanie danych w trzech systemach: sklep, CRM, kurier, faktury - żeby odpowiedzieć na jedno pytanie." : "Looking for data in three systems: store, CRM, courier, invoices - to answer one question."}</li>
          <li>{isPl ? "Przekazywanie spraw bez kontekstu: kolejna osoba zaczyna od zera i pyta klienta o to samo." : "Handing over cases without context: the next person starts from scratch and asks the customer the same thing."}</li>
          <li>{isPl ? "Brak obsługi po godzinach: zgłoszenie z piątku wieczorem czeka do poniedziałku." : "No after-hours coverage: a Friday evening request waits until Monday."}</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Trzy poziomy automatyzacji obsługi klienta" : "Three levels of customer service automation"}
        </h2>
        <div className="space-y-4">
          {levels.map(([title, description, price]) => (
            <article key={title} className="bg-background-lighter border border-primary/20 rounded-xl p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
                <h3 className="text-xl font-bold text-primary">{title}</h3>
                <span className="text-sm font-semibold text-white">{price}</span>
              </div>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <p className="mt-4">
          {isPl
            ? "Większość firm powinna zacząć od poziomu 2 lub 3 dla jednego kanału (np. mail z formularza kontaktowego albo czat na stronie), zmierzyć efekt i dopiero potem dokładać kanały."
            : "Most companies should start with level 2 or 3 for one channel (e.g. email from the contact form or website chat), measure the effect, and only then add channels."}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Jak wygląda automatyzacja procesów w contact center krok po kroku" : "How contact center process automation works step by step"}
        </h2>
        <ol className="space-y-4">
          {flow.map(([title, description], index) => (
            <li key={title} className="flex gap-4">
              <span className="shrink-0 w-9 h-9 rounded-full bg-primary text-background font-bold flex items-center justify-center" aria-hidden="true">
                {index + 1}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
                <p>{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Automatyzacja obsługi zamówień: przykład z e-commerce i B2B" : "Order handling automation: an e-commerce and B2B example"}
        </h2>
        <p className="mb-4">
          {isPl
            ? "Hurtownia przyjmuje zamówienia mailem w formie „proszę 20 sztuk X i 5 sztuk Y jak ostatnio”. Agent AI odczytuje maila, dopasowuje produkty do katalogu, sprawdza historię klienta, tworzy zamówienie w systemie i odsyła potwierdzenie z ceną i terminem. Jeśli czegoś brakuje (adres dostawy, wariant), dopytuje. Człowiek zatwierdza tylko zamówienia powyżej ustalonej wartości albo z nietypowymi warunkami."
            : "A wholesaler receives orders by email like 'please send 20 pcs of X and 5 pcs of Y as last time'. The AI agent reads the email, matches products to the catalog, checks the customer's history, creates the order in the system, and sends back a confirmation with price and delivery date. If something is missing (delivery address, variant), it asks. A human approves only orders above a set value or with unusual terms."}
        </p>
        <p>
          {isPl
            ? "W sklepie internetowym ten sam mechanizm obsługuje pytania o status: agent łączy się z systemem sklepu i kurierem, odpowiada „paczka jest w sortowni, dostawa jutro”, a przy problemie z dostawą od razu otwiera reklamację u przewoźnika."
            : "In an online store the same mechanism handles status questions: the agent connects to the store system and the courier, replies 'the parcel is at the sorting hub, delivery tomorrow', and on a delivery problem immediately opens a claim with the carrier."}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Integracje: z czym agent musi się połączyć" : "Integrations: what the agent must connect to"}
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {(isPl
            ? [
                ["Kanały wejścia", "Skrzynka e-mail (IMAP/Gmail/Microsoft 365), formularz na stronie, czat, Messenger, WhatsApp Business, transkrypcja rozmów telefonicznych."],
                ["Systemy z danymi", "CRM (HubSpot, Pipedrive, własny), sklep (WooCommerce, Shopify, PrestaShop, dedykowany), ERP/magazyn, systemy kurierskie, fakturowanie."],
                ["Helpdesk / kolejka", "Freshdesk, Zendesk, HelpScout, Jira Service Management albo prosty panel dedykowany, jeśli gotowe narzędzie to za dużo."],
                ["Baza wiedzy", "FAQ, regulaminy, instrukcje, cenniki, historia odpowiedzi zespołu - to z tego agent „uczy się” odpowiadać w stylu firmy."],
              ]
            : [
                ["Input channels", "Mailbox (IMAP/Gmail/Microsoft 365), website form, chat, Messenger, WhatsApp Business, phone call transcription."],
                ["Data systems", "CRM (HubSpot, Pipedrive, custom), store (WooCommerce, Shopify, PrestaShop, custom), ERP/inventory, courier systems, invoicing."],
                ["Helpdesk / queue", "Freshdesk, Zendesk, HelpScout, Jira Service Management, or a simple custom panel when a ready tool is too much."],
                ["Knowledge base", "FAQ, terms, instructions, price lists, the team's reply history - this is what the agent 'learns' to answer in the company's style."],
              ]
          ).map(([title, description]) => (
            <article key={title} className="bg-background-lighter border border-primary/20 rounded-xl p-5">
              <h3 className="text-lg font-bold text-primary mb-2">{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
        <p className="mt-4">
          {isPl ? (
            <>
              Jeśli Twoje systemy nie mają API albo dane są w kilku miejscach, zacznij od uporządkowania przepływu - opisuję to w artykule{" "}
              <Link href="/blog/integracja-systemow-w-firmie-api-crm-erp-jak-zaczac">Integracja systemów w firmie: API, CRM, ERP</Link>.
            </>
          ) : (
            <>
              If your systems have no API or data lives in several places, start by organizing the flow - I describe it in{" "}
              <Link href="/en/blog/business-system-integration-api-crm-erp-how-to-start">Business System Integration: API, CRM, ERP</Link>.
            </>
          )}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Co mierzyć po wdrożeniu" : "What to measure after implementation"}
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {metrics.map(([title, description]) => (
            <article key={title} className="bg-background-lighter border border-primary/20 rounded-xl p-5">
              <h3 className="text-lg font-bold text-primary mb-2">{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Koszt i czas wdrożenia" : "Cost and implementation time"}
        </h2>
        <p className="mb-4">
          {isPl
            ? "Automatyzacja jednego kanału zgłoszeń (np. mail + formularz) z klasyfikacją, bazą wiedzy i eskalacją to zwykle 8 000-15 000 zł netto i 2-4 tygodnie. Prostszy wariant z regułami i automatycznym przypisaniem zaczyna się od 2 500 zł netto. Do tego koszt użycia modeli AI: przy kilkuset zgłoszeniach miesięcznie to zwykle kilkadziesiąt do kilkuset złotych."
            : "Automating one request channel (e.g. email + form) with classification, a knowledge base, and escalation usually costs PLN 8,000-15,000 net and takes 2-4 weeks. A simpler variant with rules and automatic routing starts from PLN 2,500 net. Add AI model usage: at a few hundred tickets per month that is usually tens to a few hundred PLN."}
        </p>
        <p>
          {isPl
            ? "Dla zespołu obsługi 2-3 osób, który spędza połowę dnia na powtarzalnych sprawach, zwrot następuje zwykle w 3-6 miesięcy. W contact center z większym wolumenem - szybciej."
            : "For a support team of 2-3 people spending half the day on repetitive cases, payback usually takes 3-6 months. In a contact center with higher volume - faster."}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Ryzyka i jak ich uniknąć" : "Risks and how to avoid them"}
        </h2>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>{isPl ? "Agent zmyśla odpowiedzi: ograniczaj go do bazy wiedzy firmy i każ mówić „nie wiem, przekażę”, gdy nie ma danych." : "The agent makes up answers: restrict it to the company knowledge base and make it say 'I do not know, I will pass this on' when data is missing."}</li>
          <li>{isPl ? "Klient nie wie, że rozmawia z AI: informuj o tym i zawsze zostaw ścieżkę do człowieka." : "The customer does not know they talk to AI: disclose it and always leave a path to a human."}</li>
          <li>{isPl ? "Dane osobowe w modelu: do modelu wysyłaj tylko to, co potrzebne; loguj i przechowuj rozmowy u siebie, zgodnie z RODO." : "Personal data in the model: send only what is needed; log and store conversations on your side, GDPR-compliant."}</li>
          <li>{isPl ? "Brak właściciela procesu: ktoś w firmie musi przeglądać eskalacje i poprawiać bazę wiedzy przez pierwsze tygodnie." : "No process owner: someone in the company must review escalations and improve the knowledge base during the first weeks."}</li>
        </ul>
      </section>

      <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6 md:p-8 border border-primary/20">
        <h2 className="text-xl font-bold text-white mb-4">
          {isPl ? "Chcesz zautomatyzować obsługę zgłoszeń w swojej firmie?" : "Want to automate ticket handling in your company?"}
        </h2>
        <p className="mb-4">
          {isPl
            ? "Opisz, jakimi kanałami przychodzą zgłoszenia, ile ich jest miesięcznie i jakie pytania powtarzają się najczęściej. Asystent AI na stronie kontaktu od razu podpowie poziom automatyzacji, a ja wrócę w 2-5 dni z prototypem agenta na Twoich przykładowych zgłoszeniach."
            : "Describe which channels requests come through, how many per month, and which questions repeat most often. The AI advisor on the contact page will immediately suggest an automation level, and I will come back within 2-5 days with an agent prototype built on your sample requests."}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href={contactHref} className="inline-flex items-center gap-2 px-6 py-3 bg-primary font-semibold rounded-lg hover:bg-primary-dark transition-colors !text-black !no-underline">
            {isPl ? "Zapytaj asystenta AI" : "Ask the AI advisor"}
            <span aria-hidden="true">→</span>
          </Link>
          <Link href={automationHref} className="inline-flex items-center gap-2 px-6 py-3 bg-background-lighter border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors !no-underline">
            {isPl ? "Automatyzacje AI dla firm" : "AI automation for companies"}
          </Link>
        </div>
      </section>
    </div>
  );
}
