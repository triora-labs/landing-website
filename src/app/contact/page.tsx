import type { Metadata } from 'next'
import ContactForm from '@/components/ui/ContactForm'
import { SITE_CONFIG } from '@/constants/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Start a project with Triora Labs.',
}

export default function ContactPage() {
  return (
    <section style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative background glow */}
      <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '400px', height: '400px', background: 'radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)', pointerEvents: 'none', zIndex: -1 }}></div>

      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '80px', alignItems: 'center' }}>
        <div className="contact-text" style={{ paddingRight: '40px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 14px', border: '1px solid var(--line)', borderRadius: '99px', marginBottom: '32px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)' }}></span>
            <span style={{ fontSize: '11px', fontWeight: 500, color: 'var(--ink)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Available for new projects</span>
          </div>
          
          <h1 style={{ fontFamily: '"Playfair Display", "Georgia", serif', fontWeight: 400, fontSize: '46px', marginTop: 0, marginBottom: '24px', lineHeight: 1.15, letterSpacing: '-0.01em', color: 'var(--ink)' }}>
            Let&apos;s build something <span style={{ fontStyle: 'italic', color: 'var(--accent)' }}>incredible.</span>
          </h1>
          <p className="lead" style={{ fontSize: '16px', color: 'var(--muted)', maxWidth: '380px', lineHeight: 1.7, marginBottom: '24px' }}>
            Skip the generic sales pitches. Tell us what you&apos;re trying to achieve, and we&apos;ll reply with a concrete technical approach.
          </p>
          
          <div style={{ display: 'grid', gap: '16px', maxWidth: '320px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--surface)', border: '1px solid var(--line)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ink)' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div>
                <h5 style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted)', marginBottom: '4px', margin: 0, fontWeight: 500 }}>Direct Email</h5>
                <a href={`mailto:${SITE_CONFIG.email}`} style={{ color: 'var(--ink)', fontSize: '15px', fontWeight: 500, textDecoration: 'none' }}>
                  {SITE_CONFIG.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-wrapper">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
