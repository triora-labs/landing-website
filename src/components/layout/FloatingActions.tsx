'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.scrollY > 400) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    setMounted(true)
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  if (!mounted) return null

  return (
    <div className="floating-actions">
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            onClick={scrollToTop}
            className="scroll-top-btn"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} strokeWidth={2.5} />
          </motion.button>
        )}
      </AnimatePresence>
      
      <Link 
        href="https://wa.me/917036592351?text=Hello!%20I'm%20interested%20in%20starting%20a%20project%20with%20Triora%20Labs." 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-btn"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
        </svg>
      </Link>
    </div>
  )
}
