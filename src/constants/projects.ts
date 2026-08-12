export type Project = {
  slug: string
  title: string
  shortDesc: string
  tags: string[]
  image: string
  challenge: string
  solution: string
  features: string[]
  outcome: string
  client: string
  timeline: string
  stack: string[]
}

export const PROJECTS: Project[] = [
  {
    slug: 'workforce-management-platform',
    title: 'Workforce Management Platform',
    shortDesc: 'A centralized web platform for approvals, timesheets, and employee operations.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80',
    challenge: 'Manual workflows, approvals, and employee operations were spread across disconnected legacy spreadsheets and email threads.',
    solution: 'A centralized web platform featuring configurable approval workflows, role-based security access, automated notifications, and real-time dashboard analytics.',
    features: ['Configurable multi-step approval workflow', 'Timesheet period configuration with change history', 'Revoke & re-approval cycles', 'Role-based access control', 'Real-time dashboard analytics'],
    outcome: 'Reduced approval cycle time by 70% and eliminated manual tracking across disconnected tools.',
    client: 'Enterprise HR Team',
    timeline: '12 weeks',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
  },
  {
    slug: 'cloud-infrastructure-modernization',
    title: 'Cloud Infrastructure Modernization',
    shortDesc: 'Infrastructure as Code with zero-downtime blue/green deployment pipelines.',
    tags: ['AWS', 'Terraform', 'Docker'],
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&q=80',
    challenge: 'Manual server updates and lack of automated CI/CD resulted in high deployment risk and occasional downtime during releases.',
    solution: 'Designed Infrastructure as Code with Terraform, containerized application services, and established zero-downtime blue/green deployment pipelines.',
    features: ['Full Terraform IaC setup', 'Docker containerization', 'Automated CI/CD via GitHub Actions', 'Zero-downtime blue/green deployments', 'Cost & performance optimization'],
    outcome: 'Deployment frequency increased 4× while downtime incidents dropped to zero.',
    client: 'SaaS Product Team',
    timeline: '8 weeks',
    stack: ['AWS', 'Terraform', 'Docker', 'GitHub Actions'],
  },
  {
    slug: 'high-performance-commerce-storefront',
    title: 'High-Performance Commerce Storefront',
    shortDesc: 'A headless e-commerce storefront with sub-second load times and unified payment processing.',
    tags: ['Next.js', 'E-Commerce', 'API'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=900&q=80',
    challenge: 'Existing storefront suffered slow page loads on mobile and struggled with inventory sync during peak traffic surges.',
    solution: 'Built a headless e-commerce storefront leveraging Next.js static regeneration, optimized image delivery, and unified payment processing API integrations.',
    features: ['Headless Next.js architecture', 'Static regeneration for sub-second loads', 'Optimized image delivery pipeline', 'Unified payment processing', 'Real-time inventory sync'],
    outcome: 'Mobile page load improved from 6.2s to 0.8s. Conversion rate increased 28%.',
    client: 'D2C Retail Brand',
    timeline: '10 weeks',
    stack: ['Next.js', 'Stripe', 'Cloudflare', 'PostgreSQL'],
  },
  {
    slug: 'enterprise-ops-portal',
    title: 'Enterprise Operations Portal',
    shortDesc: 'Operational telemetry dashboard with real-time status monitors and deployment rollback controls.',
    tags: ['React', 'Dashboard', 'RBAC'],
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80',
    challenge: 'Internal system visibility was fragmented, making it hard to track live deployment statuses across multiple regional environments.',
    solution: 'Developed an operational telemetry dashboard with real-time status monitors, deployment rollback controls, and secure RBAC integration.',
    features: ['Real-time status monitoring', 'Deployment rollback controls', 'Secure RBAC integration', 'Multi-region environment tracking', 'Alert & incident management'],
    outcome: 'Mean time to detect (MTTD) incidents reduced from 25 minutes to under 3 minutes.',
    client: 'Enterprise DevOps Team',
    timeline: '14 weeks',
    stack: ['React', 'Node.js', 'WebSocket', 'InfluxDB'],
  },
]
