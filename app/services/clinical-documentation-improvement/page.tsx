'use client'

import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle, Users, ClipboardList, BookOpen } from 'lucide-react'

export default function ClinicalDocumentationImprovementPage() {
  const features = [
    "Working DRG / Concurrent Coding — pre-discharge assistance with real-time feedback",
    "Comprehensive DRG Reviews",
    "Physician Query Assistance",
    "Denial Management and Post-Review Analysis",
    "Recovery Audit Contractor (RAC) Reviews",
    "Case Mix Index (CMI) Optimization Reviews",
    "End-to-End CDI Process Improvement",
    "Collaboration and Targeted Education",
    "CDI-Coding Liaison Support",
    "Qualified CDI Personnel Placement",
  ]

  const featureHighlights = [
    {
      title: 'Improved Documentation Accuracy',
      desc: 'Enhance clinical records to better reflect patient conditions and care.',
      icon: ClipboardList,
    },
    {
      title: 'Effective Physician Queries',
      desc: 'Reduce administrative burden with expert query management.',
      icon: Users,
    },
    {
      title: 'Comprehensive Training',
      desc: 'Targeted education to align coding and CDI teams for optimal results.',
      icon: BookOpen,
    },
  ]

  return (
    <>
      <Head>
        <title>Clinical Documentation Improvement (CDI) | Citrux Health Solutions</title>
        <meta
          name="description"
          content="Reduce administrative burden and improve documentation accuracy with Citrux Health's Clinical Documentation Improvement services."
        />
      </Head>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* HERO */}
        <section className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 text-white text-sm font-semibold">
              Clinical Documentation Improvement
            </span>

            <h1 className="mt-6 text-3xl md:text-4xl font-extrabold leading-tight text-gray-900">
              Reduce Administrative Burden with Expert Physician Query Assistance
            </h1>

            <p className="mt-4 text-gray-700 text-base md:text-lg max-w-prose">
              Citrux Health Solutions delivers ongoing CDI services that ensure patient records are precise, compliant, and maximize reimbursements.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 text-purple-600"><CheckCircle size={18} /></span>
                <span>Real-time DRG / Concurrent coding support before discharge.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 text-purple-600"><CheckCircle size={18} /></span>
                <span>Comprehensive physician query and denial management.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 text-purple-600"><CheckCircle size={18} /></span>
                <span>Targeted education and collaboration to boost CDI efficiency.</span>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition">
                Schedule a 1:1 Meeting
              </Link>

              <Link href="/services/medical-coding" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition">
                Explore Coding Services
              </Link>
            </div>
          </div>

          {/* Right Stats Card */}
          <motion.aside
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="relative rounded-2xl bg-white shadow-lg p-6 ring-1 ring-gray-100"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Supporting hospitals & healthcare providers</p>
                <h3 className="mt-2 text-xl font-semibold">CDI expertise you can trust</h3>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">12+ yrs</div>
                <div className="text-xs text-gray-500">team experience</div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 text-center">
              <div className="py-3 px-2 rounded-lg bg-gray-50">
                <div className="text-sm font-semibold">Accurate Documentation</div>
              </div>
              <div className="py-3 px-2 rounded-lg bg-gray-50">
                <div className="text-sm font-semibold">Improved Reimbursements</div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-gray-600">Collaboration-driven & results-focused</div>
              <Link href="/contact" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-amber-500 text-white text-sm hover:bg-amber-600 transition">
                Learn More
              </Link>
            </div>
          </motion.aside>
        </section>

        {/* FEATURE HIGHLIGHTS */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">How We Support Your CDI Program</h2>
          <p className="mt-2 text-gray-600 max-w-prose">
            Our specialists strengthen your CDI processes to ensure patient records accurately represent care provided before discharge.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featureHighlights.map((f) => (
              <motion.div
                key={f.title}
                whileHover={{ y: -6 }}
                className="p-5 rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-purple-50 inline-flex">
                    <f.icon size={20} className="text-purple-600" />
                  </div>
                  <h4 className="text-lg font-medium">{f.title}</h4>
                </div>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FEATURES LIST */}
        <section className="mt-12">
          <h3 className="text-xl font-semibold">Core CDI Services</h3>
          <p className="mt-2 text-gray-600">
            Key services and initiatives to improve clinical documentation quality and compliance.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            {features.map((item, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 ring-1 ring-gray-100 text-sm"
              >
                <CheckCircle size={14} className="text-purple-600" />
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* Sticky contact CTA */}
        <Link
          href="/contact"
          className="fixed right-6 bottom-6 z-50 inline-flex items-center gap-3 px-4 py-3 rounded-full shadow-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition"
        >
          <span>Schedule a 1:1</span>
        </Link>

        <div className="mt-16 text-xs text-gray-400">Citrux Health Solutions — Clinical Documentation Improvement</div>
      </main>
    </>
  )
}
