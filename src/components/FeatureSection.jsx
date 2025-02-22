'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  MessageSquare, Upload, CheckCircle, BarChart2, Send, Users, Clock, FileText, 
  PieChart, Code, Bot, MessageCircle, UserCheck, Zap, Workflow, Mail, ThumbsUp, 
  FileSpreadsheet, Calendar, Settings
} from 'lucide-react'

const iconMap = {
  MessageSquare, Upload, CheckCircle, BarChart2, Send, Users, Clock, FileText, 
  PieChart, Code, Bot, MessageCircle, UserCheck, Zap, Workflow, Mail, ThumbsUp, 
  FileSpreadsheet, Calendar, Settings
}

const FeatureCard = ({ icon, title, description }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="flex items-center">
          {icon && iconMap[icon] && (
            <span className="mr-3 text-primary">
              {React.createElement(iconMap[icon], { size: 32 })}
            </span>
          )}
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>
      </div>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  )
}

export default function FeatureSection({ title, features, backgroundColor = "bg-gray-100" }) {
  return (
    <section className={`py-20 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center text-gray-800 mb-12"
        >
          {title}
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
