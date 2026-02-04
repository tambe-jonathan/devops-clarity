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
          {/* Headline */}
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 opacity-0 hero-animate"
            style={{ animationDelay: "0.1s" }}
          >
            I Build <span className="text-primary">Infrastructure That Scales</span>
          </h1>

          {/* Supporting Line */}
          <p 
            className="text-lg sm:text-xl text-muted-foreground mb-4 opacity-0 hero-animate"
            style={{ animationDelay: "0.2s" }}
          >
            DevOps Engineer specializing in cloud automation, CI/CD, and Kubernetes.
          </p>

          {/* Micro-proof */}
          <p 
            className="text-sm text-muted-foreground/80 mb-10 opacity-0 hero-animate"
            style={{ animationDelay: "0.3s" }}
          >
            4 years · Azure & AWS · Production systems
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 opacity-0 hero-animate"
            style={{ animationDelay: "0.4s" }}
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#case-studies">
                View Case Studies
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
              style={{ animationDelay: "0.5s" }}
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

    </section>
  );
}
