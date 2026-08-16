import Link from 'next/link'
import Image from 'next/image'
import { SITE_CONFIG } from '@/constants/site'
import { SERVICES } from '@/constants/services'
import { t } from '@/translations/en'

export default function Footer() {
  const companyLinks = [
    { label: 'About Triora', href: '/about' },
    { label: 'Our Work', href: '/work' },
    { label: '7-Step Process', href: '/process' },
    { label: 'Contact & Inquiry', href: '/contact' },
  ]

  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="logo" style={{ textDecoration: 'none', color: 'inherit', display: 'inline-block', marginBottom: '16px' }}>
              <Image src="/images/light.png" alt="Triora Labs Logo" width={200} height={50} className="footer-logo-normal" style={{ objectFit: 'contain', objectPosition: 'left' }} priority />
              <Image src="/images/dark.png" alt="Triora Labs Logo" width={200} height={50} className="footer-logo-inverted" style={{ objectFit: 'contain', objectPosition: 'left' }} priority />
            </Link>
            <p style={{ maxWidth: '400px', lineHeight: 1.6, marginBottom: '24px' }}>{t.footer.tagline}</p>
            <div className="footer-social-icons">
              <a href={SITE_CONFIG.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href={SITE_CONFIG.socials.instagram} target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://wa.me/917036592351" target="_blank" rel="noopener noreferrer" className="social-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path></svg>
              </a>
              <a href={`mailto:${SITE_CONFIG.email}`} className="social-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h5>{t.footer.servicesCol}</h5>
            {SERVICES.slice(0, 5).map((s) => (
              <Link key={s.id} href={`/services#${s.id}`}>{s.title}</Link>
            ))}
          </div>

          <div className="footer-col">
            <h5>{t.footer.companyCol}</h5>
            {companyLinks.map((l) => (
              <Link key={l.href} href={l.href}>{l.label}</Link>
            ))}
          </div>

          <div className="footer-col">
            <h5>{t.footer.connectCol}</h5>
            <Link href="/contact">Contact Form</Link>
            <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{SITE_CONFIG.copyright}</span>
          <span>{SITE_CONFIG.shortTagline}</span>
        </div>
      </div>
    </footer>
  )
}
