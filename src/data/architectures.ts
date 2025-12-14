export interface Architecture {
  id: string;
  title: string;
  description: string;
  category: string;
  purpose: string;
  designRationale: string;
  howItWorks: string[];
  components: string[];
  tools: string[];
  tradeoffs?: string[];
}

export const architectures: Architecture[] = [
  {
    id: "cicd-pipeline",
    title: "CI/CD Pipeline Architecture",
    description: "End-to-end deployment flow from code commit to production",
    category: "CI/CD",
    purpose: "Automate the entire software delivery lifecycle from code commit to production deployment, ensuring fast, reliable, and repeatable releases with minimal human intervention.",
    designRationale: "This pipeline was designed with a focus on speed without sacrificing safety. By implementing parallel stages where possible and using intelligent caching strategies, build times were reduced by 60%. The multi-stage approach allows for fast feedback on code quality while ensuring thorough testing before production.",
    howItWorks: [
      "Developer pushes code to feature branch, triggering the pipeline",
      "Static analysis and unit tests run in parallel for fast feedback",
      "Container image is built and pushed to registry with semantic versioning",
      "Integration tests run against ephemeral environments",
      "Successful builds auto-deploy to staging with canary analysis",
      "Manual approval gate before production with automated rollback capability"
    ],
    components: [
      "Source Control (GitHub/GitLab)",
      "CI Server (Jenkins/GitHub Actions)",
      "Container Registry (ECR/GCR)",
      "Artifact Storage (S3/GCS)",
      "Deployment Orchestrator",
      "Monitoring & Alerting"
    ],
    tools: ["GitHub Actions", "Docker", "Kubernetes", "ArgoCD", "SonarQube", "Trivy"],
    tradeoffs: [
      "Parallel testing requires more compute resources but significantly reduces feedback time",
      "Ephemeral environments increase infrastructure cost but improve test reliability",
      "Manual approval gates slow deployment but reduce production incidents"
    ]
  },
  {
    id: "kubernetes-cluster",
    title: "Kubernetes Cluster Design",
    description: "Multi-zone high-availability cluster configuration",
    category: "Kubernetes",
    purpose: "Provide a resilient, scalable container orchestration platform that can withstand zone failures while maintaining consistent performance and enabling zero-downtime deployments.",
    designRationale: "The cluster spans three availability zones to ensure high availability. Node pools are segmented by workload type (system, application, GPU) to optimize cost and performance. Pod disruption budgets and topology spread constraints ensure workloads remain available during maintenance.",
    howItWorks: [
      "Control plane runs across 3 zones with automated leader election",
      "Worker nodes auto-scale based on pending pod resources",
      "Ingress controllers handle external traffic with geographic load balancing",
      "Service mesh provides mTLS, observability, and traffic management",
      "Persistent storage uses zone-aware provisioning for data locality",
      "Cluster autoscaler adjusts capacity based on resource utilization"
    ],
    components: [
      "Control Plane (Multi-zone)",
      "Node Pools (System/App/GPU)",
      "Ingress Controller (NGINX/Istio)",
      "Service Mesh (Istio/Linkerd)",
      "CSI Drivers (EBS/GCE-PD)",
      "Cluster Autoscaler"
    ],
    tools: ["Kubernetes", "Helm", "Istio", "Prometheus", "Velero", "Karpenter"],
    tradeoffs: [
      "Multi-zone deployment increases network costs but ensures availability",
      "Service mesh adds latency overhead but provides essential security and observability",
      "Separate node pools increase operational complexity but optimize resource utilization"
    ]
  },
  {
    id: "monitoring-stack",
    title: "Monitoring Stack",
    description: "Prometheus + Grafana observability platform",
    category: "Monitoring",
    purpose: "Provide comprehensive visibility into system health, performance, and behavior through metrics, logs, and traces, enabling proactive issue detection and rapid incident response.",
    designRationale: "A unified observability stack reduces cognitive load during incidents. By correlating metrics, logs, and traces in a single platform, MTTR is reduced significantly. The architecture uses a pull-based model for metrics to avoid overwhelming monitored services.",
    howItWorks: [
      "Prometheus scrapes metrics from application and infrastructure endpoints",
      "Alertmanager routes alerts based on severity and ownership",
      "Grafana provides unified dashboards with cross-data-source queries",
      "Loki aggregates logs with labels matching Prometheus for easy correlation",
      "Tempo stores distributed traces linked to logs and metrics",
      "Recording rules pre-compute expensive queries for dashboard performance"
    ],
    components: [
      "Prometheus (Metrics collection)",
      "Alertmanager (Alert routing)",
      "Grafana (Visualization)",
      "Loki (Log aggregation)",
      "Tempo (Distributed tracing)",
      "Thanos (Long-term storage)"
    ],
    tools: ["Prometheus", "Grafana", "Loki", "Tempo", "Thanos", "PagerDuty"],
    tradeoffs: [
      "Pull-based metrics are simpler but require service discovery configuration",
      "Storing high-cardinality data enables detailed analysis but increases storage costs",
      "Centralized alerting simplifies operations but creates a potential single point of failure"
    ]
  },
  {
    id: "multi-cloud",
    title: "Multi-Cloud Infrastructure",
    description: "Hybrid cloud deployment architecture",
    category: "Infrastructure",
    purpose: "Enable workload portability across cloud providers and on-premises infrastructure, avoiding vendor lock-in while optimizing for cost, performance, and compliance requirements.",
    designRationale: "The architecture abstracts cloud-specific services behind consistent interfaces using Terraform modules. This allows teams to deploy workloads to the most appropriate environment without rewriting infrastructure code, while maintaining security and compliance standards.",
    howItWorks: [
      "Terraform modules abstract cloud-specific resources behind common interfaces",
      "Service mesh connects workloads across cloud boundaries securely",
      "Centralized identity federation provides consistent authentication",
      "Data replication ensures business continuity across regions",
      "Cost optimization engine recommends workload placement",
      "Unified logging and monitoring spans all environments"
    ],
    components: [
      "Terraform Cloud (IaC orchestration)",
      "Cross-cloud Service Mesh",
      "Identity Federation (OIDC)",
      "Data Replication Layer",
      "Cloud Cost Management",
      "Unified Observability"
    ],
    tools: ["Terraform", "AWS", "Azure", "GCP", "Vault", "Consul"],
    tradeoffs: [
      "Abstraction layers add development overhead but enable flexibility",
      "Multi-cloud networking is complex but reduces blast radius",
      "Avoiding managed services increases operational burden but prevents lock-in"
    ]
  },
  {
    id: "gitops-workflow",
    title: "GitOps Workflow",
    description: "ArgoCD-based continuous deployment",
    category: "GitOps",
    purpose: "Implement a declarative, version-controlled approach to infrastructure and application deployment where Git serves as the single source of truth for the desired state of the system.",
    designRationale: "GitOps provides an audit trail for all changes, enables easy rollbacks, and allows developers to use familiar Git workflows for infrastructure changes. ArgoCD continuously reconciles the actual state with the desired state, self-healing configuration drift.",
    howItWorks: [
      "All infrastructure and application configs stored in Git repositories",
      "Pull requests trigger automated validation and preview environments",
      "ArgoCD monitors repos and syncs changes to target clusters",
      "Helm charts and Kustomize overlays manage environment variations",
      "Automated drift detection alerts on manual cluster changes",
      "Progressive delivery with automated canary analysis"
    ],
    components: [
      "Git Repositories (Source of Truth)",
      "ArgoCD (GitOps Controller)",
      "Helm/Kustomize (Config Management)",
      "Sealed Secrets (Secret Management)",
      "Preview Environments",
      "Rollout Controller"
    ],
    tools: ["ArgoCD", "Helm", "Kustomize", "Sealed Secrets", "Argo Rollouts", "GitHub"],
    tradeoffs: [
      "Everything-as-code increases Git repository complexity but improves auditability",
      "Continuous reconciliation may revert intentional manual changes",
      "Learning curve for teams new to declarative configuration"
    ]
  },
  {
    id: "security-architecture",
    title: "Security Architecture",
    description: "Zero-trust network and security controls",
    category: "Security",
    purpose: "Implement defense-in-depth security controls based on zero-trust principles, ensuring that no implicit trust is granted based on network location and all access is continuously verified.",
    designRationale: "Traditional perimeter security is insufficient for modern distributed systems. This architecture assumes breach and implements multiple layers of security controls. Every request is authenticated, authorized, and encrypted regardless of source.",
    howItWorks: [
      "Identity-aware proxy authenticates all requests at the edge",
      "Service mesh enforces mTLS between all services",
      "Policy engine evaluates access requests against RBAC and ABAC rules",
      "Secrets are dynamically generated and rotated using Vault",
      "Network policies restrict pod-to-pod communication",
      "Continuous security scanning in CI/CD and runtime"
    ],
    components: [
      "Identity-Aware Proxy (BeyondCorp)",
      "Service Mesh (mTLS)",
      "Policy Engine (OPA)",
      "Secrets Management (Vault)",
      "Network Policies",
      "Security Scanning"
    ],
    tools: ["HashiCorp Vault", "OPA", "Falco", "Trivy", "Istio", "Cloudflare Access"],
    tradeoffs: [
      "Zero-trust adds latency for authentication checks but significantly improves security",
      "Dynamic secrets require application changes but eliminate credential exposure risk",
      "Strict network policies may initially break legitimate traffic flows"
    ]
  }
];

export function getArchitectureById(id: string): Architecture | undefined {
  return architectures.find(arch => arch.id === id);
}

export function getArchitectureBySlug(slug: string): Architecture | undefined {
  return architectures.find(arch => arch.id === slug);
}
