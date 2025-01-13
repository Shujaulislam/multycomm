'use client'

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MessageCircle, ShoppingCart, Users, Bell, BarChart, Lock, CircleCheckBig, FileText, Upload, CheckCircle, PieChart, Code, Send } from 'lucide-react';

const iconMap = {
  MessageCircle,
  ShoppingCart,
  Users,
  Bell,
  BarChart,
  Lock,
  CircleCheckBig,
  FileText,
  Upload,
  CheckCircle,
  PieChart,
  Code,
  Send,
};

export default function ProductShowcase({ 
  title, 
  features, 
  imageSrc, 
  imageAlt,
  primaryColor = '#ef6f53',
  secondaryColor = '#075E54'
}) {
  const featureRefs = useRef([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute('data-animated', 'true');
          }
        });
      },
      { threshold: 0.1 }
    );

    featureRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      featureRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-1/2 relative">
        <Image
          src={imageSrc}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className="md:w-1/2 bg-white p-12 overflow-y-auto max-h-screen">
        <h2 className="text-4xl font-bold mb-8" style={{ color: secondaryColor }}>{title}</h2>
        <ul className="space-y-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || CircleCheckBig;
            return (
              <li
                key={index}
                ref={(el) => (featureRefs.current[index] = el)}
                className="flex items-start opacity-100 transform translate-y-4 transition-all duration-500 ease-out data-[animated=true]:translate-y-0"
              >
                <div className="mr-4 flex-shrink-0" style={{ color: primaryColor }}>
                  <Icon className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black mb-2">{feature.title}</h3>
                  <p className="text-gray-900">{feature.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      {/* <motion.button
        className="fixed bottom-8 right-8 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-opacity-90 transition duration-300"
        style={{ backgroundColor: primaryColor }}
        onClick={() => setShowForm(!showForm)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get Started
      </motion.button> */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="bg-white p-8 rounded-lg max-w-md w-full"
          >
            <h2 className="text-2xl font-bold mb-4" style={{ color: secondaryColor }}>Get Started with Multycomm</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#25D366] focus:ring-[#25D366]" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#25D366] focus:ring-[#25D366]" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#25D366] focus:ring-[#25D366]"></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full text-white font-semibold py-2 px-4 rounded-md hover:bg-opacity-90 transition duration-300"
                style={{ backgroundColor: primaryColor }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit
              </motion.button>
            </form>
            <button
              className="mt-4 hover:underline"
              style={{ color: secondaryColor }}
              onClick={() => setShowForm(false)}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}