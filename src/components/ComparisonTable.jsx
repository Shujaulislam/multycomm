'use client'

import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, XCircle } from 'lucide-react'

const features = [
  {
    name: "Messaging",
    items: [
      { feature: "Instant Messaging", business: true, shop: true },
      { feature: "Bulk Messaging", business: true, shop: true },
      { feature: "Template Messages", business: true, shop: true },
      { feature: "Multimedia Support", business: true, shop: true },
      { feature: "Contact Management", business: true, shop: false },
    ]
  },
  {
    name: "Automation",
    items: [
      { feature: "AI Chat Bot", business: true, shop: false },
      { feature: "Campaign Scheduling", business: true, shop: true },
      { feature: "Flow Builder", business: true, shop: false },
      { feature: "Auto-Replies", business: true, shop: true },
      { feature: "Message Templates", business: true, shop: true },
    ]
  },
  {
    name: "Analytics",
    items: [
      { feature: "Campaign Analytics", business: true, shop: true },
      { feature: "Customer Insights", business: true, shop: false },
      { feature: "Performance Reports", business: true, shop: true },
      { feature: "User Behavior", business: true, shop: false },
      { feature: "ROI Tracking", business: true, shop: true },
    ]
  },
  {
    name: "Integration",
    items: [
      { feature: "API Access", business: true, shop: true },
      { feature: "CRM Integration", business: true, shop: false },
      { feature: "E-commerce", business: false, shop: true },
      { feature: "Custom Webhooks", business: true, shop: false },
      { feature: "Third-party Apps", business: true, shop: true },
    ]
  }
]

export default function ComparisonTable() {
  const [activeTab, setActiveTab] = React.useState(0)

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div className="py-8 md:py-12 bg-gradient-to-b from-sky-100 to-sky-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Compare Our Solutions
          </h2>
          <p className="mt-2 text-sm md:text-base text-gray-500">
            Choose the right plan for your business needs
          </p>
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          {features.map((category, idx) => (
            <motion.button
              key={idx}
              type="button"
              onClick={() => handleTabClick(idx)}
              initial={false}
              animate={{
                scale: activeTab === idx ? 1.05 : 1,
                backgroundColor: activeTab === idx ? '#25D366' : '#ffffff',
                color: activeTab === idx ? '#ffffff' : '#4b5563'
              }}
              whileHover={{ scale: 1.05 }}
              className={`
                relative z-10 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-sm 
                font-medium cursor-pointer select-none shadow-sm
              `}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="min-w-full">
            {/* Table Header */}
            <div className="bg-gray-50/80 border-b border-gray-100">
              <div className="grid grid-cols-12 px-4 py-3">
                <div className="col-span-6 md:col-span-5 text-left text-sm md:text-base font-medium text-gray-900">
                  Features
                </div>
                <div className="col-span-6 md:col-span-7 grid grid-cols-2">
                  <div className="text-center text-sm md:text-base font-medium text-gray-900">
                    WhatsApp Business
                  </div>
                  <div className="text-center text-sm md:text-base font-medium text-gray-900">
                    WatsApp.Shop
                  </div>
                </div>
              </div>
            </div>

            {/* Table Body */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="divide-y divide-gray-100"
              >
                {features[activeTab]?.items.map((item, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="grid grid-cols-12 px-4 py-2.5 md:py-3 hover:bg-gray-50/50 transition-colors"
                  >
                    <div className="col-span-6 md:col-span-5 flex items-center">
                      <span className="text-sm md:text-base text-gray-700">{item.feature}</span>
                    </div>
                    <div className="col-span-6 md:col-span-7 grid grid-cols-2">
                      <div className="flex justify-center items-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.2, delay: idx * 0.1 + 0.2 }}
                        >
                          {item.business ? (
                            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#25D366]" />
                          ) : (
                            <XCircle className="w-4 h-4 md:w-5 md:h-5 text-red-400" />
                          )}
                        </motion.div>
                      </div>
                      <div className="flex justify-center items-center">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.2, delay: idx * 0.1 + 0.3 }}
                        >
                          {item.shop ? (
                            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#25D366]" />
                          ) : (
                            <XCircle className="w-4 h-4 md:w-5 md:h-5 text-red-400" />
                          )}
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Feature Description */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6 text-center"
        >
          <p className="text-lg md:text-xl text-gray-500">
            Need help choosing? Contact our team for a personalized recommendation
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            className="mt-3 inline-flex items-center px-4 py-2 text-lg font-medium rounded-lg 
              text-white bg-[#25D366] hover:bg-[#20c55e] transition-colors shadow-sm hover:shadow"
          >
            Contact Sales
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}
