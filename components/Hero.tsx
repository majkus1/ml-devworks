"use client";

import { useEffect, useState, useRef } from "react";

interface HeroProps {
  lang?: "pl" | "en";
}

export default function Hero({ lang = "pl" }: HeroProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 768px)");
    if (!desktopQuery.matches) return;

    const loadVideo = () => setShouldLoadVideo(true);
    const browserWindow = window as unknown as {
      requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
      cancelIdleCallback?: (handle: number) => void;
    };
    let cancelVideoLoad: () => void;

    if (typeof browserWindow.requestIdleCallback === "function") {
      const idleCallback = browserWindow.requestIdleCallback(loadVideo, { timeout: 2000 });
      cancelVideoLoad = () => browserWindow.cancelIdleCallback?.(idleCallback);
    } else {
      const timeoutId = window.setTimeout(loadVideo, 1200);
      cancelVideoLoad = () => window.clearTimeout(timeoutId);
    }

    return () => {
      cancelVideoLoad();
    };
  }, []);

  // Spróbuj odpalić autoplay po załadowaniu danych
  useEffect(() => {
    if (!shouldLoadVideo) return;
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
  }, [shouldLoadVideo]);

  const content = {
    pl: {
      title: "ML Devworks",
      headline: "Strony internetowe, aplikacje i automatyzacje AI dla firm",
      subtitle: "Quality by Us. Speed by AI.",
      description: (
        <>
          Projektujemy i wdrażamy rozwiązania, które realnie wspierają sprzedaż i obsługę klientów — od prostych wdrożeń po zaawansowane systemy w chmurze.
        </>
      ),
      cta: "Rozpocznij Projekt",
    },
    en: {
      title: "ML Devworks",
      headline: "Websites, applications and AI automation for companies",
      subtitle: "Quality by Us. Speed by AI.",
      description: (
        <>
          We design and deploy solutions that genuinely support sales and customer service — from simple launches to advanced cloud systems.
        </>
      ),
      cta: "Start Your Project",
    },
  };

  const t = content[lang];

  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" role="banner">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-background via-background-light to-background-lighter" aria-hidden="true">
        {shouldLoadVideo && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            // @ts-ignore – dodajemy atrybut dla iOS
            webkit-playsinline="true"
            preload="none"
            poster="/ogimg.png"
            disablePictureInPicture
            disableRemotePlayback
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              filter: "brightness(0.5)",
              opacity: isPlaying ? 1 : 0.55,
            }}
          >
            <source src="/iStock-1262670453-compress-moreandmore.mp4" type="video/mp4" />
          </video>
        )}
        {/* Green overlay */}
        <div className="absolute inset-0 bg-primary/25 mix-blend-screen" />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background/50" />
      </div>
      
      {/* Animated grid pattern overlay */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 255, 136, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 255, 136, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="mb-4">
          <span className="block text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-white to-primary bg-clip-text text-transparent">
            {t.title}
          </span>
          <span className="block mt-3 text-xl md:text-2xl font-semibold text-gray-200">
            {t.headline}
          </span>
        </h1>

        <p
          className="text-2xl md:text-3xl text-primary mb-6 font-semibold"
          role="doc-subtitle"
        >
          {t.subtitle}
        </p>

        <p
          className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
        >
          {t.description}
        </p>

        <nav
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
        </nav>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-primary mb-2 text-sm sr-only">{lang === "pl" ? "Przewiń w dół" : "Scroll down"}</span>
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center" aria-hidden="true">
            <div className="w-1 h-3 bg-primary rounded-full mt-2" />
          </div>
        </div>
      </div>
    </header>
  );
}

