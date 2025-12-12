import { Server, Cloud, Cog, LineChart, User } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const highlights = [
  { icon: Cloud, label: "Cloud Native" },
  { icon: Cog, label: "Automation First" },
  { icon: Server, label: "Infrastructure as Code" },
  { icon: LineChart, label: "Observability" },
];

export function AboutSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="section-padding bg-card"
    >
      <div className="container-width">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div 
            className={`text-center mb-12 transition-all duration-700 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Building the Infrastructure of Tomorrow
            </h2>
          </div>

          {/* About Content with Photo */}
          <div 
            className={`bg-background rounded-2xl p-8 md:p-12 transition-all duration-700 ease-out delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ boxShadow: 'var(--shadow-lg)' }}
          >
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center">
              {/* Headshot */}
              <div 
                className={`flex-shrink-0 transition-all duration-700 ease-out delay-300 ${
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              >
                <div className="headshot-container w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                  {/* Placeholder - replace with actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <User className="w-20 h-20 md:w-24 md:h-24 text-muted-foreground/40" />
                  </div>
                  {/* When you have an actual photo, use this instead:
                  <img 
                    src="/your-photo.jpg" 
                    alt="Your Name - DevOps Engineer"
                    className="w-full h-full object-cover"
                  />
                  */}
                </div>
              </div>

              {/* Text Content */}
              <div className="flex-1 text-center lg:text-left">
                <p 
                  className={`text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 transition-all duration-700 ease-out delay-400 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  I'm a DevOps engineer who builds{" "}
                  <span className="text-foreground font-medium">automated pipelines</span>,{" "}
                  <span className="text-foreground font-medium">scalable cloud infrastructure</span>, and{" "}
                  <span className="text-foreground font-medium">high-reliability deployment systems</span>.
                </p>
                <p 
                  className={`text-lg md:text-xl text-muted-foreground leading-relaxed transition-all duration-700 ease-out delay-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                >
                  I focus on CI/CD, Kubernetes, Infrastructure as Code, monitoring, and 
                  engineering for performance and reliability. My goal is to help teams 
                  ship faster while maintaining the highest standards of quality and security.
                </p>
              </div>
            </div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-all duration-300 ease-out hover:scale-105 cursor-default ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <item.icon className="w-8 h-8 text-accent mb-2 transition-transform duration-300" />
                  <span className="text-sm font-medium text-foreground text-center">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
