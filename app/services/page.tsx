// app/services/page.tsx
'use client';

import { FileText, CheckCircle2, CreditCard, ShieldCheck, Stethoscope, ClipboardList } from 'lucide-react';
import FadeIn from '@/components/FadeIn'; // Adjust path if needed

const services = [
  {
    icon: <FileText className="w-10 h-10 text-primary mb-4 mx-auto" />,
    title: 'Medical Coding',
    description:
      'Accurate CPT, ICD-10, and HCPCS coding performed by certified coders to ensure compliance and maximize reimbursements.',
  },
  {
    icon: <CheckCircle2 className="w-10 h-10 text-accent mb-4 mx-auto" />,
    title: 'Claims Auditing',
    description:
      'Comprehensive review of submitted claims to identify errors, reduce denials, and improve first-pass acceptance rates.',
  },
  {
    icon: <CreditCard className="w-10 h-10 text-highlight mb-4 mx-auto" />,
    title: 'Billing Services',
    description:
      'End-to-end medical billing solutions to streamline collections and improve revenue cycle management.',
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary mb-4 mx-auto" />,
    title: 'Compliance Consulting',
    description:
      'HIPAA-compliant processes with expert guidance to maintain regulatory standards and avoid penalties.',
  },
  {
    icon: <Stethoscope className="w-10 h-10 text-accent mb-4 mx-auto" />,
    title: 'Specialty Coding',
    description:
      'Tailored coding solutions for specialties like cardiology, oncology, orthopedics, and more.',
  },
  {
    icon: <ClipboardList className="w-10 h-10 text-highlight mb-4 mx-auto" />,
    title: 'Denial Management',
    description:
      'Proactive tracking and resolution of denied claims to recover lost revenue efficiently.',
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-accent text-white py-28 px-6 text-center">
        <FadeIn>
          <h1 className="text-5xl font-display font-bold mb-4">Our Services</h1>
          <p className="max-w-3xl mx-auto text-lg text-gray-100">
            Comprehensive RCM solutions tailored to streamline your healthcare revenue cycle and ensure accuracy at every step.
          </p>
        </FadeIn>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {services.map(({ icon, title, description }, idx) => (
            <FadeIn key={idx}>
              <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center text-gray-800 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full">
                {icon}
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </main>
  );
}
