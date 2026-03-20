import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const tools = [
  { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Azure", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  { name: "Docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg" },
  { name: "Terraform", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
  { name: "Jenkins", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
  { name: "Ansible", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" },
  { name: "GitHub Actions", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "Argo CD", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg" },
  { name: "Prometheus", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
  { name: "Grafana", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
  { name: "Helm", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/helm/helm-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Linux", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "Nginx", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" },
];

export function TechStackSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="skills" ref={sectionRef} className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container-width">
        <div
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Tech Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Tools I Work With
          </h2>
        </div>

        <div className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-8 gap-6 md:gap-8 max-w-4xl mx-auto">
          {tools.map((tool, i) => (
            <div
              key={tool.name}
              className={`flex flex-col items-center gap-2 group transition-all duration-500 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${100 + i * 40}ms` }}
            >
              <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-card border border-border/50 flex items-center justify-center p-3 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/10 group-hover:border-primary/30">
                <img
                  src={tool.logo}
                  alt={tool.name}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <span className="text-xs text-muted-foreground font-medium text-center leading-tight">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
