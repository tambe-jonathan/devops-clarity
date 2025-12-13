import { Cloud, Container, FileCode, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const certifications = [
  {
    name: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    description: "Designing distributed systems and deployments on AWS",
    icon: Cloud,
    color: "text-orange-500 bg-orange-50 dark:bg-orange-950/30",
    pdfUrl: "#",
  },
  {
    name: "Azure Administrator",
    issuer: "Microsoft Azure",
    description: "Managing cloud infrastructure and services on Azure",
    icon: Cloud,
    color: "text-blue-500 bg-blue-50 dark:bg-blue-950/30",
    pdfUrl: "#",
  },
  {
    name: "Certified Kubernetes Administrator",
    issuer: "CNCF",
    description: "Cluster administration, networking, and storage management",
    icon: Container,
    color: "text-blue-600 bg-blue-50 dark:bg-blue-950/30",
    pdfUrl: "#",
  },
  {
    name: "Certified Kubernetes Application Developer",
    issuer: "CNCF",
    description: "Building, deploying, and configuring cloud-native applications",
    icon: Container,
    color: "text-cyan-500 bg-cyan-50 dark:bg-cyan-950/30",
    pdfUrl: "#",
  },
  {
    name: "Terraform Associate",
    issuer: "HashiCorp",
    description: "Infrastructure as Code provisioning and management",
    icon: FileCode,
    color: "text-purple-500 bg-purple-50 dark:bg-purple-950/30",
    pdfUrl: "#",
  },
  {
    name: "Google Cloud Professional",
    issuer: "Google Cloud",
    description: "Designing and managing GCP solutions at scale",
    icon: Cloud,
    color: "text-green-500 bg-green-50 dark:bg-green-950/30",
    pdfUrl: "#",
  },
];

export function CertificationsSection() {
  const { ref: sectionRef, isVisible } = useScrollAnimation<HTMLElement>();

  return (
    <section id="certifications" ref={sectionRef} className="section-padding bg-card">
      <div className="container-width">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Credentials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Certifications
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Industry-recognized certifications validating expertise in cloud platforms,
            container orchestration, and infrastructure automation.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className={`cert-badge flex-col items-start gap-3 p-5 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${150 + index * 75}ms` }}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2.5 rounded-lg ${cert.color} transition-transform duration-300 group-hover:scale-110`}>
                  <cert.icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground text-sm">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                {cert.description}
              </p>
              {cert.pdfUrl !== "#" && (
                <a
                  href={cert.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-primary hover:text-primary/80 mt-2 transition-colors"
                >
                  View Certificate <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
