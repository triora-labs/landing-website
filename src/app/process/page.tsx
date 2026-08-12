import type { Metadata } from 'next'
import { PROCESS_STEPS } from '@/constants/process'
import CtaBanner from '@/components/sections/CtaBanner'
import { t } from '@/translations/en'

export const metadata: Metadata = {
  title: 'Process',
  description: 'Our 7-step engineering process — from discovery to production.',
}

export default function ProcessPage() {
  return (
    <>
      <section className="page-header">
        <div className="wrap">
          <span className="eyebrow">{t.process.eyebrow}</span>
          <h1>{t.process.pageHeading}</h1>
          <p className="lead">{t.process.pageLead}</p>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <div className="process-strip">{t.process.strip}</div>
          <div className="process-grid">
            {PROCESS_STEPS.map((s) => (
              <div className="process-card" key={s.number} data-num={s.number}>
                <div className="pc-num">{s.number}</div>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <span className="pc-deliverable">↳ {s.deliverable}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        heading={t.process.ctaHeading}
        subheading={t.process.ctaDesc}
        primaryLabel="Start a Project"
        primaryHref="/contact"
      />
    </>
  )
}
