// components/FeaturesGrid.tsx
'use client';

import FadeIn from './FadeIn';
import { ShieldCheck, Settings, BarChart2 } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary mb-4 mx-auto" />,
    title: 'HIPAA Compliant',
    description:
      'Ensuring your data privacy and security with industry-standard compliance.',
  },
  {
    icon: <Settings className="w-10 h-10 text-accent mb-4 mx-auto" />,
    title: 'Easy Integration',
    description:
      'Seamlessly integrate with your existing billing and EHR systems.',
  },
  {
    icon: <BarChart2 className="w-10 h-10 text-highlight mb-4 mx-auto" />,
    title: 'Advanced Reporting',
    description:
      'Gain insights with customizable reports and analytics dashboards.',
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-primary mb-4 mx-auto" />,
    title: 'Quality Assurance',
    description:
      'Multiple layers of accuracy checks by certified professionals.',
  },
  {
    icon: <Settings className="w-10 h-10 text-accent mb-4 mx-auto" />,
    title: 'Custom Workflows',
    description:
      'Adapt our solutions to match your unique operational procedures.',
  },
  {
    icon: <BarChart2 className="w-10 h-10 text-highlight mb-4 mx-auto" />,
    title: '24/7 Monitoring',
    description:
      'Continuous monitoring ensures smooth operation and immediate issue resolution.',
  },
];

export default function FeaturesGrid() {
  return (
    <section className="bg-background py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <FadeIn>
          <h2 className="text-4xl font-display font-bold text-primary mb-4">
            Key <span className="text-accent">Features</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We provide industry-leading tools and services to ensure your operations run smoothly, securely, and efficiently.
          </p>
        </FadeIn>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-16">
          {features.map(({ icon, title, description }, idx) => (
            <FadeIn key={idx}>
              <div
                className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center text-gray-800 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out h-full"
              >
                {icon}
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
