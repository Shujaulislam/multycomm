'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
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

const Card3D = ({ product, isMobile }) => {
  const cardRef = useRef(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

  const handleMouseMove = (e) => {
    if (isMobile) return
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
    if (isMobile) return
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isMobile ? 0 : rotateX,
        rotateY: isMobile ? 0 : rotateY,
        transformStyle: "preserve-3d",
      }}
      className="relative w-full h-full"
    >
      <div 
        className="rounded-3xl bg-gradient-to-br from-white/40 to-white/5 backdrop-blur-sm p-4 sm:p-8 shadow-xl border border-white/10"
        style={{
          transform: isMobile ? "none" : "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
      >
        <div className="space-y-4 sm:space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <div 
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: product.color + '20' }}
            >
              <div 
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center"
                style={{ backgroundColor: product.color }}
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-black">{product.name}</h3>
              <p className="text-xs sm:text-sm text-black/70">{product.description}</p>
            </div>
          </div>

          {/* Divider */}
          <div 
            className="h-px w-full opacity-10"
            style={{ backgroundColor: product.color }}
          />

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-x-6 sm:gap-y-4">
            {product.features.map((feature, index) => (
              <div 
                key={index} 
                className="flex items-center space-x-2 text-black/80"
                style={{ transform: isMobile ? "none" : "translateZ(50px)" }}
              >
                <div 
                  className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: product.color + '15' }}
                >
                  <feature.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" style={{ color: product.color }} />
                </div>
                <span className="text-xs sm:text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: isMobile ? 1 : 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-2.5 sm:py-3.5 rounded-xl font-medium text-white text-xs sm:text-sm"
            style={{ 
              backgroundColor: product.color,
              transform: isMobile ? "none" : "translateZ(100px)",
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
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])
  
  return (
    <section 
      ref={containerRef}
      className="relative overflow-hidden py-12 sm:py-20 bg-gradient-to-b from-white to-sky-100"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-black/[0.02] bg-[size:30px_30px] sm:bg-[size:60px_60px]" />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute right-[5%] sm:right-[10%] top-[10%] sm:top-[20%] h-32 sm:h-64 w-32 sm:w-64 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#3B82F6] opacity-10"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 0],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute left-[5%] sm:left-[10%] bottom-[10%] sm:bottom-[20%] h-32 sm:h-64 w-32 sm:w-64 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#3B82F6] opacity-10"
      />

      <div className="container mx-auto px-4 mb-8 sm:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-black mb-2 sm:mb-4">Our Products</h2>
          <p className="text-lg sm:text-xl text-black/70">Choose the solution that best fits your needs</p>
        </motion.div>
      </div>

      <div className="relative container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-12 perspective-[1000px]">
          {products.map((product, index) => (
            <div key={index} className="h-[450px] sm:h-[500px]">
              <Card3D product={product} isMobile={isMobile} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductShowcase