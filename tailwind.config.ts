import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Jasny motyw: grafit na bieli, jeden akcent (głęboka zieleń z logo). Bez drugiej barwy i bez neonów.
        ink: {
          DEFAULT: "#131715",
          soft: "#363c39",
        },
        muted: "#58605c",
        faint: "#8b928e",
        paper: "#ffffff",
        primary: {
          DEFAULT: "#0e7a4e",
          dark: "#0a6140",
          light: "#0a6140",
        },
        // Dawny drugi kolor „AI” — teraz ten sam akcent, żeby nie mieszać barw.
        accent: {
          DEFAULT: "#0e7a4e",
          soft: "#7fbf9f",
        },
        background: {
          DEFAULT: "#ffffff",
          light: "#f4f5f3",
          lighter: "#eceeeb",
        },
        surface: {
          DEFAULT: "rgba(19,23,21,0.03)",
          strong: "rgba(19,23,21,0.05)",
        },
        line: {
          DEFAULT: "rgba(19,23,21,0.10)",
          strong: "rgba(19,23,21,0.18)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        site: "76rem",
      },
      // Mniejsze zaokrąglenia: rzeczowy, „redakcyjny” charakter zamiast miękkich kafli.
      borderRadius: {
        lg: "0.4rem",
        xl: "0.55rem",
        "2xl": "0.75rem",
        "3xl": "0.9rem",
      },
      boxShadow: {
        glow: "none",
        card: "none",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in-out",
        "slide-up": "slideUp 0.6s ease-out",
        float: "float 6s ease-in-out infinite",
        "pulse-soft": "pulseSoft 2.4s ease-in-out infinite",
        flow: "flow 2.8s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.45" },
        },
        // Płynąca linia w karcie na górze strony: samo przesunięcie (transform), bez przemalowywania w każdej klatce.
        flow: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
