'use client'

import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, FileText, ShieldCheck, ClipboardList, Search, TrendingUp, Users } from 'lucide-react'

export default function MedicalAuditingPage() {
  const features = [
    {
      title: 'Close ICD-10 Coding Gaps',
      desc: 'Expert audits that identify and rectify coding inaccuracies.',
      icon: ShieldCheck,
    },
    {
      title: 'Maximize Reimbursements',
      desc: 'Optimize billing through precise coding and documentation review.',
      icon: TrendingUp,
    },
    {
      title: 'Compliance Assurance',
      desc: 'Ensure adherence to HIPAA, HITECH, CMS, and payer-specific standards.',
      icon: ClipboardList,
    },
    {
      title: 'Clinical Documentation Improvement',
      desc: 'Highlight CDI opportunities to reduce physician queries and denials.',
      icon: FileText,
    },
    {
      title: 'Comprehensive Reporting',
      desc: 'Detailed financial impact analysis and coder education sessions.',
      icon: Search,
    },
  ]

  const specialties = [
    'Inpatient ICD-10-CM/PCS', 'Outpatient Same-day Surgery', 'Observation Records', 'Emergency Department',
    'Ancillary Outpatient', 'Physician Services', 'Clinical Documentation Improvement (CDI)'
  ]

  const auditFocusAreas = [
    'Validate principal diagnosis/procedure selection',
    'Review secondary MCC, CC, and reportable codes',
    'Confirm discharge disposition and transfer status',
    'Assess operational workflows for coding efficiency',
    'Ensure regulatory compliance',
    'Support appeals with documented coding rationale',
  ]

  return (
    <>
      <Head>
        <title>Medical Auditing Services | Citrux Health Solutions</title>
        <meta
          name="description"
          content="Close ICD-10 coding gaps and maximize reimbursements with Citrux Health's expert medical auditing services."
        />
      </Head>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* HERO */}
        <section className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-orange-600 to-orange-700 text-white text-sm font-semibold">
              Medical Auditing Services
            </span>

            <h1 className="mt-6 text-3xl md:text-4xl font-extrabold leading-tight text-gray-900">
              Close ICD-10 Coding Gaps & Maximize Reimbursements Through Expert Auditing
            </h1>

            <p className="mt-4 text-gray-700 text-base md:text-lg max-w-prose">
              Citrux Health Solutions delivers comprehensive auditing for inpatient, outpatient, and professional coding to ensure precision, compliance, and maximum ROI.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 text-orange-600"><Check size={18} /></span>
                <span>Tailored audit frequency & sample sizes based on your needs.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 text-orange-600"><Check size={18} /></span>
                <span>Follow official coding standards with payer-specific guidance.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 text-orange-600"><Check size={18} /></span>
                <span>Detailed reports and coder education for continuous improvement.</span>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-orange-600 text-white font-medium hover:bg-orange-700 transition">
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
                <p className="text-sm text-gray-500">Serving hospitals, clinics & IPAs</p>
                <h3 className="mt-2 text-xl font-semibold">Experienced auditing professionals</h3>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">15+ yrs</div>
                <div className="text-xs text-gray-500">industry experience</div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 text-center">
              <div className="py-3 px-2 rounded-lg bg-gray-50">
                <div className="text-sm font-semibold">Improved Accuracy</div>
              </div>
              <div className="py-3 px-2 rounded-lg bg-gray-50">
                <div className="text-sm font-semibold">Higher Revenue</div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-gray-600">Compliance-first, quality-driven</div>
              <Link href="/contact" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-amber-500 text-white text-sm hover:bg-amber-600 transition">
                Learn More
              </Link>
            </div>
          </motion.aside>
        </section>

        {/* FEATURE GRID */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Why Choose Citrux for Medical Auditing</h2>
          <p className="mt-2 text-gray-600 max-w-prose">
            Expertise, accuracy, and actionable insights tailored to your healthcare organization.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <motion.div
                key={f.title}
                whileHover={{ y: -6 }}
                className="p-5 rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-orange-50 inline-flex">
                    <f.icon size={20} className="text-orange-600" />
                  </div>
                  <h4 className="text-lg font-medium">{f.title}</h4>
                </div>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* SPECIALTIES */}
        <section className="mt-12">
          <h3 className="text-xl font-semibold">Specialties & Areas of Expertise</h3>
          <p className="mt-2 text-gray-600">We cover a wide range of coding and clinical specialties.</p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {specialties.map((s) => (
              <span key={s} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 ring-1 ring-gray-100 text-sm">
                <Check size={14} className="text-orange-600" />
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* AUDIT FOCUS AREAS */}
        <section className="mt-12">
          <h3 className="text-xl font-semibold">Audit Focus Areas</h3>
          <p className="mt-2 text-gray-600">Key areas targeted during our audits for maximum impact.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {auditFocusAreas.map((item) => (
              <span key={item} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 ring-1 ring-gray-100 text-sm">
                <Users size={14} className="text-orange-600" />
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* Sticky contact CTA */}
        <Link href="/contact" className="fixed right-6 bottom-6 z-50 inline-flex items-center gap-3 px-4 py-3 rounded-full shadow-lg bg-orange-600 text-white font-medium hover:bg-orange-700 transition">
          <span>Schedule a 1:1</span>
        </Link>

        <div className="mt-16 text-xs text-gray-400">Citrux Health Solutions — Medical Auditing Services</div>
      </main>
    </>
  )
}
