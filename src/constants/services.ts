export type Service = {
  id: string
  number: string
  title: string
  shortDesc: string
  bullets: string[]
  ctaLabel: string
  ctaHref: string
}

export const SERVICES: Service[] = [
  {
    id: 'website-development',
    number: '01',
    title: 'Website Development',
    shortDesc: 'High-performance websites designed around your brand, audience, and business goals.',
    bullets: ['Corporate websites', 'Startup websites', 'Landing pages', 'Marketing websites', 'SEO-ready architecture', 'Responsive design', 'Performance optimization'],
    ctaLabel: 'Explore Website Development →',
    ctaHref: '/contact?service=website-development',
  },
  {
    id: 'web-applications',
    number: '02',
    title: 'Web Applications',
    shortDesc: 'Custom web applications built around the way your business actually works.',
    bullets: ['Business applications', 'Admin dashboards', 'Customer portals', 'Internal tools', 'Workflow systems', 'Authentication & Security', 'API integrations'],
    ctaLabel: 'Build a Web Application →',
    ctaHref: '/contact?service=web-applications',
  },
  {
    id: 'e-commerce',
    number: '03',
    title: 'E-Commerce',
    shortDesc: 'Scalable commerce experiences designed to turn visitors into customers.',
    bullets: ['Product catalogs', 'Shopping carts & checkout', 'Payment gateway integration', 'Order management', 'Custom admin systems', 'Inventory workflows', 'Third-party integrations'],
    ctaLabel: 'Build Your Store →',
    ctaHref: '/contact?service=e-commerce',
  },
  {
    id: 'ui-ux-design',
    number: '04',
    title: 'UI/UX & Product Design',
    shortDesc: 'Interfaces that are clear, intuitive, and designed around real users.',
    bullets: ['UX research & strategy', 'Interactive wireframes', 'UI design systems', 'Design tokens & component libraries', 'Responsive interfaces', 'Clickable prototypes', 'User flow optimization'],
    ctaLabel: 'Design a Better Product →',
    ctaHref: '/contact?service=ui-ux-design',
  },
  {
    id: 'cloud-devops',
    number: '05',
    title: 'Cloud & DevOps',
    shortDesc: 'Reliable cloud infrastructure and automated delivery pipelines.',
    bullets: ['AWS & Azure Architecture', 'Docker & Containerization', 'Automated CI/CD Pipelines', 'Infrastructure as Code (Terraform)', 'Cloud Networking & Security', 'Monitoring & Observability', 'Zero-Downtime Deployments'],
    ctaLabel: 'Improve Your Infrastructure →',
    ctaHref: '/contact?service=cloud-devops',
  },
  {
    id: 'modernization-support',
    number: '06',
    title: 'Modernization & Support',
    shortDesc: 'Already have a product that works but needs performance or design improvements?',
    bullets: ['Legacy system modernization', 'Core Web Vitals & speed optimization', 'Cloud migration & containerization', 'Website & UI redesign', 'Bug fixing & technical debt reduction', 'Ongoing technical maintenance'],
    ctaLabel: 'Improve an Existing Product →',
    ctaHref: '/contact?service=modernization-support',
  },
]
