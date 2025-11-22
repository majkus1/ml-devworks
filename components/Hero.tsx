"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface HeroProps {
  lang?: "pl" | "en";
}

export default function Hero({ lang = "pl" }: HeroProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Spróbuj odpalić autoplay po załadowaniu danych
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updatePlayingState = () => {
      setIsPlaying(!video.paused && !video.ended);
    };

    const tryPlay = async () => {
      try {
        await video.play();
        updatePlayingState();
      } catch {
        // autoplay zablokowany - video będzie wyglądać jak statyczne tło
        updatePlayingState();
      }
    };

    // Sprawdzaj stan odtwarzania
    video.addEventListener("play", updatePlayingState);
    video.addEventListener("pause", updatePlayingState);
    video.addEventListener("ended", updatePlayingState);

    if (video.readyState >= 2) {
      // metadata już załadowane
      tryPlay();
    } else {
      video.addEventListener("loadeddata", tryPlay, { once: true });
    }

    return () => {
      video.removeEventListener("play", updatePlayingState);
      video.removeEventListener("pause", updatePlayingState);
      video.removeEventListener("ended", updatePlayingState);
    };
  }, []);

  const content = {
    pl: {
      title: "ML Devworks",
      subtitle: "Quality by Us. Speed by AI.",
      description: (
        <>
          Tworzymy profesjonalne rozwiązania cyfrowe dla Twojego biznesu.
          <br />
          Od prostych stron internetowych po zaawansowane aplikacje i wdrożenia w chmurze.
        </>
      ),
      cta: "Rozpocznij Projekt",
    },
    en: {
      title: "ML Devworks",
      subtitle: "Quality by Us. Speed by AI.",
      description: (
        <>
          We create professional digital solutions for your business.
          <br />
          From simple websites to advanced applications and cloud deployments.
        </>
      ),
      cta: "Start Your Project",
    },
  };

  const t = content[lang];

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" role="banner">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full" aria-hidden="true">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          // @ts-ignore – dodajemy atrybut dla iOS
          webkit-playsinline="true"
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          className="absolute inset-0 w-full h-full object-cover"
          style={{ 
            filter: "brightness(0.5)",
            opacity: isPlaying ? 1 : 0,
          }}
        >
          <source src="/iStock-1262670453-compress-more.mp4" type="video/mp4" />
        </video>
          {/* Green overlay */}
          <div className="absolute inset-0 bg-primary/30 mix-blend-screen" />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background/50" />
      </div>
      
      {/* Animated grid pattern overlay */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 136, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 136, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: "transform 0.1s ease-out",
          }}
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-white to-primary bg-clip-text text-transparent"
        >
          {t.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-2xl md:text-3xl text-primary mb-6 font-semibold"
          role="doc-subtitle"
        >
          {t.subtitle}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          {t.description}
        </motion.p>

        <motion.nav
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          aria-label={lang === "pl" ? "Nawigacja do sekcji kontaktowej" : "Navigation to contact section"}
        >
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-primary text-background font-semibold rounded-lg hover:bg-primary-dark transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(0,255,136,0.3)]"
            aria-label={lang === "pl" ? "Przejdź do formularza kontaktowego" : "Go to contact form"}
            aria-describedby="cta-description"
          >
            {t.cta}
          </a>
          <span id="cta-description" className="sr-only">
            {lang === "pl" ? "Kliknij, aby przejść do sekcji kontaktowej" : "Click to go to contact section"}
          </span>
        </motion.nav>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <span className="text-primary mb-2 text-sm sr-only">{lang === "pl" ? "Przewiń w dół" : "Scroll down"}</span>
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center" aria-hidden="true">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-primary rounded-full mt-2"
            />
          </div>
        </motion.div>
      </motion.div>
    </header>
  );
}

