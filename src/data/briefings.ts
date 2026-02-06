import k8sClusterRecovery from '@/assets/briefings/k8s-cluster-recovery.jpg';
import postgresAuroraMigration from '@/assets/briefings/postgres-aurora-migration.jpg';
import cicdOptimization from '@/assets/briefings/cicd-optimization.jpg';
import zeroTrustSecurity from '@/assets/briefings/zero-trust-security.jpg';
import multiRegionScaling from '@/assets/briefings/multi-region-scaling.jpg';
import observabilityStack from '@/assets/briefings/observability-stack.jpg';

export type SystemState = 'CRITICAL' | 'OPTIMIZATION' | 'MIGRATION' | 'SECURITY' | 'SCALING';

export interface BriefingChapter {
  title: string;
  timestamp: string;
  content: string;
  codeSnippet?: {
    language: string;
    code: string;
  };
}

export interface Briefing {
  id: string;
  slug: string;
  state: SystemState;
  title: string;
  description: string;
  thumbnail: string;
  duration: string;
  complexity: 'Low' | 'Medium' | 'High' | 'Expert';
  stack: string[];
  problemStatement: string;
  architectureDiagram?: string;
  keyResults: string[];
  videoUrl?: string;
  youtubeId?: string;
  chapters: BriefingChapter[];
  downloadPdf?: string;
  impactTagline: string;
}

export const briefings: Briefing[] = [
  {
    id: '1',
    slug: 'saturated-k8s-cluster-recovery',
    state: 'CRITICAL',
    title: 'Recovering a Saturated K8s Cluster Under 100k RPM',
    description: 'A deep-dive into emergency cluster recovery techniques when facing cascading pod failures during peak traffic events.',
    thumbnail: k8sClusterRecovery,
    duration: '12m',
    complexity: 'Expert',
    stack: ['AWS', 'Kubernetes', 'Prometheus'],
    problemStatement: 'Production cluster experiencing cascading pod failures during peak traffic. SLA breach imminent with customer-facing services degrading. Immediate intervention required to restore service stability.',
    keyResults: [
      'Reduced latency by 40% within 2 hours',
      'Implemented auto-scaling policies preventing future saturation',
      'Zero downtime recovery achieved'
    ],
    youtubeId: 'dQw4w9WgXcQ',
    impactTagline: 'How I Reduced Latency by 40% During a Crisis',
    chapters: [
      {
        title: 'The Incident',
        timestamp: '0:00',
        content: 'At 2:47 AM, our alerting system triggered a P1 incident. The production Kubernetes cluster was experiencing cascading pod failures with CPU utilization spiking to 98% across all nodes. Customer-facing APIs started timing out, and our SLA was at risk.'
      },
      {
        title: 'Discovery & Analysis',
        timestamp: '3:00',
        content: 'Using Prometheus metrics and kubectl describe, we identified the root cause: a memory leak in the payment service combined with insufficient resource limits. The HPA was scaling pods faster than nodes could be provisioned.',
        codeSnippet: {
          language: 'bash',
          code: `kubectl top pods -n production --sort-by=memory
kubectl describe hpa payment-service -n production
kubectl get events -n production --sort-by='.lastTimestamp'`
        }
      },
      {
        title: 'Implementation',
        timestamp: '7:00',
        content: 'We implemented a multi-pronged solution: emergency resource limits, cluster autoscaler optimization, and pod disruption budgets to prevent future cascading failures.',
        codeSnippet: {
          language: 'yaml',
          code: `apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: payment-service
spec:
  minReplicas: 5
  maxReplicas: 50
  behavior:
    scaleDown:
      stabilizationWindowSeconds: 300
      policies:
      - type: Percent
        value: 10
        periodSeconds: 60`
        }
      },
      {
        title: 'Results & Prevention',
        timestamp: '10:00',
        content: 'The cluster stabilized within 2 hours. We reduced latency by 40% and implemented proactive auto-scaling policies. Post-incident, we created runbooks and chaos engineering tests to validate our resilience.'
      }
    ]
  },
  {
    id: '2',
    slug: 'zero-downtime-database-migration',
    state: 'MIGRATION',
    title: 'Zero-Downtime PostgreSQL to Aurora Migration',
    description: 'Enterprise-grade database migration strategy for seamless transition to AWS Aurora with zero customer impact.',
    thumbnail: postgresAuroraMigration,
    duration: '18m',
    complexity: 'High',
    stack: ['AWS', 'PostgreSQL', 'Terraform'],
    problemStatement: 'Legacy PostgreSQL instance reaching capacity limits with no maintenance window available. Business requires seamless migration to Aurora with zero customer impact.',
    keyResults: [
      'Migrated 2TB database with zero downtime',
      'Reduced query latency by 60%',
      'Cut infrastructure costs by 35%'
    ],
    youtubeId: 'dQw4w9WgXcQ',
    impactTagline: 'How I Migrated 2TB with Zero Downtime',
    chapters: [
      {
        title: 'The Challenge',
        timestamp: '0:00',
        content: 'Our PostgreSQL instance was approaching storage limits with 2TB of critical data. The business could not afford any downtime, and we needed to migrate to Aurora for better scalability and cost efficiency.'
      },
      {
        title: 'Migration Strategy',
        timestamp: '4:00',
        content: 'We designed a blue-green migration strategy using AWS DMS for continuous replication. This allowed us to sync data in real-time while preparing the Aurora cluster.',
        codeSnippet: {
          language: 'hcl',
          code: `resource "aws_dms_replication_task" "postgres_to_aurora" {
  migration_type            = "full-load-and-cdc"
  replication_instance_arn  = aws_dms_replication_instance.main.arn
  source_endpoint_arn       = aws_dms_endpoint.postgres.arn
  target_endpoint_arn       = aws_dms_endpoint.aurora.arn
  table_mappings            = file("table-mappings.json")
}`
        }
      },
      {
        title: 'The Cutover',
        timestamp: '12:00',
        content: 'Using connection pooling with PgBouncer and DNS-based failover, we executed the cutover in under 30 seconds. Application connections seamlessly redirected to Aurora.'
      },
      {
        title: 'Post-Migration Optimization',
        timestamp: '15:00',
        content: 'After migration, we optimized Aurora parameters, implemented read replicas, and achieved 60% latency reduction with 35% cost savings through reserved instances.'
      }
    ]
  },
  {
    id: '3',
    slug: 'cicd-pipeline-optimization',
    state: 'OPTIMIZATION',
    title: 'Reducing CI/CD Pipeline Time from 45min to 8min',
    description: 'Systematic approach to pipeline optimization through caching, parallelization, and smart build strategies.',
    thumbnail: cicdOptimization,
    duration: '15m',
    complexity: 'Medium',
    stack: ['Jenkins', 'Docker', 'GitHub Actions'],
    problemStatement: 'Development velocity hampered by slow pipeline execution. Teams waiting 45+ minutes for deployment feedback, causing bottlenecks and delayed releases.',
    keyResults: [
      'Pipeline time reduced by 82%',
      'Developer productivity increased by 40%',
      'Build costs reduced by 50%'
    ],
    youtubeId: 'dQw4w9WgXcQ',
    impactTagline: 'How I Reduced Deployment Time by 82%',
    chapters: [
      {
        title: 'Pipeline Analysis',
        timestamp: '0:00',
        content: 'A 45-minute pipeline was killing developer productivity. We analyzed each stage and identified major bottlenecks: redundant dependency installations, sequential testing, and unoptimized Docker builds.'
      },
      {
        title: 'Caching Strategy',
        timestamp: '4:00',
        content: 'We implemented multi-layer caching for dependencies, Docker layers, and test artifacts. This alone reduced build time by 60%.',
        codeSnippet: {
          language: 'yaml',
          code: `- name: Cache node modules
  uses: actions/cache@v3
  with:
    path: |
      ~/.npm
      node_modules
    key: \${{ runner.os }}-node-\${{ hashFiles('**/package-lock.json') }}
    restore-keys: |
      \${{ runner.os }}-node-`
        }
      },
      {
        title: 'Parallelization',
        timestamp: '8:00',
        content: 'We restructured tests to run in parallel using matrix builds and split the monolithic pipeline into independent stages that could execute concurrently.',
        codeSnippet: {
          language: 'yaml',
          code: `strategy:
  matrix:
    shard: [1, 2, 3, 4]
steps:
  - run: npm test -- --shard=\${{ matrix.shard }}/4`
        }
      },
      {
        title: 'Final Results',
        timestamp: '12:00',
        content: 'The optimized pipeline runs in 8 minutes. Developer feedback loops shortened dramatically, PRs merge faster, and we reduced our GitHub Actions costs by 50%.'
      }
    ]
  },
  {
    id: '4',
    slug: 'security-breach-remediation',
    state: 'SECURITY',
    title: 'Implementing Zero-Trust After Security Incident',
    description: 'Post-incident transformation to zero-trust architecture with comprehensive security controls and compliance.',
    thumbnail: zeroTrustSecurity,
    duration: '22m',
    complexity: 'Expert',
    stack: ['Azure', 'Terraform', 'Vault'],
    problemStatement: 'Post-incident security audit revealed critical gaps in network segmentation and access controls. Regulatory compliance deadline approaching with significant penalties.',
    keyResults: [
      'Achieved SOC 2 compliance within 6 weeks',
      'Implemented zero-trust network architecture',
      'Reduced attack surface by 75%'
    ],
    youtubeId: 'dQw4w9WgXcQ',
    impactTagline: 'How I Reduced Attack Surface by 75%',
    chapters: [
      {
        title: 'The Breach',
        timestamp: '0:00',
        content: 'A security incident exposed critical vulnerabilities in our network architecture. The audit revealed flat network topology, overprivileged service accounts, and missing encryption at rest.'
      },
      {
        title: 'Zero-Trust Design',
        timestamp: '5:00',
        content: 'We designed a zero-trust architecture with micro-segmentation, identity-based access, and continuous verification. Every request would be authenticated and authorized.',
        codeSnippet: {
          language: 'hcl',
          code: `resource "azurerm_network_security_group" "zero_trust" {
  name = "zero-trust-nsg"
  
  security_rule {
    name                       = "DenyAllInbound"
    priority                   = 4096
    direction                  = "Inbound"
    access                     = "Deny"
    protocol                   = "*"
    source_address_prefix      = "*"
    destination_address_prefix = "*"
  }
}`
        }
      },
      {
        title: 'Secrets Management',
        timestamp: '12:00',
        content: 'We implemented HashiCorp Vault for centralized secrets management with automatic rotation and audit logging. All static credentials were eliminated.',
        codeSnippet: {
          language: 'bash',
          code: `vault secrets enable -path=production database
vault write production/config/postgres \\
  plugin_name=postgresql-database-plugin \\
  allowed_roles="app-readonly,app-readwrite" \\
  connection_url="postgresql://{{username}}:{{password}}@db:5432"`
        }
      },
      {
        title: 'Compliance Achievement',
        timestamp: '18:00',
        content: 'Within 6 weeks, we achieved SOC 2 Type II compliance. The attack surface was reduced by 75%, and continuous security monitoring was established.'
      }
    ]
  },
  {
    id: '5',
    slug: 'multi-region-scaling',
    state: 'SCALING',
    title: 'Scaling to Multi-Region for Global Expansion',
    description: 'Strategic infrastructure expansion across continents with data residency compliance and latency optimization.',
    thumbnail: multiRegionScaling,
    duration: '20m',
    complexity: 'High',
    stack: ['AWS', 'Kubernetes', 'Terraform'],
    problemStatement: 'Business expanding to APAC and EU markets. Current single-region infrastructure unable to meet latency requirements for international users.',
    keyResults: [
      'Deployed to 3 regions across 2 continents',
      'Reduced APAC latency by 70%',
      'Maintained 99.99% availability during expansion'
    ],
    youtubeId: 'dQw4w9WgXcQ',
    impactTagline: 'How I Reduced APAC Latency by 70%',
    chapters: [
      {
        title: 'Global Requirements',
        timestamp: '0:00',
        content: 'The business was expanding to Asia-Pacific and Europe. Users in Singapore experienced 400ms+ latency to our US-East infrastructure, and GDPR required EU data residency.'
      },
      {
        title: 'Multi-Region Architecture',
        timestamp: '5:00',
        content: 'We designed a multi-region architecture with regional EKS clusters, global Aurora with read replicas, and CloudFront for edge caching.',
        codeSnippet: {
          language: 'hcl',
          code: `module "eks_cluster" {
  for_each = toset(["us-east-1", "eu-west-1", "ap-southeast-1"])
  source   = "./modules/eks"
  region   = each.key
  
  cluster_name = "production-\${each.key}"
  node_groups  = var.node_groups[each.key]
}`
        }
      },
      {
        title: 'Data Replication',
        timestamp: '12:00',
        content: 'We implemented Aurora Global Database for sub-second cross-region replication and configured regional failover with Route 53 health checks.',
        codeSnippet: {
          language: 'hcl',
          code: `resource "aws_rds_global_cluster" "main" {
  global_cluster_identifier = "production-global"
  engine                    = "aurora-postgresql"
  engine_version           = "14.6"
  database_name            = "app"
}`
        }
      },
      {
        title: 'Traffic Management',
        timestamp: '16:00',
        content: 'Using Route 53 geolocation routing and CloudFront, we reduced APAC latency by 70%. Users are automatically routed to the nearest region while maintaining 99.99% availability.'
      }
    ]
  },
  {
    id: '6',
    slug: 'observability-stack-implementation',
    state: 'OPTIMIZATION',
    title: 'Building Enterprise Observability from Scratch',
    description: 'Complete observability transformation with metrics, logging, tracing, and executive dashboards.',
    thumbnail: observabilityStack,
    duration: '16m',
    complexity: 'Medium',
    stack: ['Prometheus', 'Grafana', 'ELK'],
    problemStatement: 'No centralized monitoring causing blind spots during incidents. Mean time to detection exceeding 30 minutes with no root cause analysis capability.',
    keyResults: [
      'MTTD reduced from 30min to 2min',
      'Implemented 50+ actionable alerts',
      'Created executive dashboards for SLA tracking'
    ],
    youtubeId: 'dQw4w9WgXcQ',
    impactTagline: 'How I Cut Incident Detection to 2 Minutes',
    chapters: [
      {
        title: 'The Visibility Problem',
        timestamp: '0:00',
        content: 'Incidents were discovered by customers before our team. With no centralized monitoring, MTTD exceeded 30 minutes, and root cause analysis was guesswork based on scattered logs.'
      },
      {
        title: 'Metrics Pipeline',
        timestamp: '4:00',
        content: 'We deployed Prometheus with service discovery for automatic target detection. Custom exporters were built for legacy applications.',
        codeSnippet: {
          language: 'yaml',
          code: `scrape_configs:
  - job_name: 'kubernetes-pods'
    kubernetes_sd_configs:
      - role: pod
    relabel_configs:
      - source_labels: [__meta_kubernetes_pod_annotation_prometheus_io_scrape]
        action: keep
        regex: true`
        }
      },
      {
        title: 'Log Aggregation',
        timestamp: '9:00',
        content: 'ELK stack was deployed with structured logging standards. Every service now emits correlation IDs, enabling distributed tracing across microservices.',
        codeSnippet: {
          language: 'json',
          code: `{
  "timestamp": "2024-01-15T10:30:00Z",
  "level": "ERROR",
  "service": "payment-api",
  "trace_id": "abc123",
  "span_id": "def456",
  "message": "Payment processing failed",
  "error_code": "INSUFFICIENT_FUNDS"
}`
        }
      },
      {
        title: 'Alerting & Dashboards',
        timestamp: '13:00',
        content: 'We implemented SLO-based alerting with 50+ actionable alerts. Executive dashboards now show real-time SLA compliance, and MTTD dropped to under 2 minutes.'
      }
    ]
  }
];

export const stateColors: Record<SystemState, { bg: string; text: string; border: string }> = {
  CRITICAL: { bg: 'bg-red-500/10', text: 'text-red-600 dark:text-red-400', border: 'border-red-500/20' },
  OPTIMIZATION: { bg: 'bg-emerald-500/10', text: 'text-emerald-600 dark:text-emerald-400', border: 'border-emerald-500/20' },
  MIGRATION: { bg: 'bg-blue-500/10', text: 'text-blue-600 dark:text-blue-400', border: 'border-blue-500/20' },
  SECURITY: { bg: 'bg-orange-500/10', text: 'text-orange-600 dark:text-orange-400', border: 'border-orange-500/20' },
  SCALING: { bg: 'bg-purple-500/10', text: 'text-purple-600 dark:text-purple-400', border: 'border-purple-500/20' }
};
