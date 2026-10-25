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
        // Zieleń z logo: akcent marki, używany oszczędnie (przyciski, wyróżnienia, stany aktywne).
        primary: {
          DEFAULT: "#00ff88",
          dark: "#00d874",
          light: "#6dffb8",
        },
        // Druga barwa „AI”: tylko w gradientach i drobnych akcentach, nigdy jako kolor tekstu długich treści.
        accent: {
          DEFAULT: "#3ee7ff",
          soft: "#9af3ff",
        },
        // Tło: głęboki grafit z lekkim chłodnym odcieniem zamiast czystej czerni.
        background: {
          DEFAULT: "#07090c",
          light: "#0b0e12",
          lighter: "#12161b",
        },
        surface: {
          DEFAULT: "rgba(255,255,255,0.03)",
          strong: "rgba(255,255,255,0.05)",
        },
        line: {
          DEFAULT: "rgba(255,255,255,0.08)",
          strong: "rgba(255,255,255,0.14)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        site: "76rem",
      },
      boxShadow: {
        glow: "0 10px 40px -12px rgba(0, 255, 136, 0.55)",
        card: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 50px -30px rgba(0,0,0,0.8)",
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
