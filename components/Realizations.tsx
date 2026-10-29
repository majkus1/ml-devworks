"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { lockScroll } from "@/lib/scroll-lock";
import Image from "next/image";
// Ikony technologii zostały usunięte - użyj <img> tagów w miejscach oznaczonych TODO

interface RealizationsProps {
  lang?: "pl" | "en";
}

interface TechIcon {
  name: string;
  // icon: React.ComponentType<{ className?: string }>; // Usunięte - użyj <img> tagów
}

interface Project {
  id: string;
  name: {
    pl: string;
    en: string;
  };
  url: string;
  shortDescription: {
    pl: string;
    en: string;
  };
  longDescription: {
    pl: string;
    en: string;
  };
  /** 3–4 krótkie punkty „co zrobiłem” w oknie szczegółów. */
  highlights: {
    pl: string[];
    en: string[];
  };
  /** Dwa efekty w liczbach na karcie (tylko sprawdzalne fakty). */
  results: { value: { pl: string; en: string }; label: { pl: string; en: string } }[];
  /** Opinia klienta, jeśli jest publiczna. */
  quote?: { text: { pl: string; en: string }; author: string };
  technologies: TechIcon[];
  images?: string[];
  inDevelopment: boolean;
  projectType: {
    pl: string;
    en: string;
  };
}

// Liczby w „results” są sprawdzalne: wynikają z działania rozwiązania albo z publicznych stron projektów (bez zmyślonych wyników klientów).
const projects: Project[] = [
  {
    id: "planopia",
    name: { pl: "Planopia", en: "Planopia" },
    url: "https://planopia.pl",
    shortDescription: {
      pl: "Firmy zamieniły arkusze z godzinami i papierowe wnioski urlopowe na jedną aplikację. Raport na koniec miesiąca powstaje jednym kliknięciem.",
      en: "Companies replaced timesheets and paper leave requests with one app. The month-end report takes one click.",
    },
    longDescription: {
      pl: "Problem: godziny w kilku arkuszach, wnioski urlopowe mailem i SMS-em, a saldo urlopu liczone ręcznie. Rozwiązanie: pracownicy wpisują czas i składają wnioski z telefonu, przełożony zatwierdza je w jednym miejscu, a saldo i raporty liczą się same.",
      en: "Problem: hours in several spreadsheets, leave requests by email and text, and leave balances counted by hand. Solution: employees log time and request leave from their phone, managers approve in one place, and balances and reports calculate themselves.",
    },
    highlights: {
      pl: ["Koniec zbierania i scalania arkuszy od kierowników", "Saldo urlopu liczy się samo po każdym wniosku", "Grafik, zadania i asystent AI w tej samej aplikacji", "Darmowy plan dla zespołów do 5 osób"],
      en: ["No more collecting and merging spreadsheets from managers", "Leave balance updates itself after every request", "Schedule, tasks, and AI assistant in the same app", "Free plan for teams of up to 5 people"],
    },
    results: [
      { value: { pl: "1 klik", en: "1 click" }, label: { pl: "raport miesięczny w PDF lub Excelu zamiast godzin w arkuszach", en: "monthly report in PDF or Excel instead of hours in spreadsheets" } },
      { value: { pl: "2 min", en: "2 min" }, label: { pl: "od rejestracji do działającego zespołu", en: "from sign-up to a working team" } },
    ],
    quote: {
      text: {
        pl: "Polecam współpracę z panem Michałem, problemy i uwagi rozwiązywane są w błyskawicznym czasie, a sama platforma bardzo przejrzysta i prosta w obsłudze.",
        en: "Issues and feedback are resolved lightning fast, and the platform itself is very clear and easy to use.",
      },
      author: "Klaudia Pawłowska, Główna Księgowa, Halo Rental System",
    },
    technologies: [{ name: "Next.js" }, { name: "React" }, { name: "Node.js" }, { name: "MongoDB" }, { name: "OpenAI" }],
    images: [
      "/realizacje/planopia-home-2026-10-desktop.webp",
      "/realizacje/planopia-app-dashboard.webp",
      "/realizacje/planopia-app-schedule.webp",
      "/realizacje/planopia-app-dashboard-stats.webp",
      "/realizacje/planopia-app-leave-approve.webp",
      "/realizacje/planopia-app-board.webp",
      "/realizacje/planopia-home-2026-10-mobile.webp",
    ],
    inDevelopment: false,
    projectType: { pl: "Aplikacja SaaS", en: "SaaS app" },
  },
  {
    id: "agmar-paliwa",
    name: { pl: "AGMAR Paliwa", en: "AGMAR Paliwa" },
    url: "https://agmar-paliwa.pl",
    shortDescription: {
      pl: "Klient od razu po wejściu widzi dzisiejszą cenę paliwa i numer telefonu, a właściciel zmienia cenę sam z telefonu — bez czekania na informatyka.",
      en: "Customers see today's fuel price and the phone number as soon as they land, and the owner updates the price from his phone — without waiting for a developer.",
    },
    longDescription: {
      pl: "Problem: cena paliwa zmienia się często, a klient chce ją znać, zanim zadzwoni. Zmiana ceny na zwykłej stronie wymaga kontaktu z wykonawcą. Rozwiązanie: prosty panel, w którym właściciel wpisuje cenę dnia, i strona, która pokazuje ją razem z telefonem na pierwszym ekranie.",
      en: "Problem: fuel prices change often, and customers want to know the price before they call. Changing it on a regular website means contacting the developer. Solution: a simple panel where the owner enters the daily price, and a site that shows it with the phone number on the first screen.",
    },
    highlights: {
      pl: ["Cena dnia zmieniana samodzielnie, bez programisty", "Cena i telefon na pierwszym ekranie, także na telefonie", "Zapytania z formularza prosto na e-mail", "Oferta dla klientów ze Śląska i Małopolski"],
      en: ["Daily price updated without a developer", "Price and phone number on the first screen, on mobile too", "Form enquiries straight to email", "Offer for customers in Silesia and Lesser Poland"],
    },
    results: [
      { value: { pl: "< 1 min", en: "< 1 min" }, label: { pl: "zmiana ceny dnia z telefonu, bez programisty", en: "to update the daily price from a phone, no developer" } },
      { value: { pl: "1. ekran", en: "1st screen" }, label: { pl: "cena i numer telefonu widoczne od razu po wejściu", en: "price and phone number visible right away" } },
    ],
    technologies: [{ name: "Next.js" }, { name: "React" }, { name: "Node.js" }, { name: "MongoDB" }, { name: "JWT" }],
    images: [
      "/realizacje/agmar-home-desktop.webp",
      "/realizacje/agmar-firma-desktop.webp",
      "/realizacje/agmar-oferta-desktop.webp",
      "/realizacje/agmar-home-mobile.webp",
    ],
    inDevelopment: false,
    projectType: { pl: "Strona z panelem", en: "Website with a panel" },
  },
  {
    id: "sweetsteviam",
    name: { pl: "Sweet Steviam", en: "Sweet Steviam" },
    url: "https://sweetsteviam.com",
    shortDescription: {
      pl: "Kupcy z firm spożywczych w Polsce i UE sami znajdują specyfikacje słodzików i od razu wysyłają zapytanie ofertowe — po polsku albo angielsku.",
      en: "Buyers from food companies in Poland and the EU find sweetener specifications themselves and send a quote request straight away — in Polish or English.",
    },
    longDescription: {
      pl: "Problem: kupiec z działu rozwoju produktu potrzebuje danych technicznych, zanim w ogóle zapyta o cenę. Rozwiązanie: katalog z danymi technicznymi każdej grupy produktów, wersja angielska dla klientów z UE i bardzo szybka strona, która prowadzi prosto do zapytania.",
      en: "Problem: a product development buyer needs technical data before even asking for a price. Solution: a catalogue with technical data for every product group, an English version for EU customers, and a very fast site that leads straight to an enquiry.",
    },
    highlights: {
      pl: ["Dane techniczne dostępne bez pisania maila", "Wersje PL i EN dla klientów z całej UE", "Formularz zapytań z ochroną przed spamem", "100/100 wydajności w Google PageSpeed na telefonie"],
      en: ["Technical data available without emailing", "Polish and English versions for EU customers", "Enquiry form with spam protection", "100/100 performance in Google PageSpeed on mobile"],
    },
    results: [
      { value: { pl: "13", en: "13" }, label: { pl: "grup produktów z danymi technicznymi online", en: "product groups with technical data online" } },
      { value: { pl: "100/100", en: "100/100" }, label: { pl: "wydajności w Google PageSpeed na telefonie", en: "performance in Google PageSpeed on mobile" } },
    ],
    technologies: [{ name: "HTML" }, { name: "CSS" }, { name: "PHP" }],
    images: [
      "/realizacje/sweetsteviam-home-desktop.webp",
      "/realizacje/sweetsteviam-products-desktop.webp",
      "/realizacje/sweetsteviam-home-mobile.webp",
      "/sweetsteviam-page-speed.webp",
    ],
    inDevelopment: false,
    projectType: { pl: "Strona B2B", en: "B2B website" },
  },
  {
    id: "czatsportowy",
    name: { pl: "Czat Sportowy", en: "Sports Chat" },
    url: "https://czatsportowy.pl",
    shortDescription: {
      pl: "Kibice dostają analizy meczów wyjaśnione prostym językiem i odpowiedzi asystenta AI w kilka sekund — po polsku i angielsku.",
      en: "Fans get match analysis explained in plain language and answers from an AI assistant within seconds — in Polish and English.",
    },
    longDescription: {
      pl: "Problem: statystyki meczów są rozproszone i trudne do zrozumienia dla zwykłego kibica. Rozwiązanie: model liczy dane z tysięcy meczów, a AI tłumaczy wynik po ludzku i odpowiada na pytania jak rozmówca, który zna każdy mecz.",
      en: "Problem: match statistics are scattered and hard for an ordinary fan to understand. Solution: a model processes data from thousands of matches, and AI explains the result in plain words and answers questions like someone who knows every match.",
    },
    highlights: {
      pl: ["Asystent AI, który zna dzisiejsze mecze i wiadomości", "Analizy wyjaśnione prostym językiem", "Czat na żywo i poranny raport na e-mail", "Konta, plany i wersje PL/EN"],
      en: ["An AI assistant that knows today's matches and news", "Analysis explained in plain language", "Live chat and a morning email report", "Accounts, plans, and PL/EN versions"],
    },
    results: [
      { value: { pl: "sekundy", en: "seconds" }, label: { pl: "na odpowiedź asystenta AI o każdym meczu", en: "for the AI assistant to answer about any match" } },
      { value: { pl: "PL + EN", en: "PL + EN" }, label: { pl: "od startu, dla kibiców w Polsce i za granicą", en: "from launch, for fans in Poland and abroad" } },
    ],
    technologies: [{ name: "Next.js" }, { name: "Node.js" }, { name: "MongoDB" }, { name: "Redis" }, { name: "Socket.IO" }, { name: "OpenAI" }],
    images: [
      "/realizacje/czatsportowy-home-desktop.webp",
      "/realizacje/czatsportowy-features-desktop.webp",
      "/realizacje/czatsportowy-home-mobile.webp",
    ],
    inDevelopment: true,
    projectType: { pl: "Aplikacja z AI", en: "AI app" },
  },
];

// Simple Star Icon Component for reviews
function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

interface Review {
  authorName: string;
  authorUrl?: string;
  profilePhotoUrl?: string;
  rating: number;
  relativeTime: string;
  text: string;
  time: number;
}

/** Opinie klientów z aplikacji Planopia (publiczne na planopia.pl) — osobno od opinii z Google, bez logotypów. */
const planopiaReviews = [
  {
    text: {
      pl: "Polecam współpracę z panem Michałem, problemy i uwagi rozwiązywane są w błyskawicznym czasie, a sama platforma bardzo przejrzysta i prosta w obsłudze.",
      en: "I recommend working with Michał — issues and feedback are resolved lightning fast, and the platform itself is very clear and easy to use.",
    },
    author: "Klaudia Pawłowska",
    role: { pl: "Główna Księgowa", en: "Chief Accountant" },
    company: "Halo Rental System",
  },
  {
    text: {
      pl: "Używam aplikacji planopia.pl do ewidencji czasu pracy. Aplikacja przejrzysta, bardzo intuicyjna. Wszystko w jednym miejscu: lista obecności, godziny pracy, grafiki, a przede wszystkim urlopy – wnioski składane i zatwierdzane elektronicznie. Tablica zadań bardzo pomocna w planowaniu zadań, które widzi cały zespół lub wybrane osoby. Kontakt z obsługą programu bardzo dobry. Polecam.",
      en: "I use planopia.pl for time tracking. The app is clear and very intuitive. Everything in one place: attendance, working hours, schedules and, above all, leave — requests submitted and approved electronically. The task board is very helpful for planning work visible to the whole team or selected people. Support is very good. I recommend it.",
    },
    author: "Zespół Smart Cube",
    role: { pl: "Budownictwo mieszkaniowe", en: "Residential construction" },
    company: "Smart City Stargard",
  },
];

function PlanopiaReviews({ lang }: { lang: "pl" | "en" }) {
  const isPl = lang === "pl";
  return (
    <div className="mt-12">
      <div className="mb-6 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-display text-xl font-semibold text-white md:text-2xl">
          {isPl ? "Opinie klientów aplikacji Planopia" : "Reviews from Planopia customers"}
        </h3>
        <a href="https://planopia.pl" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 transition-colors hover:text-primary">
          {isPl ? "Opinie z planopia.pl" : "Reviews from planopia.pl"} ↗
        </a>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {planopiaReviews.map((review) => (
          <figure key={review.author} className="card flex min-w-0 flex-col">
            <svg className="h-7 w-7 text-primary" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M9.6 6C6.5 7.4 4.5 10.2 4.5 13.6V18h5.3v-5.3H7.2c.1-2 1.3-3.6 3.2-4.5L9.6 6Zm9 0c-3.1 1.4-5.1 4.2-5.1 7.6V18h5.3v-5.3h-2.6c.1-2 1.3-3.6 3.2-4.5L18.6 6Z" />
            </svg>
            <blockquote className="mt-4 flex-1 text-[0.98rem] leading-relaxed text-gray-200">{review.text[lang]}</blockquote>
            <figcaption className="mt-5 flex items-center gap-3 border-t border-white/[0.07] pt-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary" aria-hidden="true">
                {review.company.charAt(0)}
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold text-white">{review.author}</span>
                <span className="block text-xs text-gray-400">
                  {review.role[lang]}, {review.company}
                </span>
              </span>
              <span className="ml-auto shrink-0 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-[0.7rem] font-semibold text-primary">
                {isPl ? "Klient Planopii" : "Planopia customer"}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

// Compact Google Reviews Component for Realizations section
function GoogleReviewsInline({ lang }: { lang: "pl" | "en" }) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [overallRating, setOverallRating] = useState<number | null>(null);
  const [totalRatings, setTotalRatings] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // Pass language parameter to API
        const response = await fetch(`/api/google-reviews?lang=${lang}`);
        const data = await response.json();
        
        if (response.ok && data.reviews && data.reviews.length > 0) {
          setReviews(data.reviews.slice(0, 3)); // Show only 3 reviews
          setOverallRating(data.overallRating);
          setTotalRatings(data.totalRatings);
        } else {
          // No reviews or error - component will hide itself
          console.log("No reviews found or API error:", data);
        }
      } catch (err) {
        console.error("Error fetching reviews:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [lang]);

  // Reserve space for reviews section even when loading to prevent layout shift
  if (isLoading) {
    return (
      <div
        id="client-reviews"
        className="mt-20 scroll-mt-[100px] min-h-[400px]"
        style={{ scrollMarginTop: "100px" }}
        aria-label={lang === "pl" ? "Ładowanie opinii klientów" : "Loading client reviews"}
      />
    );
  }

  const content = {
    pl: {
      title: "Opinie klientów",
      viewOnGoogle: "Zobacz wszystkie opinie na Google",
      reviews: "opinii",
    },
    en: {
      title: "Client Reviews",
      viewOnGoogle: "View all reviews on Google",
      reviews: "reviews",
    },
  };

  const t = content[lang];

  return (
    <div
      id="client-reviews"
      className="mt-20 scroll-mt-[100px]"
      style={{ scrollMarginTop: "100px" }}
    >
      <h2 className="section-heading mb-4 !text-3xl md:!text-[2rem]">{t.title}</h2>

      {reviews.length > 0 && (
        <>
      {overallRating && totalRatings && (
        <div className="flex items-center justify-start gap-4 mb-8">
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.round(overallRating)
                      ? "text-amber-400"
                      : "text-gray-600"
                  }`}
                />
              ))}
            </div>
            <span className="text-lg md:text-xl font-bold">{overallRating.toFixed(1)}</span>
          </div>
          <span className="text-gray-400">
            ({totalRatings} {t.reviews})
          </span>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6 w-full">
        {reviews.map((review) => (
          <article
            key={review.time}
            className="card flex w-full min-w-0 flex-col"
          >
            <div className="flex items-start gap-3 mb-3">
              {review.profilePhotoUrl ? (
                <Image
                  src={review.profilePhotoUrl}
                  alt={review.authorName}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {review.authorName.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
              <div className="flex-1">
                <h3 className="font-semibold text-white text-sm mb-1">{review.authorName}</h3>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-3 h-3 ${
                        i < review.rating ? "text-amber-400" : "text-gray-600"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-[0.95rem] leading-relaxed text-gray-300">„{review.text}”</p>
            <span className="text-xs text-gray-500 mt-2 block">{review.relativeTime}</span>
          </article>
        ))}
      </div>

      <div className="text-center">
        <a
          href="https://www.google.com/maps/place/ML+Devworks/@50.0624834,19.9337611,17z/data=!3m1!4b1!4m6!3m5!1s0x425626465742ffe9:0xa1672c4591c41c29!8m2!3d50.06248!4d19.936336!16s%2Fg%2F11yrt8l9fl?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors text-sm"
        >
          {t.viewOnGoogle}
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
        </>
      )}

      <PlanopiaReviews lang={lang} />
    </div>
  );
}

export default function Realizations({ lang = "pl" }: RealizationsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  // Blokada przewijania strony i Escape, gdy okno szczegółów jest otwarte.
  const isModalOpen = selectedProject !== null;
  useEffect(() => {
    if (!isModalOpen) return;
    return lockScroll();
  }, [isModalOpen]);

  useEffect(() => {
    if (!isModalOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      if (selectedImage) setSelectedImage(null);
      else setSelectedProject(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isModalOpen, selectedImage]);

  const openImageModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section id="realizations" className="section-y relative scroll-mt-24" aria-labelledby="realizations-heading">
        <div className="container-site">
          <div className="mb-10 max-w-3xl md:mb-14">
            <p className="eyebrow mb-5">
              <span className="eyebrow-dot" aria-hidden="true" />
              {lang === "pl" ? "Realizacje" : "Work"}
            </p>
            <h2 id="realizations-heading" className="section-heading">
              {lang === "pl" ? "Projekty, które działają u klientów" : "Projects running for real clients"}
            </h2>
            <p className="section-lead mt-4">
              {lang === "pl"
                ? "Aplikacje, panele i strony, które sam zaprojektowałem, napisałem i utrzymuję. Kliknij kartę, żeby zobaczyć szczegóły i zrzuty ekranu."
                : "Apps, portals, and websites I designed, built, and maintain myself. Click a card to see details and screenshots."}
            </p>
          </div>


          <ul className="m-0 grid list-none grid-cols-1 gap-6 p-0 md:grid-cols-2" role="list">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                lang={lang}
                onOpenModal={() => openModal(project)}
                onOpenImageModal={openImageModal}
              />
            ))}
          </ul>

          {/* Google Reviews Section */}
          <GoogleReviewsInline lang={lang} />
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Overlay */}
            {/* Bez rozmycia tła: animowany blur całej strony powodował miganie przy otwieraniu. */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="fixed inset-0 z-50 bg-black/85"
              onClick={closeModal}
            />

            {/* Modal Content */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-label={selectedProject.name[lang]}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
                className="bg-background-light border border-white/10 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] w-full max-w-3xl flex flex-col pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
              {/* Modal Header */}
              <div className="flex items-start justify-between gap-4 border-b border-white/[0.08] p-5 md:p-6">
                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex flex-wrap gap-2">
                    <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                      {selectedProject.projectType[lang]}
                    </span>
                    {selectedProject.inDevelopment && (
                      <span className="rounded-full border border-white/15 px-2.5 py-0.5 text-xs font-semibold text-gray-300">
                        {lang === "pl" ? "W rozwoju" : "In development"}
                      </span>
                    )}
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-white md:text-3xl">{selectedProject.name[lang]}</h3>
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-light"
                  >
                    {selectedProject.url.replace("https://", "")}
                    <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors p-2"
                  aria-label={lang === "pl" ? "Zamknij" : "Close"}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Modal Body */}
              <div className="flex-1 overflow-y-auto p-5 md:p-6">
                {/* Zrzuty: najpierw obraz, potem krótki tekst */}
                {selectedProject.images && selectedProject.images.length > 0 && (
                  <div className="-mx-5 mb-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-2 md:-mx-6 md:px-6">
                    {selectedProject.images.map((image, index) => {
                      const isMobileShot = image.includes("-mobile");
                      return (
                        <button
                          type="button"
                          key={image}
                          onClick={() => openImageModal(image)}
                          className={`relative h-44 shrink-0 snap-start overflow-hidden rounded-xl border border-white/10 bg-background-lighter transition-colors hover:border-primary/50 md:h-52 ${
                            isMobileShot ? "aspect-[9/16]" : "aspect-[16/10]"
                          }`}
                          aria-label={`${selectedProject.name[lang]} - ${lang === "pl" ? "powiększ zrzut ekranu" : "enlarge screenshot"} ${index + 1}`}
                        >
                          <Image
                            src={image}
                            alt={`${selectedProject.name[lang]} - ${lang === "pl" ? "zrzut ekranu" : "screenshot"} ${index + 1}`}
                            fill
                            sizes={isMobileShot ? "150px" : "360px"}
                            loading="eager"
                            className="object-cover object-top opacity-0 transition-opacity duration-300"
                            onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
                          />
                        </button>
                      );
                    })}
                  </div>
                )}

                <ResultTiles project={selectedProject} lang={lang} className="mb-5" />

                <ProblemSolution text={selectedProject.longDescription[lang]} />

                <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                  {selectedProject.highlights[lang].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-200">
                      <svg className="mt-0.5 shrink-0 text-primary" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                {selectedProject.quote && (
                  <figure className="mt-6 rounded-xl border border-white/[0.08] bg-white/[0.025] p-4">
                    <blockquote className="text-[0.95rem] leading-relaxed text-gray-200">„{selectedProject.quote.text[lang]}”</blockquote>
                    <figcaption className="mt-2 text-xs text-gray-500">{selectedProject.quote.author}</figcaption>
                  </figure>
                )}

                <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-white/[0.08] pt-5">
                  <span className="mr-1 text-xs text-gray-500">{lang === "pl" ? "Technologie:" : "Technologies:"}</span>
                  {selectedProject.technologies.map((tech) => (
                    <span key={tech.name} className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-xs text-gray-400">
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>

      {/* Image Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="fixed inset-0 z-[60] bg-black/95"
              onClick={closeImageModal}
            />

            {/* Image Modal Content */}
            <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
                className="relative max-w-full max-h-full pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage}
                  alt={lang === "pl" ? "Zrzut ekranu projektu" : "Project screenshot"}
                  width={1200}
                  height={800}
                  sizes="100vw"
                  className="max-w-full max-h-[90vh] object-contain rounded-lg"
                />
                <button
                  onClick={closeImageModal}
                  className="absolute top-4 right-4 text-white hover:text-primary transition-colors p-2 bg-black/50 rounded-full"
                  aria-label={lang === "pl" ? "Zamknij" : "Close"}
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

/** Dwa efekty w liczbach — na karcie i w oknie szczegółów. */
function ResultTiles({ project, lang, className = "" }: { project: Project; lang: "pl" | "en"; className?: string }) {
  return (
    <dl className={`grid grid-cols-2 gap-3 ${className}`}>
      {project.results.map((result) => (
        <div key={result.label.pl} className="rounded-xl border border-primary/20 bg-primary/[0.05] p-3.5">
          <dt className="sr-only">{result.label[lang]}</dt>
          <dd>
            <span className="block font-display text-xl font-semibold text-primary">{result.value[lang]}</span>
            <span className="mt-1 block text-xs leading-snug text-gray-400">{result.label[lang]}</span>
          </dd>
        </div>
      ))}
    </dl>
  );
}

/** „Problem: … Rozwiązanie: …” jako dwa akapity z wyróżnionymi etykietami. */
function ProblemSolution({ text }: { text: string }) {
  const parts = text.split(/(Problem:|Rozwiązanie:|Solution:)/).filter((part) => part.trim());
  const pairs: [string, string][] = [];
  for (let i = 0; i < parts.length; i += 2) pairs.push([parts[i], (parts[i + 1] ?? "").trim()]);
  return (
    <div className="space-y-2.5 text-[0.98rem] leading-relaxed text-gray-300">
      {pairs.map(([label, body]) => (
        <p key={label}>
          <span className="font-semibold text-white">{label} </span>
          {body}
        </p>
      ))}
    </div>
  );
}

function ProjectCard({
  project,
  lang,
  onOpenModal,
  onOpenImageModal,
}: {
  project: Project;
  lang: "pl" | "en";
  onOpenModal: () => void;
  onOpenImageModal: (image: string) => void;
}) {
  const cover = project.images?.[0];

  return (
    <li className="group flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.025] transition duration-200 hover:-translate-y-0.5 hover:border-primary/35">
      {cover && (
        <button
          type="button"
          onClick={onOpenModal}
          className="relative block aspect-[16/9] w-full overflow-hidden border-b border-white/[0.06] bg-background-lighter"
          aria-label={lang === "pl" ? `Szczegóły projektu ${project.name[lang]}` : `Project details: ${project.name[lang]}`}
        >
          <Image
            src={cover}
            alt={`${project.name[lang]} - ${lang === "pl" ? "zrzut ekranu" : "screenshot"}`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <span className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" aria-hidden="true" />
          <span className="absolute left-4 top-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-white/15 bg-background/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
              {project.projectType[lang]}
            </span>
            {project.inDevelopment && (
              <span className="rounded-full border border-primary/30 bg-background/80 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
                {lang === "pl" ? "W rozwoju" : "In development"}
              </span>
            )}
          </span>
        </button>
      )}

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-1">
          <h3 className="font-sans text-xl font-semibold text-white">{project.name[lang]}</h3>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-gray-400 transition-colors hover:text-primary"
          >
            {project.url.replace("https://", "")}
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        <p className="mt-3 text-[0.95rem] leading-relaxed text-gray-300">{project.shortDescription[lang]}</p>

        <ResultTiles project={project} lang={lang} className="mt-5" />

        <div className="mt-auto flex items-center gap-3 pt-6">
          <button type="button" onClick={onOpenModal} className="btn-link">
            {lang === "pl" ? "Szczegóły i zrzuty ekranu" : "Details and screenshots"}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
          {project.images && project.images.length > 1 && (
            <div className="ml-auto flex -space-x-2">
              {project.images.slice(1, 4).map((image, index) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => onOpenImageModal(image)}
                  className="relative h-9 w-9 overflow-hidden rounded-lg border-2 border-background transition-transform hover:z-10 hover:scale-110"
                  aria-label={`${project.name[lang]} - ${lang === "pl" ? "zrzut ekranu" : "screenshot"} ${index + 2}`}
                >
                  <Image src={image} alt="" fill sizes="36px" className="object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </li>
  );
}
