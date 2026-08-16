import { SERVICES } from '@/constants/services'
import { t } from '@/translations/en'
import { Layout, AppWindow, ShoppingBag, PenTool, Cloud, Settings } from 'lucide-react'

interface Props {
  limit?: number
  showSubheading?: boolean
}

const ICONS = [Layout, AppWindow, ShoppingBag, PenTool, Cloud, Settings]

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
          {items.map((s, index) => {
            const Icon = ICONS[index % ICONS.length]
            return (
              <div className="service-card" key={s.id}>
                <div className="service-icon">
                  <Icon size={32} strokeWidth={1.5} />
                </div>
                <h3>{s.title}</h3>
                <p>{s.shortDesc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
