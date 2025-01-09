'use client'

import { useState } from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'

const plans = [
  {
    name: 'Basic',
    price: '$29',
    features: [
      '1,000 messages per month',
      'Basic automation',
      'Email support',
      'API access',
    ],
  },
  {
    name: 'Pro',
    price: '$99',
    features: [
      '10,000 messages per month',
      'Advanced automation',
      'Priority email support',
      'API access',
      'Analytics dashboard',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    features: [
      'Unlimited messages',
      'Custom automation',
      '24/7 phone & email support',
      'API access',
      'Advanced analytics',
      'Dedicated account manager',
    ],
  },
]

export default function PricingSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-[#364c63] text-center mb-12">Pricing Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 rounded-lg shadow-md p-8 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <h3 className="text-2xl font-semibold text-[#364c63] mb-4">{plan.name}</h3>
              <p className="text-4xl font-bold text-[#ef6f53] mb-6">{plan.price}</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <motion.li
                    key={featureIndex}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: featureIndex * 0.1 }}
                  >
                    <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
              <motion.button
                className={`w-full font-semibold py-2 px-4 rounded-md transition duration-300 ${
                  hoveredIndex === index
                    ? 'bg-[#ef6f53] text-white'
                    : 'bg-[#364c63] text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

