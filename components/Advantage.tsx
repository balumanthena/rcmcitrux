"use client";

import { motion } from "framer-motion";
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

const brandCyan = "#00BFC5";
const bgDark = "#0C1121";
const cardBg = "#F8F9FB";
const iconBg = "rgba(0, 191, 197, 0.1)";

const leftAdvantages = [
  { title: "Expert Medical Coding", desc: "Our coding specialists hold top industry certifications and advanced education, ensuring every code is accurate and compliant.", icon: Code2 },
  { title: "Uncompromising Quality", desc: "We use a multi-layer review process to maintain exceptional accuracy and compliance at every step.", icon: ShieldCheck },
  { title: "High Accuracy Standards", desc: "Our team consistently delivers coding precision at or above 95% accuracy rates.", icon: CheckCircle },
  { title: "Rapid Turnarounds", desc: "Most projects are completed within 24 hours or faster without sacrificing accuracy.", icon: Zap },
  { title: "Always On", desc: "We’re available around the clock — including weekends and holidays — at no extra cost.", icon: Clock },
];

const rightAdvantages = [
  { title: "Cost-Effective Solutions", desc: "We combine top-tier service with competitive pricing, so you get premium results without stretching your budget.", icon: DollarSign },
  { title: "Complete RCM Support", desc: "From coding to collections, we provide end-to-end revenue cycle management services tailored to your needs.", icon: Briefcase },
  { title: "Dedicated Expert Assistance", desc: "Our team — including medical professionals — is always ready to support complex chart reviews and answer your questions.", icon: Users },
  { title: "Proven Track Record", desc: "With millions of medical records processed annually, our experience speaks for itself.", icon: Layers },
  { title: "A True Partner", desc: "We collaborate closely with clients, offering both local and international expertise to navigate healthcare challenges together.", icon: Handshake },
];

export default function AdvantagesSection() {
  return (
    <section className="relative py-16 md:py-20 font-sans" style={{ backgroundColor: bgDark }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Heading */}
        <h2 className="text-center text-4xl font-extrabold text-white mb-3 tracking-tight">
          The <span style={{ color: "white" }}>Citrux</span> Advantage
        </h2>
        <p className="text-center text-gray-400 mb-12 max-w-2xl mx-auto">
          Empowering your revenue cycle with speed, accuracy, and unmatched expertise.
        </p>

        {/* Two Columns */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 relative">
          
          {/* Left Column */}
          <div className="space-y-8">
            {leftAdvantages.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 sm:gap-5"
                >
                  {/* Icon Circle */}
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: iconBg }}
                  >
                    <Icon className="w-6 h-6" style={{ color: brandCyan }} />
                  </div>
                  
                  {/* Card */}
                  <div
                    className="flex-1 p-5 sm:p-6 rounded-xl shadow-lg"
                    style={{ backgroundColor: cardBg }}
                  >
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {rightAdvantages.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 sm:gap-5"
                >
                  {/* Icon Circle */}
                  <div
                    className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: iconBg }}
                  >
                    <Icon className="w-6 h-6" style={{ color: brandCyan }} />
                  </div>
                  
                  {/* Card */}
                  <div
                    className="flex-1 p-5 sm:p-6 rounded-xl shadow-lg"
                    style={{ backgroundColor: cardBg }}
                  >
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
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
