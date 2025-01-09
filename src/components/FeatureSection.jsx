'use client'

import { FiBox, FiMessageSquare, FiBarChart2, FiHeadphones } from 'react-icons/fi'
import { motion } from 'framer-motion'

const iconMap = {
  'Easy Integration': FiBox,
  'Automated Responses': FiMessageSquare,
  'Analytics Dashboard': FiBarChart2,
  '24/7 Support': FiHeadphones,
}

export default function FeatureSection({ title, features }) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-extrabold text-[#364c63] text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon || iconMap[feature.title] || FiBox
            return (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="flex items-center justify-center w-12 h-12 bg-[#ef6f53] text-white rounded-full mb-4"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <Icon className="w-6 h-6" />
                </motion.div>
                <h3 className="text-xl font-semibold text-[#364c63] mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

