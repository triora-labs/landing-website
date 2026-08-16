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
      <section style={{ padding: '120px 0 60px' }}>
        <div className="wrap">
          <div className="process-header-centered">
            <span className="eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', border: '1px solid var(--line)', borderRadius: '99px', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px', background: 'var(--surface)', fontWeight: 600 }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)' }}></span>
              {t.process.eyebrow}
            </span>
            <h1>{t.process.pageHeading}</h1>
            <p className="lead">{t.process.pageLead}</p>
          </div>

          <div className="process-strip-modern">
            {t.process.strip}
          </div>

          <div className="process-timeline-v2">
            {PROCESS_STEPS.map((s) => (
              <div className="process-step-v2" key={s.number}>
                <div className="step-node">{s.number}</div>
                <div className="process-card-v2">
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                  <div className="step-deliverable-pill">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    {s.deliverable}
                  </div>
                </div>
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
