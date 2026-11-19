import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { ProblemsSection } from "@/components/ProblemsSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesBento } from "@/components/ServicesBento";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-locro-bg text-locro-ink">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemsSection />
        <ServicesBento />
        <ProcessSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
