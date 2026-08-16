'use client'

import { motion } from 'framer-motion'
import { t } from '@/translations/en'
import { Users, Layers, ShieldCheck, TrendingUp } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring' as const, stiffness: 80, damping: 20 }
  }
}

const ICONS = [Users, Layers, ShieldCheck, TrendingUp]

export default function TrustStrip() {
  return (
    <section className="tight">
      <div className="wrap">
        <motion.div 
          className="trust-strip"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {t.trust.items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length]
            return (
              <motion.div className="trust-item" key={item.title} variants={cardVariants}>
                <div className="trust-icon-wrapper">
                  <Icon size={24} strokeWidth={1.5} />
                </div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                <div className="trust-card-glow" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
