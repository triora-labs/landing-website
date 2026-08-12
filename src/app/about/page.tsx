import type { Metadata } from 'next'
import Image from 'next/image'
import TeamSection from '@/components/sections/TeamSection'
import CtaBanner from '@/components/sections/CtaBanner'
import { t } from '@/translations/en'

export const metadata: Metadata = {
  title: 'About',
  description: 'The people behind Triora Labs — a boutique software engineering studio.',
}

const VALUES = [
  { title: 'Direct Access', desc: 'You talk to us directly — no account managers, no relay.' },
  { title: 'Honest Scoping', desc: "We'll tell you upfront if something's out of scope." },
  { title: 'Visible Progress', desc: 'Working builds and demos, not just status updates.' },
  { title: 'Clean Handoff', desc: 'Documented code your team can maintain afterward.' },
]

export default function AboutPage() {
  return (
    <>
      <section className="page-header">
        <div className="wrap">
          <span className="eyebrow">{t.about.eyebrow}</span>
          <h1>{t.about.heading}</h1>
          <p className="lead">{t.about.lead}</p>
        </div>
      </section>

      <section className="tight">
        <div className="wrap about-hero">
          <div className="about-photo">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80"
              alt="Triora Labs team"
              width={900}
              height={440}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className="about-copy">
            <h3 style={{ fontSize: 22, marginBottom: 14, fontFamily: 'var(--font-d)' }}>
              Triora Labs — Boutique Software Engineering Studio
            </h3>
            <p>{t.about.lead}</p>
            <p>{t.about.philosophy}</p>
            <div className="values-list">
              {VALUES.map((v) => (
                <div className="value-item" key={v.title}>
                  <h4>{v.title}</h4>
                  <p>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TeamSection />

      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow">{t.about.valuesEyebrow}</span>
            <h2>{t.about.valuesHeading}</h2>
            <p>{t.about.valuesLead}</p>
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Have an Idea? Let's Build It."
        subheading="Tell us what you're trying to build. We'll help you understand the right technical approach."
        primaryLabel="Start a Project"
        primaryHref="/contact"
        secondaryLabel="View Our Work"
        secondaryHref="/work"
      />
    </>
  )
}
