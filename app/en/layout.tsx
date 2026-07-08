import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://ml-devworks.com"),
  title: "Business apps, websites and AI automation | ML DevWorks",
  description: "Krakow developer building business apps, websites, booking systems, API/CRM integrations and AI automation. Direct cooperation and fast prototypes.",
  keywords: ["web development", "web applications", "mobile applications", "online stores", "devops", "cloud deployment", "cloud deployments", "development"],
  authors: [{ name: "ML DevWorks" }],
  creator: "ML DevWorks",
  publisher: "ML DevWorks",
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
    siteName: "ML DevWorks",
    title: "Business apps, websites and AI automation | ML DevWorks",
    description: "Krakow developer building business apps, websites, booking systems, API/CRM integrations and AI automation. Direct cooperation and fast prototypes.",
    images: [
      {
        url: "https://ml-devworks.com/ogimg.png",
        width: 1200,
        height: 630,
        alt: "ML DevWorks - web development and apps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business apps, websites and AI automation | ML DevWorks",
    description: "Krakow developer building business apps, websites, booking systems, API/CRM integrations and AI automation. Direct cooperation and fast prototypes.",
    images: ["https://ml-devworks.com/ogimg.png"],
  },
  alternates: {
    canonical: "https://ml-devworks.com/en",
    languages: {
      "pl": "https://ml-devworks.com",
      "en": "https://ml-devworks.com/en",
      "x-default": "https://ml-devworks.com",
    },
  },
  category: "Technology",
  classification: "Web Development Services",
  icons: {
    icon: [
      { url: "https://ml-devworks.com/favicon.ico", sizes: "any" },
      { url: "https://ml-devworks.com/icon.ico", sizes: "any" },
      { url: "https://ml-devworks.com/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "https://ml-devworks.com/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "https://ml-devworks.com/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "https://ml-devworks.com/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "https://ml-devworks.com/favicon.ico",
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

