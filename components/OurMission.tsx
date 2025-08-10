"use client";

import Image from "next/image";
import { motion, easeOut } from "framer-motion";

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, type: "spring" as const, stiffness: 100 },
  }),
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + custom * 0.2, ease: easeOut },
  }),
};

export default function OurMission() {
  const paragraphs = [
    "We are on a mission to help healthcare organizations achieve market-leading results by delivering unparalleled value and expertise. Our comprehensive support spans payers, providers, and medical billing companies, enabling them to realize significant financial and administrative business outcomes.",
    "Leveraging a robust global delivery model, highly knowledgeable resources, and a relentless focus on innovation, we empower our clients to navigate the complexities of healthcare with confidence and agility. We prioritize deep collaboration and customized solutions to meet the unique challenges faced by each organization we serve.",
    "By combining industry-leading technology with domain expertise, Citrux strives to enhance operational efficiencies, reduce costs, and improve patient outcomes — all while fostering long-term partnerships built on trust and integrity.",
  ];

  return (
    <section
      aria-label="Our Mission"
      className="relative bg-gradient-to-b from-white via-slate-50 to-white py-24 lg:py-32 overflow-hidden"
    >
      {/* Abstract SVG Decoration */}
      <svg
        aria-hidden="true"
        className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] opacity-10 pointer-events-none select-none"
        viewBox="0 0 400 400"
        fill="none"
      >
        <circle cx="200" cy="200" r="200" fill="url(#gradient)" />
        <defs>
          <radialGradient id="gradient" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="#00BFC5" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#00BFC5" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Simple Static Image */}
        <motion.div
          className="relative w-full h-[420px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-200"
          aria-hidden="true"
        >
          {/* Gradient Overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/20 via-transparent to-transparent pointer-events-none mix-blend-screen" />
          <Image
            src="/images/bg2.jpg"
            alt="Medical team collaborating at Citrux symbolizing innovation"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Text Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-xl"
        >
          <motion.h2
            aria-level={2}
            className="text-4xl sm:text-5xl md:text-5xl font-extrabold leading-tight text-slate-900 mb-8 tracking-tight select-text"
            variants={headingVariants}
            custom={0}
          >
            Our Mission
          </motion.h2>

          {/* Decorative underline */}
          <motion.div
            className="w-24 h-1 bg-cyan-400 rounded-full mb-12 origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.6, ease: easeOut }}
            style={{ transformOrigin: "left" }}
          />

          {paragraphs.map((para, i) => (
            <motion.p
              key={i}
              className="text-lg text-slate-700 leading-relaxed mb-6"
              variants={paragraphVariants}
              custom={i + 1}
            >
              {para}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
