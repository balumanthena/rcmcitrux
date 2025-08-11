"use client"

import { InlineWidget } from "react-calendly"

export default function BookPage() {
  return (
    <section className="relative py-12 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
            Book Your Free Consultation
          </h1>
          <p className="mt-4 text-base text-slate-600 max-w-2xl mx-auto">
            Choose a time that works best for you, and our team will connect to
            discuss how we can help improve your revenue cycle management.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6">
          <InlineWidget url="https://calendly.com/indcitrux/30min" />
        </div>
      </div>
    </section>
  )
}
