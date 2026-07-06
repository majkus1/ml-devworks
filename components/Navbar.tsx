"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getAlternateLangPath } from "@/lib/i18n-routes";

interface NavbarProps {
  lang?: "pl" | "en";
}

const SECTION_IDS = ["services", "realizations", "client-reviews", "contact"] as const;

function getActiveNavItem(pathname: string | null): string {
  if (!pathname) return "";

  if (pathname === "/blog" || pathname === "/en/blog" || pathname.startsWith("/blog/") || pathname.startsWith("/en/blog/")) {
    return "blog";
  }

  if (pathname === "/uslugi" || pathname === "/en/services" || pathname.startsWith("/uslugi/") || pathname.startsWith("/en/services/")) {
    return "services";
  }

  return "";
}

export default function Navbar({ lang = "pl" }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();
  const isEnglish = pathname?.startsWith("/en");
  const isHomePage = pathname === "/" || pathname === "/en";

  useEffect(() => {
    if (!isHomePage) {
      setActiveSection(getActiveNavItem(pathname || ""));
      return;
    }

    const updateActiveSection = () => {
      const offset = 120;
      let current = "";

      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= offset) {
          current = `#${id}`;
        }
      }

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, [isHomePage, pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsScrolled(false);
        setIsVisible(true);
      } else {
        setIsScrolled(true);
        if (currentScrollY < lastScrollY) {
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleScroll = () => setIsMobileMenuOpen(false);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    const homePath = isEnglish ? "/en" : "/";

    if (isHomePage) {
      const element = document.querySelector(href);
      if (element) {
        const navbarHeight = 80;
        const offset = navbarHeight + 20;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    } else {
      (window as Window & { __pendingHash?: string }).__pendingHash = href;
      window.location.href = `${homePath}${href}`;
    }

    setIsMobileMenuOpen(false);
  };

  const navItems = {
    pl: [
      { href: "/uslugi", label: "Usługi", key: "services" },
      { href: "#realizations", label: "Realizacje", key: "#realizations" },
      { href: "#client-reviews", label: "Opinie", key: "#client-reviews" },
      { href: "#contact", label: "Kontakt", key: "#contact" },
      { href: "/blog", label: "Blog", key: "blog" },
    ],
    en: [
      { href: "/en/services", label: "Services", key: "services" },
      { href: "#realizations", label: "Realizations", key: "#realizations" },
      { href: "#client-reviews", label: "Reviews", key: "#client-reviews" },
      { href: "#contact", label: "Contact", key: "#contact" },
      { href: "/en/blog", label: "Blog", key: "blog" },
    ],
  };

  const items = navItems[lang];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${
          isScrolled || isMobileMenuOpen
            ? "bg-background/95 backdrop-blur-md border-b border-primary/20 shadow-lg"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label={lang === "pl" ? "Główne menu nawigacyjne" : "Main navigation menu"}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 z-50">
              <Link
                href={isEnglish ? "/en" : "/"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center"
                aria-label={lang === "pl" ? "Przejdź do strony głównej" : "Go to homepage"}
              >
                <Image
                  src="/primary-on-transparent-logo.webp"
                  alt="ML Devworks Logo"
                  width={215}
                  height={60}
                  priority
                  className="hover:opacity-80 transition-opacity"
                />
              </Link>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {items.map((item) => {
                const isPageLink = item.href.startsWith("/");
                const homePath = isEnglish ? "/en" : "/";
                const linkHref = isPageLink ? item.href : isHomePage ? item.href : `${homePath}${item.href}`;
                const itemKey = isPageLink ? item.key : item.href;
                const isActive = activeSection === itemKey;
                const linkClassName = `font-medium relative group block transition-colors ${
                  isActive ? "text-primary" : "text-white hover:text-primary"
                }`;

                if (isPageLink) {
                  return (
                    <Link
                      key={item.href}
                      href={linkHref}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={linkClassName}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {item.label}
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </Link>
                  );
                }

                return (
                  <a
                    key={item.href}
                    href={linkHref}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className={linkClassName}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </a>
                );
              })}

              <Link
                href={getAlternateLangPath(pathname || "/")}
                className="px-4 py-2 bg-background-lighter border border-primary/30 rounded-lg hover:border-primary transition-colors text-sm font-medium"
                aria-label={isEnglish ? "Przełącz na język polski" : "Switch to English"}
                hrefLang={isEnglish ? "pl" : "en"}
              >
                {isEnglish ? "PL" : "EN"}
              </Link>
            </div>

            <button
              className="md:hidden relative z-50 flex flex-col items-center justify-center w-10 h-10 space-y-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
              onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
              aria-label={lang === "pl" ? "Otwórz menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <span
                className={`w-6 h-0.5 bg-white block transition-transform duration-300 ${
                  isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-white block transition-opacity duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-white block transition-transform duration-300 ${
                  isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            <motion.button
              type="button"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label={lang === "pl" ? "Zamknij menu" : "Close menu"}
            />

            <motion.div
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute top-20 left-0 right-0 bg-background shadow-2xl border-b border-primary/20 max-h-[calc(100vh-5rem)] overflow-y-auto"
            >
              <div className="flex flex-col p-6 space-y-3">
                {items.map((item, index) => {
                  const isPageLink = item.href.startsWith("/");
                  const homePath = isEnglish ? "/en" : "/";
                  const linkHref = isPageLink ? item.href : isHomePage ? item.href : `${homePath}${item.href}`;
                  const itemKey = isPageLink ? item.key : item.href;
                  const isActive = activeSection === itemKey;
                  const mobileClassName = `block transition-colors duration-200 font-medium text-lg py-4 px-5 rounded-lg hover:bg-primary/20 border ${
                    isActive
                      ? "text-primary bg-primary/10 border-primary"
                      : "text-white hover:text-primary border-primary/30 hover:border-primary"
                  }`;
                  const motionProps = {
                    initial: { opacity: 0, x: 40 },
                    animate: { opacity: 1, x: 0 },
                    transition: { duration: 0.4, delay: 0.1 + index * 0.07, ease: [0.16, 1, 0.3, 1] as const },
                  };

                  if (isPageLink) {
                    return (
                      <motion.div key={item.href} {...motionProps}>
                        <Link
                          href={linkHref}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={mobileClassName}
                          aria-current={isActive ? "page" : undefined}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    );
                  }

                  return (
                    <motion.a
                      key={item.href}
                      href={linkHref}
                      onClick={(e) => handleLinkClick(e, item.href)}
                      className={mobileClassName}
                      aria-current={isActive ? "page" : undefined}
                      {...motionProps}
                    >
                      {item.label}
                    </motion.a>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 + items.length * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="pt-4 mt-4 border-t border-primary/30"
                >
                  <Link
                    href={getAlternateLangPath(pathname || "/")}
                    className="block w-full text-center px-4 py-3 bg-background-lighter border-2 border-primary/50 rounded-lg hover:border-primary hover:bg-primary/10 transition-colors text-sm font-medium text-white hover:text-primary"
                    aria-label={isEnglish ? "Przełącz na język polski" : "Switch to English"}
                    hrefLang={isEnglish ? "pl" : "en"}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {isEnglish ? "PL" : "EN"}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
