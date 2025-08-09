// components/OurMission.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function OurMission() {
  return (
    <section aria-label="Our Mission" className="bg-white py-20">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg transition-transform duration-500 hover:scale-[1.03]"
          >
            <Image
              src="/images/bg2.jpg"
              alt="Medical team working together at Citrux, symbolizing innovation and collaboration"
              fill
              className="object-cover"
              priority
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-6 max-w-xl"
          >
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              At <span className="font-semibold text-blue-600">Citrux</span>, our mission is simple yet ambitious — to empower businesses with innovative, reliable, and human-centric solutions that drive growth and efficiency.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe technology should not just keep pace with the future, but shape it. That’s why we design every product and service with precision, creativity, and an unwavering commitment to excellence.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Through collaboration, innovation, and integrity, we aim to transform challenges into opportunities, helping our clients achieve their goals faster and smarter.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
