'use client'

import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { Cover } from "./ui/cover";
import { FlipWords } from "./ui/flip-words";
import { motion } from "framer-motion";

const words = ["marketing", "sales", "service", "support"];

const HeroGreen = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden ">
      <div className="absolute inset-0 flex items-center justify-center  ">
        <BackgroundBeamsWithCollision
          className="min-h-screen w-full flex items-center justify-center"
        >
          <div className="relative sm:py-8 py-24 z-10 flex flex-col items-center justify-center h-full max-w-6xl mx-auto px-4">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-base font-medium text-emerald-500 mb-4"
            >
              The Ultimate WhatsApp Business Solution
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold text-center max-w-4xl mx-auto relative z-20 mb-4"
            >
              Grow your business on{" "}
              <Cover className="text-[#25D366]">WhatsApp</Cover>
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-center text-neutral-600 mb-6"
            >
              Automate your{" "}
              <FlipWords 
                words={words}
                className="text-[#25D366] font-semibold"
              />{" "}
              with our platform
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-center text-neutral-600 max-w-2xl mx-auto mb-8"
            >
              Personalize communication and sell more with the WhatsApp Business
              API platform that automates marketing, sales, service and support.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-[#25D366] text-white rounded-lg font-medium hover:bg-[#1ea855] transition-colors shadow-lg hover:shadow-xl"
              >
                Start Free Trial
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-neutral-200 hover:border-[#25D366] rounded-lg font-medium transition-colors hover:bg-white/50 backdrop-blur-sm"
                onClick={() => {
                  window.location.href = "/pricing";
                }}
              >
                View Pricing
              </motion.button>
            </motion.div>
          </div>
        </BackgroundBeamsWithCollision>
      </div>
    </div>
  );
};

export default HeroGreen;
