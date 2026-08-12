import { TEAM_MEMBERS } from '@/constants/team'
import { t } from '@/translations/en'

export default function TeamSection() {
  return (
    <section>
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">{t.about.teamEyebrow}</span>
          <h2>{t.about.teamHeading}</h2>
        </div>
        <div className="team-grid">
          {TEAM_MEMBERS.map((m) => (
            <div className="team-card" key={m.role}>
              <div className="team-icon">{m.icon}</div>
              <div className="team-role">{m.role}</div>
              <div className="team-specialty">{m.specialty}</div>
              <p>{m.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
