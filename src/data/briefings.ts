export type SystemState = 'CRITICAL' | 'OPTIMIZATION' | 'MIGRATION' | 'SECURITY' | 'SCALING';

export interface Briefing {
  id: string;
  slug: string;
  state: SystemState;
  title: string;
  thumbnail: string;
  duration: string;
  complexity: 'Low' | 'Medium' | 'High' | 'Expert';
  stack: string[];
  problemStatement: string;
  architectureDiagram?: string;
  keyResults: string[];
  videoUrl?: string;
}

export const briefings: Briefing[] = [
  {
    id: '1',
    slug: 'saturated-k8s-cluster-recovery',
    state: 'CRITICAL',
    title: 'Recovering a Saturated K8s Cluster Under 100k RPM',
    thumbnail: '/placeholder.svg',
    duration: '12m',
    complexity: 'Expert',
    stack: ['AWS', 'Kubernetes', 'Prometheus'],
    problemStatement: 'Production cluster experiencing cascading pod failures during peak traffic. SLA breach imminent with customer-facing services degrading. Immediate intervention required to restore service stability.',
    keyResults: [
      'Reduced latency by 40% within 2 hours',
      'Implemented auto-scaling policies preventing future saturation',
      'Zero downtime recovery achieved'
    ]
  },
  {
    id: '2',
    slug: 'zero-downtime-database-migration',
    state: 'MIGRATION',
    title: 'Zero-Downtime PostgreSQL to Aurora Migration',
    thumbnail: '/placeholder.svg',
    duration: '18m',
    complexity: 'High',
    stack: ['AWS', 'PostgreSQL', 'Terraform'],
    problemStatement: 'Legacy PostgreSQL instance reaching capacity limits with no maintenance window available. Business requires seamless migration to Aurora with zero customer impact.',
    keyResults: [
      'Migrated 2TB database with zero downtime',
      'Reduced query latency by 60%',
      'Cut infrastructure costs by 35%'
    ]
  },
  {
    id: '3',
    slug: 'cicd-pipeline-optimization',
    state: 'OPTIMIZATION',
    title: 'Reducing CI/CD Pipeline Time from 45min to 8min',
    thumbnail: '/placeholder.svg',
    duration: '15m',
    complexity: 'Medium',
    stack: ['Jenkins', 'Docker', 'GitHub Actions'],
    problemStatement: 'Development velocity hampered by slow pipeline execution. Teams waiting 45+ minutes for deployment feedback, causing bottlenecks and delayed releases.',
    keyResults: [
      'Pipeline time reduced by 82%',
      'Developer productivity increased by 40%',
      'Build costs reduced by 50%'
    ]
  },
  {
    id: '4',
    slug: 'security-breach-remediation',
    state: 'SECURITY',
    title: 'Implementing Zero-Trust After Security Incident',
    thumbnail: '/placeholder.svg',
    duration: '22m',
    complexity: 'Expert',
    stack: ['Azure', 'Terraform', 'Vault'],
    problemStatement: 'Post-incident security audit revealed critical gaps in network segmentation and access controls. Regulatory compliance deadline approaching with significant penalties.',
    keyResults: [
      'Achieved SOC 2 compliance within 6 weeks',
      'Implemented zero-trust network architecture',
      'Reduced attack surface by 75%'
    ]
  },
  {
    id: '5',
    slug: 'multi-region-scaling',
    state: 'SCALING',
    title: 'Scaling to Multi-Region for Global Expansion',
    thumbnail: '/placeholder.svg',
    duration: '20m',
    complexity: 'High',
    stack: ['AWS', 'Kubernetes', 'Terraform'],
    problemStatement: 'Business expanding to APAC and EU markets. Current single-region infrastructure unable to meet latency requirements for international users.',
    keyResults: [
      'Deployed to 3 regions across 2 continents',
      'Reduced APAC latency by 70%',
      'Maintained 99.99% availability during expansion'
    ]
  },
  {
    id: '6',
    slug: 'observability-stack-implementation',
    state: 'OPTIMIZATION',
    title: 'Building Enterprise Observability from Scratch',
    thumbnail: '/placeholder.svg',
    duration: '16m',
    complexity: 'Medium',
    stack: ['Prometheus', 'Grafana', 'ELK'],
    problemStatement: 'No centralized monitoring causing blind spots during incidents. Mean time to detection exceeding 30 minutes with no root cause analysis capability.',
    keyResults: [
      'MTTD reduced from 30min to 2min',
      'Implemented 50+ actionable alerts',
      'Created executive dashboards for SLA tracking'
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
