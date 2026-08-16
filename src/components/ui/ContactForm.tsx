'use client'

import { useState } from 'react'
import { t } from '@/translations/en'
import { ChevronDown, ArrowRight } from 'lucide-react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: t.contact.projectTypeOptions[0],
    budget: t.contact.budgetOptions[0],
    phone: ''
  })
  
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const validate = () => {
    const newErrors: { [key: string]: string } = {}
    
    // Name validation: required, max 50 chars, only letters (no spaces, no numbers)
    if (!formData.name) {
      newErrors.name = 'Name is required'
    } else if (formData.name.length > 50) {
      newErrors.name = 'Name must be 50 characters or less'
    } else if (!/^[a-zA-Z]+$/.test(formData.name)) {
      newErrors.name = 'Name can only contain letters (no spaces or numbers)'
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Phone validation: 10 digits, cannot start with 0-5
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = 'Must be exactly 10 digits and cannot start with 0-5'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (validate()) {
      setSubmitted(true)
      const text = `*New Project Request*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Company:* ${formData.company || 'N/A'}\n*Project Type:* ${formData.projectType}\n*Budget:* ${formData.budget}\n*Phone:* ${formData.phone}`
      const encodedText = encodeURIComponent(text)
      window.open(`https://wa.me/917036592351?text=${encodedText}`, '_blank')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target
    let newValue = value

    if (id === 'name') {
      // Strictly allow ONLY alphabetical letters (no spaces, no numbers, no specials)
      newValue = value.replace(/[^a-zA-Z]/g, '')
    } else if (id === 'phone') {
      // Strictly allow ONLY digits, prevent starting with 0-5, limit to 10 characters
      newValue = value.replace(/\D/g, '')
      // Strip out any leading 0-5 digits
      newValue = newValue.replace(/^[0-5]+/, '')
      newValue = newValue.slice(0, 10)
    }

    setFormData(prev => ({ ...prev, [id]: newValue }))
    if (errors[id]) {
      setErrors(prev => ({ ...prev, [id]: '' }))
    }
  }

  if (submitted) {
    return (
      <div className="contact-shell" style={{ textAlign: 'center', padding: '64px 24px', background: 'var(--surface)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--line)' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: '#10B981' }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </div>
        <h3 style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--ink)' }}>Your message sent to Trioralabs successfully!</h3>
        <p style={{ color: 'var(--muted)', fontSize: '16px', lineHeight: 1.6, marginBottom: '32px', maxWidth: '400px', margin: '0 auto 32px' }}>
          We will contact you soon within 24 working hours.
        </p>
        <button 
          onClick={() => {
            setSubmitted(false)
            setFormData({
              name: '',
              email: '',
              company: '',
              projectType: t.contact.projectTypeOptions[0],
              budget: t.contact.budgetOptions[0],
              phone: ''
            })
          }}
          className="btn" 
          style={{ padding: '12px 24px', background: 'var(--surface-2)', border: '1px solid var(--line)', borderRadius: 'var(--radius-sm)', cursor: 'pointer', color: 'var(--ink)' }}
        >
          Submit Another Request
        </button>
      </div>
    )
  }

  return (
    <div className="contact-shell">
      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="name">{t.contact.name} <span className="required">*</span></label>
            <input 
              id="name" 
              type="text" 
              placeholder={t.contact.namePlaceholder} 
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
            />
            {errors.name && <span className="form-error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="email">{t.contact.email} <span className="required">*</span></label>
            <input 
              id="email" 
              type="email" 
              placeholder={t.contact.emailPlaceholder} 
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
            />
            {errors.email && <span className="form-error">{errors.email}</span>}
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="company">{t.contact.companyLabel}</label>
            <input 
              id="company" 
              type="text" 
              placeholder={t.contact.companyPlaceholder} 
              value={formData.company}
              onChange={handleChange}
            />
          </div>
          <div className="form-group select-wrapper">
            <label htmlFor="projectType">{t.contact.projectType} <span className="required">*</span></label>
            <div className="select-inner">
              <select 
                id="projectType"
                value={formData.projectType}
                onChange={handleChange}
              >
                {t.contact.projectTypeOptions.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
              <ChevronDown className="select-chevron" size={16} />
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group select-wrapper">
            <label htmlFor="budget">{t.contact.budget}</label>
            <div className="select-inner">
              <select 
                id="budget"
                value={formData.budget}
                onChange={handleChange}
              >
                {t.contact.budgetOptions.map((o) => <option key={o} value={o}>{o}</option>)}
              </select>
              <ChevronDown className="select-chevron" size={16} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="phone">{t.contact.message} <span className="required">*</span></label>
            <input 
              id="phone" 
              type="tel" 
              placeholder={t.contact.messagePlaceholder} 
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? 'error' : ''}
            />
            {errors.phone && <span className="form-error">{errors.phone}</span>}
          </div>
        </div>
        <button type="submit" className="btn btn-primary form-submit">
          {t.contact.submit}
          <ArrowRight className="form-submit-icon" size={18} />
        </button>
        {submitted && <div className="form-success">{t.contact.successMsg}</div>}
      </form>
    </div>
  )
}
