import Link from "next/link";

interface Props {
  lang: "pl" | "en";
}

export default function SystemRezerwacjiDlaFirmyUslugowejContent({ lang }: Props) {
  const isPl = lang === "pl";

  return (
    <div className="space-y-10 text-gray-300 leading-relaxed">
      <p className="text-lg">
        {isPl
          ? "System rezerwacji dla firmy usługowej powinien robić więcej niż tylko pokazywać wolne terminy. Dobry system porządkuje kalendarz, pobiera płatności lub zaliczki, przypomina klientom o wizycie i daje właścicielowi dane o obłożeniu oraz sprzedaży."
          : "A booking system for a service business should do more than show available slots. A good system organizes the calendar, collects payments or deposits, reminds customers, and gives owners data about occupancy and revenue."}
      </p>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Najważniejsze funkcje systemu rezerwacji" : "Core booking system features"}
        </h2>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>{isPl ? "Kalendarz dostępności z usługami, pracownikami, lokalizacjami i limitami miejsc." : "Availability calendar with services, staff, locations, and capacity limits."}</li>
          <li>{isPl ? "Rezerwacja online 24/7 z prostym formularzem dla klienta." : "24/7 online booking with a simple customer form."}</li>
          <li>{isPl ? "Płatności online, zaliczki, vouchery lub reguły anulowania." : "Online payments, deposits, vouchers, or cancellation rules."}</li>
          <li>{isPl ? "Automatyczne potwierdzenia i przypomnienia email/SMS." : "Automatic email/SMS confirmations and reminders."}</li>
          <li>{isPl ? "Panel administracyjny, raporty, eksporty i historia klienta." : "Admin panel, reports, exports, and customer history."}</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Integracje, które robią różnicę" : "Integrations that make a difference"}
        </h2>
        <p className="mb-4">
          {isPl
            ? "Największa wartość pojawia się wtedy, gdy rezerwacje nie są osobną wyspą, ale częścią sprzedaży i obsługi klienta."
            : "The biggest value appears when bookings are not an isolated island, but part of sales and customer service."}
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {(isPl
            ? [
                "Strona internetowa i landing page z formularzem rezerwacji.",
                "Płatności online i księgowość/fakturowanie.",
                "CRM lub baza klientów.",
                "Google Calendar, powiadomienia i automatyczne follow-upy.",
              ]
            : [
                "Website and landing page with booking form.",
                "Online payments and accounting/invoicing.",
                "CRM or customer database.",
                "Google Calendar, notifications, and automated follow-ups.",
              ]
          ).map((item) => (
            <article key={item} className="bg-background-lighter border border-primary/20 rounded-xl p-5">
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Gotowa platforma czy dedykowany system?" : "Ready platform or custom system?"}
        </h2>
        <p className="mb-4">
          {isPl
            ? "Gotowa platforma wystarczy, jeśli proces jest prosty. Dedykowany system ma sens, gdy firma ma nietypowe usługi, wiele lokalizacji, własne reguły płatności, integracje albo chce mieć pełną kontrolę nad doświadczeniem klienta."
            : "A ready platform is enough for simple workflows. A custom system makes sense when the company has unusual services, multiple locations, custom payment rules, integrations, or needs full control over customer experience."}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Jak wygląda wdrożenie?" : "What does implementation look like?"}
        </h2>
        <ol className="list-decimal list-inside space-y-2 ml-2">
          <li>{isPl ? "Mapa usług, zasobów, grafiku i reguł rezerwacji." : "Map services, resources, schedule, and booking rules."}</li>
          <li>{isPl ? "Projekt ścieżki klienta i panelu administratora." : "Design customer flow and admin panel."}</li>
          <li>{isPl ? "Integracja płatności, powiadomień i strony." : "Integrate payments, notifications, and website."}</li>
          <li>{isPl ? "Testy scenariuszy, migracja danych i publikacja." : "Scenario testing, data migration, and launch."}</li>
        </ol>
      </section>

      <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6 md:p-8 border border-primary/20">
        <h2 className="text-xl font-bold text-white mb-4">
          {isPl ? "Budujesz system rezerwacji dla firmy usługowej?" : "Building a booking system for a service business?"}
        </h2>
        <p className="mb-4">
          {isPl
            ? "ML DevWorks projektuje systemy rezerwacji klientów z płatnościami, przypomnieniami, panelem administracyjnym i integracjami."
            : "ML DevWorks designs customer booking systems with payments, reminders, admin panels, and integrations."}
        </p>
        <Link
          href={isPl ? "/uslugi/systemy-rezerwacji-online" : "/en/services/online-booking-systems"}
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary font-semibold rounded-lg hover:bg-primary-dark transition-colors !text-black"
        >
          {isPl ? "Zobacz systemy rezerwacji online" : "View online booking systems"}
          <span aria-hidden="true">→</span>
        </Link>
      </section>
    </div>
  );
}
