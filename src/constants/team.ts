export type TeamMember = {
  role: string
  specialty: string
  description: string
  icon: string
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    role: 'Frontend / Product Developer',
    specialty: 'User Experience, Interfaces & Design Systems',
    description: 'Focused on modern interfaces, responsive experiences, intuitive user journeys, and building scalable component systems that feel effortless to use.',
    icon: '🎨',
  },
  {
    role: 'Backend / Application Developer',
    specialty: 'APIs, Databases & Business Logic',
    description: 'Building reliable APIs, business logic, integrations, databases, and application architectures designed for security, scalability, and maintainability.',
    icon: '⚙️',
  },
  {
    role: 'Cloud / DevOps Engineer',
    specialty: 'Infrastructure, Automation & Operations',
    description: 'Designing cloud infrastructure, automating deployment pipelines, improving reliability, and taking applications safely from code commit to production.',
    icon: '☁️',
  },
]
