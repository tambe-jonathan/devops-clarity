import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const architectures = [
  {
    title: "CI/CD Pipeline Architecture",
    description: "End-to-end deployment flow from code commit to production",
    category: "CI/CD",
  },
  {
    title: "Kubernetes Cluster Design",
    description: "Multi-zone high-availability cluster configuration",
    category: "Kubernetes",
  },
  {
    title: "Monitoring Stack",
    description: "Prometheus + Grafana observability platform",
    category: "Monitoring",
  },
  {
    title: "Multi-Cloud Infrastructure",
    description: "Hybrid cloud deployment architecture",
    category: "Infrastructure",
  },
  {
    title: "GitOps Workflow",
    description: "ArgoCD-based continuous deployment",
    category: "GitOps",
  },
  {
    title: "Security Architecture",
    description: "Zero-trust network and security controls",
    category: "Security",
  },
];

export function ArchitectureGallery() {
  const [selectedArch, setSelectedArch] = useState<typeof architectures[0] | null>(null);
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="architecture" ref={sectionRef} className="section-padding">
      <div className="container-width">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Architecture Gallery
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Infrastructure Designs
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Visual representations of DevOps architectures and infrastructure patterns.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {architectures.map((arch, index) => (
            <button
              key={index}
              onClick={() => setSelectedArch(arch)}
              className={`group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/30 transition-all duration-500 ease-out hover:shadow-lg hover:-translate-y-2 text-left ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
              }`}
              style={{ transitionDelay: `${150 + index * 100}ms` }}
            >
              {/* Placeholder Image */}
              <div className="aspect-video bg-gradient-to-br from-secondary to-muted flex items-center justify-center relative overflow-hidden">
                <div className="text-center p-4 transition-transform duration-500 group-hover:scale-110">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3 transition-all duration-300 group-hover:bg-primary/20">
                    <span className="text-2xl text-primary font-bold">
                      {arch.category[0]}
                    </span>
                  </div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {arch.category}
                  </span>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-primary-foreground transform scale-50 group-hover:scale-100 transition-transform duration-300" />
                </div>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-1 transition-colors duration-300 group-hover:text-primary">
                  {arch.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {arch.description}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Modal */}
        <Dialog open={!!selectedArch} onOpenChange={() => setSelectedArch(null)}>
          <DialogContent className="max-w-4xl p-0 overflow-hidden animate-scale-in">
            <VisuallyHidden>
              <DialogTitle>{selectedArch?.title}</DialogTitle>
            </VisuallyHidden>
            {selectedArch && (
              <div>
                {/* Large Preview */}
                <div className="aspect-video bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl text-primary font-bold">
                        {selectedArch.category[0]}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                      {selectedArch.category} Architecture
                    </span>
                  </div>
                </div>
                
                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {selectedArch.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {selectedArch.description}
                  </p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
