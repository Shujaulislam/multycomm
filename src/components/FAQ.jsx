'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "What is Multy Messaging Platform?",
    answer: "Multy Messaging Platform is a comprehensive WhatsApp marketing solution that allows businesses to engage with their customers through automated messaging, campaign management, and analytics."
  },
  {
    question: "How does the pricing work?",
    answer: "We offer flexible pricing plans based on your messaging volume and feature requirements. Our plans start from as low as ₹499 per month. For detailed pricing, please check our Pricing section."
  },
  {
    question: "Is there a free trial available?",
    answer: "Yes, we offer a 14-day free trial for all new users. This allows you to explore our platform and see how it can benefit your business before committing to a paid plan."
  },
  {
    question: "How do I get started with Multy Messaging Platform?",
    answer: "Getting started is easy! Simply sign up for an account on our website, choose your plan, and you'll have access to our dashboard. Our onboarding team will guide you through the setup process."
  },
  {
    question: "Can I integrate Multy Messaging Platform with my existing CRM?",
    answer: "Yes, we offer API integration that allows you to connect Multy Messaging Platform with your existing CRM and other business tools. Our support team can assist you with the integration process."
  }
]

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-sky-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our WhatsApp Business Platform
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          {/* Decorative grid */}
          <div className="absolute inset-0 grid grid-cols-8 gap-2 -m-2 pointer-events-none">
            {[...Array(64)].map((_, i) => (
              <div key={i} className="w-full pt-full rounded-full bg-gray-900/[0.015]"></div>
            ))}
          </div>

          <div className="relative">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-4"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex justify-between items-center w-full text-left p-6 rounded-xl bg-white hover:bg-gray-50 transition duration-300 shadow-sm hover:shadow-md border border-gray-100"
                >
                  <span className="font-medium text-gray-900">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 bg-white border border-t-0 border-gray-100 rounded-b-xl">
                        <p className="text-gray-600">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
