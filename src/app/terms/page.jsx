// export const metadata = {
//   title: 'Terms and Conditions | Multycomm',
//   description: 'Read our terms and conditions to understand how we provide our WhatsApp API services.',
//   alternates: {
//     canonical: 'https://www.multycomm.com/terms'
//   },
//   openGraph: {
//     title: 'Terms and Conditions | Multycomm',
//     description: 'Read our terms and conditions to understand how we provide our WhatsApp API services.',
//     url: 'https://www.multycomm.com/terms',
//     type: 'website'
//   },
//   twitter: {
//     title: 'Terms and Conditions | Multycomm',
//     description: 'Read our terms and conditions to understand how we provide our WhatsApp API services.'
//   }
// }

'use client'

import { motion } from 'framer-motion'

export default function Terms() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-b from-purple-500/5 to-transparent">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-gradient-to-br from-purple-500/10 to-indigo-500/10 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, -5, 0],
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute -left-10 top-20 h-64 w-64 rounded-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4 inline-block rounded-full bg-purple-500/10 px-6 py-2 text-sm font-medium text-purple-700 border border-purple-500/20"
            >
              Legal Documentation
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight"
            >
              Terms and
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent px-3 relative">
                Conditions
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Please read these terms carefully before using our WhatsApp API services.
              By using our services, you agree to these conditions.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="prose prose-lg max-w-none"
        >
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-purple-700 mb-6">1. Use of Services</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                You agree to use Multycomm's WhatsApp API services only for lawful purposes and in accordance with these terms and conditions.
                You are prohibited from violating or attempting to violate the security of the Service.
              </p>
              <p>
                Prohibited activities include, but are not limited to:
              </p>
              <ul className="list-none space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Accessing data not intended for you or logging into a server/account you are not authorized to access</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Attempting to probe, scan, or test the vulnerability of the system or network</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Attempting to interfere with service to any user, host, or network</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-purple-700 mb-6">2. API Usage and Limitations</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Your use of our API is subject to certain limitations, including but not limited to rate limits and data usage caps.
                These limitations may vary depending on your subscription plan. Exceeding these limits may result in temporary
                service interruption or additional charges.
              </p>
              <p>
                Specific limitations include:
              </p>
              <ul className="list-none space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Rate limits: Maximum of 250 requests per minute for standard plans</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Message size: Maximum of 4096 characters per message</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Media attachments: Up to 16MB for images, 16MB for videos</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Concurrent connections: Limited based on your subscription tier</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-purple-700 mb-6">3. Privacy and Data Protection</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Multycomm is committed to protecting your privacy. We will only use your personal information in accordance with our
                Privacy Policy. By using our services, you consent to such processing and you warrant that all data provided by you is accurate.
              </p>
              <p>
                Our data protection measures include:
              </p>
              <ul className="list-none space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>End-to-end encryption for all message content</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Regular security audits and penetration testing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Compliance with GDPR and other relevant data protection regulations</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Secure data centers with multiple redundancy levels</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-purple-700 mb-6">4. Intellectual Property</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                The Service and its original content, features, and functionality are owned by Multycomm and are protected by
                international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
              <p>
                Protected elements include:
              </p>
              <ul className="list-none space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Our proprietary API architecture and implementation</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Custom-developed algorithms and processing methods</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Documentation, guides, and educational materials</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Brand assets, logos, and design elements</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-purple-700 mb-6">5. Service Level Agreement (SLA)</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                We strive to maintain a high level of service availability and reliability. Our service level commitments include:
              </p>
              <ul className="list-none space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>99.9% uptime guarantee for enterprise plans</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Maximum response time of 1 hour for critical issues</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Regular maintenance windows with advance notice</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>24/7 monitoring and automated incident response</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-purple-700 mb-6">6. Termination</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                We may terminate or suspend your access to our Service immediately, without prior notice or liability, for any
                reason whatsoever, including without limitation if you breach the Terms.
              </p>
              <p>
                Grounds for termination include:
              </p>
              <ul className="list-none space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Violation of these terms or any applicable laws</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Non-payment or payment disputes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-purple-500 mt-1">•</span>
                  <span>Abuse of service or excessive resource usage</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-indigo-500 mt-1">•</span>
                  <span>Fraudulent or malicious activities</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-purple-700 mb-6">7. Changes to Terms</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new Terms
                on this page and updating the "Last updated" date.
              </p>
              <p>
                Your continued use of the Service after any such changes constitutes your acceptance of the new Terms.
              </p>
            </div>
          </section>

          <div className="mt-12 p-6 bg-purple-50 rounded-lg border border-purple-100">
            <p className="text-gray-600">
              By using Multycomm's services, you acknowledge that you have read and understood these terms and conditions
              and agree to be bound by them. If you have any questions about these terms, please contact our support team.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Last updated: January 20, 2025
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}