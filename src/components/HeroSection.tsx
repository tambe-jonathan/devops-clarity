import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      {/* Subtle decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-muted/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-muted/20 rounded-full blur-3xl" />

      <div className="container-width pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div 
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-muted/60 border border-border/50 text-muted-foreground text-sm font-medium mb-8 opacity-0 hero-animate"
            style={{ animationDelay: "0.1s" }}
          >
            Open to remote roles, consulting, and DevOps architecture projects
          </div>

          {/* Name - reduced by ~12% */}
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 opacity-0 hero-animate"
            style={{ animationDelay: "0.15s" }}
          >
            Jonathan
          </h1>

          {/* Title - increased emphasis */}
          <p 
            className="text-xl sm:text-2xl md:text-3xl text-foreground font-semibold mb-3 opacity-0 hero-animate tracking-wide"
            style={{ animationDelay: "0.25s" }}
          >
            DevOps Engineer{" "}
            <span className="text-primary/60">|</span>{" "}
            <span className="text-primary">Cloud</span>{" "}
            <span className="text-primary/60">|</span>{" "}
            <span className="text-primary">Automation</span>{" "}
            <span className="text-primary/60">|</span>{" "}
            <span className="text-primary">CI/CD</span>
          </p>

          {/* Credibility line */}
          <p 
            className="text-base sm:text-lg text-muted-foreground font-normal mb-8 opacity-0 hero-animate"
            style={{ animationDelay: "0.32s" }}
          >
            Nearly 4 years building cloud infrastructure, CI/CD pipelines, and automation for production systems.
          </p>

          {/* Value Statement */}
          <p 
            className="text-xl sm:text-2xl md:text-3xl text-foreground font-light max-w-2xl mx-auto mb-10 opacity-0 hero-animate"
            style={{ animationDelay: "0.4s" }}
          >
            I design <span className="text-primary font-medium">reliable</span>, 
            <span className="text-primary font-medium"> automated</span> systems that scale.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 opacity-0 hero-animate"
            style={{ animationDelay: "0.48s" }}
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#projects">
                View My Projects
                <ArrowRight className="ml-2" size={18} />
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </div>

          {/* Social Links with Tooltips */}
          <TooltipProvider delayDuration={100}>
            <div 
              className="flex items-center justify-center gap-4 opacity-0 hero-animate"
              style={{ animationDelay: "0.55s" }}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <Github size={20} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>GitHub</p>
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={20} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>LinkedIn</p>
                </TooltipContent>
              </Tooltip>
              
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href="mailto:hello@example.com"
                    className="p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Email</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </TooltipProvider>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "0.8s" }}>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-muted-foreground/50 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
