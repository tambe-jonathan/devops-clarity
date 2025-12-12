import { Server, Cloud, Cog, LineChart } from "lucide-react";

const highlights = [
  { icon: Cloud, label: "Cloud Native" },
  { icon: Cog, label: "Automation First" },
  { icon: Server, label: "Infrastructure as Code" },
  { icon: LineChart, label: "Observability" },
];

export function AboutSection() {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container-width">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Building the Infrastructure of Tomorrow
            </h2>
          </div>

          {/* About Content */}
          <div className="bg-background rounded-2xl p-8 md:p-12 shadow-lg">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              I'm a DevOps engineer who builds{" "}
              <span className="text-foreground font-medium">automated pipelines</span>,{" "}
              <span className="text-foreground font-medium">scalable cloud infrastructure</span>, and{" "}
              <span className="text-foreground font-medium">high-reliability deployment systems</span>.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
              I focus on CI/CD, Kubernetes, Infrastructure as Code, monitoring, and 
              engineering for performance and reliability. My goal is to help teams 
              ship faster while maintaining the highest standards of quality and security.
            </p>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors duration-200"
                >
                  <item.icon className="w-8 h-8 text-accent mb-2" />
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
