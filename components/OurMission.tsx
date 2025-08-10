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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-slate-900 mb-6">
              Our Mission
            </h2>

            <p className="text-base text-slate-600 max-w-xl leading-relaxed">
              We are on a mission to help healthcare organizations achieve market-leading results by delivering unparalleled value and expertise. Our comprehensive support spans payers, providers, and medical billing companies, enabling them to realize significant financial and administrative business outcomes.
            </p>
            <p className="text-base text-slate-600 max-w-xl leading-relaxed">
              Leveraging a robust global delivery model, highly knowledgeable resources, and a relentless focus on innovation, we empower our clients to navigate the complexities of healthcare with confidence and agility. We prioritize deep collaboration and customized solutions to meet the unique challenges faced by each organization we serve.
            </p>
            <p className="text-base text-slate-600 max-w-xl leading-relaxed">
              By combining industry-leading technology with domain expertise, Citrux strives to enhance operational efficiencies, reduce costs, and improve patient outcomes — all while fostering long-term partnerships built on trust and integrity.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
