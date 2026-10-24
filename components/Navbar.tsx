"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { getAlternateLangPath } from "@/lib/i18n-routes";
import { HOLD_NAV_EVENT } from "@/lib/nav-scroll";
import { ArrowRightIcon } from "@/components/ui/icons";

interface NavbarProps {
  lang?: "pl" | "en";
}

const SECTION_IDS = ["realizations", "pricing", "client-reviews", "contact"] as const;

function getActiveNavItem(pathname: string | null): string {
  if (!pathname) return "";

  if (pathname === "/blog" || pathname === "/en/blog" || pathname.startsWith("/blog/") || pathname.startsWith("/en/blog/")) {
    return "blog";
  }

  if (pathname === "/uslugi" || pathname === "/en/services" || pathname.startsWith("/uslugi/") || pathname.startsWith("/en/services/")) {
    return "services";
  }

  if (pathname === "/kontakt" || pathname === "/en/contact") {
    return "contact-page";
  }

  return "";
}

export default function Navbar({ lang = "pl" }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const holdNav = useRef(false);
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
      let closest = -Infinity;

      // Aktywna jest sekcja, której początek jest najbliżej nad linią menu (niezależnie od kolejności na liście).
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= offset && top > closest) {
          closest = top;
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
    let releaseTimer: number | undefined;

    const release = () => {
      holdNav.current = false;
      window.clearTimeout(releaseTimer);
    };

    // Przewijanie po kliknięciu linku: menu zostaje widoczne, aż przewijanie się skończy
    // (chwila bez zdarzeń scroll) albo użytkownik sam zacznie przewijać.
    const hold = () => {
      holdNav.current = true;
      setIsVisible(true);
      window.clearTimeout(releaseTimer);
      releaseTimer = window.setTimeout(release, 600);
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY >= 10);

      if (holdNav.current) {
        window.clearTimeout(releaseTimer);
        releaseTimer = window.setTimeout(release, 200);
      } else if (currentScrollY < 10 || currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
        setIsVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    // Każdy link do sekcji na tej samej stronie (menu, przyciski, stopka).
    const handleClick = (e: MouseEvent) => {
      const link = e.target instanceof Element ? e.target.closest("a[href*='#']") : null;
      if (link instanceof HTMLAnchorElement && link.hash && link.pathname === window.location.pathname) hold();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener(HOLD_NAV_EVENT, hold);
    document.addEventListener("click", handleClick, true);
    for (const type of ["wheel", "touchstart", "keydown"]) window.addEventListener(type, release, { passive: true });
    return () => {
      window.clearTimeout(releaseTimer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener(HOLD_NAV_EVENT, hold);
      document.removeEventListener("click", handleClick, true);
      for (const type of ["wheel", "touchstart", "keydown"]) window.removeEventListener(type, release);
    };
  }, []);

  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    const homePath = isEnglish ? "/en" : "/";

    if (isHomePage) {
      const element = document.querySelector(href);
      if (element) {
        const offset = 88;
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
      { href: "#pricing", label: "Ceny", key: "#pricing" },
      { href: "#realizations", label: "Realizacje", key: "#realizations" },
      { href: "#client-reviews", label: "Opinie", key: "#client-reviews" },
      { href: "/blog", label: "Blog", key: "blog" },
      { href: "/kontakt", label: "Kontakt", key: "contact-page" },
    ],
    en: [
      { href: "/en/services", label: "Services", key: "services" },
      { href: "#pricing", label: "Pricing", key: "#pricing" },
      { href: "#realizations", label: "Work", key: "#realizations" },
      { href: "#client-reviews", label: "Reviews", key: "#client-reviews" },
      { href: "/en/blog", label: "Blog", key: "blog" },
      { href: "/en/contact", label: "Contact", key: "contact-page" },
    ],
  };

  const items = navItems[lang];
  const contactHref = isEnglish ? "/en/contact" : "/kontakt";
  const ctaLabel = isEnglish ? "Free prototype" : "Bezpłatny prototyp";
  const solid = isScrolled || isMobileMenuOpen;

  const resolveHref = (href: string) => {
    if (href.startsWith("/")) return href;
    const homePath = isEnglish ? "/en" : "/";
    return isHomePage ? href : `${homePath}${href}`;
  };

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-[transform,background-color,border-color] duration-200 ease-out ${isVisible || isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"} ${
          solid ? "border-b border-white/[0.07] bg-background/80 backdrop-blur-xl" : "border-b border-transparent bg-transparent"
        }`}
        role="navigation"
        aria-label={lang === "pl" ? "Główne menu nawigacyjne" : "Main navigation menu"}
      >
        <div className="container-site">
          <div className="flex h-16 items-center justify-between md:h-[72px]">
            <Link
              href={isEnglish ? "/en" : "/"}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative z-50 flex shrink-0 items-center"
              aria-label={lang === "pl" ? "Przejdź do strony głównej" : "Go to homepage"}
            >
              <Image
                src="/primary-on-transparent-logo.webp"
                alt="ML DevWorks Logo"
                width={190}
                height={53}
                priority
                className="h-auto w-[178px] transition-opacity hover:opacity-80 sm:w-[184px] lg:w-[180px]"
              />
            </Link>

            <div className="hidden items-center gap-1 lg:flex">
              {items.map((item) => {
                const isPageLink = item.href.startsWith("/");
                const isActive = activeSection === item.key || (item.key === "contact-page" && activeSection === "#contact");
                const className = `relative rounded-lg px-3.5 py-2 text-[0.92rem] font-medium transition-colors ${
                  isActive ? "text-white" : "text-gray-400 hover:text-white"
                }`;
                const indicator = isActive ? (
                  <span className="absolute inset-x-3.5 -bottom-[1px] h-px bg-gradient-to-r from-primary/0 via-primary to-primary/0" aria-hidden="true" />
                ) : null;

                if (isPageLink) {
                  return (
                    <Link key={item.href} href={item.href} className={className} aria-current={isActive ? "page" : undefined}>
                      {item.label}
                      {indicator}
                    </Link>
                  );
                }

                return (
                  <a
                    key={item.href}
                    href={resolveHref(item.href)}
                    onClick={(e) => handleLinkClick(e, item.href)}
                    className={className}
                    aria-current={isActive ? "true" : undefined}
                  >
                    {item.label}
                    {indicator}
                  </a>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <Link
                href={getAlternateLangPath(pathname || "/")}
                className="hidden rounded-lg px-3 py-2 text-xs font-semibold tracking-wider text-gray-400 transition-colors hover:text-white sm:inline-flex"
                aria-label={isEnglish ? "Przełącz na język polski" : "Switch to English"}
                hrefLang={isEnglish ? "pl" : "en"}
              >
                {isEnglish ? "PL" : "EN"}
              </Link>
              <Link href={contactHref} className="btn-primary hidden !px-4 !py-2.5 !text-sm sm:inline-flex">
                {ctaLabel}
                <ArrowRightIcon size={16} />
              </Link>

              <button
                className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] lg:hidden"
                onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
                aria-label={isMobileMenuOpen ? (lang === "pl" ? "Zamknij menu" : "Close menu") : lang === "pl" ? "Otwórz menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
              >
                <span className="relative block h-3.5 w-5" aria-hidden="true">
                  <span className={`absolute left-0 block h-0.5 w-5 rounded-full bg-white transition-all duration-200 ease-out ${isMobileMenuOpen ? "top-1.5 rotate-45" : "top-0"}`} />
                  <span className={`absolute left-0 top-1.5 block h-0.5 w-5 rounded-full bg-white transition-opacity duration-150 ${isMobileMenuOpen ? "opacity-0" : "opacity-100"}`} />
                  <span className={`absolute left-0 block h-0.5 w-5 rounded-full bg-white transition-all duration-200 ease-out ${isMobileMenuOpen ? "top-1.5 -rotate-45" : "top-3"}`} />
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Menu na telefonie: zawsze w DOM, otwierane samym CSS (opacity + przesunięcie) — reaguje od razu i płynnie znika. */}
      <div
        className={`fixed inset-0 z-40 bg-background lg:hidden transition-[opacity,visibility] duration-200 ease-out motion-reduce:transition-none ${
          isMobileMenuOpen ? "visible opacity-100" : "pointer-events-none invisible opacity-0"
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div
          className={`container-site flex h-full flex-col pb-8 pt-20 transition-transform duration-200 ease-out motion-reduce:transition-none ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-2"
          }`}
        >
          <ul className="flex flex-col">
            {items.map((item) => {
              const isPageLink = item.href.startsWith("/");
              const isActive = activeSection === item.key || (item.key === "contact-page" && activeSection === "#contact");
              const className = `flex items-center justify-between border-b border-white/[0.07] py-4 font-display text-2xl font-medium transition-colors ${
                isActive ? "text-primary" : "text-white active:text-primary"
              }`;
              return (
                <li key={item.href}>
                  {isPageLink ? (
                    <Link href={item.href} onClick={() => setIsMobileMenuOpen(false)} className={className} aria-current={isActive ? "page" : undefined} tabIndex={isMobileMenuOpen ? 0 : -1}>
                      {item.label}
                      <ArrowRightIcon size={20} className="text-gray-600" />
                    </Link>
                  ) : (
                    <a href={resolveHref(item.href)} onClick={(e) => handleLinkClick(e, item.href)} className={className} tabIndex={isMobileMenuOpen ? 0 : -1}>
                      {item.label}
                      <ArrowRightIcon size={20} className="text-gray-600" />
                    </a>
                  )}
                </li>
              );
            })}
          </ul>

          <div className="mt-auto flex flex-col gap-3">
            <Link href={contactHref} onClick={() => setIsMobileMenuOpen(false)} className="btn-primary w-full" tabIndex={isMobileMenuOpen ? 0 : -1}>
              {ctaLabel}
              <ArrowRightIcon size={18} />
            </Link>
            <div className="flex items-center justify-between text-sm text-gray-400">
              <a href="tel:+48516598792" className="hover:text-white" tabIndex={isMobileMenuOpen ? 0 : -1}>
                +48 516 598 792
              </a>
              <Link
                href={getAlternateLangPath(pathname || "/")}
                hrefLang={isEnglish ? "pl" : "en"}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-lg border border-white/10 px-3 py-1.5 font-semibold text-gray-300 hover:text-white"
                aria-label={isEnglish ? "Przełącz na język polski" : "Switch to English"}
                tabIndex={isMobileMenuOpen ? 0 : -1}
              >
                {isEnglish ? "Polski" : "English"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
