import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ContentSections from "@/components/ContentSections";
import Assessment from "@/components/Assessment";
import TeamSection from "@/components/TeamSection";
import Contribution from "@/components/Contribution";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ContentSections />
        <Assessment />
        <TeamSection />
        <Contribution />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
