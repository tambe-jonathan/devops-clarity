import { useEffect } from "react";
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
import { getScrollPosition, clearScrollPosition } from "@/hooks/useScrollRestoration";

const Index = () => {
  useEffect(() => {
    // Check if we need to restore scroll position
    const shouldRestore = sessionStorage.getItem('restore_scroll') === 'true';
    
    if (shouldRestore) {
      const savedPosition = getScrollPosition();
      
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        setTimeout(() => {
          window.scrollTo({ top: savedPosition, behavior: 'instant' });
        }, 50);
      });
      
      sessionStorage.removeItem('restore_scroll');
      clearScrollPosition();
    }
  }, []);

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
    </div>
  );
};

export default Index;
