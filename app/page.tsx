import { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Realizations from "@/components/Realizations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import StructuredData from "@/components/StructuredData";
import AboutIntro from "@/components/AboutIntro";
import GoogleReviewsSchema from "@/components/GoogleReviewsSchema";

export const metadata: Metadata = {
  title: "Strony, aplikacje i automatyzacje AI dla firm | ML DevWorks",
  description: "Projektujemy strony internetowe, aplikacje i automatyzacje AI dla firm. Szybko, skalowalnie i pod SEO. Zespół z Krakowa — umów bezpłatną wycenę.",
  alternates: {
    canonical: "https://ml-devworks.com",
    languages: {
      "pl": "https://ml-devworks.com",
      "en": "https://ml-devworks.com/en",
      "x-default": "https://ml-devworks.com",
    },
  },
};

export default function HomePage() {
  return (
    <>
      <StructuredData lang="pl" />
      <GoogleReviewsSchema lang="pl" />
      <Navbar lang="pl" />
      <main className="min-h-screen">
        <Hero />
        <Services />
        <AboutIntro />
        <Realizations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

