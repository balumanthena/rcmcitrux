'use client'

import React, { useRef, useState, MouseEvent, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useReducedMotion, useSpring, useAnimation, useTransform } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import OurMission from './OurMission'
import RcmLifecycleCircle from './RCMLifecycle'
import AdvantagesSection from './Advantage'

// Particle background
import Particles from 'react-tsparticles'

const containerVariants = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }
const fadeUpVariants = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }

export default function Hero() {
  const shouldReduceMotion = useReducedMotion()
  const cardRef = useRef<HTMLDivElement>(null)

  // Springs for tilt
  const tiltX = useSpring(0, { stiffness: 150, damping: 15 })
  const tiltY = useSpring(0, { stiffness: 150, damping: 15 })

  // Map spring values to a CSS transform string
  const tiltTransform = useTransform(
    [tiltX, tiltY],
    ([x, y]) => `perspective(900px) rotateX(${x}deg) rotateY(${y}deg)`
  )

  const [counter, setCounter] = useState(0)
  const controls = useAnimation()

  // Counter animation on mount
  useEffect(() => {
    let start = 0
    const end = 22
    const duration = 1000
    const stepTime = Math.abs(Math.floor(duration / end))
    const timer = setInterval(() => {
      start += 1
      setCounter(start)
      if (start >= end) clearInterval(timer)
    }, stepTime)
    return () => clearInterval(timer)
  }, [])

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    tiltX.set((py - 0.5) * -8)
    tiltY.set((px - 0.5) * 10)
  }
  function handleLeave() {
    tiltX.set(0)
    tiltY.set(0)
  }

  return (
    <section aria-label="Revenue Cycle Management hero" className="relative py-12 md:py-20 bg-white overflow-hidden">
      
      {/* Background Particles */}
      <Particles
        className="absolute inset-0 -z-10"
        options={{
          fullScreen: false,
          background: { color: "transparent" },
          particles: {
            number: { value: 25 },
            size: { value: 2 },
            move: { enable: true, speed: 0.4 },
            opacity: { value: 0.4 },
            color: { value: "#6366F1" }
          }
        }}
      />

      {/* Parallax SVG Grid */}
      <svg className="absolute inset-0 w-full h-full opacity-10 -z-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <motion.div initial="hidden" animate="show" variants={containerVariants} className="space-y-6 md:pr-8">
            <motion.h1 variants={fadeUpVariants} transition={{ duration: 0.6 }} className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
              Transform your <motion.span 
                animate={{ backgroundPosition: ['0% 50%', '100% 50%'] }} 
                transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}
                className="bg-gradient-to-r from-indigo-600 via-emerald-500 to-indigo-600 bg-clip-text text-transparent bg-[length:200%_200%]"
              >
                RCM Health
              </motion.span>
              <br className="hidden sm:inline" /> operations with{' '}
              <span className="whitespace-nowrap bg-amber-100 px-3 py-1 rounded-full text-xs font-medium text-amber-900 ml-3">
                faster claims • happier patients
              </span>
            </motion.h1>

            <motion.p variants={fadeUpVariants} transition={{ duration: 0.6, delay: 0.06 }} className="text-base text-slate-600 max-w-xl leading-relaxed">
              We help healthcare providers streamline billing, increase claim acceptance, and recover more revenue — all while improving patient experience.
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeUpVariants} transition={{ duration: 0.6, delay: 0.12 }} className="flex flex-wrap gap-4 mt-4">
              <Link href="#get-started" className="group inline-flex items-center gap-3 rounded-2xl bg-indigo-600 px-6 py-3 text-white font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5 transition">
                Schedule a free consultation
                <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition" />
              </Link>
            </motion.div>

            {/* Benefits */}
            <motion.ul variants={fadeUpVariants} transition={{ duration: 0.6, delay: 0.18 }} className="mt-6 flex flex-wrap gap-3">
              {['95%+ claim accuracy', 'Faster reimbursements', 'End-to-end security'].map((t) => (
                <li key={t} className="inline-flex items-center gap-2 bg-white border border-slate-200 px-3 py-2 rounded-full text-sm text-slate-700 shadow-sm">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>{t}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Right Tilt Card */}
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.18 }} className="flex justify-center md:justify-end">
            <motion.div
              ref={cardRef}
              onMouseMove={shouldReduceMotion ? undefined : handleMove}
              onMouseLeave={shouldReduceMotion ? undefined : handleLeave}
              style={{ transform: tiltTransform }}
              className="relative w-full max-w-md md:max-w-lg rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br from-white to-slate-50"
            >
              <div className="relative w-full h-80 md:h-[420px]">
                <Image src="/images/bg1.jpg" alt="Healthcare team collaborating" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                {/* Live Stat Card */}
                <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute left-6 bottom-6 w-56 rounded-xl bg-white p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-indigo-600">+{counter}%</p>
                      <p className="text-xs text-slate-600">Average revenue recovered</p>
                    </div>
                    <div className="flex flex-col text-right">
                      <p className="text-sm font-medium text-slate-700">Claims / month</p>
                      <p className="text-xs text-slate-500">managed at scale</p>
                    </div>
                  </div>
                </motion.div>

                {/* Badge */}
                <motion.div whileHover={{ scale: 1.1, boxShadow: '0 0 20px rgba(255,255,255,0.6)' }}
                  className="absolute right-6 top-6 rounded-full bg-white px-3 py-2 text-sm font-semibold shadow-md cursor-pointer">
                  95%+ Accuracy
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <svg className="absolute left-0 right-0 bottom-0 -z-10" viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
        <path d="M0 56.5C120 32 360 80 720 56.5C1080 33 1320 64 1440 54" stroke="rgba(99,102,241,0.06)" strokeWidth="120" strokeLinecap="round" />
      </svg>

      <OurMission />
      <RcmLifecycleCircle />
      <AdvantagesSection />

      {/* Parallax Image Section */}
      {/* <div
        className="relative h-[400px] md:h-[500px] w-full overflow-hidden"
        style={{
          backgroundImage: "url('/images/bg3.jpg')", // change to your image
          backgroundAttachment: "fixed", // parallax effect
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      > */}
        {/* Overlay */}
        {/* <div className="absolute inset-0 bg-black/40" /> */}

        {/* Text Content */}
        {/* <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
            Driving Healthcare Forward
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-200 leading-relaxed">
            We combine technology, expertise, and compassion to deliver exceptional results for providers and patients alike.
          </p>
        </div>
      </div> */}
    </section>
  )
}
