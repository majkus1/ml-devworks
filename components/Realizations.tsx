"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
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
    id: "czatsportowy",
    name: {
      pl: "Czat Sportowy",
      en: "Sports Chat",
    },
    url: "https://czatsportowy.pl",
    shortDescription: {
      pl: "Platforma czatu sportowego z analizą meczów wspieraną przez AI. Czat na żywo, przewidywania AI, statystyki piłkarskie w czasie rzeczywistym.",
      en: "Live sports chat platform with AI-powered match analysis. Real-time chat, AI predictions, live football statistics.",
    },
    longDescription: {
      pl: "Platforma czatu sportowego z analizą meczów wspieraną przez AI. Oferuje czat na żywo podczas meczów i przed meczami, prywatną komunikację między użytkownikami oraz wielojęzyczne wsparcie (PL/EN). Integracja z AI zapewnia szczegółową analizę meczów i przewidywania. Aplikacja zawiera interaktywne widgety ze statystykami meczów, wyszukiwanie meczów oraz dynamiczny wybór daty.",
      en: "Live sports chat platform with AI-powered match analysis. Offers live chat during and before matches, private user-to-user communication, and multi-language support (PL/EN). AI integration provides detailed match analysis and predictions. The app includes interactive widgets with match statistics, match search, and dynamic date selection.",
    },
    technologies: [
      { name: "Next.js" },
      { name: "React" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "Redis" },
      { name: "Socket.IO" },
      { name: "Express" },
      { name: "Tailwind CSS" },
      { name: "OpenAI" },
    ],
    images: [
      "/czatsportowy.webp",
      "/czatsportowy1.webp",
      "/czatsportowy-mobile.webp",
      "/czatsportowy-mobile2.webp",
    ],
    inDevelopment: true,
    projectType: {
      pl: "Aplikacja internetowa",
      en: "Web Application",
    },
  },
  {
    id: "sweetsteviam",
    name: {
      pl: "Sweet Steviam",
      en: "Sweet Steviam",
    },
    url: "https://sweetsteviam.com",
    shortDescription: {
      pl: "Nowoczesna, zoptymalizowana pod SEO strona wizytówkowa dla hurtowni naturalnych słodzików działającej w Polsce i UE. Wielojęzyczna, z zaawansowaną ochroną antyspamową i optymalizacją wydajności.",
      en: "Modern, SEO-optimized business card website for a natural sweeteners wholesale company operating in Poland and the EU. Multilingual, with advanced anti-spam protection and performance optimization.",
    },
    longDescription: {
      pl: "Nowoczesna, zoptymalizowana pod SEO strona wizytówkowa dla hurtowni naturalnych słodzików działającej w Polsce i UE. Wielojęzyczna strona prezentuje hurtową ofertę naturalnych słodzików, w tym Stevia Rebaudiana Bertoni, Erythritol, Xylitol, Sucralose, Sorbitol i inne alternatywy cukru. Strona zawiera zoptymalizowany formularz kontaktowy z ochroną antyspamową oraz pełną responsywność dla wszystkich urządzeń.",
      en: "Modern, SEO-optimized business card website for a natural sweeteners wholesale company operating in Poland and the EU. Multilingual website showcases wholesale natural sweeteners including Stevia Rebaudiana Bertoni, Erythritol, Xylitol, Sucralose, Sorbitol, and other sugar alternatives. The site includes an optimized contact form with anti-spam protection and full responsiveness for all devices.",
    },
    technologies: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "PHP" },
    ],
    images: [
      "/sweetsteviam-desktop-main.webp",
      "/sweetsteviam-desktop-products.webp",
      "/sweetsteviam-mobile.webp",
      "/sweetsteviam-page-speed.webp",
    ],
    inDevelopment: false,
    projectType: {
      pl: "Strona internetowa",
      en: "Website",
    },
  },
  {
    id: "planopia",
    name: {
      pl: "Planopia",
      en: "Planopia",
    },
    url: "https://planopia.pl",
    shortDescription: {
      pl: "Kompleksowy system SaaS do zarządzania czasem pracy i urlopami dla przedsiębiorstw. Śledzenie czasu, zarządzanie urlopami, koordynacja zespołu z architekturą multi-tenant i kontrolą dostępu opartą na rolach.",
      en: "Comprehensive SaaS solution for enterprise time tracking, leave management, and team coordination with multi-tenant architecture and role-based access control.",
    },
    longDescription: {
      pl: "Kompleksowy system SaaS do zarządzania czasem pracy i urlopami dla przedsiębiorstw. System składa się z zoptymalizowanych pod SEO stron marketingowych z blogiem oraz aplikacji biznesowej do śledzenia czasu pracy i zarządzania urlopami. Funkcje obejmują codzienne logowanie czasu z nadgodzinami, widok kalendarza miesięcznego, eksport PDF raportów, system wniosków urlopowych z zatwierdzaniem, planowanie urlopów w kalendarzu zespołu oraz zarządzanie użytkownikami i działami. Pełna responsywność i wsparcie dla wszystkich urządzeń.",
      en: "Comprehensive SaaS solution for enterprise time tracking, leave management, and team coordination. The system consists of SEO-optimized marketing pages with blog and a business application for time tracking and leave management. Features include daily time logging with overtime, monthly calendar view, PDF export for reports, leave request system with approvals, team leave planning calendar, and user and department management. Fully responsive with support for all devices.",
    },
    technologies: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Node.js" },
      { name: "MongoDB" },
      { name: "JavaScript" },
    ],
    images: [
      "/planopia-dekstop.webp",
      "/planopia-app-desktop.webp",
      "/planopia-app-mobile.webp",
      "/planopia-app-mobile2.webp",
    ],
    inDevelopment: false,
    projectType: {
      pl: "Aplikacja internetowa",
      en: "Web Application",
    },
  },
];

export default function Realizations({ lang = "pl" }: RealizationsProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
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
      <section id="realizations" className="pt-20 px-4 relative scroll-mt-[20px]" aria-labelledby="realizations-heading">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            id="realizations-heading"
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            {lang === "pl" ? "Realizacje" : "Realizations"}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-400 text-center mb-8 max-w-2xl mx-auto"
          >
            {lang === "pl"
              ? "Zobacz nasze dotychczasowe projekty"
              : "See our completed projects"}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
            {projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-background-lighter border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-all duration-300 cursor-pointer group"
                onClick={() => openModal(project)}
                role="listitem"
              >
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {/* Project Type Badge */}
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary border border-primary/30">
                    {project.projectType[lang]}
                  </span>
                  {/* Development Status Badge */}
                  {project.inDevelopment && (
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary border border-primary/30">
                      {lang === "pl" ? "W rozwoju" : "In Development"}
                    </span>
                  )}
                </div>

                {/* Project Name */}
                <h3 className="text-2xl font-bold mb-3 text-primary group-hover:text-primary-light transition-colors">
                  {project.name[lang]}
                </h3>

                {/* Short Description */}
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {project.shortDescription[lang]}
                </p>

                {/* Link */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-primary hover:text-primary-light transition-colors text-sm font-medium inline-flex items-center gap-2 mb-4"
                >
                  {project.url.replace("https://", "")}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>

                {/* Screenshots - miniaturki */}
                {project.images && project.images.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4" onClick={(e) => e.stopPropagation()}>
                    {project.images.map((image, index) => (
                      <div
                        key={index}
                        className="relative rounded-lg overflow-hidden border border-primary/20 hover:border-primary/40 transition-all cursor-pointer hover:scale-105"
                        onClick={() => openImageModal(image)}
                      >
                        <img
                          src={image}
                          alt={`${project.name[lang]} - ${lang === "pl" ? "Zrzut ekranu" : "Screenshot"} ${index + 1}`}
                          className="w-16 h-16 md:w-20 md:h-20 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}

                {/* Technologies */}
                <div className="flex flex-wrap gap-3 mt-4">
                  {project.technologies.slice(0, 6).map((tech) => (
                    <div
                      key={tech.name}
                      className="flex items-center gap-1.5 px-2 py-1 bg-background rounded border border-primary/10"
                      title={tech.name}
                    >
                      {/* TODO: Dodaj ikonę technologii - ustaw src na ścieżkę do obrazka */}
                      {/* Przykład: <img src="/technologies/nextjs.svg" alt={tech.name} className="w-4 h-4" /> */}
                      {/* <img 
                        src="/technologies/nextjs.svg" 
                        alt={tech.name} 
                        className="w-4 h-4"
                      /> */}
                      <span className="text-xs text-gray-400">{tech.name}</span>
                    </div>
                  ))}
                  {project.technologies.length > 6 && (
                    <div className="px-2 py-1 bg-background rounded border border-primary/10 text-xs text-gray-400">
                      +{project.technologies.length - 6}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
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
                className="bg-background border border-primary/20 rounded-xl shadow-2xl overflow-hidden max-h-[90vh] w-full max-w-3xl flex flex-col pointer-events-auto"
                onClick={(e) => e.stopPropagation()}
              >
              {/* Modal Header */}
              <div className="p-6 border-b border-primary/20 flex items-start justify-between">
                <div className="flex-1">
                  {/* Badges - nad tytułem */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {/* Project Type Badge */}
                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary border border-primary/30">
                      {selectedProject.projectType[lang]}
                    </span>
                    {/* Development Status Badge */}
                    {selectedProject.inDevelopment && (
                      <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary border border-primary/30">
                        {lang === "pl" ? "W rozwoju" : "In Development"}
                      </span>
                    )}
                  </div>
                  <h3 className="text-3xl font-bold text-primary mb-2">{selectedProject.name[lang]}</h3>
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary-light transition-colors text-sm font-medium inline-flex items-center gap-2"
                  >
                    {selectedProject.url}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <div className="p-6 overflow-y-auto flex-1">
                {/* Long Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {selectedProject.longDescription[lang]}
                </p>

                {/* Project Images */}
                {selectedProject.images && selectedProject.images.length > 0 && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">
                      {lang === "pl" ? "Zrzuty ekranu" : "Screenshots"}
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.images.map((image, index) => (
                        <div
                          key={index}
                          className="relative rounded-lg overflow-hidden border border-primary/20 hover:border-primary/40 transition-colors cursor-pointer"
                          onClick={() => openImageModal(image)}
                        >
                          <img
                            src={image}
                            alt={`${selectedProject.name[lang]} - ${lang === "pl" ? "Zrzut ekranu" : "Screenshot"} ${index + 1}`}
                            className="w-24 h-24 md:w-32 md:h-32 object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Technologies */}
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    {lang === "pl" ? "Wykorzystane technologie" : "Technologies Used"}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.technologies.map((tech) => (
                      <div
                        key={tech.name}
                        className="flex items-center gap-2 px-3 py-2 bg-background-lighter rounded-lg border border-primary/10 hover:border-primary/30 transition-colors"
                        title={tech.name}
                      >
                        {/* TODO: Dodaj ikonę technologii - ustaw src na ścieżkę do obrazka */}
                        {/* Przykład: <img src="/technologies/nextjs.svg" alt={tech.name} className="w-5 h-5" /> */}
                        {/* <img 
                          src="/technologies/nextjs.svg" 
                          alt={tech.name} 
                          className="w-5 h-5"
                        /> */}
                        <span className="text-sm text-gray-300">{tech.name}</span>
                      </div>
                    ))}
                  </div>
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
                <img
                  src={selectedImage}
                  alt={lang === "pl" ? "Zrzut ekranu projektu" : "Project screenshot"}
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
