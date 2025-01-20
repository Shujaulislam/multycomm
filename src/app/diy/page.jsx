'use client'

import { motion } from 'framer-motion'
import { Code2, Server, Database, MessageSquare, Zap, Shield, GitBranch, Webhook } from 'lucide-react'

export default function DIY() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-b from-blue-500/5 to-transparent">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0],
            }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -right-10 -top-10 h-64 w-64 rounded-full bg-gradient-to-br from-blue-500/10 to-cyan-500/10 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, -5, 0],
            }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute -left-10 top-20 h-64 w-64 rounded-full bg-gradient-to-br from-cyan-500/10 to-blue-500/10 blur-3xl"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4 inline-block rounded-full bg-blue-500/10 px-6 py-2 text-sm font-medium text-blue-700 border border-blue-500/20"
            >
              Developer Guide
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight"
            >
              DIY WhatsApp API
              <span className="block mt-2">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Integration Guide
                </span>
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              A comprehensive guide to help you integrate WhatsApp API into your business systems.
              Follow our step-by-step instructions to get started.
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
            <h2 className="flex items-center gap-3 text-2xl font-semibold text-blue-700 mb-6">
              <Server className="w-6 h-6" />
              Step 1: Set Up Your WhatsApp Business Account
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Before diving into the technical integration, you'll need to set up your WhatsApp Business Account:
              </p>
              <ul className="list-none space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Visit the WhatsApp Business Platform website</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <span>Create a Meta Business Account if you don't have one</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Complete the business verification process</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <span>Add a payment method for your account</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="flex items-center gap-3 text-2xl font-semibold text-blue-700 mb-6">
              <Shield className="w-6 h-6" />
              Step 2: Obtain API Credentials
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Once your WhatsApp Business Account is set up, you'll need to obtain your API credentials:
              </p>
              <ul className="list-none space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Generate your WhatsApp Business API access token</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <span>Note down your Phone Number ID</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Set up webhook URL for receiving messages</span>
                </li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-4">
                <p className="text-sm text-gray-600">
                  🔒 Remember to keep your access token secure and never expose it in client-side code.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="flex items-center gap-3 text-2xl font-semibold text-blue-700 mb-6">
              <Code2 className="w-6 h-6" />
              Step 3: Choose Your Development Environment
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Select your preferred programming language and set up your development environment:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-blue-700 mb-2">Node.js</h3>
                  <pre className="bg-gray-50 p-3 rounded text-sm overflow-x-auto">
                    <code>npm install axios</code>
                  </pre>
                </div>
                <div className="p-4 bg-white rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-blue-700 mb-2">Python</h3>
                  <pre className="bg-gray-50 p-3 rounded text-sm overflow-x-auto">
                    <code>pip install requests</code>
                  </pre>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="flex items-center gap-3 text-2xl font-semibold text-blue-700 mb-6">
              <MessageSquare className="w-6 h-6" />
              Step 4: Send Your First Message
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Let's start with a simple example of sending a message using Node.js:
              </p>
              <pre className="bg-gray-50 p-6 rounded-lg border border-gray-200 overflow-x-auto">
                <code className="text-sm">
                  {`const axios = require('axios');

async function sendWhatsAppMessage() {
  try {
    const response = await axios.post(
      'https://graph.facebook.com/v12.0/YOUR_PHONE_NUMBER_ID/messages',
      {
        messaging_product: 'whatsapp',
        to: 'RECIPIENT_PHONE_NUMBER',
        type: 'template',
        template: {
          name: 'hello_world',
          language: { code: 'en_US' }
        }
      },
      {
        headers: {
          'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
          'Content-Type': 'application/json'
        }
      }
    );
    console.log('Message sent successfully:', response.data);
  } catch (error) {
    console.error('Error sending message:', error.response?.data || error);
  }
}`}
                </code>
              </pre>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="flex items-center gap-3 text-2xl font-semibold text-blue-700 mb-6">
              <Webhook className="w-6 h-6" />
              Step 5: Set Up Webhooks
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                To receive messages and status updates, you'll need to set up a webhook endpoint:
              </p>
              <pre className="bg-gray-50 p-6 rounded-lg border border-gray-200 overflow-x-auto">
                <code className="text-sm">
                  {`const express = require('express');
const app = express();

app.use(express.json());

app.post('/webhook', (req, res) => {
  // Verify webhook
  if (req.query['hub.mode'] === 'subscribe' &&
      req.query['hub.verify_token'] === 'YOUR_VERIFY_TOKEN') {
    res.send(req.query['hub.challenge']);
  } else {
    res.sendStatus(400);
  }
});

app.post('/webhook', (req, res) => {
  const { body } = req;
  
  // Handle incoming messages
  if (body.object === 'whatsapp_business_account') {
    // Process messages
    console.log('Received webhook:', body);
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

app.listen(3000, () => {
  console.log('Webhook server is running on port 3000');
});`}
                </code>
              </pre>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="flex items-center gap-3 text-2xl font-semibold text-blue-700 mb-6">
              <Database className="w-6 h-6" />
              Step 6: Message Templates
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Create and manage message templates for your business communications:
              </p>
              <ul className="list-none space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Design templates in the Meta Business Manager</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <span>Submit templates for approval</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Use approved templates in your API calls</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="flex items-center gap-3 text-2xl font-semibold text-blue-700 mb-6">
              <Zap className="w-6 h-6" />
              Step 7: Testing and Monitoring
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Before going live, thoroughly test your integration:
              </p>
              <ul className="list-none space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Use the WhatsApp Business API test environment</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <span>Monitor message delivery status</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Set up error logging and monitoring</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <span>Implement retry mechanisms for failed messages</span>
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="flex items-center gap-3 text-2xl font-semibold text-blue-700 mb-6">
              <GitBranch className="w-6 h-6" />
              Step 8: Advanced Features
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Once you have the basics working, explore advanced features:
              </p>
              <ul className="list-none space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Interactive messages with buttons and lists</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <span>Media messages (images, documents, videos)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Location sharing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-cyan-500 mt-1">•</span>
                  <span>Contact sharing</span>
                </li>
              </ul>
            </div>
          </section>

          <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-100">
            <h3 className="text-lg font-semibold text-blue-700 mb-4">Need Help?</h3>
            <p className="text-gray-600">
              If you encounter any difficulties during the integration process, our support team is here to help.
              Contact us through our support portal or email us at support@multycomm.com.
            </p>
            <div className="mt-4 text-sm text-gray-500">
              Remember to check our API documentation for detailed information about all available endpoints and features.
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
