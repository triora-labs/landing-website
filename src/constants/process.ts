export type ProcessStep = {
  number: string
  title: string
  description: string
  deliverable: string
}

export const PROCESS_STEPS: ProcessStep[] = [
  { number: '01', title: 'Discover', description: 'Understand your business, users, goals, constraints, and technical requirements.', deliverable: 'Requirements specification' },
  { number: '02', title: 'Plan', description: 'Define scope, architecture, technology, timeline, and delivery milestones.', deliverable: 'Project roadmap & timeline' },
  { number: '03', title: 'Design', description: 'Create the user experience and interface before development begins.', deliverable: 'Wireframes & user flows' },
  { number: '04', title: 'Build', description: 'Develop the product with clean, maintainable, production-focused engineering practices.', deliverable: 'Clean modular codebase' },
  { number: '05', title: 'Test', description: 'Validate functionality, responsiveness, security, performance, and real-world behavior.', deliverable: 'End-to-end testing suite' },
  { number: '06', title: 'Deploy', description: 'Automate deployment and release the application into production.', deliverable: 'Live cloud environment' },
  { number: '07', title: 'Improve', description: 'Monitor, optimize, maintain, and evolve the product as your business grows.', deliverable: 'Live telemetry & alerts' },
]
