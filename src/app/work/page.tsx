import type { Metadata } from 'next'
import ProjectsGrid from '@/components/sections/ProjectsGrid'
import { t } from '@/translations/en'

export const metadata: Metadata = {
  title: 'Work',
  description: "Selected projects and case studies from Triora Labs.",
}

export default function WorkPage() {
  return (
    <>
      <section className="page-header">
        <div className="wrap">
          <span className="eyebrow">{t.work.pageEyebrow}</span>
          <h1>{t.work.pageHeading}</h1>
          <p className="lead">{t.work.pageLead}</p>
        </div>
      </section>
      <section className="tight">
        <div className="wrap">
          <ProjectsGrid showHeader={false} />
        </div>
      </section>
    </>
  )
}
