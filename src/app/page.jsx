"use client"

import Head from 'next/head';
import { motion } from 'framer-motion'
import HeroSection from '@/components/HeroSection'
import FeatureSection from '@/components/FeatureSection'
import PricingSection from '@/components/PricingSection'
import ProductShowcase from '@/components/ProductShowcase';

const whatsappFeatures = [
  { icon: 'MessageCircle', title: "Instant Messaging", description: "Connect with customers in real-time through WhatsApp's messaging platform." },
  { icon: 'ShoppingCart', title: "E-commerce Integration", description: "Seamlessly integrate your online store with WhatsApp for easy shopping." },
  { icon: 'Users', title: "Customer Support", description: "Provide quick and efficient customer support directly through WhatsApp." },
  { icon: 'Bell', title: "Notifications", description: "Send timely updates and notifications to keep customers informed." },
  { icon: 'BarChart', title: "Analytics", description: "Gain insights into customer interactions and business performance." },
  { icon: 'Lock', title: "Secure Transactions", description: "Ensure safe and secure transactions for your customers." },
];

const shopFeatures = [
  { icon: 'FileText', title: "Template", description: "Create and use customizable message templates for consistent communication." },
  { icon: 'Upload', title: "Bulk Upload", description: "Easily upload and manage large sets of data for your campaigns." },
  { icon: 'CheckCircle', title: "Validation", description: "Ensure data accuracy with built-in validation processes." },
  { icon: 'PieChart', title: "Reports", description: "Generate comprehensive reports to track your business performance." },
  { icon: 'Code', title: "API Based Messaging", description: "Integrate our powerful API for seamless messaging capabilities." },
  { icon: 'Send', title: "Outbound Campaign", description: "Launch and manage outbound messaging campaigns effortlessly." },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Your Business Name</title>
        <meta name="description" content="Transform your business with our WhatsApp API services. Improve customer engagement and streamline messaging." />
        <meta name="keywords" content="WhatsApp API, customer engagement, messaging platform, business communication" />
        <meta property="og:title" content="Transform Your Business with WhatsApp API" />
        <meta property="og:description" content="Improve customer interactions with automated messaging and analytics." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com" />
        <meta property="og:image" content="/images/whatsapp-api-banner.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Transform Your Business with WhatsApp API" />
        <meta name="twitter:description" content="Improve customer interactions with automated messaging and analytics." />
        <meta name="twitter:image" content="/images/whatsapp-api-banner.jpg" />
        <link rel="canonical" href="https://yourwebsite.com" />
      </Head>

      <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative"
      >
            {/* Curved section transitions */}
            <div className="absolute inset-0 z-0 pointer-events-none">
        <svg className="absolute top-[95vh] left-0 right-0 w-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
          <path
            d="M0 120L60 112C120 104 240 88 360 80C480 72 600 72 720 76C840 80 960 88 1080 92C1200 96 1320 96 1380 96L1440 96V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z"
            fill="#f9fafb"
          />
        </svg>
      </div>

        <HeroSection />

      {/* Section 1 */}
        <div className="relative bg-gray-50">
        <FeatureSection
            title="Why Choose Us"
            features={[
              { 
                title: 'Easy Integration', 
                description: 'Seamlessly integrate WhatsApp API into your existing systems.',
                icon: 'Box'
              },
              { 
                title: 'Automated Responses', 
                description: 'Set up automated responses to common customer queries.',
                icon: 'MessageSquare'
              },
              { 
                title: 'Analytics Dashboard', 
                description: 'Get insights into your messaging performance with our analytics dashboard.',
                icon: 'BarChart2'
              },
              { 
                title: '24/7 Support', 
                description: 'Our team is always available to help you with any issues.',
                icon: 'Headphones'
              },
            ]}
        />

        <ProductShowcase
          title="WhatsApp Business Solutions"
          features={whatsappFeatures}
          imageSrc="/images/hero-1.jpg"
          imageAlt="WhatsApp Business Features"
          primaryColor="#25D366"
          secondaryColor="#075E54"
        />

        <div className="py-16">
          <PricingSection />
        </div>
        
      {/* Section 2 */}
        <FeatureSection
          title="Boost Your Business"
          features={[
            { 
              title: 'Increased Engagement', 
              description: 'Reach customers on their preferred messaging platform.',
              icon: 'Users'
            },
            { 
              title: 'Cost-Effective', 
              description: 'Reduce customer service costs with automated messaging.',
              icon: 'DollarSign'
            },
            { 
              title: 'Scalable Solution', 
              description: 'Our API can handle millions of messages per day.',
              icon: 'TrendingUp'
            },
            { 
              title: 'Customizable', 
              description: 'Tailor the solution to fit your specific business needs.',
              icon: 'Settings'
            },
          ]}
        />

        <ProductShowcase
          title="WatsApp.Shop Platform"
          features={shopFeatures}
          imageSrc="/images/hero-2.jpg"
          imageAlt="WatsApp.Shop Features"
          primaryColor="#ef6f53"
          secondaryColor="#364c63"
        />

        <div className="py-16">
          <PricingSection />
        </div>
      </div>
        </motion.div>
    </div>
  );
}
