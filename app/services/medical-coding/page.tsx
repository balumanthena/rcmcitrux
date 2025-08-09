'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, ShieldCheck, Users, Clock, FileText, Activity } from 'lucide-react'

export default function MedicalCodingPage() {
  const [openHcc, setOpenHcc] = useState(false)

  const features = [
    {
      title: 'Certified, Specialty Coders',
      desc: 'AHIMA / AAPC-trained coders with specialty-specific expertise to minimize rework and denials.',
      icon: Users,
    },
    {
      title: '3‑Tier Quality Assurance',
      desc: 'Automated validation + expert review + targeted remediation to push accuracy toward 95%+.',
      icon: Check,
    },
    {
      title: 'HIPAA & Security First',
      desc: 'Encrypted workflows, secure access controls, and documented compliance processes.',
      icon: ShieldCheck,
    },
    {
      title: 'Flexible Turnaround',
      desc: 'From same-day triage to scheduled bulk cycles — scale cadence to match throughput needs.',
      icon: Clock,
    },
    {
      title: 'Clinical Documentation Support',
      desc: 'CDI-aligned workflows that close documentation gaps and improve RAF capture.',
      icon: FileText,
    },
    {
      title: 'End‑to‑End RCM Partnership',
      desc: 'Coding integrated with billing, auditing and CDI for measurable downstream revenue impact.',
      icon: Activity,
    },
  ]

  const serviceTypes = [
    'Acute Care Inpatient',
    'Emergency Department',
    'Ambulatory Surgery',
    'Interventional Radiology',
    'Outpatient Diagnostics',
    'Ancillary Visits',
    'Physician Office Visits',
    'E&M Levels',
    'Observation Services',
    'Recurring & Series Accounts',
  ]

  return (
    <main className="max-w-7xl mx-auto px-6 py-12">
      {/* HERO */}
      <section className="grid gap-8 md:grid-cols-2 items-center">
        <div>
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 text-white text-sm font-semibold">
            Medical Coding
          </span>

          <h1 className="mt-6 text-3xl md:text-4xl font-extrabold leading-tight">
            Precision coding that protects revenue, reduces denials, and keeps compliance audit-ready.
          </h1>

          <p className="mt-4 text-gray-700 text-base md:text-lg max-w-prose">
            Citrux Health delivers a measurable, clinical-first coding engine: certified coders, automated
            validation, and a continuous QA loop — designed to convert documentation into correct
            reimbursement with minimal friction.
          </p>

          <ul className="mt-6 space-y-3">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 mt-1 text-sky-600"><Check size={18} /></span>
              <span>
                Targeted accuracy controls and peer review to reduce denials and appeals workload.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 mt-1 text-sky-600"><Clock size={18} /></span>
              <span>Configurable turnaround windows — from rapid triage to scheduled bulk cycles.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 mt-1 text-sky-600"><ShieldCheck size={18} /></span>
              <span>End-to-end HIPAA-conscious workflows with audited access and encryption.</span>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
              Schedule a 1:1 Meeting
            </Link>

            <Link href="/services/medical-billing" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition">
              Explore billing & RCM
            </Link>
          </div>
        </div>

        {/* Right card */}
        <motion.aside
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 }}
          className="relative rounded-2xl bg-white shadow-lg p-6 ring-1 ring-gray-100"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Trusted by hospitals, IPA’s & clinics</p>
              <h3 className="mt-2 text-xl font-semibold">Scalable coding teams — on demand</h3>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">95%+</div>
              <div className="text-xs text-gray-500">target accuracy</div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            <div className="py-3 px-2 rounded-lg bg-gray-50">
              <div className="text-sm font-semibold">Inpatient</div>
            </div>
            <div className="py-3 px-2 rounded-lg bg-gray-50">
              <div className="text-sm font-semibold">Outpatient</div>
            </div>
            <div className="py-3 px-2 rounded-lg bg-gray-50">
              <div className="text-sm font-semibold">Professional</div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="text-sm text-gray-600">Turnaround: flexible | Team: scalable</div>
            <Link href="/contact" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-amber-500 text-white text-sm hover:bg-amber-600 transition">
              Tell me more
            </Link>
          </div>
        </motion.aside>
      </section>

      {/* FEATURE GRID */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">How we deliver value</h2>
        <p className="mt-2 text-gray-600 max-w-prose">A blended approach of automation, clinical review, and continuous learning.</p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <motion.div
              key={f.title}
              whileHover={{ y: -6 }}
              className="p-5 rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-indigo-50 inline-flex">
                  <f.icon size={20} className="text-indigo-600" />
                </div>
                <h4 className="text-lg font-medium">{f.title}</h4>
              </div>
              <p className="text-sm text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* QA / Process */}
      <section className="mt-12 grid gap-8 md:grid-cols-2 items-start">
        <div>
          <h3 className="text-xl font-semibold">3‑Tier Quality Assurance</h3>
          <p className="mt-2 text-gray-600">Designed to catch errors early, reduce re-work, and document quality for audits.</p>

          <ol className="mt-6 space-y-4">
            <li className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-600 text-white inline-flex items-center justify-center font-semibold">1</div>
              <div>
                <div className="font-semibold">Automated validation</div>
                <div className="text-sm text-gray-600">Rules-based checks, edits and terminology mapping before human review.</div>
              </div>
            </li>

            <li className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-600 text-white inline-flex items-center justify-center font-semibold">2</div>
              <div>
                <div className="font-semibold">Clinical coder review</div>
                <div className="text-sm text-gray-600">Specialty-trained coders perform clinical interpretation and correct code assignment.</div>
              </div>
            </li>

            <li className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-600 text-white inline-flex items-center justify-center font-semibold">3</div>
              <div>
                <div className="font-semibold">Audit & remediation</div>
                <div className="text-sm text-gray-600">Peer QA and targeted remediation tracks trends and closes documentation gaps.</div>
              </div>
            </li>
          </ol>
        </div>

        {/* HCC / Risk Adjustment Accordion */}
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold">HCC / Risk Adjustment Coding & Audit</h3>
            <button
              onClick={() => setOpenHcc(!openHcc)}
              aria-expanded={openHcc}
              className="text-sm px-3 py-1 rounded-md bg-gray-100 hover:bg-gray-200"
            >
              {openHcc ? 'Hide details' : 'View details'}
            </button>
          </div>

          {openHcc && (
            <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="mt-4 bg-white rounded-xl p-4 ring-1 ring-gray-100">
              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                <li>Map diagnoses to MRA/HCC values with clinical specificity and CMS alignment.</li>
                <li>Chart reviews to detect uncoded or under-documented conditions that affect RAF.</li>
                <li>Audit-ready evidence packages and recommended documentation prompts for providers.</li>
                <li>Flexible engagement — focused audits, continuous monitoring, or full-service coding.</li>
              </ul>

              <div className="mt-4">
                <Link href="/contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-amber-500 text-white hover:bg-amber-600 transition">
                  Discuss HCC strategy
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Service types */}
      <section className="mt-12">
        <h3 className="text-xl font-semibold">Service types & specialties</h3>
        <p className="mt-2 text-gray-600">We cover an extensive set of care areas — configured to your operational model.</p>

        <div className="mt-4 flex flex-wrap gap-3">
          {serviceTypes.map((s) => (
            <span key={s} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 ring-1 ring-gray-100 text-sm">
              <Check size={14} className="text-indigo-600" />
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Sticky contact CTA */}
      <Link href="/contact" className="fixed right-6 bottom-6 z-50 inline-flex items-center gap-3 px-4 py-3 rounded-full shadow-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
        <span>Schedule a 1:1</span>
      </Link>

      <div className="mt-16 text-xs text-gray-400">Citrux Health Solutions — Medical Coding Services</div>
    </main>
  )
}
