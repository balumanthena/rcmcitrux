'use client'

import { motion } from 'framer-motion'

export default function Mission() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 text-center">
        {/* Section Heading */}
        <motion.h2
          className="text-4xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Mission: Transform Healthcare.
        </motion.h2>

        {/* Mission Text */}
        <motion.p
          className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          We are on a mission to help healthcare organizations achieve market leading results. 
          We support payers, providers, and medical billing companies achieve financial and 
          administrative business outcomes through our deep global delivery model, knowledgeable 
          resources, and focus on innovation.
        </motion.p>
      </div>
    </section>
  )
}
