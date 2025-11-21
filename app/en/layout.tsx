import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ml-devworks.com"),
  title: "ML Devworks - Quality by Us. Speed by AI.",
    description: "We create professional digital solutions for your business. From simple websites to advanced applications and cloud deployments. Quality by Us. Speed by AI.",
  keywords: ["web development", "web applications", "mobile applications", "online stores", "devops", "cloud deployment", "cloud deployments", "development"],
  authors: [{ name: "ML Devworks" }],
  creator: "ML Devworks",
  publisher: "ML Devworks",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ml-devworks.com/en",
    siteName: "ML Devworks",
    title: "ML Devworks - Quality by Us. Speed by AI.",
    description: "We create professional digital solutions for your business. From simple websites to advanced applications and cloud deployments. Quality by Us. Speed by AI.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ML Devworks - Quality by Us. Speed by AI.",
    description: "We create professional digital solutions for your business. From simple websites to advanced applications and cloud deployments. Quality by Us. Speed by AI.",
  },
  alternates: {
    canonical: "https://ml-devworks.com/en",
    languages: {
      "pl": "https://ml-devworks.com",
      "en": "https://ml-devworks.com/en",
    },
  },
  category: "Technology",
  classification: "Web Development Services",
  other: {
    "theme-color": "#000000",
  },
};

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}

