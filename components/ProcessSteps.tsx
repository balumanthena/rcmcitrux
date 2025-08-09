'use client';

import FadeIn from './FadeIn';
import { UploadCloud, FileText, CheckCircle2, CreditCard } from 'lucide-react';

const steps = [
  {
    step: 1,
    title: 'Submit Your Claims',
    description:
      'Upload your medical claims securely through our user-friendly dashboard.',
    icon: <UploadCloud className="w-10 h-10 text-blue-500" aria-hidden="true" />,
    color: 'from-blue-400 to-blue-600',
  },
  {
    step: 2,
    title: 'Expert Coding',
    description:
      'Our certified coders analyze and assign accurate CPT and ICD codes.',
    icon: <FileText className="w-10 h-10 text-emerald-500" aria-hidden="true" />,
    color: 'from-emerald-400 to-emerald-600',
  },
  {
    step: 3,
    title: 'Review & Approve',
    description:
      'Review coding results with detailed reports before final approval.',
    icon: <CheckCircle2 className="w-10 h-10 text-amber-500" aria-hidden="true" />,
    color: 'from-amber-400 to-amber-600',
  },
  {
    step: 4,
    title: 'Seamless Billing',
    description:
      'Integrated billing solutions ensure prompt and clean claim submissions.',
    icon: <CreditCard className="w-10 h-10 text-purple-500" aria-hidden="true" />,
    color: 'from-purple-400 to-purple-600',
  },
];

export default function ProcessSteps() {
  return (
    <section className="relative bg-gradient-to-b from-slate-50 via-white to-slate-100 py-20 px-6 overflow-hidden">
      {/* Background blur circles */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-200/30 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto text-center relative z-10">
        {/* Section Heading */}
        <FadeIn>
          <h2 className="text-4xl font-display font-bold text-gray-900 mb-4">
            How Our <span className="text-blue-600">Medical Coding</span> Service Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From claim submission to final billing, our streamlined process ensures accuracy, speed, and compliance.
          </p>
        </FadeIn>

        {/* Steps Grid */}
        <div className="relative mt-20 grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Connector Line - only on desktop */}
          <div className="hidden md:block absolute top-[100px] left-0 w-full h-[2px] bg-gradient-to-r from-blue-200 via-emerald-200 to-purple-200 z-0" />

          {steps.map(({ step, title, description, icon, color }) => (
            <FadeIn key={step}>
              <div
                tabIndex={0}
                className="relative z-10 backdrop-blur-lg bg-white/50 border border-white/30 shadow-lg rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-2 transition-all duration-500 ease-out focus:outline-none focus:ring-4 focus:ring-blue-200"
              >
                {/* Step Number with Gradient Ring */}
                <div
                  className={`w-14 h-14 rounded-full bg-gradient-to-br ${color} flex items-center justify-center text-white font-bold text-lg shadow-md`}
                >
                  {step}
                </div>

                {/* Icon */}
                <div className="mt-5">{icon}</div>

                {/* Title */}
                <h3 className="mt-4 font-semibold text-lg text-gray-900">{title}</h3>

                {/* Description */}
                <p className="text-gray-600 text-sm md:text-base mt-3">{description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
