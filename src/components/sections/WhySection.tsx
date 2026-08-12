import { WHY_ITEMS } from '@/constants/whyUs'
import { t } from '@/translations/en'

export default function WhySection() {
  return (
    <section>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">{t.why.eyebrow}</span>
          <h2>{t.why.heading}</h2>
        </div>
        <div className="why-grid">
          {WHY_ITEMS.map((item) => (
            <div className="why-item" key={item.title}>
              <div className="why-icon">{item.icon}</div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
