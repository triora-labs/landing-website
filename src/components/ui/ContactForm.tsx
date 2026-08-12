'use client'

import { useState } from 'react'
import { t } from '@/translations/en'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="contact-shell">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">{t.contact.name}</label>
            <input id="name" type="text" required placeholder={t.contact.namePlaceholder} />
          </div>
          <div className="form-group">
            <label htmlFor="email">{t.contact.email}</label>
            <input id="email" type="email" required placeholder={t.contact.emailPlaceholder} />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="company">{t.contact.companyLabel}</label>
            <input id="company" type="text" placeholder={t.contact.companyPlaceholder} />
          </div>
          <div className="form-group">
            <label htmlFor="projectType">{t.contact.projectType}</label>
            <select id="projectType">
              {t.contact.projectTypeOptions.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="budget">{t.contact.budget}</label>
            <select id="budget">
              {t.contact.budgetOptions.map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="message">{t.contact.message}</label>
            <input id="message" type="text" required placeholder={t.contact.messagePlaceholder} />
          </div>
        </div>
        <button type="submit" className="btn btn-primary form-submit">{t.contact.submit}</button>
        <div className="form-notes">
          {t.contact.notes.map((n) => <span className="form-note" key={n}>{n}</span>)}
        </div>
        {submitted && <div className="form-success">{t.contact.successMsg}</div>}
      </form>
    </div>
  )
}
