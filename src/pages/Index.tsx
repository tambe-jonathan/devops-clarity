import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
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
        <ScrollSkeleton lines={4}>
          <AboutSection />
        </ScrollSkeleton>
        <ScrollSkeleton lines={5}>
          <ProjectsSection />
        </ScrollSkeleton>
        <ScrollSkeleton lines={4}>
          <BriefingVaultSection />
        </ScrollSkeleton>
        <ScrollSkeleton lines={4}>
          <SkillsSection />
        </ScrollSkeleton>
        <ScrollSkeleton lines={3}>
          <CertificationsSection />
        </ScrollSkeleton>


        <ScrollSkeleton lines={4}>
          <ContactSection />
        </ScrollSkeleton>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
