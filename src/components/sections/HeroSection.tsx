import Image from 'next/image'
import Link from 'next/link'
import { t } from '@/translations/en'

export default function HeroSection() {
  return (
    <section className="hero-shell">
      <div className="wrap">
        <div className="hero-card">
          <Image
            src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=1400&q=80"
            alt="Triora Labs hero background"
            fill
            style={{ objectFit: 'cover', opacity: 0.35 }}
            priority
          />
          <div className="hero-overlay" />
          <div className="hero-glow" />
          <div className="hero-content fade-up">
            <span className="eyebrow">{t.hero.eyebrow}</span>
            <h1>
              We turn business ideas into{' '}
              <span>reliable digital products.</span>
            </h1>
            <p>{t.hero.subheadline}</p>
            <div className="hero-actions">
              <Link href="/contact" className="btn btn-primary">{t.hero.cta} →</Link>
              <Link href="/work" className="btn btn-ghost">{t.hero.ctaSecondary}</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
