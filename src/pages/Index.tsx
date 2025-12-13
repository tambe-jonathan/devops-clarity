import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ArchitectureGallery } from "@/components/ArchitectureGallery";
import { CertificationsSection } from "@/components/CertificationsSection";
import { WorkflowSection } from "@/components/WorkflowSection";
import { TechStackDiagram } from "@/components/TechStackDiagram";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ReturnToPortfolioButton } from "@/components/ReturnToPortfolioButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ArchitectureGallery />
        <CertificationsSection />
        <WorkflowSection />
        <TechStackDiagram />
        <ContactSection />
      </main>
      <Footer />
      <ReturnToPortfolioButton />
    </div>
  );
};

export default Index;
