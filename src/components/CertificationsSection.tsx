import { ExternalLink, CheckCircle2, Award } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

// Import certification logos
import awsSapLogo from "@/assets/certs/aws-sap.png";
import awsDevopsLogo from "@/assets/certs/aws-devops.png";
import azureAdminLogo from "@/assets/certs/azure-admin.png";

const certifications = [
  {
    name: "AWS Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    description: "Designing resilient, high-performing architectures on AWS",
    logo: awsSapLogo,
    accentColor: "from-orange-500 to-amber-500",
    glowColor: "shadow-orange-500/20",
    borderHover: "hover:border-orange-400/50",
    verifyUrl: "https://www.credly.com/badges/verify",
  },
  {
    name: "AWS DevOps Engineer – Professional",
    issuer: "Amazon Web Services",
    description: "CI/CD, monitoring, logging, and security automation on AWS",
    logo: awsDevopsLogo,
    accentColor: "from-orange-600 to-yellow-500",
    glowColor: "shadow-orange-600/20",
    borderHover: "hover:border-orange-500/50",
    verifyUrl: "https://www.credly.com/badges/verify",
  },
  {
    name: "Microsoft Azure Administrator",
    issuer: "Microsoft",
    description: "Managing enterprise cloud infrastructure and identity on Azure",
    logo: azureAdminLogo,
    accentColor: "from-blue-500 to-cyan-500",
    glowColor: "shadow-blue-500/20",
    borderHover: "hover:border-blue-400/50",
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
          <span className="inline-flex items-center gap-2 text-accent font-medium text-sm tracking-wider">
            <Award className="w-4 h-4" />
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div 
              key={index} 
              className={`group relative bg-background border border-border/50 rounded-2xl p-6 transition-all duration-500 ease-out 
                ${cert.borderHover} hover:shadow-2xl ${cert.glowColor}
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${150 + index * 100}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cert.accentColor} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
              
              {/* Logo */}
              <div className="relative flex justify-center mb-5">
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${cert.accentColor} rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 scale-150`} />
                  <img 
                    src={cert.logo} 
                    alt={`${cert.name} certification badge`}
                    loading="lazy"
                    className="relative w-20 h-20 sm:w-24 sm:h-24 object-contain transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-lg"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="relative text-center">
                <h3 className="font-semibold text-foreground text-sm sm:text-base leading-tight mb-1">
                  {cert.name}
                </h3>
                <p className="text-xs text-muted-foreground font-medium mb-3">{cert.issuer}</p>
                
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                  {cert.description}
                </p>

                {/* Verify Link */}
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center justify-center gap-2 text-sm font-medium px-4 py-2 rounded-lg
                    bg-gradient-to-r ${cert.accentColor} bg-clip-text text-transparent
                    border border-border/50 group-hover:border-current/20
                    hover:shadow-md transition-all duration-300 group/link`}
                >
                  <CheckCircle2 className="w-4 h-4 text-muted-foreground group-hover/link:text-primary transition-colors" />
                  <span>Verify Credential</span>
                  <ExternalLink className="w-3 h-3 text-muted-foreground opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all duration-300" />
                </a>
              </div>

              {/* Floating particles */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${cert.accentColor} animate-pulse`} />
              </div>
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${cert.accentColor} animate-pulse`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
