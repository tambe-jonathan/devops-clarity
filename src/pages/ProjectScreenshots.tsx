import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Images } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/Breadcrumb";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

interface Screenshot {
  title: string;
  description?: string;
  image: string;
}

// Placeholder screenshots - replace with actual images
const screenshots: Screenshot[] = [
  {
    title: "Jenkins Pipeline Overview",
    description: "Complete CI/CD pipeline stages showing build, test, and security scanning",
    image: "/placeholder.svg"
  },
  {
    title: "Trivy Container Scan Results",
    description: "Security vulnerability scan output for Docker containers",
    image: "/placeholder.svg"
  },
  {
    title: "SonarQube Code Analysis",
    description: "Static code analysis showing code quality metrics and security hotspots",
    image: "/placeholder.svg"
  },
  {
    title: "AWS ECR Deployment",
    description: "Container registry showing successfully pushed images",
    image: "/placeholder.svg"
  },
  {
    title: "MicroK8s Cluster Status",
    description: "Kubernetes deployment status with running pods",
    image: "/placeholder.svg"
  }
];

export default function ProjectScreenshots() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const handleReturnToProjects = () => {
    sessionStorage.setItem('restore_scroll', 'true');
    navigate('/');
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
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {screenshots.map((screenshot, index) => (
              <article 
                key={index}
                className="group rounded-2xl overflow-hidden border border-border bg-card animate-fade-in"
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                {/* Screenshot Image */}
                <div className="aspect-video bg-secondary/50 overflow-hidden">
                  <img 
                    src={screenshot.image} 
                    alt={screenshot.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
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
    </div>
  );
}