import { SERVICES } from '@/constants/services'
import { t } from '@/translations/en'

interface Props {
  limit?: number
  showSubheading?: boolean
}

export default function ServicesGrid({ limit, showSubheading = true }: Props) {
  const items = limit ? SERVICES.slice(0, limit) : SERVICES
  return (
    <section>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">{t.services.eyebrow}</span>
          <h2>{t.services.heading}</h2>
          {showSubheading && <p>{t.services.subheading}</p>}
        </div>
        <div className="services-grid">
          {items.map((s) => (
            <div className="service-card" key={s.id}>
              <span className="num">{s.number}</span>
              <h3>{s.title}</h3>
              <p>{s.shortDesc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
