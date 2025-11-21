"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface FooterProps {
  lang?: "pl" | "en";
}

export default function Footer({ lang = "pl" }: FooterProps) {
  const currentYear = new Date().getFullYear();
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

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

  return (
    <footer className="relative border-t border-primary/20 py-12 px-4 overflow-hidden" role="contentinfo">
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
        <div className="absolute inset-0 bg-primary/20 mix-blend-screen" />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/30 to-background/50" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/primary-on-transparent-logo.png"
              alt="ML Devworks - Logo firmy"
              width={300}
              className="opacity-80"
            />
          </motion.div>

          <motion.address
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right not-italic"
          >
            <p className="text-primary font-semibold text-lg mb-2">
              ML Devworks
            </p>
            <p className="text-gray-400 text-sm mb-1" aria-label={lang === "pl" ? "Motto firmy" : "Company motto"}>
              Quality by Us. Speed by AI.
            </p>
            <p className="text-gray-500 text-xs">
              <small>
                © {currentYear} ML Devworks.{" "}
                {lang === "pl" ? "Wszelkie prawa zastrzeżone." : "All rights reserved."}
              </small>
            </p>
          </motion.address>
        </div>
      </div>
    </footer>
  );
}

