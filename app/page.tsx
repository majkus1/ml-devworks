import { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Realizations from "@/components/Realizations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "ML Devworks - Quality by Us. Speed by AI. | Strony Internetowe i Aplikacje",
  description: "Tworzymy profesjonalne rozwiązania cyfrowe dla Twojego biznesu. Od prostych stron internetowych po zaawansowane aplikacje i wdrożenia w chmurze. Quality by Us. Speed by AI.",
  alternates: {
    canonical: "https://www.ml-devworks.com",
    languages: {
      "pl": "https://www.ml-devworks.com",
      "en": "https://www.ml-devworks.com/en",
    },
  },
};

export default function HomePage() {
  return (
    <>
      <StructuredData lang="pl" />
      <Navbar lang="pl" />
      <main className="min-h-screen">
        <Hero />
        <Services />
        <Realizations />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

