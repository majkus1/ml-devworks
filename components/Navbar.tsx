"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarProps {
  lang?: "pl" | "en";
}

export default function Navbar({ lang = "pl" }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isEnglish = pathname?.startsWith("/en");

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

  // Close menu on scroll
  useEffect(() => {
    if (isMobileMenuOpen) {
      const handleScroll = () => setIsMobileMenuOpen(false);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isMobileMenuOpen]);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 20;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = {
    pl: [
      { href: "#services", label: "Usługi" },
      { href: "#realizations", label: "Realizacje" },
      { href: "#contact", label: "Kontakt" },
    ],
    en: [
      { href: "#services", label: "Services" },
      { href: "#realizations", label: "Realizations" },
      { href: "#contact", label: "Contact" },
    ],
  };

  const items = navItems[lang];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-background/95 backdrop-blur-md border-b border-primary/20 shadow-lg"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label={lang === "pl" ? "Główne menu nawigacyjne" : "Main navigation menu"}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0 z-50"
            >
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center"
                aria-label={lang === "pl" ? "Przejdź do strony głównej" : "Go to homepage"}
              >
                <img
                  src="/primary-on-transparent-logo.webp"
                  alt="ML Devworks Logo"
                  width={215}
                  
                  className="hover:opacity-80 transition-opacity"
                />
              </a>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {items.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-white hover:text-primary transition-colors font-medium relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </motion.a>
              ))}

              {/* Language Switcher */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: items.length * 0.1 }}
              >
                <Link
                  href={isEnglish ? "/" : "/en"}
                  className="px-4 py-2 bg-background-lighter border border-primary/30 rounded-lg hover:border-primary transition-colors text-sm font-medium"
                  aria-label={isEnglish ? "Przełącz na język polski" : "Switch to English"}
                  hrefLang={isEnglish ? "pl" : "en"}
                >
                  {isEnglish ? "PL" : "EN"}
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative z-50 flex flex-col items-center justify-center w-10 h-10 space-y-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background rounded"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={lang === "pl" ? "Otwórz menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? 45 : 0,
                  y: isMobileMenuOpen ? 8 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="w-6 h-0.5 bg-white block"
              />
              <motion.span
                animate={{
                  opacity: isMobileMenuOpen ? 0 : 1,
                }}
                transition={{ duration: 0.3 }}
                className="w-6 h-0.5 bg-white block"
              />
              <motion.span
                animate={{
                  rotate: isMobileMenuOpen ? -45 : 0,
                  y: isMobileMenuOpen ? -8 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="w-6 h-0.5 bg-white block"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-40 md:hidden">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0 bg-black/50"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ 
                type: "spring", 
                damping: 30, 
                stiffness: 300,
                mass: 0.8
              }}
              className="absolute top-20 right-0 bottom-0 bg-background shadow-2xl overflow-y-auto relative"
            >
              <div className="flex flex-col p-6 space-y-3">
                <AnimatePresence>
                  {items.map((item, index) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleLinkClick(e, item.href)}
                      initial={{ 
                        opacity: 0, 
                        x: 60,
                        scale: 0.95
                      }}
                      animate={{ 
                        opacity: 1, 
                        x: 0,
                        scale: 1
                      }}
                      exit={{
                        opacity: 0,
                        x: 30,
                        scale: 0.95,
                        transition: {
                          duration: 0.2,
                          delay: (items.length - index - 1) * 0.05
                        }
                      }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1,
                        ease: [0.25, 0.46, 0.45, 0.94]
                      }}
                      className="text-white hover:text-primary transition-all font-medium text-lg py-4 px-5 rounded-lg hover:bg-primary/20 border border-primary/30 hover:border-primary"
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </AnimatePresence>

                <motion.div
                  initial={{ 
                    opacity: 0, 
                    y: 20,
                    scale: 0.95
                  }}
                  animate={{ 
                    opacity: 1, 
                    y: 0,
                    scale: 1
                  }}
                  exit={{
                    opacity: 0,
                    y: 10,
                    scale: 0.95,
                    transition: {
                      duration: 0.2
                    }
                  }}
                  transition={{ 
                    duration: 0.5, 
                    delay: items.length * 0.1 + 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  className="pt-4 mt-4 border-t border-primary/30"
                >
                  <Link
                    href={isEnglish ? "/" : "/en"}
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
