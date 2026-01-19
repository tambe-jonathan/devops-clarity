import { useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, Images, X, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import sonarqubeScreenshot from "@/assets/screenshots/sonarqube-quality-gate.png";

interface Screenshot {
  title: string;
  description?: string;
  image: string;
}

// Placeholder screenshots - replace with actual images
const screenshots: Screenshot[] = [
  {
    title: "SonarQube Quality Gate",
    description: "Static code analysis showing quality gate status, code coverage, and security metrics",
    image: sonarqubeScreenshot
  },
  {
    title: "Trivy Security Scan",
    description: "Container vulnerability scanning results identifying CVEs and security issues",
    image: "/placeholder.svg"
  },
  {
    title: "Jenkins Pipeline Run",
    description: "Complete CI/CD pipeline execution showing build, test, scan, and deploy stages",
    image: "/placeholder.svg"
  },
  {
    title: "Kubernetes Cluster State",
    description: "MicroK8s cluster status with running pods, services, and deployments",
    image: "/placeholder.svg"
  },
  {
    title: "Sonatype Nexus (Binary Storage)",
    description: "Artifact repository showing stored build artifacts and dependency management",
    image: "/placeholder.svg"
  },
  {
    title: "AWS ECR & DockerHub (Container Registries)",
    description: "Container registries displaying pushed Docker images and tags",
    image: "/placeholder.svg"
  }
];

export default function ProjectScreenshots() {
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string } | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleReturnToProjects = () => {
    sessionStorage.setItem('restore_scroll', 'true');
    navigate('/');
  };

  const openLightbox = (src: string, title: string) => {
    setLightboxImage({ src, title });
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container-width section-padding">
          {/* Breadcrumb */}
          <Breadcrumb 
            items={[
              { label: "Projects", href: "/#projects" },
              { label: "Security Pipeline Screenshots" }
            ]}
          />

          {/* Back Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={handleReturnToProjects}
            className="mb-8 -ml-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Return to Projects
          </Button>

          {/* Header */}
          <div className="mb-12 animate-fade-in">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Images className="w-6 h-6 text-primary" />
              </div>
              <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium">
                Execution Proof
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Automated Security Scanning Pipeline
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl">
              Screenshots demonstrating the DevSecOps pipeline execution, security scanning results, and successful deployments.
            </p>
          </div>


          {/* Screenshots Grid */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-foreground mb-6">
              Pipeline Execution Screenshots
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {screenshots.map((screenshot, index) => (
              <article 
                key={index}
                className="group rounded-2xl overflow-hidden border border-border bg-card animate-fade-in"
                style={{ animationDelay: `${0.1 * (index + 2)}s` }}
              >
                {/* Screenshot Image */}
                <div 
                  className="aspect-video bg-secondary/50 overflow-hidden cursor-pointer relative"
                  onClick={() => openLightbox(screenshot.image, screenshot.title)}
                >
                  <img 
                    src={screenshot.image} 
                    alt={screenshot.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <ZoomIn className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
                
                {/* Screenshot Info */}
                <div className="p-6">
                  <h2 className="text-lg font-semibold text-foreground mb-2">
                    {screenshot.title}
                  </h2>
                  {screenshot.description && (
                    <p className="text-sm text-muted-foreground">
                      {screenshot.description}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Return Button */}
          <div className="flex justify-center">
            <Button
              onClick={handleReturnToProjects}
              size="lg"
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Return to Projects
            </Button>
          </div>
        </div>
      </main>

      <Footer />

      {/* Lightbox Modal */}
      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-none">
          <VisuallyHidden>
            <DialogTitle>{lightboxImage?.title || "Image preview"}</DialogTitle>
          </VisuallyHidden>
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-50 text-white hover:bg-white/20 rounded-full"
            onClick={closeLightbox}
          >
            <X className="w-6 h-6" />
          </Button>
          {lightboxImage && (
            <div className="flex flex-col items-center justify-center w-full h-full p-4">
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <p className="text-white text-lg font-medium mt-4 text-center">
                {lightboxImage.title}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}