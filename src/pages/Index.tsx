import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { BriefingVaultSection } from "@/components/BriefingVaultSection";
import { CertificationsSection } from "@/components/CertificationsSection";
import { WorkflowSection } from "@/components/WorkflowSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <BriefingVaultSection />
        <SkillsSection />
        <CertificationsSection />
        <WorkflowSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
