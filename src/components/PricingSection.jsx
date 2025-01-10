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
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-[#364c63] mb-4">Pricing Plans</h2>
          <p className="text-xl text-gray-600 mb-8">Choose the perfect plan for your business</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative bg-white rounded-lg shadow-lg overflow-hidden flex flex-col ${
                plan.popular ? 'ring-2 ring-[#ef6f53]' : ''
              }`}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-[#ef6f53] text-white px-3 py-1 text-sm font-medium">
                  Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#364c63] mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-4 flex-wrap">
                  <span className={`${plan.iconSize} font-extrabold text-[#ef6f53]`}>₹</span>
                  <span className="text-5xl font-extrabold text-[#364c63]">{plan.price.replace('₹', '')}</span>
                  <span className="ml-1 text-gray-500 whitespace-nowrap">/{plan.validity.toLowerCase()}</span>
                </div>
                <div className="space-y-4 min-h-[320px]">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center">
                      {typeof feature.included === 'boolean' ? (
                        feature.included ? (
                          <Check className="h-5 w-5 text-green-500 mr-2" />
                        ) : (
                          <X className="h-5 w-5 text-red-500 mr-2" />
                        )
                      ) : (
                        <span className="text-[#ef6f53] mr-2">•</span>
                      )}
                      <span className="text-gray-600 text-sm">
                        {feature.name}: {feature.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-6 bg-gray-50 border-t mt-auto">
                <motion.button
                  className={`w-full font-semibold py-3 px-4 rounded-md transition duration-300 ${
                    hoveredIndex === index
                      ? 'bg-[#ef6f53] text-white'
                      : 'bg-[#364c63] text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-sm text-gray-500 mt-8 text-center">
          *All trademarks, logos and brand names are the property of their respective owners. All company, product and service names used in this
          website are for identification purposes only. Message volume per day dependent on network conditions.
        </p>
      </div>
    </section>
  )
}

