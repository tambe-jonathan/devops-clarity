import { 
  Cloud, 
  Container, 
  FileCode, 
  GitBranch, 
  Activity, 
  Terminal,
  Shield,
  Network
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skillCategories = [
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: [
      "Azure: AKS, App Services, ACR, Azure DevOps, VMSS, VNET, NSG, Application Gateway, Load Balancers, Azure Monitor, Log Analytics, Azure Functions, Event Grid, Key Vault, Storage Accounts, Azure SQL, Azure AD, Defender for Cloud, Blueprints & Policies",
      "AWS: EC2, S3, RDS, EKS, Lambda, CloudFormation, CloudWatch, Route 53, IAM, API Gateway, DynamoDB, Auto Scaling, ALB/NLB"
    ],
    color: "text-blue-500",
  },
  {
    title: "DevOps & CI/CD",
    icon: GitBranch,
    skills: ["Azure DevOps Pipelines", "Jenkins", "GitHub Actions", "Argo CD", "Flux CD", "Maven", "SonarQube", "Nexus", "Trivy", "Selenium", "GitOps workflows"],
    color: "text-orange-500",
  },
  {
    title: "Containers & Orchestration",
    icon: Container,
    skills: ["Docker", "Kubernetes (AKS & EKS)", "Helm Charts", "Istio (beginner)", "Kubernetes RBAC", "HPA", "Ingress"],
    color: "text-cyan-500",
  },
  {
    title: "Infrastructure as Code (IaC)",
    icon: FileCode,
    skills: ["Terraform", "Azure Bicep", "ARM Templates", "CloudFormation", "Terraform Cloud & S3 backend management"],
    color: "text-emerald-500",
  },
  {
    title: "Security & DevSecOps",
    icon: Shield,
    skills: ["Azure Security Center", "IAM/RBAC", "Azure Policies", "Key Vault", "AWS Secrets Manager", "Vulnerability Scanning", "Penetration Testing", "Zero Trust principles"],
    color: "text-red-500",
  },
  {
    title: "Monitoring & Observability",
    icon: Activity,
    skills: ["Prometheus", "Grafana", "ELK/EFK Stack", "Azure Monitor", "Application Insights", "CloudWatch"],
    color: "text-purple-500",
  },
  {
    title: "Scripting & Automation",
    icon: Terminal,
    skills: ["Bash", "Python", "PowerShell", "YAML", "Ansible"],
    color: "text-rose-500",
  },
  {
    title: "Networking & Databases",
    icon: Network,
    skills: ["TCP/IP", "DNS", "Load Balancing", "VPN", "Firewalls", "MySQL", "PostgreSQL", "MongoDB", "Redis"],
    color: "text-teal-500",
  },
];

export function SkillsSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="skills" ref={sectionRef} className="section-padding">
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`bg-card rounded-2xl p-6 border border-border hover:border-accent/30 transition-all duration-500 ease-out hover:shadow-lg hover:-translate-y-1 group ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${150 + index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-2.5 rounded-lg bg-secondary ${category.color} transition-transform duration-300 group-hover:scale-110`}>
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="skill-badge"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
