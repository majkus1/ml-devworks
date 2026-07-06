interface GooglePlacesResponse {
  result?: {
    rating?: number;
    user_ratings_total?: number;
  };
  status: string;
}

interface GoogleReviewsSchemaProps {
  lang?: "pl" | "en";
}

export default async function GoogleReviewsSchema({ lang = "pl" }: GoogleReviewsSchemaProps) {
  const placeId = process.env.GOOGLE_PLACE_ID;
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!placeId || !apiKey) return null;

  const language = lang === "pl" ? "pl" : "en";
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=rating,user_ratings_total&language=${language}&key=${apiKey}`;

  try {
    const response = await fetch(url, { next: { revalidate: 86400 } });
    const data = (await response.json()) as GooglePlacesResponse;

    if (!response.ok || data.status !== "OK" || !data.result?.rating || !data.result.user_ratings_total) {
      return null;
    }

    const schema = {
      "@context": "https://schema.org",
      "@id": "https://ml-devworks.com/#localbusiness",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: data.result.rating,
        reviewCount: data.result.user_ratings_total,
        bestRating: 5,
      },
    };

    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
  } catch {
    return null;
  }
}
