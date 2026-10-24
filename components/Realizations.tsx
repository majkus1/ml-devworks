"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
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
  technologies: TechIcon[];
  images?: string[];
  inDevelopment: boolean;
  projectType: {
    pl: string;
    en: string;
  };
}

const projects: Project[] = [
  {
    id: "planopia",
    name: { pl: "Planopia", en: "Planopia" },
    url: "https://planopia.pl",
    shortDescription: {
      pl: "Aplikacja SaaS do ewidencji czasu pracy, urlopów i grafików — używana przez firmy na co dzień.",
      en: "A SaaS app for time tracking, leave, and schedules — used by companies every day.",
    },
    longDescription: {
      pl: "Zastępuje arkusze z godzinami i papierowe wnioski urlopowe. Pracownicy logują czas i składają wnioski z telefonu, a przełożony zatwierdza wszystko w jednym miejscu.",
      en: "It replaces timesheets and paper leave requests. Employees log time and request leave from their phone, and managers approve everything in one place.",
    },
    highlights: {
      pl: ["Ewidencja czasu pracy z eksportem do Excela i PDF", "Wnioski urlopowe z akceptacją i powiadomieniami", "Grafik, tablica zadań i asystent AI", "Role: pracownik, przełożony, HR, administrator"],
      en: ["Time tracking with Excel and PDF export", "Leave requests with approvals and notifications", "Schedule, task board, and AI assistant", "Roles: employee, manager, HR, admin"],
    },
    technologies: [{ name: "Next.js" }, { name: "React" }, { name: "Node.js" }, { name: "MongoDB" }, { name: "OpenAI" }],
    images: [
      "/realizacje/planopia-home-desktop.webp",
      "/realizacje/planopia-app-dashboard.webp",
      "/realizacje/planopia-app-schedule.webp",
      "/realizacje/planopia-app-dashboard-stats.webp",
      "/realizacje/planopia-app-leave-approve.webp",
      "/realizacje/planopia-app-board.webp",
      "/realizacje/planopia-home-mobile.webp",
    ],
    inDevelopment: false,
    projectType: { pl: "Aplikacja SaaS", en: "SaaS app" },
  },
  {
    id: "agmar-paliwa",
    name: { pl: "AGMAR Paliwa", en: "AGMAR Paliwa" },
    url: "https://agmar-paliwa.pl",
    shortDescription: {
      pl: "Strona dostawcy paliwa z panelem, w którym właściciel sam zmienia cenę dnia.",
      en: "A fuel supplier's website with a panel where the owner updates the daily price himself.",
    },
    longDescription: {
      pl: "Dla klientów najważniejsza jest aktualna cena oleju napędowego. Właściciel zmienia ją w prostym panelu, a strona od razu pokazuje ją na górze strony głównej.",
      en: "For customers the key information is the current diesel price. The owner changes it in a simple panel and the website shows it at the top of the homepage right away.",
    },
    highlights: {
      pl: ["Panel administracyjny do zmiany cen", "Cena dnia widoczna od razu na stronie", "Formularz kontaktowy z wysyłką e-mail", "Szybka strona, wygodna na telefonie"],
      en: ["Admin panel for price updates", "Daily price shown instantly on the site", "Contact form with email delivery", "Fast, mobile-friendly website"],
    },
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
      pl: "Wielojęzyczna strona B2B hurtowni słodzików, która zbiera zapytania od producentów żywności z UE.",
      en: "A multilingual B2B website for a sweetener wholesaler that collects enquiries from EU food producers.",
    },
    longDescription: {
      pl: "Hurtownia sprzedaje stewię, erytrytol i ksylitol firmom z Polski i UE. Strona pokazuje katalog z danymi technicznymi i prowadzi prosto do zapytania ofertowego.",
      en: "The wholesaler sells stevia, erythritol, and xylitol to companies in Poland and the EU. The site presents a catalogue with technical data and leads straight to a quote request.",
    },
    highlights: {
      pl: ["Wersje językowe PL i EN", "Katalog produktów z danymi technicznymi", "Formularz zapytań z ochroną przed spamem", "Wysoki wynik w PageSpeed Insights"],
      en: ["Polish and English versions", "Product catalogue with technical data", "Enquiry form with spam protection", "High PageSpeed Insights score"],
    },
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
      pl: "Platforma z analizami meczów od AI, asystentem, który odpowiada na pytania, i czatem na żywo.",
      en: "A platform with AI match analysis, an assistant that answers questions, and live chat.",
    },
    longDescription: {
      pl: "Model liczy szanse na podstawie statystyk tysięcy meczów, a AI tłumaczy wynik prostym językiem. Użytkownicy rozmawiają na czacie w czasie rzeczywistym i dostają poranny raport.",
      en: "A model calculates probabilities from thousands of matches and AI explains the result in plain language. Users chat in real time and receive a morning report.",
    },
    highlights: {
      pl: ["Analizy i asystent oparte na AI", "Czat na żywo w czasie rzeczywistym", "Poranny raport AI na e-mail", "Konta użytkowników, plany i wersje PL/EN"],
      en: ["AI-powered analysis and assistant", "Real-time live chat", "Morning AI report by email", "User accounts, plans, and PL/EN versions"],
    },
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

  if (reviews.length === 0) {
    return null;
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
    </div>
  );
}

export default function Realizations({ lang = "pl" }: RealizationsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
              onClick={closeModal}
            />

            {/* Modal Content */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
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
                            className="object-cover object-top"
                          />
                        </button>
                      );
                    })}
                  </div>
                )}

                <p className="text-[0.98rem] leading-relaxed text-gray-300">{selectedProject.longDescription[lang]}</p>

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

                <div className="mt-6 flex flex-wrap gap-2 border-t border-white/[0.08] pt-5">
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
              className="fixed inset-0 bg-black/95 backdrop-blur-sm z-[60]"
              onClick={closeImageModal}
            />

            {/* Image Modal Content */}
            <div className="fixed inset-0 z-[70] flex items-center justify-center p-4 pointer-events-none">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
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

        <p className="mt-3 text-[0.95rem] leading-relaxed text-gray-400">{project.shortDescription[lang]}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 5).map((tech) => (
            <span key={tech.name} className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-xs text-gray-400">
              {tech.name}
            </span>
          ))}
          {project.technologies.length > 5 && (
            <span className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-xs text-gray-500">+{project.technologies.length - 5}</span>
          )}
        </div>

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
