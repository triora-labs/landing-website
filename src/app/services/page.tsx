import type { Metadata } from 'next'
import Link from 'next/link'
import { SERVICES } from '@/constants/services'
import CtaBanner from '@/components/sections/CtaBanner'
import { t } from '@/translations/en'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Website development, web applications, e-commerce, UI/UX design, cloud & DevOps, and modernization services.',
}

export default function ServicesPage() {
  return (
    <>
      <section className="page-header">
        <div className="wrap">
          <span className="eyebrow">{t.services.eyebrow}</span>
          <h1>{t.services.pageHeading}</h1>
          <p className="lead">{t.services.pageLead}</p>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          {SERVICES.map((s) => (
            <div className="service-detail" key={s.id} id={s.id}>
              <div>
                <span className="eyebrow">{s.number}</span>
                <h3>{s.title}</h3>
                <p style={{ color: 'var(--muted)', fontSize: 14, marginTop: 8 }}>{s.shortDesc}</p>
                <Link href={s.ctaHref} className="btn btn-primary btn-sm service-cta">{s.ctaLabel}</Link>
              </div>
              <ul>
                {s.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        heading={t.services.ctaHeading}
        subheading={t.services.ctaSub}
        primaryLabel={t.services.ctaBtn}
        primaryHref="/contact"
      />
    </>
  )
}
