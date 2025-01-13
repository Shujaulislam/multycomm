'use client'

import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'

export default function FeatureSection({ title, features }) {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-[#364c63] text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = Icons[feature.icon] || Icons.Box
            return (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="flex items-center justify-center w-14 h-14 bg-[#ef6f53]/10 text-[#ef6f53] rounded-xl mb-6"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  <Icon className="w-7 h-7" />
                </motion.div>
                <h3 className="text-xl font-bold text-[#364c63] mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

