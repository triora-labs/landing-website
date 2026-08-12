import Link from 'next/link'
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
            <Link href="/" className="logo" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div className="logo-ring">TL</div>
              <span className="logo-text">TRIORA<br />LABS</span>
            </Link>
            <p>{t.footer.tagline}</p>
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
            <a href={SITE_CONFIG.socials.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={SITE_CONFIG.socials.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={SITE_CONFIG.socials.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href={`mailto:${SITE_CONFIG.email}`}>{SITE_CONFIG.email}</a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>{SITE_CONFIG.copyright}</span>
          <span>{SITE_CONFIG.tagline}</span>
        </div>
      </div>
    </footer>
  )
}
