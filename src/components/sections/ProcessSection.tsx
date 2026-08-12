import { PROCESS_STEPS } from '@/constants/process'
import { t } from '@/translations/en'

interface Props {
  compact?: boolean
}

export default function ProcessSection({ compact = true }: Props) {
  const steps = compact ? PROCESS_STEPS.slice(0, 5) : PROCESS_STEPS
  return (
    <section>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">{t.process.eyebrow}</span>
          <h2>{t.process.heading}</h2>
        </div>
        <div className="process-row">
          {steps.map((s) => (
            <div className="process-step" key={s.number}>
              <span className="n">{s.number}</span>
              <h4>{s.title}</h4>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
