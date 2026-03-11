import Link from "next/link";

interface Props {
  lang: "pl" | "en";
}

export default function StronaInternetowaDlaFirmyContent({ lang }: Props) {
  const isPl = lang === "pl";

  return (
    <div className="space-y-10 text-gray-300 leading-relaxed">
      <p className="text-lg">
        {isPl
          ? "Strona internetowa to dziś fundament obecności każdej firmy – niezależnie od branży. Niezależnie od tego, czy prowadzisz mały lokal, sklep online, czy firmę usługową – klienci najpierw szukają Cię w sieci. W tym przewodniku wyjaśniamy, kiedy strona internetowa dla firmy jest naprawdę potrzebna, jak wybrać wykonawcę oraz na co zwrócić uwagę przed podpisaniem umowy."
          : "A website is today the foundation of every company's presence – regardless of industry. Whether you run a small local business, an online store, or a service company – customers look for you online first. In this guide, we explain when a business website is truly needed, how to choose a developer, and what to look for before signing a contract."}
      </p>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Kiedy firma potrzebuje strony internetowej?" : "When Does Your Business Need a Website?"}
        </h2>
        <p>
          {isPl
            ? "Nawet małe firmy i freelancerzy mogą wiele zyskać na profesjonalnej stronie www. Jeśli klienci szukają Twoich usług lub produktów w Google, chcesz pokazać portfolio, przyjmować zapytania przez formularz lub budować wizerunek eksperta – strona internetowa jest niezbędna. Brak strony w 2025 roku oznacza utracone zlecenia na rzecz konkurencji, która jest widoczna online."
            : "Even small businesses and freelancers can benefit greatly from a professional website. If customers search for your services or products on Google, you want to showcase your portfolio, receive inquiries via a contact form, or build an expert image – a website is essential. In 2025, having no website means lost orders to competitors who are visible online."}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Jak wybrać wykonawcę strony internetowej?" : "How to Choose a Website Developer?"}
        </h2>
        <p className="mb-4">
          {isPl
            ? "Wybór firmy lub freelancera do stworzenia strony to kluczowa decyzja. Oto na co zwrócić uwagę:"
            : "Choosing a company or freelancer to create your website is a crucial decision. Here's what to look for:"}
        </p>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>
            {isPl ? (
              <>
                <strong className="text-white">Portfolio i realizacje</strong> – sprawdź, czy wykonawca ma doświadczenie w Twojej branży lub podobnych projektach.
              </>
            ) : (
              <>
                <strong className="text-white">Portfolio and projects</strong> – check if the developer has experience in your industry or similar projects.
              </>
            )}
          </li>
          <li>
            {isPl ? (
              <>
                <strong className="text-white">Technologie</strong> – nowoczesne strony (Next.js, React) ładują się szybko i są lepiej indeksowane przez Google niż przestarzałe rozwiązania.
              </>
            ) : (
              <>
                <strong className="text-white">Technologies</strong> – modern websites (Next.js, React) load quickly and are better indexed by Google than outdated solutions.
              </>
            )}
          </li>
          <li>
            {isPl ? (
              <>
                <strong className="text-white">SEO od samego początku</strong> – strona powinna być zoptymalizowana pod wyszukiwarki (semantyczna struktura, meta tagi, szybkość).
              </>
            ) : (
              <>
                <strong className="text-white">SEO from the start</strong> – the site should be optimized for search engines (semantic structure, meta tags, speed).
              </>
            )}
          </li>
          <li>
            {isPl ? (
              <>
                <strong className="text-white">Responsywność</strong> – strona musi dobrze wyglądać na smartfonie, tablecie i komputerze.
              </>
            ) : (
              <>
                <strong className="text-white">Responsiveness</strong> – the site must look good on smartphone, tablet, and desktop.
              </>
            )}
          </li>
          <li>
            {isPl ? (
              <>
                <strong className="text-white">Wsparcie i utrzymanie</strong> – upewnij się, że po wdrożeniu możesz liczyć na aktualizacje i pomoc techniczną.
              </>
            ) : (
              <>
                <strong className="text-white">Support and maintenance</strong> – make sure you can count on updates and technical support after launch.
              </>
            )}
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Ile kosztuje strona internetowa?" : "How Much Does a Business Website Cost?"}
        </h2>
        <p>
          {isPl
            ? "Koszt zależy od złożoności projektu. Prosta strona wizytówka to zwykle kilka tysięcy złotych. Strona firmowa z wieloma sekcjami, galerią i CMS – kilkanaście tysięcy. Sklep internetowy lub zaawansowana aplikacja – znacznie więcej. Ważne: unikaj najtańszych ofert za kilkaset złotych – często kończą się stronami o słabej jakości, bez SEO i z problemami technicznymi. Lepiej zainwestować raz w solidne rozwiązanie."
            : "Cost depends on project complexity. A simple business card website usually costs a few thousand. A corporate site with multiple sections, gallery and CMS – more. An online store or advanced application – significantly more. Important: avoid the cheapest offers – they often result in poor quality sites, without SEO and with technical issues. Better to invest once in a solid solution."}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Często zadawane pytania" : "Frequently Asked Questions"}
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {isPl ? "Czy mała firma potrzebuje strony internetowej?" : "Does a small business need a website?"}
            </h3>
            <p>
              {isPl
                ? "Tak. Nawet jednoosobowa działalność zyskuje na profesjonalnej stronie – buduje zaufanie, ułatwia kontakt i umożliwia znalezienie Cię w Google. Klienci szukają usług online – bez strony tracisz szansę na zlecenia."
                : "Yes. Even a one-person business benefits from a professional website – it builds trust, facilitates contact and allows customers to find you on Google. Customers search for services online – without a website you lose the chance for orders."}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {isPl ? "Jak długo trwa stworzenie strony internetowej?" : "How long does it take to create a website?"}
            </h3>
            <p>
              {isPl
                ? "Prosta strona wizytówka – zwykle 2–4 tygodnie. Bardziej rozbudowana strona lub sklep – 4–12 tygodni. Termin zależy od zakresu i dostępności treści (teksty, zdjęcia) po Twojej stronie."
                : "A simple business card site – usually 2–4 weeks. A more extensive site or store – 4–12 weeks. The timeline depends on scope and availability of content (texts, images) on your side."}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {isPl ? "Czym różni się dobra strona od słabej?" : "What makes a good website different from a bad one?"}
            </h3>
            <p>
              {isPl
                ? "Dobra strona: szybko się ładuje, jest zoptymalizowana pod SEO, działa na wszystkich urządzeniach i jest łatwa w aktualizacji. Słaba strona: wolna, nieczytelna na telefonie, niewidoczna w Google i oparta na przestarzałych technologiach."
                : "A good site: loads quickly, is SEO optimized, works on all devices and is easy to update. A bad site: slow, unreadable on mobile, invisible on Google and built on outdated technologies."}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6 md:p-8 border border-primary/20">
        <h2 className="text-xl font-bold text-white mb-4">
          {isPl ? "Potrzebujesz strony internetowej dla swojej firmy?" : "Need a Website for Your Business?"}
        </h2>
        <p className="mb-4">
          {isPl
            ? "W ML Devworks tworzymy profesjonalne strony internetowe i aplikacje webowe – szybkie, zoptymalizowane pod SEO i dostosowane do Twoich potrzeb. Skontaktuj się z nami i otrzymaj bezpłatną wycenę."
            : "At ML Devworks we create professional websites and web applications – fast, SEO-optimized and tailored to your needs. Contact us for a free quote."}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href={isPl ? "/uslugi/strony-internetowe" : "/en/services/web-development"}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary font-semibold rounded-lg hover:bg-primary-dark transition-colors !text-black"
          >
            {isPl ? "Zobacz ofertę stron internetowych" : "View web development offer"}
            <span aria-hidden="true">→</span>
          </Link>
          <Link
            href={isPl ? "/#contact" : "/en#contact"}
            className="inline-flex items-center gap-2 px-6 py-3 bg-background-lighter border border-primary text-primary font-semibold rounded-lg hover:bg-primary/10 transition-colors"
          >
            {isPl ? "Bezpłatna wycena" : "Free quote"}
          </Link>
        </div>
      </section>
    </div>
  );
}
