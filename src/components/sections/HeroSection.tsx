import Image from 'next/image'
import Link from 'next/link'
import { t } from '@/translations/en'

export default function HeroSection() {
  return (
    <section className="hero-shell">
      <div className="wrap">
        <div className="hero-card">
          <Image
            src="/images/apple.png"
            alt="Triora Labs hero background light"
            fill
            style={{ objectFit: 'cover', opacity: 1 }}
            priority
            className="hero-img-light"
          />
          <Image
            src="/images/hero.png"
            alt="Triora Labs hero background dark"
            fill
            style={{ objectFit: 'cover', opacity: 0.35 }}
            priority
            className="hero-img-dark"
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
