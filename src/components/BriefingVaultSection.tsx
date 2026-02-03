import { Video, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { briefings } from "@/data/briefings";
import { BriefingCard } from "./BriefingCard";
import { Button } from "@/components/ui/button";

export function BriefingVaultSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      id="briefings" 
      ref={sectionRef} 
      className="section-padding bg-gradient-to-b from-secondary/30 to-background"
    >
      <div className="container-width">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="inline-flex items-center gap-2 text-accent font-medium text-sm uppercase tracking-wider mb-2">
            <Video className="w-4 h-4" />
            The Briefing Vault
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Crisis Briefings & Architectural Deep-Dives
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Real-world scenarios, technical breakdowns, and the decision-making 
            process behind production-grade infrastructure solutions.
          </p>
        </div>

        {/* Briefings Grid - YouTube-inspired */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {briefings.map((briefing, index) => (
            <BriefingCard
              key={briefing.id}
              briefing={briefing}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div 
          className={`mt-16 p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-primary/10 to-accent/5 border border-primary/10 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                Facing a similar architectural challenge?
              </h3>
              <p className="text-muted-foreground">
                Let's discuss your infrastructure strategy and find the right solution.
              </p>
            </div>
            <Button variant="hero" size="lg" asChild className="shrink-0">
              <a href="#contact" className="gap-2">
                Book a Strategy Session
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
