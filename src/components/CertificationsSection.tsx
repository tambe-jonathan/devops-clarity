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

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className={`group bg-background border border-border/50 rounded-xl p-6 transition-all duration-500 ease-out hover:border-border hover:shadow-lg ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${150 + index * 75}ms` }}
            >
              {/* Primary Layer: Icon, Name, Issuer, Description */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`p-3 rounded-lg ${cert.color} shrink-0 transition-transform duration-300 group-hover:scale-105`}>
                  <cert.icon className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground text-base leading-tight">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{cert.issuer}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                {cert.description}
              </p>

              {/* Impact Statement */}
              <p className="text-xs text-primary/80 font-medium mb-4 italic">
                "{cert.impact}"
              </p>

              {/* Secondary Layer: Metadata */}
              <div className="pt-4 border-t border-border/40">
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted-foreground mb-3">
                  <span>Issued: {cert.issued}</span>
                  {cert.expires && <span>Expires: {cert.expires}</span>}
                </div>
                {cert.credentialId && (
                  <p className="text-xs text-muted-foreground/70 mb-3">
                    ID: {cert.credentialId}
                  </p>
                )}
                
                {/* Verify Link */}
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-primary/70 hover:text-primary transition-colors group/link"
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verify Credential</span>
                  <ExternalLink className="w-3 h-3 opacity-0 -translate-x-1 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
