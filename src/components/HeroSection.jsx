'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import Image from 'next/image'

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-[#4C956C] to-[#2C6E49] pt-16">
      {/* Background patterns */}
      <div className="absolute inset-0 dot-pattern opacity-10" />
      
      {/* Animated shapes */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
        }}
        className="absolute right-[10%] top-[20%] h-32 w-32 rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#3B82F6] opacity-20 blur-xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        className="absolute left-[15%] top-[30%] h-24 w-24 rounded-full bg-gradient-to-r from-[#FBBF24] to-[#4C956C] opacity-20 blur-xl"
      />

      <div className="container relative mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 max-w-2xl text-center lg:mb-0 lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white"
            >
              The Ultimate WhatsApp Business Solution
            </motion.div>
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Manage all your{' '}
              <span className="text-[#FBBF24]">WhatsApp Messaging</span>{' '}
              needs with one application
            </h1>
            <p className="mb-8 text-xl text-white/90">
              A unique multi-faceted platform that takes WhatsApp Bulk Messaging to new levels. 
              Categorize your market segment and send Multi-Media WhatsApp messages which are 
              scheduled, segmented and personalised.
            </p>
            <div className="flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button
                size="lg"
                className="group h-12 bg-[#FBBF24] px-8 text-lg font-semibold text-[#2C6E49] hover:bg-[#F59E0B]"
              >
                Start Free Trial
                <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 border-2 border-white px-8 text-lg font-semibold text-black hover:bg-white/10"
              >
                Book a Demo
              </Button>
            </div>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative w-full max-w-xl lg:w-1/2"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="overflow-hidden rounded-2xl bg-white/5 p-2 backdrop-blur-sm"
              >
                <Image
                  src="/placeholder.svg"
                  alt="WhatsApp Dashboard"
                  width={600}
                  height={400}
                  className="rounded-xl"
                />
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -right-6 -top-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 p-4 backdrop-blur-sm"
              >
                <span className="text-3xl">📱</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                className="absolute -bottom-6 -left-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 p-4 backdrop-blur-sm"
              >
                <span className="text-3xl">💬</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="wave-divider" />
      </div>
    </section>
  )
}

export default HeroSection

