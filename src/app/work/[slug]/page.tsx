import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { PROJECTS } from '@/constants/projects'
import { t } from '@/translations/en'

interface Props { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = PROJECTS.find((p) => p.slug === slug)
  if (!project) return {}
  return { title: project.title, description: project.shortDesc }
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params
  const project = PROJECTS.find((p) => p.slug === slug)
  if (!project) notFound()

  return (
    <>
      <section className="page-header">
        <div className="wrap">
          <span className="eyebrow">{t.work.caseStudy}</span>
          <h1>{project.title}</h1>
          <p className="lead">{project.shortDesc}</p>
          <div className="pd-meta">
            <div className="pd-meta-item"><h5>Client</h5><p>{project.client}</p></div>
            <div className="pd-meta-item"><h5>Timeline</h5><p>{project.timeline}</p></div>
            <div className="pd-meta-item"><h5>Stack</h5><p>{project.stack.join(', ')}</p></div>
          </div>
          <div className="pd-image">
            <Image src={project.image} alt={project.title} width={1200} height={420} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      <section className="tight">
        <div className="wrap pd-content">
          <div>
            <h3>The Challenge</h3>
            <p>{project.challenge}</p>
            <h3>The Solution</h3>
            <p>{project.solution}</p>
            <h3>Key Features</h3>
            <ul className="pd-features">
              {project.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
            <h3>Outcome</h3>
            <p>{project.outcome}</p>
          </div>
          <aside className="pd-side">
            <h5>Technology</h5>
            <div className="tags-wrap">
              {project.stack.map((s) => <span className="tag" key={s}>{s}</span>)}
            </div>
            <h5>Have something similar?</h5>
            <p style={{ fontSize: 13, color: 'var(--muted)', marginBottom: 14 }}>Let&apos;s scope it on a short call.</p>
            <Link href="/contact" className="btn btn-primary btn-sm" style={{ width: '100%', justifyContent: 'center' }}>Discuss a Similar Project</Link>
          </aside>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <Link href="/work" className="btn btn-ghost btn-sm">← Back to all work</Link>
        </div>
      </section>
    </>
  )
}
