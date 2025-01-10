"use client"

import Head from 'next/head';
import { motion } from 'framer-motion'
import HeroSection from '@/components/HeroSection'
import FeatureSection from '@/components/FeatureSection'
import PricingSection from '@/components/PricingSection'


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
      >
        <HeroSection />

        {/* Section 1 */}
        <FeatureSection
            title="Why Choose Us"
            features={[
              { title: 'Easy Integration', description: 'Seamlessly integrate WhatsApp API into your existing systems.' },
              { title: 'Automated Responses', description: 'Set up automated responses to common customer queries.' },
              { title: 'Analytics Dashboard', description: 'Get insights into your messaging performance with our analytics dashboard.' },
              { title: '24/7 Support', description: 'Our team is always available to help you with any issues.' },
            ]}
          />
          <PricingSection />

          {/* Section 2 */}
          <FeatureSection
            title="Boost Your Business"
            features={[
              { title: 'Increased Engagement', description: 'Reach customers on their preferred messaging platform.' },
              { title: 'Cost-Effective', description: 'Reduce customer service costs with automated messaging.' },
              { title: 'Scalable Solution', description: 'Our API can handle millions of messages per day.' },
              { title: 'Customizable', description: 'Tailor the solution to fit your specific business needs.' },
            ]}
          />
          <PricingSection />
        </motion.div>

    </div>
  );
}
