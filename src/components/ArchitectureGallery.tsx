import { Link } from "react-router-dom";
import { ZoomIn } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { usePreserveScroll } from "@/hooks/useScrollRestoration";
import { architectures } from "@/data/architectures";

export function ArchitectureGallery() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>();
  const { savePosition } = usePreserveScroll();

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
            <Link
              key={arch.id}
              to={`/architecture/${arch.id}`}
              onClick={savePosition}
              className={`group relative bg-card rounded-2xl overflow-hidden border border-border hover:border-accent/30 transition-all duration-500 ease-out hover:shadow-lg hover:-translate-y-2 text-left block ${
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
