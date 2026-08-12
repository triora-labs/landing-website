import Image from 'next/image'
import Link from 'next/link'
import { PROJECTS } from '@/constants/projects'
import { t } from '@/translations/en'

interface Props {
  limit?: number
  showHeader?: boolean
}

export default function ProjectsGrid({ limit, showHeader = true }: Props) {
  const items = limit ? PROJECTS.slice(0, limit) : PROJECTS
  return (
    <section>
      <div className="wrap">
        {showHeader && (
          <div className="section-head-row">
            <div className="section-head" style={{ marginBottom: 0 }}>
              <span className="eyebrow">{t.work.eyebrow}</span>
              <h2>{t.work.heading}</h2>
            </div>
            <Link href="/work" className="btn btn-ghost btn-sm">{t.work.viewAll}</Link>
          </div>
        )}
        <div className="projects-grid">
          {items.map((p) => (
            <Link key={p.slug} href={`/work/${p.slug}`} className="project-card">
              <div className="project-thumb">
                <Image src={p.image} alt={p.title} width={900} height={230} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div className="project-body">
                <div className="project-tags">
                  {p.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
                </div>
                <h3>{p.title}</h3>
                <p>{p.shortDesc}</p>
                <span className="project-link">{t.work.viewCaseStudy}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
