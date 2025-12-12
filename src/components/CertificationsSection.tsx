import { Award, Cloud, Container, FileCode } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const certifications = [
  {
    name: "AWS Solutions Architect",
    issuer: "Amazon Web Services",
    icon: Cloud,
    color: "text-orange-500 bg-orange-50",
  },
  {
    name: "Azure Administrator",
    issuer: "Microsoft Azure",
    icon: Cloud,
    color: "text-blue-500 bg-blue-50",
  },
  {
    name: "Certified Kubernetes Administrator",
    issuer: "CNCF",
    icon: Container,
    color: "text-blue-600 bg-blue-50",
  },
  {
    name: "Certified Kubernetes Application Developer",
    issuer: "CNCF",
    icon: Container,
    color: "text-cyan-500 bg-cyan-50",
  },
  {
    name: "Terraform Associate",
    issuer: "HashiCorp",
    icon: FileCode,
    color: "text-purple-500 bg-purple-50",
  },
  {
    name: "Google Cloud Professional",
    issuer: "Google Cloud",
    icon: Cloud,
    color: "text-green-500 bg-green-50",
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className={`cert-badge ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${150 + index * 75}ms` }}
            >
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
          ))}
        </div>
      </div>
    </section>
  );
}
