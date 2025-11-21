import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ml-devworks.com"),
  title: "ML Devworks - Quality by Us. Speed by AI.",
  description: "Tworzymy profesjonalne rozwiązania cyfrowe dla Twojego biznesu. Od prostych stron internetowych po zaawansowane aplikacje i wdrożenia w chmurze. Quality by Us. Speed by AI.",
  keywords: ["strony internetowe", "aplikacje webowe", "aplikacje mobilne", "sklepy internetowe", "devops", "wdrożenia w chmurze", "cloud deployment", "development"],
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
    locale: "pl_PL",
    url: "https://ml-devworks.com",
    siteName: "ML Devworks",
    title: "ML Devworks - Quality by Us. Speed by AI.",
    description: "Tworzymy profesjonalne rozwiązania cyfrowe dla Twojego biznesu. Od prostych stron internetowych po zaawansowane aplikacje i wdrożenia w chmurze. Quality by Us. Speed by AI.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ML Devworks - Quality by Us. Speed by AI.",
    description: "Tworzymy profesjonalne rozwiązania cyfrowe dla Twojego biznesu. Od prostych stron internetowych po zaawansowane aplikacje i wdrożenia w chmurze. Quality by Us. Speed by AI.",
  },
  alternates: {
    canonical: "https://ml-devworks.com",
    languages: {
      "pl": "https://ml-devworks.com",
      "en": "https://ml-devworks.com/en",
    },
  },
  category: "Technology",
  classification: "Web Development Services",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    "theme-color": "#000000",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="scroll-smooth overflow-x-hidden">
      <body className={`${inter.className} overflow-x-hidden`}>{children}</body>
    </html>
  );
}

