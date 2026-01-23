import React from "react";
import { 
  GitBranch, 
  Container, 
  Shield, 
  Cloud, 
  Activity, 
  FileCode, 
  Database,
  Bell,
  FileText,
  Webhook,
  MessageSquare,
  TestTube,
  Cog,
  FolderGit
} from "lucide-react";

// Tool logo configuration type
interface ToolConfigItem {
  icon?: React.ComponentType<{ className?: string }>;
  color: string;
  bgColor: string;
  logo?: string;
}

// Tool logo mapping with colors
const toolConfig: Record<string, ToolConfigItem> = {
  // Version Control
  github: { color: "text-foreground", bgColor: "bg-secondary", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  git: { icon: FolderGit, color: "text-orange-600", bgColor: "bg-orange-50 dark:bg-orange-900/20" },
  
  // CI/CD
  jenkins: { color: "text-red-600", bgColor: "bg-red-50 dark:bg-red-900/20", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
  "github-actions": { icon: Activity, color: "text-blue-600", bgColor: "bg-blue-50 dark:bg-blue-900/20" },
  argocd: { color: "text-orange-500", bgColor: "bg-orange-50 dark:bg-orange-900/20", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg" },
  
  // Containers
  docker: { color: "text-blue-500", bgColor: "bg-blue-50 dark:bg-blue-900/20", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  kubernetes: { color: "text-blue-600", bgColor: "bg-blue-50 dark:bg-blue-900/20", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-original.svg" },
  helm: { color: "text-blue-700", bgColor: "bg-blue-50 dark:bg-blue-900/20", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/helm/helm-original.svg" },
  kustomize: { icon: FileCode, color: "text-blue-600", bgColor: "bg-blue-50 dark:bg-blue-900/20" },
  
  // Cloud Providers
  aws: { color: "text-orange-500", bgColor: "bg-orange-50 dark:bg-orange-900/20", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  "aws-ecr": { color: "text-orange-500", bgColor: "bg-orange-50 dark:bg-orange-900/20", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png" },
  azure: { color: "text-blue-500", bgColor: "bg-blue-50 dark:bg-blue-900/20", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
  gcp: { color: "text-blue-400", bgColor: "bg-blue-50 dark:bg-blue-900/20", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
  
  // AWS Services
  lambda: { icon: Cloud, color: "text-orange-600", bgColor: "bg-orange-50 dark:bg-orange-900/20" },
  cloudwatch: { icon: Activity, color: "text-pink-600", bgColor: "bg-pink-50 dark:bg-pink-900/20" },
  s3: { icon: Database, color: "text-green-600", bgColor: "bg-green-50 dark:bg-green-900/20" },
  sns: { icon: Bell, color: "text-pink-500", bgColor: "bg-pink-50 dark:bg-pink-900/20" },
  "docker-hub": { color: "text-blue-600", bgColor: "bg-blue-50 dark:bg-blue-900/20", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  
  // IaC & Config
  terraform: { color: "text-purple-600", bgColor: "bg-purple-50 dark:bg-purple-900/20", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
  ansible: { color: "text-red-600", bgColor: "bg-red-50 dark:bg-red-900/20", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" },
  
  // Security & Quality
  sonarqube: { color: "text-blue-500", bgColor: "bg-blue-50 dark:bg-blue-900/20", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sonarqube/sonarqube-original.svg" },
  trivy: { color: "text-cyan-600", bgColor: "bg-cyan-50 dark:bg-cyan-900/20", logo: "https://aquasecurity.github.io/trivy/v0.18.3/imgs/logo.png" },
  
  // Monitoring
  prometheus: { color: "text-orange-600", bgColor: "bg-orange-50 dark:bg-orange-900/20", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg" },
  grafana: { color: "text-orange-500", bgColor: "bg-orange-50 dark:bg-orange-900/20", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
  alertmanager: { icon: Bell, color: "text-red-500", bgColor: "bg-red-50 dark:bg-red-900/20" },
  pagerduty: { icon: Bell, color: "text-green-600", bgColor: "bg-green-50 dark:bg-green-900/20" },
  
  // Build Tools
  maven: { color: "text-red-700", bgColor: "bg-red-50 dark:bg-red-900/20", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg" },
  nexus: { color: "text-blue-700", bgColor: "bg-blue-50 dark:bg-blue-900/20", logo: "https://assets-global.website-files.com/5f10ed4c0ebf7f1a21ac7b6d/5f2af61146c55b0e76dc070c_nx-logo-img.svg" },
  
  // Languages & Runtimes
  java: { color: "text-red-600", bgColor: "bg-red-50 dark:bg-red-900/20", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  jdk: { color: "text-red-600", bgColor: "bg-red-50 dark:bg-red-900/20", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  "spring-boot": { color: "text-green-600", bgColor: "bg-green-50 dark:bg-green-900/20", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
  python: { color: "text-yellow-600", bgColor: "bg-yellow-50 dark:bg-yellow-900/20", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  jest: { color: "text-red-600", bgColor: "bg-red-50 dark:bg-red-900/20", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
  
  // Communication & Notifications
  email: { icon: MessageSquare, color: "text-blue-600", bgColor: "bg-blue-50 dark:bg-blue-900/20" },
  notification: { icon: Bell, color: "text-amber-600", bgColor: "bg-amber-50 dark:bg-amber-900/20" },
  
  // Decision Gates
  "quality-gate": { icon: Shield, color: "text-green-600", bgColor: "bg-green-50 dark:bg-green-900/20" },
  "security-gate": { icon: Shield, color: "text-red-600", bgColor: "bg-red-50 dark:bg-red-900/20" },
  
  // Others
  webhook: { icon: Webhook, color: "text-muted-foreground", bgColor: "bg-secondary" },
  slack: { color: "text-purple-600", bgColor: "bg-purple-50 dark:bg-purple-900/20", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" },
  docs: { icon: FileText, color: "text-muted-foreground", bgColor: "bg-secondary" },
  developer: { icon: FileCode, color: "text-indigo-600", bgColor: "bg-indigo-50 dark:bg-indigo-900/20" },
  test: { icon: TestTube, color: "text-green-600", bgColor: "bg-green-50 dark:bg-green-900/20" },
  workspace: { icon: FolderGit, color: "text-slate-600", bgColor: "bg-slate-50 dark:bg-slate-900/20" },
};

interface ToolLogoProps {
  tool: string;
  size?: "sm" | "md" | "lg";
  showName?: boolean;
  className?: string;
}

export function ToolLogo({ tool, size = "md", showName = false, className = "" }: ToolLogoProps) {
  const defaultConfig: ToolConfigItem = { icon: Cog, color: "text-muted-foreground", bgColor: "bg-secondary" };
  const config = toolConfig[tool.toLowerCase()] || defaultConfig;
  
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16"
  };
  
  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-6 h-6",
    lg: "w-8 h-8"
  };

  const IconComponent = config.icon;
  const logoUrl = config.logo;

  return (
    <div className={`flex flex-col items-center gap-1 ${className}`}>
      <div className={`${sizeClasses[size]} ${config.bgColor} rounded-xl flex items-center justify-center p-2 transition-all duration-300 hover:scale-110 shadow-sm`}>
        {logoUrl ? (
          <img 
            src={logoUrl} 
            alt={tool}
            className="w-full h-full object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        ) : IconComponent ? (
          <IconComponent className={`${iconSizes[size]} ${config.color}`} />
        ) : (
          <Cog className={`${iconSizes[size]} text-muted-foreground`} />
        )}
      </div>
      {showName && (
        <span className="text-xs text-muted-foreground font-medium text-center">
          {tool.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
        </span>
      )}
    </div>
  );
}
