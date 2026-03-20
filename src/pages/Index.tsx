import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { TechStackSection } from "@/components/TechStackSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { BriefingVaultSection } from "@/components/BriefingVaultSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ScrollSkeleton } from "@/components/ScrollSkeleton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <ScrollSkeleton>
          <AboutSection />
        </ScrollSkeleton>
        <ScrollSkeleton>
          <ProjectsSection />
        </ScrollSkeleton>
        <ScrollSkeleton>
          <BriefingVaultSection />
        </ScrollSkeleton>
        <ScrollSkeleton>
          <TechStackSection />
        </ScrollSkeleton>
        <ScrollSkeleton>
          <CertificationsSection />
        </ScrollSkeleton>
        <ScrollSkeleton>
          <ContactSection />
        </ScrollSkeleton>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
