'use client'

import React, { useRef, useState, MouseEvent, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import OurMission from './OurMission'
import RcmLifecycleCircle from './RCMLifecycle'
import AdvantagesSection from './Advantage'

// Particle background
import Particles from 'react-tsparticles'

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null)

  const [counter, setCounter] = useState(0)

  // Counter animation replaced with simple increment (can keep as is or just show final value)
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

  // Remove tilt effect handlers
  function handleMove(e: MouseEvent<HTMLDivElement>) {}
  function handleLeave() {}

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
          <div className="space-y-6 md:pr-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
              Transform your{' '}
              <span
                className="bg-gradient-to-r from-indigo-600 via-emerald-500 to-indigo-600 bg-clip-text text-transparent bg-[length:200%_200%]"
                style={{ backgroundPosition: '0% 50%' /* static position, no animation */ }}
              >
                RCM Health
              </span>
              <br className="hidden sm:inline" /> operations with{' '}
              <span className="whitespace-nowrap bg-amber-100 px-3 py-1 rounded-full text-xs font-medium text-amber-900 ml-3">
                faster claims • accurate coding 
              </span>
            </h1>

            <p className="text-base text-slate-600 max-w-xl leading-relaxed">
              We help healthcare providers streamline billing, increase claim acceptance, and recover more revenue — all while improving patient experience.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mt-4">
              <Link href="#get-started" className="group inline-flex items-center gap-3 rounded-2xl bg-indigo-600 px-6 py-3 text-white font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5 transition">
                Schedule a free consultation
                <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition" />
              </Link>
            </div>

            {/* Benefits */}
            <ul className="mt-6 flex flex-wrap gap-3">
              {['95%+ claim accuracy', 'Faster reimbursements', 'End-to-end security'].map((t) => (
                <li key={t} className="inline-flex items-center gap-2 bg-white border border-slate-200 px-3 py-2 rounded-full text-sm text-slate-700 shadow-sm">
                  <Check className="h-4 w-4 text-emerald-500" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Tilt Card */}
          <div className="flex justify-center md:justify-end">
            <div
              ref={cardRef}
              className="relative w-full max-w-md md:max-w-lg rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br from-white to-slate-50"
            >
              <div className="relative w-full h-80 md:h-[420px]">
                <Image src="/images/bg1.jpg" alt="Healthcare team collaborating" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                {/* Live Stat Card */}
                <div
                  className="absolute left-6 bottom-6 w-56 rounded-xl bg-white p-4 shadow-lg"
                >
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
                </div>

                {/* Badge */}
                <div className="absolute right-6 top-6 rounded-full bg-white px-3 py-2 text-sm font-semibold shadow-md cursor-pointer">
                  95%+ Accuracy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <svg className="absolute left-0 right-0 bottom-0 -z-10" viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none">
        <path d="M0 56.5C120 32 360 80 720 56.5C1080 33 1320 64 1440 54" stroke="rgba(99,102,241,0.06)" strokeWidth="120" strokeLinecap="round" />
      </svg>

      <OurMission />
      <RcmLifecycleCircle />
      <AdvantagesSection />
    </section>
  )
}
