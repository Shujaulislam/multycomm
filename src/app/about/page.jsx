"use client"

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Zap, Shield, Users, Rocket, Globe } from 'lucide-react'

// export const metadata = {
//   title: 'About Us | Multycomm',
//   description: 'Learn more about our mission to enhance business communication using WhatsApp API solutions.',
//   alternates: {
//     canonical: 'https://yourwebsite.com/about'
//   },
//   openGraph: {
//     title: 'About Us | Multycomm',
//     description: 'Learn more about our mission to enhance business communication using WhatsApp API solutions.',
//     url: 'https://yourwebsite.com/about',
//     type: 'website'
//   },
//   twitter: {
//     title: 'About Us | Multycomm',
//     description: 'Learn more about our mission to enhance business communication using WhatsApp API solutions.'
//   }
// }

export default function About() {
  return (
    <>
    <div className="min-h-screen text-black overflow-hidden">
      {/* Header */}
      <header className="relative py-20 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-4 relative z-10"
        >
          About Multycomm
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl max-w-3xl mx-auto relative z-10"
        >
          Revolutionizing Business Communication Through WhatsApp API Solutions
        </motion.p>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiM4ODgiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')]"></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Company Overview */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
          >
            <h2 className="text-3xl font-bold mb-4 text-[#FFD700]">Our Story</h2>
            <p className="text-lg mb-4">
              Founded in 2023, Multycomm emerged from a vision to transform how businesses communicate with their customers. 
              In an era where instant messaging dominates personal communication, we recognized the untapped potential of 
              WhatsApp for business interactions.
            </p>
            <p className="text-lg mb-4">
              Our journey began with a simple idea: to bridge the gap between businesses and their customers using the 
              world's most popular messaging platform. We set out to create a suite of tools that would not just facilitate 
              communication, but elevate it to new heights of efficiency and personalization.
            </p>
            <p className="text-lg">
              Today, Multycomm stands at the forefront of WhatsApp API integration, empowering businesses of all sizes 
              to engage with their audience in meaningful ways. Our rapid growth is a testament to the transformative 
              power of our solutions and the trust our clients place in us.
            </p>
          </motion.div>

          {/* Mission and Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white/10 p-8 rounded-lg backdrop-blur-sm"
          >
            <h2 className="text-3xl font-bold mb-4 text-[#FFD700]">Our Mission</h2>
            <p className="text-lg mb-4">
              At Multycomm, our mission is to revolutionize business communication by harnessing the power of WhatsApp API. 
              We are committed to providing innovative, scalable, and user-friendly solutions that enable businesses to 
              connect with their customers in more personal and efficient ways.
            </p>
            <h2 className="text-3xl font-bold mb-4 mt-8 text-[#FFD700]">Our Vision</h2>
            <p className="text-lg mb-4">
              We envision a world where businesses can effortlessly engage with their customers, breaking down communication 
              barriers and fostering stronger relationships. Our goal is to be the global leader in WhatsApp-based business 
              solutions, continuously innovating to meet the evolving needs of modern enterprises.
            </p>
            <p className="text-lg">
              Through our technology, we aim to empower businesses to deliver exceptional customer experiences, drive growth, 
              and stay ahead in an increasingly digital marketplace.
            </p>
          </motion.div>
        </div>

        {/* What Sets Us Apart */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 bg-white/10 p-8 rounded-lg backdrop-blur-sm"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-[#FFD700]">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-3 flex items-center">
                <Zap className="mr-2 text-[#FFD700]" /> Cutting-Edge Technology
              </h3>
              <p className="text-lg">
                Our platform leverages the latest advancements in AI and machine learning to provide intelligent, 
                automated messaging solutions that learn and adapt to your business needs.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3 flex items-center">
                <Shield className="mr-2 text-[#FFD700]" /> Uncompromising Security
              </h3>
              <p className="text-lg">
                We prioritize the security and privacy of your data with end-to-end encryption, rigorous 
                compliance measures, and regular security audits to ensure peace of mind.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3 flex items-center">
                <Users className="mr-2 text-[#FFD700]" /> Customer-Centric Approach
              </h3>
              <p className="text-lg">
                Our dedicated support team and comprehensive onboarding process ensure that you get the most 
                out of our platform, with personalized assistance every step of the way.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3 flex items-center">
                <Rocket className="mr-2 text-[#FFD700]" /> Scalability and Flexibility
              </h3>
              <p className="text-lg">
                Whether you're a small business or a large enterprise, our solutions are designed to scale 
                with your needs, offering flexible plans and customizable features.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Our Impact */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 bg-white/10 p-8 rounded-lg backdrop-blur-sm"
        >
          <h2 className="text-3xl font-bold mb-6 text-center text-[#FFD700]">Our Impact</h2>
          <p className="text-lg mb-6">
            Since our inception, Multycomm has made significant strides in transforming how businesses interact with their customers:
          </p>
          <ul className="list-disc list-inside space-y-4 text-lg">
            <li>Facilitated over 10 million customer interactions across various industries</li>
            <li>Helped businesses achieve an average of 40% increase in customer engagement rates</li>
            <li>Reduced response times by up to 60%, enhancing customer satisfaction</li>
            <li>Enabled businesses to save an average of 30% on customer service costs</li>
            <li>Supported companies in over 50 countries, breaking down geographical barriers</li>
          </ul>
          <p className="text-lg mt-6">
            These achievements reflect our commitment to delivering tangible results and driving business growth through 
            innovative communication solutions.
          </p>
        </motion.div>

        {/* Looking Ahead */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16 bg-white/10 p-8 rounded-lg backdrop-blur-sm"
        >
          <h2 className="text-3xl font-bold mb-4 text-[#FFD700]">Looking Ahead</h2>
          <p className="text-lg mb-4">
            As we continue to grow and evolve, Multycomm remains committed to pushing the boundaries of what's possible 
            in business communication. Our roadmap includes:
          </p>
          <ul className="list-disc list-inside space-y-4 text-lg mb-6">
            <li>Expanding our AI capabilities to offer even more personalized and predictive messaging solutions</li>
            <li>Developing new integrations with popular CRM and e-commerce platforms</li>
            <li>Enhancing our analytics tools to provide deeper insights into customer behavior and preferences</li>
            <li>Exploring emerging technologies to stay at the forefront of digital communication trends</li>
          </ul>
          <p className="text-lg">
            We're excited about the future of business communication and are dedicated to being your trusted partner 
            in navigating this ever-evolving landscape. Join us in redefining how businesses connect with their audience 
            in the digital age.
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to transform your customer communication?</h2>
          <p className="text-xl mb-8">Join the Multycomm revolution and take your business to new heights.</p>
          <button className="bg-[#FFD700] text-[#1A1A1A] px-8 py-3 rounded-full text-lg font-bold hover:bg-[#FFA500] transition-colors duration-300 flex items-center mx-auto">
            Get Started Now
            <ArrowRight className="ml-2" />
          </button>
        </motion.div>
      </main>

      {/* Decorative Elements */}
      {/* <div className="fixed top-0 left-0 w-64 h-64 bg-[#FFD700] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="fixed top-0 right-0 w-64 h-64 bg-[#FF6B6B] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="fixed -bottom-32 left-20 w-64 h-64 bg-[#4ECDC4] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div> */}
    </div>
    </>
  );
}