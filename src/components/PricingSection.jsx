'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

const plans = [
  {
    name: 'Neo',
    validity: 'Monthly',
    messages: '1,000',
    phoneNumbers: '1',
    logins: '1',
    content: 'Text, Emoji, Picture',
    price: '₹499',
    features: [
      { name: 'Messages per month', value: '1,000' },
      { name: 'Phone Numbers', value: '1' },
      { name: 'Logins', value: '1' },
      { name: 'Content Types', value: 'Text, Emoji, Picture' },
      { name: 'API Push', included: false },
      { name: 'Advanced Report', included: false },
    ],
    iconSize: 'text-4xl',
  },
  {
    name: 'Starter',
    validity: 'Monthly',
    messages: '5,000',
    phoneNumbers: '1',
    logins: '1',
    content: 'Text, Emoji, Picture',
    price: '₹999',
    features: [
      { name: 'Messages per month', value: '5,000' },
      { name: 'Phone Numbers', value: '1' },
      { name: 'Logins', value: '1' },
      { name: 'Content Types', value: 'Text, Emoji, Picture' },
      { name: 'API Push', included: false },
      { name: 'Advanced Report', included: false },
    ],
    iconSize: 'text-3xl',
  },
  {
    name: 'Pro',
    validity: 'Monthly',
    messages: '10,000',
    phoneNumbers: '1',
    logins: '1',
    content: 'Text, Emoji, Audio/Video/PDF File',
    price: '₹1,999',
    features: [
      { name: 'Messages per month', value: '10,000' },
      { name: 'Phone Numbers', value: '1' },
      { name: 'Logins', value: '1' },
      { name: 'Content Types', value: 'Text, Emoji, Audio/Video/PDF File' },
      { name: 'API Push', included: false },
      { name: 'Advanced Report', included: false },
    ],
    iconSize: 'text-2xl',
    popular: true,
  },
  {
    name: 'Pro Max',
    validity: 'Quarterly',
    messages: '1,00,000',
    phoneNumbers: '3',
    logins: '3',
    content: 'Text, Emoji, Audio/Video/PDF File',
    price: '₹4,999',
    features: [
      { name: 'Messages per month', value: '1,00,000' },
      { name: 'Phone Numbers', value: '3' },
      { name: 'Logins', value: '3' },
      { name: 'Content Types', value: 'Text, Emoji, Audio/Video/PDF File' },
      { name: 'API Push', included: true },
      { name: 'Advanced Report', included: true },
    ],
    iconSize: 'text-xl',
  },
  {
    name: 'Enterprise',
    validity: 'Quarterly',
    messages: '5,00,000',
    phoneNumbers: '5',
    logins: '5',
    content: 'Text, Emoji, Audio/Video/PDF File',
    price: '₹9,999',
    features: [
      { name: 'Messages per month', value: '5,00,000' },
      { name: 'Phone Numbers', value: '5' },
      { name: 'Logins', value: '5' },
      { name: 'Content Types', value: 'Text, Emoji, Audio/Video/PDF File' },
      { name: 'API Push', included: true },
      { name: 'Advanced Report', included: true },
    ],
    iconSize: 'text-lg',
  },
]

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false)

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-sky-100 to-white">
      {/* Decorative blobs */}
      {[...Array(6)].map((_, index) => (
  <div
    key={index}
    className={`absolute w-96 h-96 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob ${[
      'bg-green-100',
      'bg-blue-100',
      'bg-pink-100',
      'bg-yellow-100',
      'bg-purple-100',
      'bg-cyan-100',
    ][index]}`}
    style={{
      top: `${40}%`,
      left: `${40}%`,
      animationDelay: `${index * 2000}ms`,
    }}
  />
))}

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-gray-900/[0.02] bg-[size:20px_20px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Choose the perfect plan for your business needs
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center mt-8 space-x-4"
          >
            <span className={`text-sm ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366] ${
                isAnnual ? 'bg-[#25D366]' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual <span className="text-[#25D366]">(-20%)</span>
            </span>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#25D366]/10 to-transparent rounded-bl-full"></div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl font-bold text-gray-900">
                    {isAnnual ? `₹${parseInt(plan.price.replace('₹', '')) * 0.8 * 12}` : plan.price}
                  </span>
                  <span className="text-gray-500 ml-2">/{isAnnual ? 'year' : 'month'}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      {typeof feature.included !== 'undefined' ? (
                        feature.included ? (
                          <Check className="w-5 h-5 text-[#25D366] mr-3 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                        )
                      ) : (
                        <Check className="w-5 h-5 text-[#25D366] mr-3 flex-shrink-0" />
                      )}
                      <span className="text-gray-600">
                        {feature.name}
                        {feature.value && `: ${feature.value}`}
                      </span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 px-8 text-white bg-[#25D366] rounded-lg font-medium hover:bg-[#1ea855] transition-colors duration-300"
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
