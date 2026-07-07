import { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Realizations from "@/components/Realizations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import StructuredData from "@/components/StructuredData";
import AboutIntro from "@/components/AboutIntro";
import HomeFAQ from "@/components/HomeFAQ";

export const metadata: Metadata = {
  title: "Websites, apps & AI automation for companies | ML DevWorks",
  description: "Krakow developer building websites, apps, booking systems, and AI automation for companies. Direct cooperation and fast prototypes.",
  alternates: {
    canonical: "https://ml-devworks.com/en",
    languages: {
      "pl": "https://ml-devworks.com",
      "en": "https://ml-devworks.com/en",
      "x-default": "https://ml-devworks.com",
    },
  },
};

export default function EnglishPage() {
  return (
    <>
      <StructuredData lang="en" />
      <Navbar lang="en" />
      <main className="min-h-screen">
        <Hero lang="en" />
        <AboutIntro lang="en" />
        <Services lang="en" />
        <Realizations lang="en" />
        <HomeFAQ lang="en" />
        <Contact lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}

