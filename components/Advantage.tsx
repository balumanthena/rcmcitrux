"use client";

import { motion, easeOut } from "framer-motion";
import {
  Code2,
  ShieldCheck,
  CheckCircle,
  Zap,
  Clock,
  Briefcase,
  DollarSign,
  Users,
  Layers,
  Handshake,
} from "lucide-react";

const bgLight = "#F9FAFB"; // light background
const cardBgLight = "#FFFFFF"; // white card bg

const leftAdvantages = [
  {
    title: "Expert Medical Coding",
    desc: "Our coding specialists hold top industry certifications and advanced education, ensuring every code is accurate and compliant.",
    icon: Code2,
    color: "#EF4444", // red-500
  },
  {
    title: "Uncompromising Quality",
    desc: "We use a multi-layer review process to maintain exceptional accuracy and compliance at every step.",
    icon: ShieldCheck,
    color: "#3B82F6", // blue-500
  },
  {
    title: "High Accuracy Standards",
    desc: "Our team consistently delivers coding precision at or above 95% accuracy rates.",
    icon: CheckCircle,
    color: "#10B981", // green-500
  },
  {
    title: "Rapid Turnarounds",
    desc: "Most projects are completed within 24 hours or faster without sacrificing accuracy.",
    icon: Zap,
    color: "#F59E0B", // amber-500
  },
  {
    title: "Always On",
    desc: "We’re available around the clock — including weekends and holidays — at no extra cost.",
    icon: Clock,
    color: "#8B5CF6", // violet-500
  },
];

const rightAdvantages = [
  {
    title: "Cost-Effective Solutions",
    desc: "We combine top-tier service with competitive pricing, so you get premium results without stretching your budget.",
    icon: DollarSign,
    color: "#3B82F6", // blue-500
  },
  {
    title: "Complete RCM Support",
    desc: "From coding to collections, we provide end-to-end revenue cycle management services tailored to your needs.",
    icon: Briefcase,
    color: "#EF4444", // red-500
  },
  {
    title: "Dedicated Expert Assistance",
    desc: "Our team — including medical professionals — is always ready to support complex chart reviews and answer your questions.",
    icon: Users,
    color: "#F59E0B", // amber-500
  },
  {
    title: "Proven Track Record",
    desc: "With millions of medical records processed annually, our experience speaks for itself.",
    icon: Layers,
    color: "#10B981", // green-500
  },
  {
    title: "A True Partner",
    desc: "We collaborate closely with clients, offering both local and international expertise to navigate healthcare challenges together.",
    icon: Handshake,
    color: "#8B5CF6", // violet-500
  },
];

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export default function AdvantagesSection() {
  return (
    <section
      className="relative py-16 md:py-20 font-sans"
      style={{ backgroundColor: bgLight }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.h2
  className="text-4xl sm:text-5xl md:text-5xl font-extrabold text-center leading-tight text-slate-900 mb-8 tracking-tight select-text"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.5 }}
  variants={headingVariants}
>
  
  <span className="relative inline-block">
    Citrux
    <motion.span
      className="absolute left-0 -bottom-2 h-1 w-full bg-cyan-400 rounded-full origin-left"
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      style={{ transformOrigin: "left" }}
    />
  </span>{" "}
  Advantage
</motion.h2>


        <p className="text-center pt-5 text-gray-600 mb-12 max-w-2xl mx-auto">
          Empowering your revenue cycle with speed, accuracy, and unmatched expertise.
        </p>

        {/* Two Columns with Vertical Line */}
        <div className="relative grid md:grid-cols-2 gap-10 md:gap-12">
          {/* Vertical line between columns */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gray-300"
          />

          {/* Left Column */}
          <div role="list" className="space-y-8">
            {leftAdvantages.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  role="listitem"
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 25,
                  }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 sm:gap-5"
                >
                  {/* Icon Circle */}
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${item.color}20` }} // 12% opacity background
                  >
                    <Icon
                      className="w-6 h-6"
                      style={{ color: item.color }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Card */}
                  <div
                    tabIndex={0}
                    className="flex-1 p-5 sm:p-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl focus:scale-105 focus:shadow-2xl transition-all duration-300 outline-none"
                    style={{ backgroundColor: cardBgLight }}
                  >
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column */}
          <div role="list" className="space-y-8">
            {rightAdvantages.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  role="listitem"
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 25,
                  }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 sm:gap-5"
                >
                  {/* Icon Circle */}
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${item.color}20` }}
                  >
                    <Icon
                      className="w-6 h-6"
                      style={{ color: item.color }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Card */}
                  <div
                    tabIndex={0}
                    className="flex-1 p-5 sm:p-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-2xl focus:scale-105 focus:shadow-2xl transition-all duration-300 outline-none"
                    style={{ backgroundColor: cardBgLight }}
                  >
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
