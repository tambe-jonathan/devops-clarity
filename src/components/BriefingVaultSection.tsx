import { Video, ArrowRight, Youtube } from "lucide-react";
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

        {/* Briefings Grid - YouTube-inspired responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {briefings.map((briefing, index) => (
            <BriefingCard
              key={briefing.id}
              briefing={briefing}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* YouTube CTA */}
        <div 
          className={`mt-12 text-center transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '500ms' }}
        >
          <Button 
            variant="heroOutline" 
            size="lg" 
            asChild 
            className="gap-2 group"
          >
            <a 
              href="https://youtube.com/@yourchannel" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Youtube className="w-5 h-5 text-red-500 group-hover:scale-110 transition-transform duration-300" />
              Visit My YouTube Channel
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
