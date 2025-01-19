'use client'

import { motion } from 'framer-motion'
import PriceTable from '@/components/PriceTable'
import { MessageSquare, Zap, Bot, BarChart3, Users, Globe } from 'lucide-react'

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0">
          <svg
            className="absolute w-full h-full text-gray-100 opacity-50"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern
                id="pricing-pattern"
                x="0"
                y="0"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="1" cy="1" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#pricing-pattern)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            >
              Increase Reach.
              <span className="bg-gradient-to-r from-[#25D366] to-[#128C7E] bg-clip-text text-transparent">
                {' '}
                Reduce Costs.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-12"
            >
              Transform your business communication with our powerful WhatsApp Business API solution.
              Scale your reach while keeping costs under control.
            </motion.p>

            {/* Feature Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto"
            >
              <div className="flex flex-col items-center p-6 rounded-xl bg-white shadow-sm border border-gray-100">
                <MessageSquare className="w-8 h-8 text-[#25D366] mb-3" />
                <h3 className="text-lg font-semibold mb-2">Bulk Messaging</h3>
                <p className="text-gray-600 text-sm text-center">Send messages to multiple contacts efficiently</p>
              </div>
              <div className="flex flex-col items-center p-6 rounded-xl bg-white shadow-sm border border-gray-100">
                <Bot className="w-8 h-8 text-[#25D366] mb-3" />
                <h3 className="text-lg font-semibold mb-2">AI Templates</h3>
                <p className="text-gray-600 text-sm text-center">Create engaging templates with AI assistance</p>
              </div>
              <div className="flex flex-col items-center p-6 rounded-xl bg-white shadow-sm border border-gray-100">
                <BarChart3 className="w-8 h-8 text-[#25D366] mb-3" />
                <h3 className="text-lg font-semibold mb-2">Advanced Analytics</h3>
                <p className="text-gray-600 text-sm text-center">Track and optimize your messaging performance</p>
              </div>
              <div className="flex flex-col items-center p-6 rounded-xl bg-white shadow-sm border border-gray-100">
                <Users className="w-8 h-8 text-[#25D366] mb-3" />
                <h3 className="text-lg font-semibold mb-2">Multi-User Access</h3>
                <p className="text-gray-600 text-sm text-center">Manage team access with multiple logins</p>
              </div>
              <div className="flex flex-col items-center p-6 rounded-xl bg-white shadow-sm border border-gray-100">
                <Zap className="w-8 h-8 text-[#25D366] mb-3" />
                <h3 className="text-lg font-semibold mb-2">API Integration</h3>
                <p className="text-gray-600 text-sm text-center">Connect with your existing systems seamlessly</p>
              </div>
              <div className="flex flex-col items-center p-6 rounded-xl bg-white shadow-sm border border-gray-100">
                <Globe className="w-8 h-8 text-[#25D366] mb-3" />
                <h3 className="text-lg font-semibold mb-2">Global Reach</h3>
                <p className="text-gray-600 text-sm text-center">Connect with customers worldwide</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <div className="pt-28 ">
        <PriceTable />
      </div>
    </main>
  )
}
