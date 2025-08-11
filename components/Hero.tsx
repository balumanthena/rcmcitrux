"use client"

import React, { useRef, useState, useEffect, MouseEvent } from "react"
import Image from "next/image"
import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"
import OurMission from "./OurMission"
import RcmLifecycleCircle from "./RCMLifecycle"
import AdvantagesSection from "./Advantage"
import Particles from "react-tsparticles"

export default function Hero() {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const [counter, setCounter] = useState(0)

  // Counter animation (cleaned & safe)
  useEffect(() => {
    let start = 0
    const end = 22
    const duration = 1000
    const stepTime = Math.max(10, Math.floor(duration / end))
    const timer = setInterval(() => {
      start += 1
      setCounter(start)
      if (start >= end) clearInterval(timer)
    }, stepTime)
    return () => clearInterval(timer)
  }, [])

  // 3D tilt effect handlers
  function handleMove(e: MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return
    const el = cardRef.current
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height

    // center-based values -0.5 .. 0.5
    const x = px - 0.5
    const y = py - 0.5

    // rotation multipliers (tweak for desired effect)
    const rotY = (x * 10).toFixed(2) // rotateY (left-right)
    const rotX = (-y * 7).toFixed(2) // rotateX (up-down)
    const translateZ = 8 // subtle pop

    // apply transform with a subtle smoothing via transition
    el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(${translateZ}px)`
    el.style.transition = "transform 120ms linear"
  }

  function handleLeave() {
    if (!cardRef.current) return
    const el = cardRef.current
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)"
    el.style.transition = "transform 500ms cubic-bezier(.2,.8,.2,1)"
  }

  // inline gradient used for headline highlight (works without Tailwind config)
  const helixGradient = "linear-gradient(135deg,#4F46E5 0%,#10B981 55%,#4F46E5 100%)"

  return (
    <section
      aria-label="Revenue Cycle Management hero"
      className="relative py-12 md:py-20 bg-white overflow-hidden"
    >
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
            opacity: { value: 0.45 },
            color: { value: "#4F46E5" }, // Helix Indigo
            links: { enable: false },
          },
        }}
      />

      {/* Parallax SVG Grid */}
      <svg
        className="absolute inset-0 w-full h-full opacity-8 -z-20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 md:pr-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
              Transform your{" "}
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage: helixGradient,
                  backgroundSize: "200% 200%",
                  backgroundPosition: "0% 50%",
                  WebkitBackgroundClip: "text",
                }}
              >
                RCM Health
              </span>
              <br className="hidden sm:inline" /> operations with{" "}
              <span className="whitespace-nowrap bg-amber-100 px-3 py-1 rounded-full text-xs font-medium text-amber-900 ml-3">
                faster claims • accurate coding
              </span>
            </h1>

            <p className="text-base text-slate-600 max-w-xl leading-relaxed">
              We help healthcare providers streamline billing, increase claim
              acceptance, and recover more revenue — all while improving
              patient experience.
            </p>

            {/* CTA */}
            <div className="flex flex-wrap gap-4 mt-4">
              <Link
                href="/book"
                className="group inline-flex items-center gap-3 rounded-2xl bg-[#4F46E5] px-6 py-3 text-white font-semibold shadow-lg hover:shadow-2xl transform hover:-translate-y-0.5 transition"
                aria-label="Schedule a free consultation"
              >
                Schedule a free consultation
                <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition" />
              </Link>
            </div>

            {/* Benefits */}
            <ul className="mt-6 flex flex-wrap gap-3">
              {[
                "95%+ claim accuracy",
                "Faster reimbursements",
                "End-to-end security",
              ].map((t) => (
                <li
                  key={t}
                  className="inline-flex items-center gap-2 bg-white border border-slate-200 px-3 py-2 rounded-full text-sm text-slate-700 shadow-sm"
                >
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
              onMouseMove={handleMove}
              onMouseLeave={handleLeave}
              className="relative w-full max-w-md md:max-w-lg rounded-3xl shadow-2xl overflow-hidden bg-gradient-to-br from-white to-slate-50"
              style={{ willChange: "transform", transformStyle: "preserve-3d" }}
            >
              <div className="relative w-full h-80 md:h-[420px]">
                <Image
                  src="/images/bg1.jpg"
                  alt="Healthcare team collaborating"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                {/* Live Stat Card */}
                <div className="absolute left-6 bottom-6 w-56 rounded-xl bg-white p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold" style={{ color: "#4F46E5", fontFamily: "Poppins, Inter, system-ui" }}>
                        +{counter}%
                      </p>
                      <p className="text-xs text-slate-600">
                        Average revenue recovered
                      </p>
                    </div>
                    <div className="flex flex-col text-right">
                      <p className="text-sm font-medium text-slate-700">
                        Claims / month
                      </p>
                      <p className="text-xs text-slate-500">managed at scale</p>
                    </div>
                  </div>
                </div>

                {/* Badge (glass + border using Alloy Silver) */}
                <div
                  className="absolute right-6 top-6 rounded-full px-3 py-2 text-sm font-semibold shadow-md cursor-pointer"
                  style={{
                    background: "rgba(255,255,255,0.78)",
                    backdropFilter: "blur(6px)",
                    border: "1px solid rgba(230,238,246,0.9)", // Alloy Silver
                  }}
                >
                  95%+ Accuracy
                </div>
              </div>
            </div>
          </div>
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
          stroke="rgba(79,70,229,0.06)" // helixindigo at low opacity
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
