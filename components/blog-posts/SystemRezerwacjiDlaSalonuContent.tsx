import Link from "next/link";

interface Props {
  lang: "pl" | "en";
}

export default function SystemRezerwacjiDlaSalonuContent({ lang }: Props) {
  const isPl = lang === "pl";

  return (
    <div className="space-y-10 text-gray-300 leading-relaxed">
      <p className="text-lg">
        {isPl
          ? "System rezerwacji online dla salonu kosmetycznego to dzisiaj jeden z najszybszych sposobów na zwiększenie liczby wizyt i ograniczenie chaosu w grafiku. Dobrze wdrożony system pozwala klientkom rezerwować terminy 24/7, zmniejsza liczbę telefonów i ogranicza liczbę nieodwołanych wizyt dzięki automatycznym przypomnieniom SMS/e-mail."
          : "An online booking system for a beauty salon is one of the fastest ways to increase appointments and reduce scheduling chaos. When implemented properly, it lets clients book 24/7, reduces phone calls, and cuts no-shows with automated SMS/email reminders."}
      </p>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Co powinien mieć dobry system rezerwacji?" : "What should a good booking system include?"}
        </h2>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>
            {isPl ? (
              <>
                <strong className="text-white">Rezerwacje 24/7</strong> - klientka może umówić wizytę poza godzinami pracy salonu.
              </>
            ) : (
              <>
                <strong className="text-white">24/7 online bookings</strong> - clients can schedule appointments outside business hours.
              </>
            )}
          </li>
          <li>
            {isPl ? (
              <>
                <strong className="text-white">Automatyczne przypomnienia</strong> - SMS/e-mail redukują no-show i puste okienka.
              </>
            ) : (
              <>
                <strong className="text-white">Automated reminders</strong> - SMS/email notifications reduce no-shows and empty slots.
              </>
            )}
          </li>
          <li>
            {isPl ? (
              <>
                <strong className="text-white">Płatności online i zadatki</strong> - większa przewidywalność przychodów.
              </>
            ) : (
              <>
                <strong className="text-white">Online payments and deposits</strong> - more predictable revenue and better commitment.
              </>
            )}
          </li>
          <li>
            {isPl ? (
              <>
                <strong className="text-white">Integracja z kalendarzem zespołu</strong> - łatwe zarządzanie grafikiem wielu specjalistek.
              </>
            ) : (
              <>
                <strong className="text-white">Team calendar integration</strong> - simple schedule management across multiple specialists.
              </>
            )}
          </li>
          <li>
            {isPl ? (
              <>
                <strong className="text-white">Integracja z witryną i social media</strong> - ten sam system na stronie, Instagramie i Facebooku.
              </>
            ) : (
              <>
                <strong className="text-white">Website and social integration</strong> - one booking flow across website, Instagram, and Facebook.
              </>
            )}
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Jak wybrać system rezerwacji do salonu kosmetycznego?" : "How to choose a booking system for a beauty salon?"}
        </h2>
        <p className="mb-4">
          {isPl
            ? "Zamiast pytać tylko o cenę abonamentu, sprawdź pełny koszt i wpływ na pracę zespołu. Najczęściej opłaca się rozwiązanie, które oszczędza czas recepcji i zwiększa liczbę potwierdzonych wizyt."
            : "Instead of checking only the monthly subscription price, evaluate total cost and team impact. The best option usually saves reception time and increases confirmed appointments."}
        </p>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>{isPl ? "Czy system obsługuje usługi, pakiety i dodatki?" : "Can it handle services, packages, and add-ons?"}</li>
          <li>{isPl ? "Czy ma raporty obłożenia i przychodów?" : "Does it provide occupancy and revenue reports?"}</li>
          <li>{isPl ? "Czy umożliwia zadatek online?" : "Does it support online deposits?"}</li>
          <li>{isPl ? "Czy łatwo go połączyć z Twoją stroną?" : "Is website integration easy?"}</li>
          <li>{isPl ? "Czy działa stabilnie na telefonie?" : "Is the mobile experience stable and fast?"}</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Ile trwa wdrożenie systemu rezerwacji?" : "How long does booking system implementation take?"}
        </h2>
        <p>
          {isPl
            ? "W większości salonów wdrożenie trwa od 7 do 21 dni. W prostym wariancie (jedna lokalizacja, podstawowy grafik, płatności online) realny jest start nawet w tydzień. Bardziej rozbudowane wdrożenia (wiele stanowisk, integracje, migracja danych klientów) zajmują zwykle 2-4 tygodnie."
            : "For most salons, implementation takes 7 to 21 days. In a simple setup (single location, standard schedule, online payments), launch within a week is realistic. More advanced implementations (multiple staff stations, integrations, customer data migration) usually take 2-4 weeks."}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Najczęstsze błędy przy wdrożeniu" : "Most common implementation mistakes"}
        </h2>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>{isPl ? "Brak jasnych zasad anulacji i przesuwania wizyt." : "No clear cancellation and rescheduling policy."}</li>
          <li>{isPl ? "Brak przypomnień i brak zadatków przy popularnych usługach." : "No reminders and no deposits for high-demand services."}</li>
          <li>{isPl ? "Brak analityki: nie wiadomo, które usługi dają największy przychód." : "No analytics: unclear which services generate the most revenue."}</li>
          <li>{isPl ? "Słaba integracja z witryną - klienci porzucają rezerwację." : "Poor website integration - users drop off during booking."}</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">{isPl ? "FAQ" : "FAQ"}</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {isPl ? "Czy salon kosmetyczny potrzebuje płatności online?" : "Does a beauty salon need online payments?"}
            </h3>
            <p>
              {isPl
                ? "Nie zawsze, ale najczęściej tak. Nawet niewielki zadatek znacząco ogranicza liczbę nieodwołanych wizyt i stabilizuje grafik."
                : "Not always, but in most cases yes. Even a small deposit significantly reduces no-shows and stabilizes your schedule."}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {isPl ? "Czy można uruchomić system bez nowej strony internetowej?" : "Can we launch a booking system without a new website?"}
            </h3>
            <p>
              {isPl
                ? "Tak. System można osadzić na obecnej stronie lub dodać jako dedykowany przycisk rezerwacji. Warto jednak sprawdzić szybkość strony i UX formularza."
                : "Yes. You can embed it into your current website or add a dedicated booking button. Still, it is worth auditing page speed and booking UX."}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {isPl ? "Jaki budżet przygotować?" : "What budget should we plan?"}
            </h3>
            <p>
              {isPl
                ? "Koszt zależy od zakresu: konfiguracja, integracje, płatności, migracja danych i wsparcie powdrożeniowe. Najlepiej porównać całkowity koszt wdrożenia, a nie sam abonament."
                : "The budget depends on scope: setup, integrations, payments, data migration, and post-launch support. Compare total implementation cost, not just monthly subscription."}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6 md:p-8 border border-primary/20">
        <h2 className="text-xl font-bold text-white mb-4">
          {isPl ? "Chcesz wdrożyć system rezerwacji w salonie?" : "Want to launch a booking system for your salon?"}
        </h2>
        <p className="mb-4">
          {isPl
            ? "W ML Devworks wdrażamy systemy rezerwacji online z integracją płatności, przypomnieniami i analizą wyników. Zadbamy o technikę i UX, żeby rezerwacje naprawdę rosły."
            : "At ML Devworks, we implement online booking systems with payment integration, reminders, and analytics. We handle both technical setup and UX to increase completed bookings."}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href={isPl ? "/uslugi/sklepy-internetowe-systemy-rezerwacji" : "/en/services/online-stores-booking-systems"}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary font-semibold rounded-lg hover:bg-primary-dark transition-colors !text-black"
          >
            {isPl ? "Zobacz ofertę wdrożeń" : "View implementation services"}
            <span aria-hidden="true">→</span>
          </Link>
          <Link
            href={isPl ? "/#contact" : "/en#contact"}
            className="inline-flex items-center gap-2 px-6 py-3 bg-background-lighter border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
          >
            {isPl ? "Umów bezpłatną konsultację" : "Book a free consultation"}
          </Link>
        </div>
      </section>
    </div>
  );
}
