'use client'

import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Check, TrendingUp, ShieldCheck, ClipboardList, CreditCard, Search } from 'lucide-react'

export default function MedicalBillingPage() {
  const rcmSteps = [
    'Provider Enrollment & Credentialing',
    'Pre-certification & Eligibility Verification',
    'Patient Demographics Entry',
    'Medical Coding',
    'Charge Entry',
    'Claims Submission',
    'Payment Posting',
    'Accounts Receivables Follow-up',
    'Denial Management',
    'Patient Collections',
  ]

  const specialties = [
    'Ambulance Services', 'Anesthesiology', 'Cardiology', 'Cardiovascular Surgery', 'Chiropractic', 'Dermatology', 'Durable Medical Equipment', 'Emergency Medicine', 'Endocrinology', 'Family Practice', 'General Surgery', 'Hematology / Oncology', 'Internal Medicine', 'Mental Health', 'Motor Vehicle Injuries', 'Nephrology', 'Neurology', 'Obstetrics / Gynecology', 'Orthopedics', 'Pain Management', 'Pathology', 'Pediatrics', 'Physical & Occupational Therapy', 'Podiatry', 'Psychiatry', 'Radiology', 'Sleep Disorders', 'Urology', 'Workers Compensation'
  ]

  const features = [
    {
      title: 'Error Reduction',
      desc: 'Advanced billing workflows and validation checks to minimize costly errors.',
      icon: ShieldCheck,
    },
    {
      title: 'Accelerated Collections',
      desc: 'Streamlined A/R processes to shorten payment cycles and improve cash flow.',
      icon: TrendingUp,
    },
    {
      title: 'Compliance First',
      desc: 'Adherence, HITECH, CMS, and payer-specific rules at every step.',
      icon: ClipboardList,
    },
    {
      title: 'Payment Accuracy',
      desc: 'Meticulous posting and reconciliation to ensure correct provider reimbursement.',
      icon: CreditCard,
    },
    {
      title: 'Root-Cause Auditing',
      desc: 'Investigative review to eliminate recurring billing issues at the source.',
      icon: Search,
    },
  ]

  return (
    <>
      <Head>
        <title>Medical Billing & A/R Management | Citrux Health Solutions</title>
        <meta
          name="description"
          content="Reduce billing errors, accelerate reimbursements, and boost cash flow with Citrux Health's medical billing and accounts receivable management services."
        />
      </Head>
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* HERO */}
        <section className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-semibold">
              Medical Billing & A/R Management
            </span>

            <h1 className="mt-6 text-3xl md:text-4xl font-extrabold leading-tight">
              Reduce billing errors, accelerate reimbursements, and boost your facility's cash flow.
            </h1>

            <p className="mt-4 text-gray-700 text-base md:text-lg max-w-prose">
              Citrux Health delivers end-to-end Revenue Cycle Management with billing precision, claim follow-through, and error remediation — tailored to the operational needs of hospitals, clinics, and specialty practices.
            </p>

            <ul className="mt-6 space-y-3">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 text-green-600"><Check size={18} /></span>
                <span>Customized workflows for each specialty — not a one-size-fits-all template.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 text-green-600"><Check size={18} /></span>
                <span>Experienced team averaging 10+ years in multi-specialty billing.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-1 text-green-600"><Check size={18} /></span>
                <span>Full compliance , HITECH, CMS, and payer-specific requirements.</span>
              </li>
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition">
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
                <h3 className="mt-2 text-xl font-semibold">Revenue cycle outcomes that scale</h3>
              </div>
             
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 text-center">
              <div className="py-3 px-2 rounded-lg bg-gray-50">
                <div className="text-sm font-semibold">Faster Payments</div>
              </div>
              <div className="py-3 px-2 rounded-lg bg-gray-50">
                <div className="text-sm font-semibold">Lower Denials</div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-gray-600">Compliance-first, accuracy-driven</div>
              <Link href="/contact" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-amber-500 text-white text-sm hover:bg-amber-600 transition">
                Tell me more
              </Link>
            </div>
          </motion.aside>
        </section>

        {/* FEATURE GRID */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Why partner with Citrux</h2>
          <p className="mt-2 text-gray-600 max-w-prose">Optimized workflows, seasoned billing experts, and measurable financial results.</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <motion.div
                key={f.title}
                whileHover={{ y: -6 }}
                className="p-5 rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-emerald-50 inline-flex">
                    <f.icon size={20} className="text-emerald-600" />
                  </div>
                  <h4 className="text-lg font-medium">{f.title}</h4>
                </div>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* RCM STEPS */}
        <section className="mt-12">
          <h3 className="text-xl font-semibold">Comprehensive RCM coverage</h3>
          <p className="mt-2 text-gray-600">End-to-end processes aligned with payer rules and provider needs.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            {rcmSteps.map((step) => (
              <span key={step} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 ring-1 ring-gray-100 text-sm">
                <Check size={14} className="text-emerald-600" />
                {step}
              </span>
            ))}
          </div>
        </section>

        {/* SPECIALTIES */}
        <section className="mt-12">
          <h3 className="text-xl font-semibold">Specialties we serve</h3>
          <p className="mt-2 text-gray-600">Multi-specialty expertise to handle diverse billing complexities.</p>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {specialties.map((s) => (
              <span key={s} className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 ring-1 ring-gray-100 text-sm">
                <Check size={14} className="text-emerald-600" />
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* Sticky contact CTA */}
        <Link href="/contact" className="fixed right-6 bottom-6 z-50 inline-flex items-center gap-3 px-4 py-3 rounded-full shadow-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition">
          <span>Schedule a 1:1</span>
        </Link>

        <div className="mt-16 text-xs text-gray-400">Citrux Health Solutions — Medical Billing & A/R Management</div>
      </main>
    </>
  )
}
