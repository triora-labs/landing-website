import { t } from '@/translations/en'

export default function TrustStrip() {
  return (
    <section className="tight">
      <div className="wrap">
        <div className="trust-strip">
          {t.trust.items.map((item) => (
            <div className="trust-item" key={item.title}>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
