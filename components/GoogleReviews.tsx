"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Simple Star Icon Component
function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

interface Review {
  authorName: string;
  authorUrl?: string;
  profilePhotoUrl?: string;
  rating: number;
  relativeTime: string;
  text: string;
  time: number;
}

interface GoogleReviewsProps {
  lang?: "pl" | "en";
  googleMapsUrl?: string;
}

export default function GoogleReviews({ lang = "pl", googleMapsUrl }: GoogleReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [overallRating, setOverallRating] = useState<number | null>(null);
  const [totalRatings, setTotalRatings] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch("/api/google-reviews");
        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }
        const data = await response.json();
        setReviews(data.reviews || []);
        setOverallRating(data.overallRating);
        setTotalRatings(data.totalRatings);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews");
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const content = {
    pl: {
      title: "Opinie Klientów",
      subtitle: "Zobacz, co mówią o nas nasi klienci",
      loading: "Ładowanie opinii...",
      error: "Nie udało się załadować opinii",
      viewOnGoogle: "Zobacz na Google",
      rating: "Średnia ocena",
      reviews: "opinii",
    },
    en: {
      title: "Client Reviews",
      subtitle: "See what our clients say about us",
      loading: "Loading reviews...",
      error: "Failed to load reviews",
      viewOnGoogle: "View on Google",
      rating: "Average rating",
      reviews: "reviews",
    },
  };

  const t = content[lang];

  if (isLoading) {
    return (
      <section id="reviews" className="py-20 px-4 relative scroll-mt-[20px]" ref={sectionRef}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-gray-400">{t.loading}</p>
          </div>
        </div>
      </section>
    );
  }

  if (error || reviews.length === 0) {
    return null; // Hide section if no reviews
  }

  return (
    <section id="reviews" className="py-20 px-4 relative scroll-mt-[20px]" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.title}</h2>
          <p className="text-xl text-gray-400 mb-6">{t.subtitle}</p>
          
          {overallRating && totalRatings && (
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-6 h-6 ${
                        i < Math.round(overallRating)
                          ? "text-yellow-400"
                          : "text-gray-600"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-2xl font-bold">{overallRating.toFixed(1)}</span>
              </div>
              <span className="text-gray-400">
                ({totalRatings} {t.reviews})
              </span>
            </div>
          )}
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={review.time} review={review} index={index} lang={lang} />
          ))}
        </div>

        {reviews.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-8"
          >
            <a
              href={googleMapsUrl || "https://www.google.com/maps"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-light transition-colors"
            >
              {t.viewOnGoogle}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function ReviewCard({
  review,
  index,
  lang,
}: {
  review: Review;
  index: number;
  lang: "pl" | "en";
}) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="bg-background-lighter border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-colors flex-1 min-w-[280px] max-w-[380px]"
    >
      <div className="flex items-start gap-4 mb-4">
        {review.profilePhotoUrl ? (
          <img
            src={review.profilePhotoUrl}
            alt={review.authorName}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
            <span className="text-primary font-semibold">
              {review.authorName.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
        <div className="flex-1">
          <h3 className="font-semibold text-white mb-1">{review.authorName}</h3>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`w-4 h-4 ${
                    i < review.rating ? "text-yellow-400" : "text-gray-600"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-400">{review.relativeTime}</span>
          </div>
        </div>
      </div>
      <p className="text-gray-300 leading-relaxed">{review.text}</p>
      {review.authorUrl && (
        <a
          href={review.authorUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary-light text-sm mt-4 inline-block transition-colors"
        >
          {lang === "pl" ? "Zobacz profil" : "View profile"}
        </a>
      )}
    </motion.article>
  );
}

