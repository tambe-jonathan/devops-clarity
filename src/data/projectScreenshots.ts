export interface Screenshot {
  title: string;
  description?: string;
  image: string;
}

export interface ProjectScreenshotData {
  slug: string;
  title: string;
  description: string;
  demoGif?: {
    title: string;
    description: string;
    image: string;
  };
  screenshots: Screenshot[];
}

export const projectScreenshots: ProjectScreenshotData[] = [
  {
    slug: "security-pipeline",
    title: "Automated Security Scanning Pipeline",
    description: "Screenshots demonstrating the DevSecOps pipeline execution, security scanning results, and successful deployments.",
    demoGif: {
      title: "Security Pipeline Demo",
      description: "End-to-end demonstration of the automated security scanning pipeline in action",
      image: "/placeholder.svg"
    },
    screenshots: [
      {
        title: "SonarQube Quality Gate",
        description: "Static code analysis showing quality gate status, code coverage, and security metrics",
        image: "/src/assets/screenshots/sonarqube-quality-gate.png"
      },
      {
        title: "Trivy Security Scan",
        description: "Container vulnerability scanning results identifying CVEs and security issues",
        image: "/placeholder.svg"
      },
      {
        title: "Jenkins Pipeline Run",
        description: "Complete CI/CD pipeline execution showing build, test, scan, and deploy stages",
        image: "/placeholder.svg"
      },
      {
        title: "Kubernetes Cluster State",
        description: "MicroK8s cluster status with running pods, services, and deployments",
        image: "/placeholder.svg"
      },
      {
        title: "Sonatype Nexus (Binary Storage)",
        description: "Artifact repository showing stored build artifacts and dependency management",
        image: "/placeholder.svg"
      },
      {
        title: "AWS ECR & DockerHub (Container Registries)",
        description: "Container registries displaying pushed Docker images and tags",
        image: "/placeholder.svg"
      }
    ]
  },
  {
    slug: "microservices-cicd",
    title: "End-to-End CI/CD Pipeline for Microservices",
    description: "Screenshots demonstrating the complete CI/CD workflow, GitOps deployments, and Kubernetes orchestration.",
    demoGif: {
      title: "Microservices CI/CD Demo",
      description: "Live demonstration of the end-to-end CI/CD pipeline deploying microservices to Kubernetes",
      image: "/placeholder.svg"
    },
    screenshots: [
      {
        title: "GitHub Actions Workflow",
        description: "Automated workflow execution showing build, test, and deployment stages",
        image: "/placeholder.svg"
      },
      {
        title: "Docker Image Build",
        description: "Container image building process with multi-stage builds",
        image: "/placeholder.svg"
      },
      {
        title: "ArgoCD Application Sync",
        description: "GitOps-based deployment synchronization and application health status",
        image: "/placeholder.svg"
      },
      {
        title: "Kubernetes Deployment",
        description: "Microservices deployed across Kubernetes namespaces with load balancing",
        image: "/placeholder.svg"
      },
      {
        title: "Helm Chart Management",
        description: "Helm releases and chart versions managing application configurations",
        image: "/placeholder.svg"
      },
      {
        title: "Service Mesh Visualization",
        description: "Service-to-service communication and traffic management",
        image: "/placeholder.svg"
      }
    ]
  },
  {
    slug: "multi-cloud-terraform",
    title: "Multi-Cloud Infrastructure with Terraform",
    description: "Screenshots showcasing Infrastructure as Code deployments across AWS and Azure cloud providers.",
    demoGif: {
      title: "Terraform Deployment Demo",
      description: "Live demonstration of multi-cloud infrastructure provisioning with Terraform",
      image: "/placeholder.svg"
    },
    screenshots: [
      {
        title: "Terraform Plan Output",
        description: "Infrastructure change preview showing resources to be created, modified, or destroyed",
        image: "/placeholder.svg"
      },
      {
        title: "AWS Infrastructure Dashboard",
        description: "AWS Console showing deployed VPCs, EC2 instances, and networking components",
        image: "/placeholder.svg"
      },
      {
        title: "Azure Resource Groups",
        description: "Azure Portal displaying managed resource groups and deployed services",
        image: "/placeholder.svg"
      },
      {
        title: "Terraform State Management",
        description: "Remote state backend with locking and versioning enabled",
        image: "/placeholder.svg"
      },
      {
        title: "Ansible Playbook Execution",
        description: "Configuration management tasks running across cloud instances",
        image: "/placeholder.svg"
      },
      {
        title: "Cost Analysis Dashboard",
        description: "Cloud cost breakdown and optimization recommendations",
        image: "/placeholder.svg"
      }
    ]
  },
  {
    slug: "kubernetes-monitoring",
    title: "Kubernetes Monitoring Stack",
    description: "Screenshots demonstrating the production-ready monitoring solution with custom dashboards and alerting.",
    demoGif: {
      title: "Monitoring Stack Demo",
      description: "Live demonstration of the Kubernetes monitoring stack with Prometheus and Grafana dashboards",
      image: "/placeholder.svg"
    },
    screenshots: [
      {
        title: "Grafana Dashboard Overview",
        description: "Main monitoring dashboard showing cluster health, resource usage, and key metrics",
        image: "/placeholder.svg"
      },
      {
        title: "Prometheus Metrics Explorer",
        description: "PromQL queries and metric exploration for deep system insights",
        image: "/placeholder.svg"
      },
      {
        title: "AlertManager Configuration",
        description: "Alert routing, silencing, and notification channel configuration",
        image: "/placeholder.svg"
      },
      {
        title: "Node Exporter Metrics",
        description: "Host-level metrics including CPU, memory, disk, and network statistics",
        image: "/placeholder.svg"
      },
      {
        title: "PagerDuty Integration",
        description: "Incident management and on-call rotation integration",
        image: "/placeholder.svg"
      },
      {
        title: "Custom Application Dashboards",
        description: "Application-specific dashboards with business and technical metrics",
        image: "/placeholder.svg"
      }
    ]
  },
  {
    slug: "gitops-platform",
    title: "GitOps Deployment Platform",
    description: "Screenshots showcasing the Kubernetes-native GitOps solution with ArgoCD for declarative continuous delivery.",
    demoGif: {
      title: "GitOps Platform Demo",
      description: "Live demonstration of GitOps deployments with ArgoCD sync and rollback capabilities",
      image: "/placeholder.svg"
    },
    screenshots: [
      {
        title: "ArgoCD Application Dashboard",
        description: "Overview of all managed applications with sync status and health indicators",
        image: "/placeholder.svg"
      },
      {
        title: "Application Sync Details",
        description: "Detailed view of resource synchronization and manifest differences",
        image: "/placeholder.svg"
      },
      {
        title: "Multi-Cluster Management",
        description: "Centralized management console for multiple Kubernetes clusters",
        image: "/placeholder.svg"
      },
      {
        title: "Rollback History",
        description: "Application revision history with one-click rollback capabilities",
        image: "/placeholder.svg"
      },
      {
        title: "Kustomize Overlays",
        description: "Environment-specific configurations using Kustomize overlays",
        image: "/placeholder.svg"
      },
      {
        title: "Git Repository Integration",
        description: "Connected repositories with webhook triggers and sync policies",
        image: "/placeholder.svg"
      }
    ]
  },
  {
    slug: "cost-optimization",
    title: "Cloud Cost Optimization Engine",
    description: "Screenshots demonstrating the automated cost analysis and optimization platform for AWS infrastructure.",
    demoGif: {
      title: "Cost Optimization Demo",
      description: "Live demonstration of the cost analysis engine identifying savings opportunities",
      image: "/placeholder.svg"
    },
    screenshots: [
      {
        title: "Cost Dashboard Overview",
        description: "Main dashboard showing total spend, trends, and optimization opportunities",
        image: "/placeholder.svg"
      },
      {
        title: "Unused Resources Report",
        description: "Identified unused EC2 instances, EBS volumes, and other idle resources",
        image: "/placeholder.svg"
      },
      {
        title: "Rightsizing Recommendations",
        description: "Instance type recommendations based on actual utilization patterns",
        image: "/placeholder.svg"
      },
      {
        title: "Reserved Instance Analysis",
        description: "Savings opportunities through reserved instance and savings plan purchases",
        image: "/placeholder.svg"
      },
      {
        title: "Lambda Function Execution",
        description: "Serverless function execution logs and cost analysis automation",
        image: "/placeholder.svg"
      },
      {
        title: "S3 Cost Optimization",
        description: "Storage tier recommendations and lifecycle policy suggestions",
        image: "/placeholder.svg"
      }
    ]
  }
];

export function getProjectBySlug(slug: string): ProjectScreenshotData | undefined {
  return projectScreenshots.find(p => p.slug === slug);
}
