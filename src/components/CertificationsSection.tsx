import { Cloud, Container, FileCode, ExternalLink, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const certifications = [
  {
    name: "AWS Solutions Architect – Professional",
    issuer: "Amazon Web Services",
    description: "Designing distributed systems and enterprise deployments on AWS",
    impact: "Applied in production environments managing multi-region workloads",
    icon: Cloud,
    color: "text-orange-500 bg-orange-50 dark:bg-orange-950/30",
    issued: "March 2023",
    expires: "March 2026",
    credentialId: "AWS-SAP-2023",
    verifyUrl: "https://www.credly.com/badges/verify",
  },
  {
    name: "Microsoft Azure Administrator",
    issuer: "Microsoft",
    description: "Managing enterprise cloud infrastructure and identity on Azure",
    impact: "Used to architect and operate production AKS clusters",
    icon: Cloud,
    color: "text-blue-500 bg-blue-50 dark:bg-blue-950/30",
    issued: "January 2023",
    expires: "January 2026",
    credentialId: "AZ-104",
    verifyUrl: "https://learn.microsoft.com/en-us/users/",
  },
  {
    name: "Certified Kubernetes Administrator",
    issuer: "CNCF",
    description: "Cluster administration, networking, storage, and security at scale",
    impact: "Operating production Kubernetes clusters serving enterprise workloads",
    icon: Container,
    color: "text-blue-600 bg-blue-50 dark:bg-blue-950/30",
    issued: "June 2022",
    expires: "June 2025",
    credentialId: "CKA-2200-006789",
    verifyUrl: "https://www.credly.com/badges/verify",
  },
  {
    name: "Microsoft Azure Solutions Architect Expert",
    issuer: "Microsoft",
    description: "Designing and implementing Azure infrastructure and solutions",
    impact: "Architected enterprise-scale Azure landing zones for production workloads",
    icon: Cloud,
    color: "text-blue-600 bg-blue-50 dark:bg-blue-950/30",
    issued: "March 2023",
    expires: "March 2025",
    credentialId: "AZ-305-2023",
    verifyUrl: "https://learn.microsoft.com/en-us/users/",
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
          <span className="text-accent font-medium text-sm tracking-wider">
            Credentials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Certifications
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Industry-recognized certifications validating expertise in cloud platforms,
            container orchestration, and infrastructure automation at enterprise scale.
          </p>
        </div>

        {/* Certifications Grid - Single Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className={`group bg-background border border-border/50 rounded-xl p-4 transition-all duration-500 ease-out hover:border-border hover:shadow-lg ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${150 + index * 75}ms` }}
            >
              {/* Primary Layer: Icon, Name, Issuer */}
              <div className="flex items-start gap-3 mb-3">
                <div className={`p-2 rounded-lg ${cert.color} shrink-0 transition-transform duration-300 group-hover:scale-105`}>
                  <cert.icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground text-sm leading-tight">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-muted-foreground mt-0.5">{cert.issuer}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-muted-foreground leading-relaxed mb-2">
                {cert.description}
              </p>

              {/* Verify Link */}
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-primary/70 hover:text-primary transition-colors group/link mt-auto pt-2 border-t border-border/40"
              >
                <CheckCircle2 className="w-3 h-3" />
                <span>Verify</span>
                <ExternalLink className="w-2.5 h-2.5 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
