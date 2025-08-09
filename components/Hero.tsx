'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import WhyChooseUs from './WhyChooseUs';
import ProcessSteps from './ProcessSteps';
import FeaturesGrid from './FeaturesGrid';
import TestimonialsCarousel from './TestimonialsCarousel';
import { Stethoscope, FileText, ShieldCheck } from 'lucide-react';

const phrases = [
  'Reliable Medical Coding Solutions',
  'Streamlined Revenue Cycle Management',
  'HIPAA-Compliant & Accurate',
];

export default function Hero() {
  const [currentPhrase, setCurrentPhrase] = useState(0);

  // Rotate phrases with typewriter-like delay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100">
        {/* Floating Icons */}
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-20 left-20 opacity-30"
        >
          <Stethoscope size={80} className="text-blue-500" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute bottom-32 right-24 opacity-30"
        >
          <FileText size={70} className="text-emerald-500" />
        </motion.div>
        <motion.div
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute top-1/3 right-1/3 opacity-20"
        >
          <ShieldCheck size={90} className="text-amber-500" />
        </motion.div>

        {/* Spotlight Hover Effect */}
        <div className="absolute inset-0 pointer-events-none [background:radial-gradient(circle_at_var(--x)_var(--y),rgba(255,255,255,0.4),transparent_25%)]" id="spotlight"></div>

        {/* Central Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-lg bg-white/40 shadow-2xl rounded-3xl p-10 max-w-3xl border border-white/30"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
              {phrases[currentPhrase]}
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Empowering healthcare providers with speed, accuracy, and compliance.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl shadow-lg focus:ring-4 focus:ring-blue-300 transition-all">
              Get Started
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Rest of Sections */}
      <WhyChooseUs />
      <ProcessSteps />
      <FeaturesGrid />
      <TestimonialsCarousel />
    </>
  );
}

// Optional: spotlight mouse effect
if (typeof window !== 'undefined') {
  document.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--y', `${e.clientY}px`);
  });
}
