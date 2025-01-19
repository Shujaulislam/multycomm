'use client'

import { motion } from 'framer-motion'
import { ShoppingBag, MessageSquare, Zap, Target, Bot, BarChart3 } from 'lucide-react'

const advantages = [
  {
    title: 'Complete E-commerce Suite',
    description: 'Transform WhatsApp into your digital storefront. Manage products, catalogs, and orders seamlessly in one place.',
    icon: ShoppingBag
  },
  {
    title: 'Smart Customer Engagement',
    description: 'Engage customers with rich media messages, quick replies, and interactive buttons. Keep conversations flowing naturally.',
    icon: MessageSquare
  },
  {
    title: 'Automated Order Processing',
    description: 'Streamline your business with automated order confirmations, shipping updates, and payment processing.',
    icon: Zap
  },
  {
    title: 'Personalized Marketing',
    description: 'Create targeted campaigns with customer segmentation. Send personalized offers and product recommendations.',
    icon: Target
  },
  {
    title: 'AI-Powered Assistant',
    description: 'Let our AI handle customer inquiries 24/7, from product questions to order status updates and support requests.',
    icon: Bot
  },
  {
    title: 'Advanced Analytics',
    description: 'Track sales performance, customer behavior, and engagement metrics. Make data-driven decisions to grow your business.',
    icon: BarChart3
  }
]
export default function Advantages() {
  return (
    <div className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800">
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Why Choose WhatsApp.Shop?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Transform your business with our powerful WhatsApp commerce solution
          </p>
        </motion.div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-6">
          {advantages.map((advantage, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm border border-gray-100"
            >
              <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white font-medium">
                {idx + 1}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1.5">
                  <advantage.icon className="w-5 h-5 text-[#25D366]" />
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 truncate">
                    {advantage.title}
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-gray-600">
                  {advantage.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        {/* Desktop Timeline Layout */}
        <div className="hidden md:block relative">
          {/* Central Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#25D366]/20 via-[#25D366] to-[#25D366]/20" />
          
          <div className="relative">
            {advantages.map((advantage, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center mb-16 ${idx % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Content */}
                <div className={`w-5/12 ${idx % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className={`flex items-center gap-3 mb-2 ${idx % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                    {idx % 2 === 0 && <advantage.icon className="w-6 h-6 text-[#25D366]" />}
                    <h3 className="text-xl font-bold text-gray-900">
                      {advantage.title}
                    </h3>
                    {idx % 2 !== 0 && <advantage.icon className="w-6 h-6 text-[#25D366]" />}
                  </div>
                  <p className="text-gray-600">
                    {advantage.description}
                  </p>
                </div>

                {/* Center Circle */}
                <div className="w-2/12 flex justify-center relative">
                  <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center text-white font-bold relative z-10">
                    {idx + 1}
                  </div>
                </div>

                {/* Empty space for the other side */}
                <div className="w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
