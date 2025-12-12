import { 
  Repeat, 
  FileCode, 
  Layers, 
  Activity, 
  Zap, 
  CheckCircle 
} from "lucide-react";

const principles = [
  {
    icon: Repeat,
    title: "Automate Everything Repeatable",
    description: "If you do it twice, automate it.",
  },
  {
    icon: FileCode,
    title: "Infrastructure as Code",
    description: "Version control your infrastructure.",
  },
  {
    icon: Layers,
    title: "Small, Frequent Releases",
    description: "Deploy often, fail fast, recover faster.",
  },
  {
    icon: Activity,
    title: "Monitoring-First Mindset",
    description: "Observe before you optimize.",
  },
  {
    icon: Zap,
    title: "Developer Velocity",
    description: "Reduce friction, increase productivity.",
  },
  {
    icon: CheckCircle,
    title: "Build for Reliability",
    description: "Design for failure, plan for success.",
  },
];

export function WorkflowSection() {
  return (
    <section className="section-padding">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Philosophy
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            How I Work
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Core principles that guide my approach to DevOps and infrastructure engineering.
          </p>
        </div>

        {/* Principles Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-md"
            >
              <div className="p-2.5 rounded-lg bg-accent/10 text-accent flex-shrink-0">
                <principle.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">
                  {principle.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
