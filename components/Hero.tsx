'use client'

import React, { useRef, useState, MouseEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion, useSpring } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import OurMission from './OurMission'
import RcmLifecycleCircle from './RCMLifecycle'
import AdvantagesSection from './Advantage'

// Animation variants
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 }
}

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const cardRef = useRef<HTMLDivElement>(null)

  // Smoother tilt animation
  const tiltX = useSpring(0, { stiffness: 150, damping: 15 })
  const tiltY = useSpring(0, { stiffness: 150, damping: 15 })

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    tiltX.set((py - 0.5) * -8) // rotateX (invert)
    tiltY.set((px - 0.5) * 10) // rotateY
  }

  function handleLeave() {
    tiltX.set(0)
    tiltY.set(0)
  }

  return (
    <section
      aria-label="Revenue Cycle Management hero"
      className="relative py-12 md:py-20 bg-white"
    >
      {/* Background Glow */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.22, y: [0, 18, 0] }}
        transition={{ duration: 9, repeat: Infinity, delay: 1.5, ease: 'easeInOut' }}
        className="pointer-events-none absolute -right-36 top-40 w-80 h-80 rounded-full bg-gradient-to-tr from-cyan-300 via-blue-300 to-indigo-300 filter blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={containerVariants}
            className="space-y-6 md:pr-8"
          >
            <motion.h1
              variants={fadeUpVariants}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-slate-900"
            >
              Transform your{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-600">
                RCM Health
              </span>
              <br className="hidden sm:inline" /> operations with{' '}
              <span className="whitespace-nowrap bg-gradient-to-r from-amber-200/70 to-rose-200/40 px-3 py-1 rounded-full text-xs font-medium text-amber-900 ml-3">
                faster claims • happier patients
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUpVariants}
              transition={{ duration: 0.6, delay: 0.06 }}
              className="text-base text-slate-600 max-w-xl leading-relaxed"
            >
              We help healthcare providers streamline billing, increase claim acceptance, and recover more revenue — all while improving patient experience.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeUpVariants}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="flex flex-wrap gap-4 mt-4"
            >
              <Link
                href="#get-started"
                className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-white font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5 transition"
                aria-label="Get started with RCM"
              >
                Get Started
                <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition" />
              </Link>

              <Link
                href="#learn-more"
                className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 border border-indigo-200 text-indigo-700 font-medium hover:bg-indigo-50 transition"
              >
                Learn More
              </Link>
            </motion.div>

            {/* Benefits */}
            <motion.ul
              variants={fadeUpVariants}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-6 flex flex-wrap gap-3"
            >
              {['99.9% claim accuracy', 'Faster reimbursements', 'End-to-end security'].map((t) => (
                <li
                  key={t}
                  className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full text-sm text-slate-700 shadow-sm"
                >
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>{t}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right Tilt Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="flex justify-center md:justify-end"
          >
            <motion.div
              ref={cardRef}
              onMouseMove={shouldReduceMotion ? undefined : handleMove}
              onMouseLeave={shouldReduceMotion ? undefined : handleLeave}
              style={{
                transform: `perspective(900px) rotateX(${tiltX.get()}deg) rotateY(${tiltY.get()}deg)`
              }}
              className="relative w-full max-w-md md:max-w-lg rounded-3xl shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-white to-indigo-50 opacity-60" />

              <div className="relative w-full h-80 md:h-[420px]">
                <Image
                  src="/images/bg1.jpg"
                  alt="Healthcare team collaborating"
                  fill
                  className="object-cover"
                  sizes="(min-width: 768px) 40vw, 90vw"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/28 to-transparent" />

                {/* Card Overlay */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute left-6 bottom-6 w-56 rounded-xl bg-white/95 backdrop-blur-md p-4 shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-indigo-600">+22%</p>
                      <p className="text-xs text-slate-600">Average revenue recovered</p>
                    </div>
                    <div className="flex flex-col text-right">
                      <p className="text-sm font-medium text-slate-700">Claims / month</p>
                      <p className="text-xs text-slate-500">managed at scale</p>
                    </div>
                  </div>
                </motion.div>

                {/* Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.45 }}
                  className="absolute right-6 top-6 rounded-full bg-white/95 px-3 py-2 text-sm font-semibold shadow-md"
                >
                  99.9% Accuracy
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <svg
        className="absolute left-0 right-0 bottom-0 -z-10"
        viewBox="0 0 1440 80"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M0 56.5C120 32 360 80 720 56.5C1080 33 1320 64 1440 54"
          stroke="rgba(99,102,241,0.06)"
          strokeWidth="120"
          strokeLinecap="round"
        />
      </svg>
      <OurMission />
      <RcmLifecycleCircle />
      <AdvantagesSection />

    </section>
  )
}
