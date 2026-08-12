import Link from 'next/link'

interface Props {
  heading: string
  subheading?: string
  primaryLabel: string
  primaryHref: string
  secondaryLabel?: string
  secondaryHref?: string
  note?: string
}

export default function CtaBanner({ heading, subheading, primaryLabel, primaryHref, secondaryLabel, secondaryHref, note }: Props) {
  return (
    <section>
      <div className="wrap">
        <div className="cta-banner">
          <div>
            <h2>{heading}</h2>
            {subheading && <p>{subheading}</p>}
            {note && <p style={{ marginTop: 12, fontSize: 13, opacity: 0.6 }}>{note}</p>}
          </div>
          <div className="cta-actions">
            <Link href={primaryHref} className="btn btn-primary">{primaryLabel}</Link>
            {secondaryLabel && secondaryHref && (
              <Link href={secondaryHref} className="btn btn-ghost">{secondaryLabel}</Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
