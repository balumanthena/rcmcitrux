'use client'

import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle, TrendingUp, ShieldCheck, ClipboardList, BarChart } from 'lucide-react'

export default function RiskAdjustmentPage() {
  const features = [
    {
      title: 'Prospective & Retrospective Reviews',
      desc: 'Identify care gaps and optimize risk scores with timely audits.',
      icon: TrendingUp,
    },
    {
      title: 'HCC Coding & Documentation Support',
      desc: 'Ensure accurate Hierarchical Condition Category coding to maximize reimbursements.',
      icon: ShieldCheck,
    },
    {
      title: 'Compliance & Accuracy Auditing',
      desc: 'Maintain adherence to CMS and HHS guidelines with thorough audits.',
      icon: ClipboardList,
    },
    {
      title: 'Advanced NLP Technology',
      desc: 'Leverage AI-driven tools to analyze both structured and unstructured data.',
      icon: BarChart,
    },
    {
      title: 'Custom Reporting & Dashboards',
      desc: 'Interactive dashboards provide actionable insights and real-time feedback.',
      icon: CheckCircle,
    },
  ]

  const serviceHighlights = [
    'Certified risk adjustment coders with extensive experience',
    'Cutting-edge technology integration',
    'Interactive and customizable reporting',
    'Real-time coder feedback and education',
    'Proven track record in compliance and accuracy',
  ]

  return (
    <>
      <Head>
        <title>Risk Adjustment Solutions | Citrux Health Solutions</title>
        <meta
          name="description"
          content="Comprehensive risk adjustment services leveraging technology and expert coders to maximize reimbursements and ensure compliance."
        />
      </Head>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* HERO */}
        <section className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-teal-600 to-teal-700 text-white text-sm font-semibold">
              Risk Adjustment Solutions
            </span>

            <h1 className="mt-6 text-3xl md:text-4xl font-extrabold leading-tight text-gray-900">
              Accurately Capture Patient Complexity and Optimize Reimbursements
            </h1>

            <p className="mt-4 text-gray-700 text-base md:text-lg max-w-prose">
              Citrux Health Solutions offers expert risk adjustment services combining certified coders and advanced technology to ensure compliant, actionable, and reliable results.
            </p>

            <ul className="mt-6 space-y-3">
              {serviceHighlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-1 text-teal-600"><CheckCircle size={18} /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-teal-600 text-white font-medium hover:bg-teal-700 transition"
              >
                Schedule a 1:1 Meeting
              </Link>

              <Link
                href="/services/medical-coding"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition"
              >
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
                <p className="text-sm text-gray-500">Serving healthcare providers nationwide</p>
                <h3 className="mt-2 text-xl font-semibold">Expertise in Risk Adjustment</h3>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">10+ yrs</div>
                <div className="text-xs text-gray-500">industry experience</div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 text-center">
              <div className="py-3 px-2 rounded-lg bg-gray-50">
                <div className="text-sm font-semibold">Improved Documentation</div>
              </div>
              <div className="py-3 px-2 rounded-lg bg-gray-50">
                <div className="text-sm font-semibold">Maximized Revenue</div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <div className="text-sm text-gray-600">Compliance-driven, technology-enabled</div>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-amber-500 text-white text-sm hover:bg-amber-600 transition"
              >
                Learn More
              </Link>
            </div>
          </motion.aside>
        </section>

        {/* FEATURE GRID */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Why Partner with Citrux for Risk Adjustment</h2>
          <p className="mt-2 text-gray-600 max-w-prose">
            Combine expertise and innovative tools to ensure accurate risk capture and compliance.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <motion.div
                key={f.title}
                whileHover={{ y: -6 }}
                className="p-5 rounded-2xl bg-white shadow-sm ring-1 ring-gray-100 flex flex-col gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-teal-50 inline-flex">
                    <f.icon size={20} className="text-teal-600" />
                  </div>
                  <h4 className="text-lg font-medium">{f.title}</h4>
                </div>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Sticky contact CTA */}
        <Link
          href="/contact"
          className="fixed right-6 bottom-6 z-50 inline-flex items-center gap-3 px-4 py-3 rounded-full shadow-lg bg-teal-600 text-white font-medium hover:bg-teal-700 transition"
        >
          <span>Schedule a 1:1</span>
        </Link>

        <div className="mt-16 text-xs text-gray-400">Citrux Health Solutions — Risk Adjustment Solutions</div>
      </main>
    </>
  )
}
