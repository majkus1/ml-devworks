import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ml-devworks.com"),
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
    url: "https://www.ml-devworks.com/en",
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
    canonical: "https://www.ml-devworks.com/en",
    languages: {
      "pl": "https://www.ml-devworks.com",
      "en": "https://www.ml-devworks.com/en",
    },
  },
  category: "Technology",
  classification: "Web Development Services",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
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

