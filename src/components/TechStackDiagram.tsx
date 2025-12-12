import { 
  Cloud, 
  Container, 
  GitBranch, 
  Activity, 
  Lock, 
  Server,
  ArrowRight
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stackLayers = [
  {
    title: "Version Control",
    icon: GitBranch,
    tools: ["GitHub", "GitLab"],
    color: "bg-gray-100 border-gray-300",
    iconColor: "text-gray-600",
  },
  {
    title: "CI/CD",
    icon: ArrowRight,
    tools: ["GitHub Actions", "Jenkins", "ArgoCD"],
    color: "bg-blue-50 border-blue-200",
    iconColor: "text-blue-600",
  },
  {
    title: "Container & Orchestration",
    icon: Container,
    tools: ["Docker", "Kubernetes", "Helm"],
    color: "bg-cyan-50 border-cyan-200",
    iconColor: "text-cyan-600",
  },
  {
    title: "Infrastructure",
    icon: Server,
    tools: ["Terraform", "Ansible", "CloudFormation"],
    color: "bg-emerald-50 border-emerald-200",
    iconColor: "text-emerald-600",
  },
  {
    title: "Cloud Platforms",
    icon: Cloud,
    tools: ["AWS", "Azure", "GCP"],
    color: "bg-orange-50 border-orange-200",
    iconColor: "text-orange-500",
  },
  {
    title: "Monitoring",
    icon: Activity,
    tools: ["Prometheus", "Grafana", "ELK"],
    color: "bg-purple-50 border-purple-200",
    iconColor: "text-purple-600",
  },
  {
    title: "Security",
    icon: Lock,
    tools: ["Trivy", "Vault", "SonarQube"],
    color: "bg-rose-50 border-rose-200",
    iconColor: "text-rose-500",
  },
];

export function TechStackDiagram() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section ref={sectionRef} className="section-padding bg-card">
      <div className="container-width">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Technology Overview
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            My Tech Stack
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            The complete toolchain powering modern DevOps workflows.
          </p>
        </div>

        {/* Stack Visualization */}
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-4">
            {stackLayers.map((layer, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 p-5 rounded-xl border-2 ${layer.color} transition-all duration-500 ease-out hover:shadow-md hover:scale-[1.01] ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${150 + index * 100}ms` }}
              >
                {/* Icon */}
                <div className={`p-3 rounded-lg bg-background/80 ${layer.iconColor} transition-transform duration-300 hover:scale-110`}>
                  <layer.icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">
                    {layer.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {layer.tools.map((tool, toolIndex) => (
                      <span
                        key={toolIndex}
                        className="text-xs font-medium px-2.5 py-1 rounded-full bg-background text-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Layer Number */}
                <div className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-background text-muted-foreground font-semibold text-sm transition-all duration-300 hover:bg-primary hover:text-primary-foreground">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>

          {/* Flow Indicator */}
          <div 
            className={`mt-8 text-center transition-all duration-700 ease-out delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <p className="text-sm text-muted-foreground">
              Code → Build → Test → Deploy → Monitor → Secure → Repeat
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
