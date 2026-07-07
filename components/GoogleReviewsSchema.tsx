interface GoogleReviewsSchemaProps {
  lang?: "pl" | "en";
}

export default async function GoogleReviewsSchema({ lang = "pl" }: GoogleReviewsSchemaProps) {
  void lang;
  return null;
}
