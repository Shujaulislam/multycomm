'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { Check, MessageCircle, Upload, FileText, BarChart2, Bot } from 'lucide-react'

const products = [
  {
    name: "WhatsApp Business API",
    icon: "/whatsapp-business.svg",
    color: "#25D366",
    description: "Enterprise-grade solution with AI-powered features for large-scale business communication",
    features: [
      { icon: Bot, text: "AI Enabled Smart Responses" },
      { icon: MessageCircle, text: "Canned Responses" },
      { icon: Check, text: "Contact History" },
      { icon: MessageCircle, text: "Outbound Campaign" },
      { icon: MessageCircle, text: "Create Message Flow" },
      { icon: MessageCircle, text: "Automated Personalised Messaging" },
      { icon: BarChart2, text: "CSAT Analytics" },
      { icon: FileText, text: "Polls, Forms, RSVP" },
      { icon: BarChart2, text: "Campaign Category Pricing" },
      { icon: Check, text: "Campaign Scheduling" },
      { icon: Check, text: "Automated Configuration" }
    ]
  },
  {
    name: "WatsApp.Shop",
    icon: "/watsapp-shop.svg",
    color: "#FF6B6B",
    description: "Streamlined solution for bulk messaging and template-based communication",
    features: [
      { icon: FileText, text: "Template Management" },
      { icon: Upload, text: "Bulk Upload" },
      { icon: Check, text: "Validation" },
      { icon: BarChart2, text: "Reports" },
      { icon: MessageCircle, text: "API Based Messaging" },
      { icon: MessageCircle, text: "Outbound Campaign" },
      { icon: BarChart2, text: "Consumption Based Charging" },
      { icon: FileText, text: "Multi-Media Content Delivery" },
      { icon: MessageCircle, text: "Automated Personalised Messaging" },
      { icon: Check, text: "Message Scheduler" },
      { icon: Check, text: "WhatsApp Session Manager" }
    ]
  }
]

const Card3D = ({ product }) => {
  const cardRef = useRef(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full h-full"
    >
      <div 
        className="rounded-3xl bg-gradient-to-br from-white/40 to-white/5 backdrop-blur-sm p-8 shadow-xl border border-white/10"
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center space-x-4">
            <div 
              className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: product.color + '20' }}
            >
              <div 
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: product.color }}
              >
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-black">{product.name}</h3>
              <p className="text-sm text-black/70">{product.description}</p>
            </div>
          </div>

          {/* Divider */}
          <div 
            className="h-px w-full opacity-10"
            style={{ backgroundColor: product.color }}
          />

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-x-6 gap-y-4">
            {product.features.slice(0, Math.ceil(product.features.length/2)).map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-2 text-black/80"
                style={{ transform: "translateZ(50px)" }}
              >
                <div 
                  className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: product.color + '15' }}
                >
                  <feature.icon className="w-3.5 h-3.5" style={{ color: product.color }} />
                </div>
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
            {product.features.slice(Math.ceil(product.features.length/2)).map((feature, index) => (
              <div 
                key={index + Math.ceil(product.features.length/2)} 
                className="flex items-center space-x-2 text-black/80"
                style={{ transform: "translateZ(50px)" }}
              >
                <div 
                  className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: product.color + '15' }}
                >
                  <feature.icon className="w-3.5 h-3.5" style={{ color: product.color }} />
                </div>
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3.5 rounded-xl font-medium text-white text-sm"
            style={{ 
              backgroundColor: product.color,
              transform: "translateZ(100px)",
            }}
          >
            Learn More
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

const ProductShowcase = () => {
  const containerRef = useRef(null)
  
  return (
    <section 
      ref={containerRef}
      className="relative overflow-hidden py-20 bg-gradient-to-b from-white to-sky-100"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:60px_60px]" />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute right-[10%] top-[20%] h-64 w-64 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#3B82F6] opacity-10"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute left-[10%] bottom-[20%] h-64 w-64 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#3B82F6] opacity-10"
      />

      <div className="container mx-auto px-4 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold text-black mb-4">Our Products</h2>
          <p className="text-xl text-black/70">Choose the solution that best fits your needs</p>
        </motion.div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 perspective-[1000px]">
          {products.map((product, index) => (
            <div key={index} className="h-[500px]">
              <Card3D product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase