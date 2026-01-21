export interface FlowStep {
  name: string;
  icon: string; // Tool logo path or icon name
  description: string;
}

export interface ProjectDesignData {
  slug: string;
  title: string;
  tagline: string;
  caseStudy: {
    problem: string;
    solution: string;
    approach: string;
  };
  flowSteps: FlowStep[];
  outcomes: {
    metric: string;
    value: string;
    description: string;
  }[];
  projectStructure: {
    name: string;
    type: "folder" | "file";
    children?: { name: string; type: "folder" | "file"; description?: string }[];
    description?: string;
  }[];
  tools: {
    name: string;
    logo: string;
    category: string;
  }[];
}

export const projectDesigns: ProjectDesignData[] = [
  {
    slug: "security-pipeline",
    title: "Automated Security Scanning Pipeline",
    tagline: "DevSecOps pipeline integrating security at every stage",
    caseStudy: {
      problem: "Traditional CI/CD pipelines often lack integrated security scanning, leading to vulnerabilities being discovered late in the development cycle—or worse, in production. Manual security reviews create bottlenecks and inconsistent coverage.",
      solution: "Built an automated DevSecOps pipeline that embeds security scanning at every stage: code analysis with SonarQube, dependency vulnerability scanning, container image scanning with Trivy, and infrastructure security validation—all before deployment.",
      approach: "Implemented a shift-left security strategy using Jenkins as the orchestration engine. Each commit triggers comprehensive scans across multiple security domains. Quality gates enforce minimum security thresholds, blocking deployments that don't meet standards."
    },
    flowSteps: [
      { name: "Code Commit", icon: "github", description: "Developer pushes code to GitHub repository" },
      { name: "Jenkins Build", icon: "jenkins", description: "Jenkins triggers automated pipeline execution" },
      { name: "Maven Build", icon: "maven", description: "Compile and package Spring Boot application" },
      { name: "SonarQube Scan", icon: "sonarqube", description: "Static code analysis and quality gate check" },
      { name: "Docker Build", icon: "docker", description: "Build containerized application image" },
      { name: "Trivy Scan", icon: "trivy", description: "Container vulnerability scanning" },
      { name: "Push to Registry", icon: "aws-ecr", description: "Push verified image to ECR/DockerHub" },
      { name: "Deploy to K8s", icon: "kubernetes", description: "Deploy to MicroK8s cluster" }
    ],
    outcomes: [
      { metric: "Vulnerability Detection", value: "95%", description: "CVEs caught before production" },
      { metric: "Deployment Time", value: "< 15 min", description: "From commit to production" },
      { metric: "Security Coverage", value: "100%", description: "All code paths scanned" },
      { metric: "False Positive Rate", value: "< 5%", description: "Minimal noise in alerts" }
    ],
    projectStructure: [
      {
        name: "jenkins/",
        type: "folder",
        description: "Pipeline configurations",
        children: [
          { name: "Jenkinsfile", type: "file", description: "Main pipeline definition" },
          { name: "jenkins-plugins.txt", type: "file", description: "Required plugins list" }
        ]
      },
      {
        name: "src/",
        type: "folder",
        description: "Spring Boot application source",
        children: [
          { name: "main/java/", type: "folder", description: "Application code" },
          { name: "test/java/", type: "folder", description: "Unit and integration tests" }
        ]
      },
      {
        name: "docker/",
        type: "folder",
        description: "Container configuration",
        children: [
          { name: "Dockerfile", type: "file", description: "Multi-stage build definition" },
          { name: "docker-compose.yml", type: "file", description: "Local development stack" }
        ]
      },
      {
        name: "k8s/",
        type: "folder",
        description: "Kubernetes manifests",
        children: [
          { name: "deployment.yaml", type: "file", description: "Application deployment" },
          { name: "service.yaml", type: "file", description: "Service exposure" }
        ]
      },
      {
        name: "sonar-project.properties",
        type: "file",
        description: "SonarQube configuration"
      }
    ],
    tools: [
      { name: "Jenkins", logo: "jenkins", category: "CI/CD" },
      { name: "SonarQube", logo: "sonarqube", category: "Code Quality" },
      { name: "Trivy", logo: "trivy", category: "Security" },
      { name: "Docker", logo: "docker", category: "Containerization" },
      { name: "Kubernetes", logo: "kubernetes", category: "Orchestration" },
      { name: "AWS ECR", logo: "aws-ecr", category: "Registry" },
      { name: "Maven", logo: "maven", category: "Build" },
      { name: "Nexus", logo: "nexus", category: "Artifact Storage" }
    ]
  },
  {
    slug: "microservices-cicd",
    title: "End-to-End CI/CD Pipeline for Microservices",
    tagline: "Complete GitOps-based deployment workflow for containerized microservices",
    caseStudy: {
      problem: "Managing deployments for multiple microservices across environments is complex. Manual deployments lead to configuration drift, inconsistent environments, and slow release cycles.",
      solution: "Implemented a GitOps-based CI/CD pipeline using GitHub Actions for CI and ArgoCD for continuous delivery. Every change is version-controlled, auditable, and automatically deployed through declarative configurations.",
      approach: "Adopted a trunk-based development workflow where merges to main trigger automated builds, testing, and container image creation. ArgoCD continuously monitors Git repositories and automatically syncs cluster state with desired configurations."
    },
    flowSteps: [
      { name: "Code Push", icon: "github", description: "Developer pushes to GitHub repository" },
      { name: "GitHub Actions", icon: "github-actions", description: "Automated CI workflow triggers" },
      { name: "Unit Tests", icon: "jest", description: "Run comprehensive test suites" },
      { name: "Docker Build", icon: "docker", description: "Build multi-arch container images" },
      { name: "Push to Registry", icon: "docker-hub", description: "Push to container registry" },
      { name: "Update Manifests", icon: "git", description: "Update Helm values/Kustomize" },
      { name: "ArgoCD Sync", icon: "argocd", description: "Detect and sync changes" },
      { name: "K8s Deploy", icon: "kubernetes", description: "Roll out to Kubernetes cluster" }
    ],
    outcomes: [
      { metric: "Deployment Frequency", value: "50+/week", description: "Production deployments" },
      { metric: "Lead Time", value: "< 30 min", description: "From commit to production" },
      { metric: "Rollback Time", value: "< 2 min", description: "One-click rollback via Git" },
      { metric: "Environment Parity", value: "100%", description: "Identical across all stages" }
    ],
    projectStructure: [
      {
        name: ".github/",
        type: "folder",
        description: "GitHub Actions workflows",
        children: [
          { name: "workflows/ci.yml", type: "file", description: "CI pipeline definition" },
          { name: "workflows/release.yml", type: "file", description: "Release automation" }
        ]
      },
      {
        name: "services/",
        type: "folder",
        description: "Microservices source code",
        children: [
          { name: "api-gateway/", type: "folder", description: "API Gateway service" },
          { name: "user-service/", type: "folder", description: "User management" },
          { name: "order-service/", type: "folder", description: "Order processing" }
        ]
      },
      {
        name: "helm/",
        type: "folder",
        description: "Helm charts",
        children: [
          { name: "Chart.yaml", type: "file", description: "Chart metadata" },
          { name: "values.yaml", type: "file", description: "Default values" },
          { name: "values-prod.yaml", type: "file", description: "Production overrides" }
        ]
      },
      {
        name: "argocd/",
        type: "folder",
        description: "ArgoCD applications",
        children: [
          { name: "application.yaml", type: "file", description: "App definition" },
          { name: "project.yaml", type: "file", description: "Project config" }
        ]
      }
    ],
    tools: [
      { name: "GitHub Actions", logo: "github-actions", category: "CI/CD" },
      { name: "ArgoCD", logo: "argocd", category: "GitOps" },
      { name: "Docker", logo: "docker", category: "Containerization" },
      { name: "Kubernetes", logo: "kubernetes", category: "Orchestration" },
      { name: "Helm", logo: "helm", category: "Package Manager" }
    ]
  },
  {
    slug: "multi-cloud-terraform",
    title: "Multi-Cloud Infrastructure with Terraform",
    tagline: "Infrastructure as Code for consistent multi-cloud deployments",
    caseStudy: {
      problem: "Organizations often need presence across multiple cloud providers for redundancy, compliance, or cost optimization. Manual provisioning leads to inconsistencies, security gaps, and operational overhead.",
      solution: "Created a unified Terraform codebase that provisions identical infrastructure patterns across AWS and Azure. Shared modules ensure consistency while provider-specific modules handle cloud-native services.",
      approach: "Developed reusable Terraform modules with clear interfaces. Remote state management with locking prevents conflicts. Ansible handles post-provisioning configuration, ensuring applications are ready immediately after infrastructure deployment."
    },
    flowSteps: [
      { name: "Code Change", icon: "terraform", description: "Modify Terraform configurations" },
      { name: "Plan Review", icon: "terraform", description: "terraform plan for change preview" },
      { name: "AWS Provision", icon: "aws", description: "Deploy to Amazon Web Services" },
      { name: "Azure Provision", icon: "azure", description: "Deploy to Microsoft Azure" },
      { name: "State Update", icon: "terraform", description: "Update remote state backend" },
      { name: "Ansible Config", icon: "ansible", description: "Configure deployed instances" },
      { name: "Validation", icon: "python", description: "Run infrastructure tests" },
      { name: "Documentation", icon: "docs", description: "Auto-generate infra docs" }
    ],
    outcomes: [
      { metric: "Provisioning Time", value: "< 20 min", description: "Full environment setup" },
      { metric: "Cost Savings", value: "35%", description: "Through optimization and right-sizing" },
      { metric: "Drift Detection", value: "Real-time", description: "Continuous state monitoring" },
      { metric: "Recovery Time", value: "< 1 hour", description: "Full disaster recovery" }
    ],
    projectStructure: [
      {
        name: "modules/",
        type: "folder",
        description: "Reusable Terraform modules",
        children: [
          { name: "networking/", type: "folder", description: "VPC/VNet configurations" },
          { name: "compute/", type: "folder", description: "VM/Instance modules" },
          { name: "security/", type: "folder", description: "IAM, Security Groups" }
        ]
      },
      {
        name: "environments/",
        type: "folder",
        description: "Environment-specific configs",
        children: [
          { name: "dev/", type: "folder", description: "Development environment" },
          { name: "staging/", type: "folder", description: "Staging environment" },
          { name: "prod/", type: "folder", description: "Production environment" }
        ]
      },
      {
        name: "ansible/",
        type: "folder",
        description: "Configuration management",
        children: [
          { name: "playbooks/", type: "folder", description: "Ansible playbooks" },
          { name: "inventory/", type: "folder", description: "Dynamic inventory" }
        ]
      },
      {
        name: "scripts/",
        type: "folder",
        description: "Automation scripts",
        children: [
          { name: "deploy.sh", type: "file", description: "Deployment script" },
          { name: "validate.py", type: "file", description: "Validation tests" }
        ]
      }
    ],
    tools: [
      { name: "Terraform", logo: "terraform", category: "IaC" },
      { name: "AWS", logo: "aws", category: "Cloud" },
      { name: "Azure", logo: "azure", category: "Cloud" },
      { name: "Ansible", logo: "ansible", category: "Configuration" },
      { name: "Python", logo: "python", category: "Scripting" }
    ]
  },
  {
    slug: "kubernetes-monitoring",
    title: "Kubernetes Monitoring Stack",
    tagline: "Production-ready observability for Kubernetes clusters",
    caseStudy: {
      problem: "Kubernetes clusters generate massive amounts of metrics, logs, and events. Without proper monitoring, issues go undetected, leading to outages and degraded performance. Teams lack visibility into cluster and application health.",
      solution: "Deployed a comprehensive monitoring stack with Prometheus for metrics collection, Grafana for visualization, and AlertManager for intelligent alerting. Custom dashboards provide instant visibility into cluster health.",
      approach: "Used the kube-prometheus-stack Helm chart as foundation, then customized with application-specific metrics, SLO-based alerting, and integration with PagerDuty for on-call management. Recording rules optimize query performance."
    },
    flowSteps: [
      { name: "Metrics Export", icon: "kubernetes", description: "Pods expose Prometheus metrics" },
      { name: "Prometheus Scrape", icon: "prometheus", description: "Collect and store metrics" },
      { name: "Recording Rules", icon: "prometheus", description: "Pre-compute complex queries" },
      { name: "Alert Evaluation", icon: "alertmanager", description: "Check alert conditions" },
      { name: "Grafana Query", icon: "grafana", description: "Visualize with dashboards" },
      { name: "Alert Routing", icon: "alertmanager", description: "Route to appropriate teams" },
      { name: "PagerDuty", icon: "pagerduty", description: "Incident management" },
      { name: "Runbooks", icon: "docs", description: "Automated remediation docs" }
    ],
    outcomes: [
      { metric: "MTTR", value: "< 15 min", description: "Mean time to resolution" },
      { metric: "Alert Accuracy", value: "98%", description: "Actionable alerts only" },
      { metric: "Dashboard Load", value: "< 2s", description: "Fast visualization" },
      { metric: "Retention", value: "90 days", description: "Historical metrics storage" }
    ],
    projectStructure: [
      {
        name: "helm/",
        type: "folder",
        description: "Helm chart configurations",
        children: [
          { name: "kube-prometheus/", type: "folder", description: "Prometheus stack values" },
          { name: "grafana-dashboards/", type: "folder", description: "Custom dashboards" }
        ]
      },
      {
        name: "prometheus/",
        type: "folder",
        description: "Prometheus configurations",
        children: [
          { name: "rules/", type: "folder", description: "Recording and alerting rules" },
          { name: "servicemonitors/", type: "folder", description: "Service discovery" }
        ]
      },
      {
        name: "alertmanager/",
        type: "folder",
        description: "AlertManager config",
        children: [
          { name: "config.yaml", type: "file", description: "Routing and receivers" },
          { name: "templates/", type: "folder", description: "Notification templates" }
        ]
      },
      {
        name: "dashboards/",
        type: "folder",
        description: "Grafana dashboards",
        children: [
          { name: "cluster-overview.json", type: "file", description: "Cluster health" },
          { name: "application-metrics.json", type: "file", description: "App performance" }
        ]
      }
    ],
    tools: [
      { name: "Prometheus", logo: "prometheus", category: "Metrics" },
      { name: "Grafana", logo: "grafana", category: "Visualization" },
      { name: "AlertManager", logo: "alertmanager", category: "Alerting" },
      { name: "Kubernetes", logo: "kubernetes", category: "Orchestration" },
      { name: "Helm", logo: "helm", category: "Package Manager" }
    ]
  },
  {
    slug: "gitops-platform",
    title: "GitOps Deployment Platform",
    tagline: "Kubernetes-native continuous delivery with ArgoCD",
    caseStudy: {
      problem: "Traditional deployment methods require direct cluster access and manual intervention. This creates security risks, lacks audit trails, and makes rollbacks complicated. Configuration drift is common.",
      solution: "Implemented ArgoCD as a GitOps operator that treats Git as the single source of truth. All deployments happen through Git commits, providing full audit trails, easy rollbacks, and consistent environments.",
      approach: "Set up ArgoCD with App of Apps pattern for managing multiple applications. Kustomize overlays handle environment-specific configurations. Automated sync policies keep clusters aligned with Git state."
    },
    flowSteps: [
      { name: "Git Commit", icon: "github", description: "Merge PR with manifest changes" },
      { name: "Webhook Trigger", icon: "webhook", description: "Notify ArgoCD of changes" },
      { name: "Manifest Parse", icon: "argocd", description: "Parse Helm/Kustomize" },
      { name: "Diff Calculation", icon: "argocd", description: "Compare desired vs actual" },
      { name: "Sync Operation", icon: "argocd", description: "Apply changes to cluster" },
      { name: "Health Check", icon: "kubernetes", description: "Verify deployment health" },
      { name: "Notification", icon: "slack", description: "Send status to Slack" },
      { name: "Dashboard Update", icon: "argocd", description: "Update UI status" }
    ],
    outcomes: [
      { metric: "Deployment Velocity", value: "10x", description: "Faster than manual" },
      { metric: "Config Drift", value: "0%", description: "Continuous reconciliation" },
      { metric: "Audit Coverage", value: "100%", description: "Full Git history" },
      { metric: "Rollback Time", value: "< 1 min", description: "Git revert and sync" }
    ],
    projectStructure: [
      {
        name: "apps/",
        type: "folder",
        description: "Application manifests",
        children: [
          { name: "base/", type: "folder", description: "Base configurations" },
          { name: "overlays/", type: "folder", description: "Environment overlays" }
        ]
      },
      {
        name: "argocd/",
        type: "folder",
        description: "ArgoCD configurations",
        children: [
          { name: "apps/", type: "folder", description: "Application CRDs" },
          { name: "projects/", type: "folder", description: "Project definitions" },
          { name: "appsets/", type: "folder", description: "ApplicationSets" }
        ]
      },
      {
        name: "clusters/",
        type: "folder",
        description: "Cluster-specific configs",
        children: [
          { name: "dev-cluster/", type: "folder", description: "Development" },
          { name: "prod-cluster/", type: "folder", description: "Production" }
        ]
      },
      {
        name: "scripts/",
        type: "folder",
        description: "Helper scripts",
        children: [
          { name: "bootstrap.sh", type: "file", description: "Initial setup" },
          { name: "sync-all.sh", type: "file", description: "Force sync all apps" }
        ]
      }
    ],
    tools: [
      { name: "ArgoCD", logo: "argocd", category: "GitOps" },
      { name: "Kubernetes", logo: "kubernetes", category: "Orchestration" },
      { name: "Helm", logo: "helm", category: "Package Manager" },
      { name: "Kustomize", logo: "kustomize", category: "Configuration" },
      { name: "GitHub", logo: "github", category: "Version Control" }
    ]
  },
  {
    slug: "cost-optimization",
    title: "Cloud Cost Optimization Engine",
    tagline: "Automated cost analysis and optimization for AWS",
    caseStudy: {
      problem: "Cloud costs can spiral out of control without proper governance. Unused resources, oversized instances, and missed reserved instance opportunities lead to significant waste—often 30-40% of cloud spend.",
      solution: "Built an automated cost optimization engine using AWS Lambda and CloudWatch. The system continuously analyzes usage patterns, identifies waste, and generates actionable recommendations with projected savings.",
      approach: "Lambda functions run on schedule to analyze EC2 utilization, EBS volumes, and other resources. Machine learning models predict usage patterns for rightsizing. Results are stored in S3 and visualized through custom dashboards."
    },
    flowSteps: [
      { name: "Schedule Trigger", icon: "cloudwatch", description: "CloudWatch Events trigger" },
      { name: "Lambda Execute", icon: "lambda", description: "Run analysis functions" },
      { name: "Fetch Metrics", icon: "cloudwatch", description: "Gather utilization data" },
      { name: "Analyze Usage", icon: "python", description: "ML-based analysis" },
      { name: "Generate Report", icon: "python", description: "Create recommendations" },
      { name: "Store Results", icon: "s3", description: "Save to S3 bucket" },
      { name: "Update Infra", icon: "terraform", description: "Apply optimizations" },
      { name: "Send Alerts", icon: "sns", description: "Notify stakeholders" }
    ],
    outcomes: [
      { metric: "Cost Reduction", value: "35%", description: "Monthly AWS spend" },
      { metric: "Unused Resources", value: "100%", description: "Automatically identified" },
      { metric: "ROI", value: "10x", description: "vs. manual analysis" },
      { metric: "Analysis Time", value: "< 5 min", description: "Full account scan" }
    ],
    projectStructure: [
      {
        name: "lambda/",
        type: "folder",
        description: "Lambda function code",
        children: [
          { name: "ec2_analyzer/", type: "folder", description: "EC2 rightsizing" },
          { name: "ebs_analyzer/", type: "folder", description: "EBS optimization" },
          { name: "ri_recommender/", type: "folder", description: "Reserved instances" }
        ]
      },
      {
        name: "terraform/",
        type: "folder",
        description: "Infrastructure as Code",
        children: [
          { name: "lambda.tf", type: "file", description: "Lambda definitions" },
          { name: "cloudwatch.tf", type: "file", description: "Schedules and alarms" },
          { name: "iam.tf", type: "file", description: "Permissions" }
        ]
      },
      {
        name: "reports/",
        type: "folder",
        description: "Report templates",
        children: [
          { name: "weekly-summary.py", type: "file", description: "Weekly report" },
          { name: "savings-tracker.py", type: "file", description: "Savings tracking" }
        ]
      },
      {
        name: "tests/",
        type: "folder",
        description: "Test suites",
        children: [
          { name: "unit/", type: "folder", description: "Unit tests" },
          { name: "integration/", type: "folder", description: "Integration tests" }
        ]
      }
    ],
    tools: [
      { name: "AWS Lambda", logo: "lambda", category: "Compute" },
      { name: "CloudWatch", logo: "cloudwatch", category: "Monitoring" },
      { name: "Python", logo: "python", category: "Scripting" },
      { name: "Terraform", logo: "terraform", category: "IaC" },
      { name: "S3", logo: "s3", category: "Storage" }
    ]
  }
];

export function getProjectDesignBySlug(slug: string): ProjectDesignData | undefined {
  return projectDesigns.find(p => p.slug === slug);
}
