import Link from "next/link";

interface Props {
  lang: "pl" | "en";
}

export default function SocialMediaVsStronaFirmowaContent({ lang }: Props) {
  const isPl = lang === "pl";

  return (
    <div className="space-y-10 text-gray-300 leading-relaxed">
      <p className="text-lg">
        {isPl
          ? "Wiele firm opiera marketing wyłącznie na Instagramie, Facebooku lub TikToku, bo to kanały \"za darmo\". Problem pojawia się wtedy, gdy algorytm obcina zasięgi, konto zostaje zablokowane albo klient chce sprawdzić ofertę i nie znajduje profesjonalnej strony. Social media są ważne, ale bez własnej strony internetowej budujesz biznes na cudzym gruncie."
          : "Many companies rely only on Instagram, Facebook, or TikTok because these channels seem \"free\". The problem starts when reach drops due to algorithm changes, an account gets blocked, or prospects cannot find a professional website with full offer details. Social media matters, but without your own website you are building on rented ground."}
      </p>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Social media vs strona internetowa - co daje lepszy efekt?" : "Social media vs website - what works better?"}
        </h2>
        <p className="mb-4">
          {isPl
            ? "Najlepsze efekty daje połączenie obu kanałów: social media przyciąga uwagę, a strona internetowa konwertuje ruch na zapytania i sprzedaż. Problemem nie są social media, tylko brak miejsca, które jest w 100% Twoje i zoptymalizowane pod cele biznesowe."
            : "The best results come from combining both channels: social media creates attention, while your website converts traffic into leads and sales. The issue is not social media itself, but not having a fully owned destination optimized for business goals."}
        </p>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>
            {isPl
              ? "Social media: zasięg i relacja z odbiorcą."
              : "Social media: reach and audience engagement."}
          </li>
          <li>
            {isPl
              ? "Strona: pełna oferta, SEO, formularze, analityka, automatyzacje."
              : "Website: full offer, SEO, forms, analytics, and automations."}
          </li>
          <li>
            {isPl
              ? "Razem: stały dopływ ruchu + wyższa konwersja."
              : "Together: stable traffic flow + higher conversion."}
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Dlaczego sama obecność na Instagramie/TikToku to ryzyko?" : "Why relying only on Instagram/TikTok is risky"}
        </h2>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>
            {isPl
              ? "Nie kontrolujesz algorytmów ani zasięgów."
              : "You do not control algorithms or organic reach."}
          </li>
          <li>
            {isPl
              ? "Nie masz pełnej własności nad kanałem i danymi."
              : "You do not fully own the channel or customer data."}
          </li>
          <li>
            {isPl
              ? "Trudniej pokazać pełną ofertę i proces współpracy."
              : "It is harder to present complete services and process details."}
          </li>
          <li>
            {isPl
              ? "Bez strony tracisz zapytania z Google (intencja zakupowa)."
              : "Without a website, you miss Google traffic with buying intent."}
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Co daje dobra strona firmowa oprócz \"bycia wizytówką\"?" : "What does a good business website provide beyond a digital brochure?"}
        </h2>
        <ul className="list-disc list-inside space-y-2 ml-2">
          <li>
            {isPl
              ? "Lepszą konwersję: CTA, formularze, lead magnety, szybki kontakt."
              : "Higher conversion: CTAs, forms, lead magnets, and fast contact flows."}
          </li>
          <li>
            {isPl
              ? "SEO: ruch organiczny z Google bez stałych kosztów reklam."
              : "SEO: organic traffic from Google without permanent ad spend."}
          </li>
          <li>
            {isPl
              ? "Analitykę: dokładny pomiar źródeł ruchu i jakości leadów."
              : "Analytics: precise measurement of traffic sources and lead quality."}
          </li>
          <li>
            {isPl
              ? "Automatyzację: integracja CRM, rezerwacji, mailingu i sprzedaży."
              : "Automation: CRM, booking, email, and sales workflow integrations."}
          </li>
          <li>
            {isPl
              ? "Systemy biznesowe: rezerwacje online, panele klienta, panele administracyjne, zarządzanie zamówieniami i raportami."
              : "Business systems: online booking, client portals, admin dashboards, order management, and reporting."}
          </li>
          <li>
            {isPl
              ? "Wiarygodność: profesjonalna marka dla klientów B2B i premium."
              : "Credibility: stronger positioning for B2B and premium clients."}
          </li>
        </ul>
        <p className="mt-4">
          {isPl
            ? "To kluczowa różnica między social mediami a własną stroną/aplikacją: możesz wdrażać funkcje dopasowane do Twojego modelu biznesowego, a nie tylko publikować treści. Dzięki temu strona realnie wspiera operacje firmy, obsługę klientów i skalowanie sprzedaży."
            : "This is a key difference between social platforms and your own website/app: you can implement features tailored to your business model, not just publish content. That is how your website supports operations, customer management, and scalable sales growth."}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">
          {isPl ? "Ile kosztuje brak strony internetowej?" : "What is the hidden cost of not having a website?"}
        </h2>
        <p>
          {isPl
            ? "Największy koszt to utracone szanse: klienci, którzy chcieli kupić, ale nie znaleźli konkretów, cennika, portfolio lub wygodnego sposobu kontaktu. Drugi koszt to zależność od płatnych kampanii i zmiennych zasięgów. Własna strona zmniejsza to ryzyko i buduje stabilny kanał pozyskiwania klientów."
            : "The biggest cost is missed opportunities: prospects who wanted to buy but could not find clear offer details, pricing, portfolio, or a frictionless contact flow. The second cost is dependence on paid ads and volatile reach. Your own website reduces this risk and creates a stable lead-generation channel."}
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-4">{isPl ? "FAQ" : "FAQ"}</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {isPl ? "Czy social media bez strony internetowej mogą wystarczyć?" : "Can social media alone be enough without a website?"}
            </h3>
            <p>
              {isPl
                ? "W krótkim okresie czasem tak, ale długoterminowo to ryzykowne. Brak strony ogranicza SEO, automatyzację i kontrolę nad konwersją."
                : "Sometimes in the short term, yes. Long term, it is risky. Without a website you limit SEO, automation, and conversion control."}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {isPl ? "Czy mała firma też potrzebuje strony www?" : "Does a small business also need a website?"}
            </h3>
            <p>
              {isPl
                ? "Tak. Dla małych firm strona to często najtańszy kanał stałego pozyskiwania leadów z Google i budowania wiarygodności."
                : "Yes. For small businesses, a website is often the most cost-effective long-term channel for Google leads and credibility."}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {isPl ? "Co najpierw: social media czy strona?" : "What should come first: social media or website?"}
            </h3>
            <p>
              {isPl
                ? "Najlepiej równolegle. Minimum to prosta, szybka i dobrze zoptymalizowana strona + regularna komunikacja w social media."
                : "Ideally both in parallel. Minimum setup: a fast, conversion-ready website plus consistent social media communication."}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6 md:p-8 border border-primary/20">
        <h2 className="text-xl font-bold text-white mb-4">
          {isPl ? "Chcesz połączyć social media z mocną stroną firmową?" : "Want to combine social media with a high-converting website?"}
        </h2>
        <p className="mb-4">
          {isPl
            ? "W ML Devworks projektujemy strony i aplikacje, które wspierają marketing w social media i zwiększają liczbę realnych zapytań. Tworzymy rozwiązania pod SEO, konwersję i dalszy rozwój biznesu."
            : "At ML Devworks, we design websites and apps that amplify social media efforts and increase real qualified inquiries. We build for SEO, conversion, and long-term business growth."}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href={isPl ? "/uslugi/strony-internetowe" : "/en/services/web-development"}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary font-semibold rounded-lg hover:bg-primary-dark transition-colors !text-black"
          >
            {isPl ? "Zobacz ofertę stron internetowych" : "View web development services"}
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
