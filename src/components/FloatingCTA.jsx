'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const toggleVisibility = () => {
      const offset = window.pageYOffset || document.documentElement.scrollTop;
      if (offset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    toggleVisibility() // Check initial position

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-4 right-4 z-50"
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-blue-600 text-white rounded-full p-4 shadow-lg hover:bg-blue-700 transition duration-300"
          >
            {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
          </button>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="absolute bottom-16 right-0 bg-white rounded-lg shadow-xl p-6 w-72"
              >
                <h3 className="text-xl font-bold mb-4">Get Started Today!</h3>
                <p className="mb-4">Ready to revolutionize your WhatsApp marketing? Sign up now for a free trial!</p>
                <a
                  href="#"
                  className="block w-full bg-blue-600 text-white text-center py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
                >
                  Start Free Trial
                </a>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
