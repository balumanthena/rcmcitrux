'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import RCMLifecycle from './RCMLifecycle'
import Advantage from './Advantage'
import OurMission from './OurMission'


export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 font-sans overflow-hidden">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 md:py-24 relative">
        
        {/* Decorative gradient blobs with floating animation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4, y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: 'loop' }}
          className="absolute -top-20 -left-20 w-72 h-72 bg-purple-300 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4, y: [0, 20, 0] }}
          transition={{ duration: 6, delay: 1.5, repeat: Infinity, repeatType: 'loop' }}
          className="absolute top-40 -right-20 w-72 h-72 bg-blue-300 rounded-full blur-3xl"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
          
          {/* Left Column */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15 } }
            }}
            className="space-y-6"
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            >
              Transform Your <span className="text-purple-600">RCM Health</span> Workflow
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.7 }}
              className="text-lg text-gray-600"
            >
              We provide professional Revenue Cycle Management services that maximize efficiency,
              improve patient satisfaction, and optimize your healthcare operations.
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
              className="flex flex-wrap gap-4"
            >
              <button className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200">
                Get Started
              </button>
              <button className="px-6 py-3 border border-purple-600 text-purple-600 rounded-xl hover:bg-purple-50 hover:shadow-md transition-all duration-200">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full h-80 md:h-[500px]"
          >
            <Image
              src="/images/bg1.jpg"
              alt="Healthcare Team collaborating in an office"
              fill
              className="rounded-2xl object-cover shadow-xl"
              priority
              placeholder="blur"
              blurDataURL="/images/bg1-blur.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl"></div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-8 left-8 bg-white p-5 rounded-xl shadow-lg w-64"
            >
              <p className="text-2xl font-bold text-purple-600">99.9%</p>
              <p className="text-gray-600 text-sm">Claim Accuracy Rate</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Other sections with fade-in animations */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <OurMission />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <RCMLifecycle />
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Advantage />
       
      </motion.section>
    </main>
  )
}
