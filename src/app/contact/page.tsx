import type { Metadata } from 'next'
import ContactForm from '@/components/ui/ContactForm'
import { SITE_CONFIG } from '@/constants/site'
import { t } from '@/translations/en'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a project with Triora Labs.',
}

export default function ContactPage() {
  return (
    <>
      <section className="page-header">
        <div className="wrap">
          <span className="eyebrow">{t.contact.eyebrow}</span>
          <h1>{t.contact.heading}</h1>
          <p className="lead">{t.contact.subheading}</p>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <ContactForm />
          <div style={{ textAlign: 'center', marginTop: 32, fontSize: 13, color: 'var(--muted)' }}>
            Or email us directly at{' '}
            <a href={`mailto:${SITE_CONFIG.email}`} style={{ color: 'var(--accent)' }}>
              {SITE_CONFIG.email}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
