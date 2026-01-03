import { NextResponse } from "next/server";

// Cache reviews for 24 hours to minimize API calls
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
let cachedData: {
  [key: string]: {
    reviews: any[];
    overallRating: number | null;
    totalRatings: number | null;
    timestamp: number;
  };
} = {};

interface GoogleReview {
  author_name: string;
  author_url?: string;
  profile_photo_url?: string;
  rating: number;
  relative_time_description: string;
  text: string;
  time: number;
}

interface GooglePlacesResponse {
  result?: {
    reviews?: GoogleReview[];
    rating?: number;
    user_ratings_total?: number;
  };
  status: string;
  error_message?: string;
}

export async function GET(request: Request) {
  try {
    // Get language from query parameter or default to 'pl'
    const { searchParams } = new URL(request.url);
    const language = searchParams.get('lang') || 'pl';

    // Check cache first (per language)
    const cacheKey = language;
    if (cachedData[cacheKey] && Date.now() - cachedData[cacheKey].timestamp < CACHE_DURATION) {
      return NextResponse.json({
        reviews: cachedData[cacheKey].reviews,
        overallRating: cachedData[cacheKey].overallRating,
        totalRatings: cachedData[cacheKey].totalRatings,
      });
    }

    const placeId = process.env.GOOGLE_PLACE_ID;
    const apiKey = process.env.GOOGLE_PLACES_API_KEY;

    if (!placeId || !apiKey) {
      // Return empty reviews instead of error - component will hide itself
      return NextResponse.json({
        reviews: [],
        overallRating: null,
        totalRatings: null,
      });
    }

    // Google Places API - Details endpoint with language parameter
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&language=${language}&key=${apiKey}`;

    const response = await fetch(url);
    const data: GooglePlacesResponse = await response.json();

    if (data.status !== "OK") {
      console.error("Google Places API error:", data.error_message || data.status);
      return NextResponse.json(
        { error: data.error_message || "Failed to fetch reviews" },
        { status: 500 }
      );
    }

    if (!data.result?.reviews) {
      return NextResponse.json(
        { error: "No reviews found" },
        { status: 404 }
      );
    }

    // Sort reviews by time (newest first) and limit to 10
    const reviews = data.result.reviews
      .sort((a, b) => b.time - a.time)
      .slice(0, 10)
      .map((review) => ({
        authorName: review.author_name,
        authorUrl: review.author_url,
        profilePhotoUrl: review.profile_photo_url,
        rating: review.rating,
        relativeTime: review.relative_time_description,
        text: review.text,
        time: review.time,
      }));

    const responseData = {
      reviews,
      overallRating: data.result.rating ?? null,
      totalRatings: data.result.user_ratings_total ?? null,
    };

    // Cache the response (per language)
    cachedData[cacheKey] = {
      ...responseData,
      timestamp: Date.now(),
    };

    return NextResponse.json(responseData);
  } catch (error) {
    console.error("Error fetching Google reviews:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

