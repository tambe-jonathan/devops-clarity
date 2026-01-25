import { 
  Cloud, 
  Container, 
  FileCode, 
  GitBranch, 
  Activity, 
  Terminal,
  Shield,
  Database
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillCategories = [
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: ["Azure", "AWS"],
    gradient: "from-blue-500/10 to-blue-600/5",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600",
  },
  {
    title: "DevOps & CI/CD",
    icon: GitBranch,
    skills: ["Azure DevOps", "Jenkins", "GitHub Actions", "Argo CD", "Flux CD", "GitOps"],
    gradient: "from-orange-500/10 to-orange-600/5",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-600",
  },
  {
    title: "Containers & Orchestration",
    icon: Container,
    skills: ["Docker", "Kubernetes", "Helm", "Istio"],
    gradient: "from-cyan-500/10 to-cyan-600/5",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-600",
  },
  {
    title: "Infrastructure as Code",
    icon: FileCode,
    skills: ["Terraform", "Azure Bicep", "ARM Templates", "CloudFormation"],
    gradient: "from-emerald-500/10 to-emerald-600/5",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600",
  },
  {
    title: "Security & DevSecOps",
    icon: Shield,
    skills: ["IAM/RBAC", "Key Vault", "SonarQube", "Trivy", "Zero Trust"],
    gradient: "from-red-500/10 to-red-600/5",
    iconBg: "bg-red-500/10",
    iconColor: "text-red-600",
  },
  {
    title: "Monitoring & Observability",
    icon: Activity,
    skills: ["Prometheus", "Grafana", "ELK Stack", "Azure Monitor", "CloudWatch"],
    gradient: "from-purple-500/10 to-purple-600/5",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-600",
  },
  {
    title: "Scripting & Automation",
    icon: Terminal,
    skills: ["Bash", "Python", "PowerShell", "Ansible"],
    gradient: "from-rose-500/10 to-rose-600/5",
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-600",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"],
    gradient: "from-teal-500/10 to-teal-600/5",
    iconBg: "bg-teal-500/10",
    iconColor: "text-teal-600",
  },
];

export function SkillsSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="skills" ref={sectionRef} className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container-width">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Technical Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Tools & Technologies
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            A comprehensive toolkit for building, deploying, and maintaining 
            modern cloud infrastructure at scale.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`group relative bg-card rounded-xl p-5 border border-border/50 hover:border-border transition-all duration-500 ease-out hover:shadow-lg hover:shadow-primary/5 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${150 + index * 75}ms` }}
            >
              {/* Subtle gradient overlay on hover */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Icon and Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2.5 rounded-lg ${category.iconBg} ${category.iconColor} transition-transform duration-300 group-hover:scale-110`}>
                    <category.icon className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm md:text-base leading-tight">
                    {category.title}
                  </h3>
                </div>
                
                {/* Skills List */}
                <div className="space-y-1.5">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex items-center gap-2 text-muted-foreground text-sm"
                    >
                      <span className={`w-1 h-1 rounded-full ${category.iconBg.replace('/10', '/40')}`} />
                      <span className="group-hover:text-foreground transition-colors duration-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
