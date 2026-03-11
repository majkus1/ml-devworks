import Link from "next/link";

interface Props {
  lang: "pl" | "en";
}

export default function KompleksoweUslugiProgramistyczneContent({ lang }: Props) {
  const isPl = lang === "pl";

  return (
    <div className="space-y-10 text-gray-300 leading-relaxed">
      <p className="text-lg">
        {isPl
          ? "Kompleksowe uslugi programistyczne dla firm to nie tylko \"zrobienie strony\". To projektowanie rozwiazan, ktore wspieraja konkretne procesy biznesowe: pozyskiwanie klientow, obsluge zlecen, automatyzacje pracy i raportowanie. W praktyce najwieksza wartosc powstaje wtedy, gdy technologia jest dopasowana do branzy i modelu dzialania firmy."
          : "Comprehensive software services for businesses are not just about \"building a website.\" They are about designing solutions that support real business processes: lead generation, order handling, workflow automation, and reporting. In practice, the biggest value appears when technology is tailored to your industry and operating model."}
      </p>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl
            ? "Dlaczego ogolna strona firmowa to za malo?"
            : "Why is a generic business website often not enough?"}
        </h2>
        <p className="mb-4">
          {isPl
            ? "Uniwersalna strona bez dopasowania do procesu sprzedazy i obslugi klienta czesto nie przynosi oczekiwanych efektow. Firmy potrzebuja rozwiazan, ktore skracaja czas obslugi i zwiekszaja konwersje."
            : "A generic website that ignores sales and customer-service workflows often underperforms. Companies need solutions that reduce handling time and improve conversion."}
        </p>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>{isPl ? "Brak formularzy i sciezek pod konkretne uslugi." : "Missing service-specific forms and conversion paths."}</li>
          <li>{isPl ? "Brak integracji z CRM i automatyzacja leadow." : "No CRM integration and lead automation."}</li>
          <li>{isPl ? "Brak panelu do zarzadzania procesami w firmie." : "No dashboard to manage internal business workflows."}</li>
          <li>{isPl ? "Brak mierzenia skutecznosci ruchu i kampanii." : "No clear measurement of traffic and campaign performance."}</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Przyklady rozwiazan dopasowanych do branzy" : "Examples of industry-tailored software solutions"}
        </h2>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>
            {isPl
              ? "Aplikacja dla firm budowlanych: harmonogram ekip, obieg zlecen, raportowanie postepu prac i kosztow."
              : "App for construction companies: crew scheduling, job workflow, project progress and cost reporting."}
          </li>
          <li>
            {isPl
              ? "Strona dla salonu fryzjerskiego: rezerwacje online, przypomnienia, cennik uslug i panel zarzadzania grafikiem."
              : "Website for hair salons: online booking, reminders, service pricing, and schedule management panel."}
          </li>
          <li>
            {isPl
              ? "System dla gabinetu medycznego: zapisy pacjentow, historia wizyt, dokumenty i bezpieczny dostep."
              : "System for medical clinics: patient booking, visit history, documents, and secure access."}
          </li>
          <li>
            {isPl
              ? "Platforma dla transportu i logistyki: statusy zlecen, panel klienta, dokumenty przewozowe i powiadomienia."
              : "Platform for transport and logistics: order statuses, client portal, shipping docs, and notifications."}
          </li>
          <li>
            {isPl
              ? "System dla firm szkoleniowych: sprzedaz kursow, kalendarz szkolen, certyfikaty i automatyzacja mailingu."
              : "System for training companies: course sales, training calendar, certificates, and automated emails."}
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl
            ? "Jakie funkcje warto wdrozyc, zeby technologia wspierala biznes?"
            : "Which features should you implement to support business growth?"}
        </h2>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>{isPl ? "Panel administracyjny do zarzadzania klientami i zamowieniami." : "Admin panel for managing customers and orders."}</li>
          <li>{isPl ? "Panel klienta z historia zlecen i dokumentami." : "Client panel with order history and documents."}</li>
          <li>{isPl ? "System rezerwacji online dopasowany do typu uslugi." : "Online booking system tailored to your service model."}</li>
          <li>{isPl ? "Integracje CRM/ERP, platnosci, faktury i automatyzacje follow-up." : "CRM/ERP, payments, invoicing, and follow-up automations."}</li>
          <li>{isPl ? "Dashboard KPI: leady, konwersja, wartosc koszyka, czas realizacji." : "KPI dashboard: leads, conversion, average order value, delivery time."}</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "SEO long-tail: jak zdobywac lepszy ruch z Google?" : "Long-tail SEO: how to attract better Google traffic?"}
        </h2>
        <p>
          {isPl
            ? "Zamiast walczyc tylko o fraze \"strona internetowa\", lepiej targetowac zapytania z intencja zakupowa i kontekstem branzy, np. \"strona dla salonu fryzjerskiego z rezerwacja online\" albo \"aplikacja dla firmy budowlanej do zarzadzania zleceniami\". Takie frazy maja mniejsza konkurencje i czesciej koncza sie realnym zapytaniem."
            : "Instead of competing only for broad phrases like \"website development,\" target industry-specific queries with buying intent, such as \"website for hair salon with online booking\" or \"app for construction company job management.\" These keywords are less competitive and often convert better."}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">{isPl ? "FAQ" : "FAQ"}</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {isPl
                ? "Czy mala firma potrzebuje dedykowanej aplikacji?"
                : "Does a small business need a custom app?"}
            </h3>
            <p>
              {isPl
                ? "Nie zawsze od razu, ale czesto potrzebuje dedykowanych funkcji: panelu klienta, rezerwacji, automatyzacji i raportow. Czasem najlepszy start to strona + prosty system administracyjny."
                : "Not always from day one, but many small businesses need custom features: client portal, booking, automation, and reports. Often the best start is website + lightweight admin system."}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {isPl
                ? "Jak wybrac software house dla projektu branżowego?"
                : "How to choose a software partner for an industry-specific project?"}
            </h3>
            <p>
              {isPl
                ? "Szukaj zespolu, ktory pyta o procesy i KPI, a nie tylko o wyglad strony. Kluczowe sa: architektura, bezpieczenstwo, integracje i plan rozwoju po wdrozeniu."
                : "Choose a team that asks about processes and KPIs, not only visual design. Key factors: architecture, security, integrations, and post-launch growth plan."}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {isPl
                ? "Czy SEO i rozwoj aplikacji mozna laczyc?"
                : "Can SEO and software development be combined?"}
            </h3>
            <p>
              {isPl
                ? "Tak, i warto to robic od poczatku. Dobra architektura informacji, szybkie ladowanie, dane strukturalne i frazy branżowe long-tail powinny byc projektowane razem z funkcjami biznesowymi."
                : "Yes, and you should do it from the start. Information architecture, performance, structured data, and long-tail industry keywords should be planned together with business features."}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6 md:p-8 border border-primary/20">
        <h2 className="text-xl font-bold text-white mb-4">
          {isPl
            ? "Potrzebujesz rozwiazania dopasowanego do Twojej branzy?"
            : "Need software tailored to your industry?"}
        </h2>
        <p className="mb-4">
          {isPl
            ? "W ML Devworks projektujemy strony i aplikacje, ktore wspieraja sprzedaz, obsluge klienta i codzienne procesy operacyjne. Od audytu potrzeb po wdrozenie i dalszy rozwoj produktu."
            : "At ML Devworks, we design websites and apps that support sales, customer service, and daily operations. From discovery and architecture to launch and long-term product growth."}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href={isPl ? "/uslugi/aplikacje-internetowe-i-mobilne" : "/en/services/web-and-mobile-applications"}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary font-semibold rounded-lg hover:bg-primary-dark transition-colors !text-black"
          >
            {isPl ? "Zobacz uslugi programistyczne" : "View software services"}
            <span aria-hidden="true">→</span>
          </Link>
          <Link
            href={isPl ? "/#contact" : "/en#contact"}
            className="inline-flex items-center gap-2 px-6 py-3 bg-background-lighter border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
          >
            {isPl ? "Umow bezplatna konsultacje" : "Book a free consultation"}
          </Link>
        </div>
      </section>
    </div>
  );
}
