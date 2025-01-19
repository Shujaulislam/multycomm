'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Check, 
  Sparkles, 
  MessageSquare, 
  User, 
  Image as ImageIcon, 
  Calendar, 
  BarChart3, 
  FileText,
  Video,
  Upload,
  Users,
  Headphones,
  Clock
} from 'lucide-react'

const getFeatureIcon = (feature, color) => {
  const iconProps = {
    className: `w-5 h-5 ${color}`,
    strokeWidth: 1.5
  }
  
  if (feature.toLowerCase().includes('message')) return <MessageSquare {...iconProps} />
  if (feature.toLowerCase().includes('login')) return <User {...iconProps} />
  if (feature.toLowerCase().includes('text') || feature.toLowerCase().includes('emoji')) return <FileText {...iconProps} />
  if (feature.toLowerCase().includes('picture')) return <ImageIcon {...iconProps} />
  if (feature.toLowerCase().includes('validity')) return <Calendar {...iconProps} />
  if (feature.toLowerCase().includes('reporting')) return <BarChart3 {...iconProps} />
  if (feature.toLowerCase().includes('video')) return <Video {...iconProps} />
  if (feature.toLowerCase().includes('api')) return <Upload {...iconProps} />
  if (feature.toLowerCase().includes('logins')) return <Users {...iconProps} />
  if (feature.toLowerCase().includes('manager')) return <Headphones {...iconProps} />
  if (feature.toLowerCase().includes('quarterly')) return <Clock {...iconProps} />
  return <Check {...iconProps} />
}

const plans = [
  {
    name: 'Trial',
    price: 'Free',
    period: '7 days',
    description: 'Perfect for testing our platform',
    features: [
      '500 messages',
      'Valid for 7 Days',
      'Bulk Contact Upload',
      'Message Template Creator',
      'Text, Voice, Video Messages',
      'Files and Emojis Support'
    ],
    popular: false,
    color: 'from-blue-500 to-blue-600',
    textColor: 'text-blue-500',
    hoverColor: 'hover:border-blue-500',
    darkColor: 'bg-blue-600',
  },
  {
    name: 'Neo',
    price: '$29',
    period: 'month',
    description: 'Basic plan for small businesses',
    features: [
      '1,000 messages bundle',
      'Valid for one month',
      'One Phone Number',
      'One Login',
      'Text, Emoji Support',
      'Picture Messages'
    ],
    popular: false,
    color: 'from-teal-500 to-teal-600',
    textColor: 'text-teal-500',
    hoverColor: 'hover:border-teal-500',
    darkColor: 'bg-teal-600',
  },
  {
    name: 'Starter',
    price: '$49',
    period: 'month',
    description: 'Growing businesses starter pack',
    features: [
      '5,000 messages pack',
      'Valid for 1 month',
      'One Phone Number',
      'One Login',
      'Text, Emoji Support',
      'Picture Messages'
    ],
    popular: false,
    color: 'from-yellow-500 to-yellow-600',
    textColor: 'text-yellow-600',
    hoverColor: 'hover:border-yellow-500',
    darkColor: 'bg-yellow-600',
  },
  {
    name: 'Pro',
    price: '$99',
    period: 'month',
    description: 'Perfect for professional businesses',
    features: [
      '10,000 messages',
      'Valid for one month',
      'One Phone Number',
      'One Login ID',
      'Full Multi-Media Support',
      'API Framework for A2P',
      'Detailed Advanced Reports'
    ],
    popular: true,
    color: 'from-[#25D366] to-[#128C7E]',
    textColor: 'text-[#25D366]',
    hoverColor: 'hover:border-[#25D366]',
    darkColor: 'bg-[#25D366]',
  },
  {
    name: 'Pro Max',
    price: '$249',
    period: '3 months',
    description: 'Advanced features for larger teams',
    features: [
      '100,000 Messages',
      'Valid for three months',
      'Three Phone Numbers',
      'Three Login IDs',
      'Complete Media Support',
      'API for Bulk Messaging',
      'Campaign-based Reports',
      'AI Template Creator',
      'Department-wise Login'
    ],
    popular: false,
    color: 'from-purple-500 to-purple-600',
    textColor: 'text-purple-500',
    hoverColor: 'hover:border-purple-500',
    darkColor: 'bg-purple-600',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'custom',
    description: 'Tailored for large organizations',
    features: [
      '500,000+ messages',
      'Three month validity',
      'Five Phone Numbers',
      'Five Login IDs',
      'Complete Media Support',
      'Advanced API Framework',
      'Department-wise Access',
      'Custom Reporting Suite',
      'Priority Support'
    ],
    popular: false,
    color: 'from-gray-700 to-gray-800',
    textColor: 'text-gray-700',
    hoverColor: 'hover:border-gray-700',
    darkColor: 'bg-gray-800',
  }
]

export default function PriceTable() {
  const [hoveredPlan, setHoveredPlan] = useState(null)

  return (
    <section className="pb-10 px-4 relative bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white"></div>
      
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white text-sm font-medium mb-4"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Choose Your Perfect Plan
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
          >
            Plans That Scale With Your Business
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            From startups to enterprises, we have a plan that fits your needs
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredPlan(index)}
              onHoverEnd={() => setHoveredPlan(null)}
              className={`relative rounded-2xl overflow-visible backdrop-blur-sm border-2 transition-colors h-full flex flex-col ${
                plan.popular
                  ? 'border-[#25D366] shadow-2xl scale-105 bg-white/95'
                  : 'border-transparent shadow-xl bg-white/90 ' + plan.hoverColor
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className={`${plan.darkColor} text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg flex items-center space-x-1`}>
                    <Sparkles className="w-4 h-4 mr-1" />
                    <span>Most Popular</span>
                  </div>
                </div>
              )}
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="mb-4">
                  <span className={`text-xl font-bold bg-gradient-to-r ${plan.color} text-transparent bg-clip-text`}>
                    {plan.name}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 min-h-[40px]">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className={`text-4xl font-bold bg-gradient-to-r ${plan.color} text-transparent bg-clip-text`}>
                      {plan.price}
                    </span>
                    {plan.period !== 'custom' && (
                      <span className="text-gray-600 ml-2">/{plan.period}</span>
                    )}
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={false}
                      animate={{
                        scale: hoveredPlan === index ? 1.02 : 1,
                        x: hoveredPlan === index ? 4 : 0,
                      }}
                      transition={{ duration: 0.2 }}
                      className="flex items-start group"
                    >
                      <div className="mr-3 transition-transform mt-1">
                        {getFeatureIcon(feature, plan.textColor)}
                      </div>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3.5 px-6 rounded-xl font-medium transition-all mt-auto ${
                    plan.popular
                      ? `bg-gradient-to-r ${plan.color} text-white border-2 border-transparent`
                      : `border-2 ${plan.textColor} border-current hover:border-transparent group relative overflow-hidden`
                  }`}
                >
                  <span className={`relative z-10 ${plan.popular ? '' : 'group-hover:text-white transition-colors'}`}>
                    Get Started
                  </span>
                  {!plan.popular && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${plan.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                  )}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
