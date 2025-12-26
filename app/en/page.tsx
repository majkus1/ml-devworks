import { Metadata } from "next";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Realizations from "@/components/Realizations";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "ML Devworks - Quality by Us. Speed by AI. | Web Development & Applications",
  description: "We create professional digital solutions for your business. From simple websites to advanced applications and cloud deployments. Quality by Us. Speed by AI.",
  alternates: {
    canonical: "https://www.ml-devworks.com/en",
    languages: {
      "pl": "https://www.ml-devworks.com",
      "en": "https://www.ml-devworks.com/en",
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
        <Services lang="en" />
        <Realizations lang="en" />
        <Contact lang="en" />
      </main>
      <Footer lang="en" />
    </>
  );
}

