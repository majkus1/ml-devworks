"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const isEnglish = pathname?.startsWith("/en");

  return (
    <nav
      className="fixed top-6 right-6 z-50"
      aria-label={isEnglish ? "Przełącz na język polski" : "Switch to English"}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
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
    </nav>
  );
}

