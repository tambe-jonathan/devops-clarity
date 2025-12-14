import { Github, Youtube, ExternalLink, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const projects = [
  {
    title: "End-to-End CI/CD Pipeline for Microservices",
    description:
      "Complete CI/CD pipeline for deploying containerized microservices to Kubernetes. Includes automated testing, image building, and GitOps-based deployments with ArgoCD.",
    tools: ["GitHub Actions", "Docker", "Kubernetes", "ArgoCD", "Helm"],
    github: "https://github.com",
    youtube: "https://youtube.com",
  },
  {
    title: "Multi-Cloud Infrastructure with Terraform",
    description:
      "Infrastructure as Code solution for deploying consistent environments across AWS and Azure. Implements best practices for security, networking, and cost optimization.",
    tools: ["Terraform", "AWS", "Azure", "Python", "Ansible"],
    github: "https://github.com",
    youtube: "https://youtube.com",
  },
  {
    title: "Kubernetes Monitoring Stack",
    description:
      "Production-ready monitoring solution with Prometheus, Grafana, and AlertManager. Includes custom dashboards, alerting rules, and integration with PagerDuty.",
    tools: ["Prometheus", "Grafana", "AlertManager", "Kubernetes", "Helm"],
    github: "https://github.com",
  },
  {
    title: "Automated Security Scanning Pipeline",
    description:
      "DevSecOps pipeline that integrates security scanning at every stage. Includes container scanning, SAST, dependency checks, and infrastructure security validation.",
    tools: ["Trivy", "SonarQube", "GitHub Actions", "OWASP", "Docker"],
    github: "https://github.com",
    youtube: "https://youtube.com",
  },
];

export function ProjectsSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="projects" ref={sectionRef} className="section-padding bg-card">
      <div className="container-width">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Featured Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Projects & Case Studies
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Real-world DevOps solutions demonstrating infrastructure automation,
            CI/CD excellence, and cloud-native best practices.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <article 
              key={index} 
              className={`project-card bg-background group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300 pr-4">
                  {project.title}
                </h3>
                <ExternalLink className="w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Tools */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tools.map((tool, toolIndex) => (
                  <span
                    key={toolIndex}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                  >
                    {tool}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 pt-4 border-t border-border flex-wrap">
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm" className="transition-all duration-300 hover:scale-105">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </a>
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="ghost" size="sm" className="transition-all duration-300 hover:scale-105">
                    <Palette className="w-4 h-4 mr-2" />
                    Design
                  </Button>
                </a>
                {project.youtube && (
                  <a 
                    href={project.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="ghost" size="sm" className="transition-all duration-300 hover:scale-105">
                      <Youtube className="w-4 h-4 mr-2" />
                      Watch Demo
                    </Button>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
