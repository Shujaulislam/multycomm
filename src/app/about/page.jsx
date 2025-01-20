'use client'

import { motion } from 'framer-motion'
import { Shield, Users, Rocket, Globe } from 'lucide-react'

export default function About() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-neutral-100">
      {/* Hero Banner */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-b from-[#FFD700]/5 to-transparent">       
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-gradient-to-br from-[#FFD700]/10 to-[#25D366]/10 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, -5, 0],
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute -left-10 top-20 h-64 w-64 rounded-full bg-gradient-to-br from-[#25D366]/10 to-[#FFD700]/10 blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4 inline-block rounded-full bg-[#FFD700]/10 px-6 py-2 text-sm font-medium text-[#25D366] border border-[#FFD700]/20"
            >
              About Multycomm
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight"
            >
              Transforming
              <span className="bg-gradient-to-r from-[#FFD700] to-[#25D366] bg-clip-text text-transparent px-3 relative">
                Business
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <motion.path 
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    d="M1 5.5C48.3333 2.16667 143.4 -2.4 299 9" 
                    stroke="url(#paint0_linear)" 
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="paint0_linear" x1="1" y1="5" x2="299" y2="5" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#FFD700" />
                      <stop offset="1" stopColor="#25D366" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <br />
              <span className="bg-gradient-to-r from-[#25D366] to-[#FFD700] bg-clip-text text-transparent">
                Communication
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Empowering businesses with innovative WhatsApp API solutions since 2023.
              We're revolutionizing how companies connect with their customers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex justify-center gap-4 text-sm font-medium text-gray-500"
            >
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#FFD700]" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="w-5 h-5 text-[#25D366]" />
                <span>Rapid Integration</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#FFD700]" />
                <span>Global Support</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-white via-neutral-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-[#FFD700] to-[#FFA500] bg-clip-text text-transparent tracking-tight text-center">Our Story</h2>
            <div className="space-y-8 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Founded in 2023, Multycomm emerged from a vision to transform how businesses communicate with their customers. 
                In an era where instant messaging dominates personal communication, we recognized the untapped potential of 
                WhatsApp for business interactions.
              </p>
              <p className="text-lg">
                Our journey began with a simple idea: to bridge the gap between businesses and their customers using the 
                world's most popular messaging platform. We set out to create a suite of tools that would not just facilitate 
                communication, but elevate it to new heights of efficiency and personalization.
              </p>
              <p className="text-lg">
                Today, Multycomm stands at the forefront of WhatsApp API integration, empowering businesses of all sizes 
                to engage with their audience in meaningful ways. Our rapid growth is a testament to the transformative 
                power of our solutions and the trust our clients place in us.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-24 bg-gradient-to-br from-neutral-50 via-white to-neutral-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-[#25D366] to-[#128C7E] bg-clip-text text-transparent tracking-tight text-center">Our Mission & Vision</h2>
            <div className="space-y-16">
              <div>
                <h3 className="text-3xl font-semibold mb-6 text-[#FFD700] tracking-tight">Mission</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  At Multycomm, our mission is to revolutionize business communication by harnessing the power of WhatsApp API. 
                  We are committed to providing innovative, scalable, and user-friendly solutions that enable businesses to 
                  connect with their customers in more personal and efficient ways.
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-semibold mb-6 text-[#25D366] tracking-tight">Vision</h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  We envision a world where businesses can effortlessly engage with their customers, breaking down communication 
                  barriers and fostering stronger relationships. Our goal is to be the global leader in WhatsApp-based business 
                  solutions, continuously innovating to meet the evolving needs of modern enterprises.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Through our technology, we aim to empower businesses to deliver exceptional customer experiences, drive growth, 
                  and stay ahead in an increasingly digital marketplace.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Sets Us Apart */}
      <section className="py-24 bg-gradient-to-br from-white via-neutral-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-[#FFD700] to-[#25D366] bg-clip-text text-transparent tracking-tight text-center">What Sets Us Apart</h2>
            <div className="space-y-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-[#FFD700] tracking-tight">Cutting-Edge Technology</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our platform leverages the latest advancements in AI and machine learning to provide intelligent, 
                  automated messaging solutions that learn and adapt to your business needs.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-[#25D366] tracking-tight">Uncompromising Security</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We prioritize the security and privacy of your data with end-to-end encryption, rigorous 
                  compliance measures, and regular security audits to ensure peace of mind.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-[#FFD700] tracking-tight">Customer-Centric Approach</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our dedicated support team and comprehensive onboarding process ensure that you get the most 
                  out of our platform, with personalized assistance every step of the way.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-[#25D366] tracking-tight">Scalability and Flexibility</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Whether you're a small business or a large enterprise, our solutions are designed to scale 
                  with your needs, offering flexible plans and customizable features.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-24 bg-gradient-to-br from-neutral-50 via-white to-neutral-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-[#FFD700] to-[#25D366] bg-clip-text text-transparent tracking-tight text-center">Our Impact</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Since our inception, Multycomm has made significant strides in transforming how businesses interact with their customers:
            </p>
            <ul className="list-none space-y-6 text-lg text-gray-600 mb-8">
              <li className="flex items-center space-x-3">
                <span className="text-[#FFD700]">•</span>
                <span>Facilitated over 10 million customer interactions across various industries</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-[#25D366]">•</span>
                <span>Helped businesses achieve an average of 40% increase in customer engagement rates</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-[#FFD700]">•</span>
                <span>Reduced response times by up to 60%, enhancing customer satisfaction</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-[#25D366]">•</span>
                <span>Enabled businesses to save an average of 30% on customer service costs</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-[#FFD700]">•</span>
                <span>Supported companies in over 50 countries, breaking down geographical barriers</span>
              </li>
            </ul>
            <p className="text-lg text-gray-600 leading-relaxed">
              These achievements reflect our commitment to delivering tangible results and driving business growth through 
              innovative communication solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Looking Ahead */}
      <section className="py-24 bg-gradient-to-br from-white via-neutral-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-[#FFD700] to-[#25D366] bg-clip-text text-transparent tracking-tight text-center">Looking Ahead</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              As we continue to grow and evolve, Multycomm remains committed to pushing the boundaries of what's possible 
              in business communication. Our roadmap includes:
            </p>
            <ul className="list-none space-y-6 text-lg text-gray-600 mb-8">
              <li className="flex items-center space-x-3">
                <span className="text-[#FFD700]">•</span>
                <span>Expanding our AI capabilities to offer even more personalized and predictive messaging solutions</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-[#25D366]">•</span>
                <span>Developing new integrations with popular CRM and e-commerce platforms</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-[#FFD700]">•</span>
                <span>Enhancing our analytics tools to provide deeper insights into customer behavior and preferences</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="text-[#25D366]">•</span>
                <span>Exploring emerging technologies to stay at the forefront of digital communication trends</span>
              </li>
            </ul>
            <p className="text-lg text-gray-600 leading-relaxed">
              We're excited about the future of business communication and are dedicated to being your trusted partner 
              in navigating this ever-evolving landscape. Join us in redefining how businesses connect with their audience 
              in the digital age.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}