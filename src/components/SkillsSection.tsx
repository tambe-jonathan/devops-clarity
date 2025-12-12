import { 
  Cloud, 
  Container, 
  FileCode, 
  GitBranch, 
  Activity, 
  Terminal 
} from "lucide-react";

const skillCategories = [
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: ["AWS", "Azure", "GCP"],
    color: "text-blue-500",
  },
  {
    title: "Containers & Orchestration",
    icon: Container,
    skills: ["Docker", "Kubernetes", "Helm"],
    color: "text-cyan-500",
  },
  {
    title: "Infrastructure as Code",
    icon: FileCode,
    skills: ["Terraform", "Ansible", "CloudFormation"],
    color: "text-emerald-500",
  },
  {
    title: "CI/CD",
    icon: GitBranch,
    skills: ["GitHub Actions", "GitLab CI", "Jenkins", "ArgoCD"],
    color: "text-orange-500",
  },
  {
    title: "Monitoring & Observability",
    icon: Activity,
    skills: ["Prometheus", "Grafana", "ELK Stack", "CloudWatch"],
    color: "text-purple-500",
  },
  {
    title: "Scripting & Automation",
    icon: Terminal,
    skills: ["Bash", "Python", "PowerShell"],
    color: "text-rose-500",
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="section-padding">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-16">
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
              className="bg-card rounded-2xl p-6 border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-2.5 rounded-lg bg-secondary ${category.color}`}>
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
