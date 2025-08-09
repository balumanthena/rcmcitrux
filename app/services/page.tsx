// app/services/page.tsx
'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ServicesSection() {
  const services = [
    {
      title: 'Medical Billing',
      description:
        'We handle end-to-end medical billing with accuracy, ensuring faster reimbursements and reduced claim denials.',
      img: '/images/billing.jpg',
    },
    {
      title: 'Revenue Cycle Management',
      description:
        'Comprehensive RCM solutions that optimize your cash flow, improve patient experience, and ensure compliance.',
      img: '/images/rcm.jpg',
    },
    {
      title: 'Claims Processing',
      description:
        'Efficient claim submission, tracking, and follow-up to maximize your revenue and minimize delays.',
      img: '/images/claims.jpg',
    },
    {
      title: 'Credentialing Services',
      description:
        'We streamline provider credentialing to get you onboarded with payers quickly and hassle-free.',
      img: '/images/credentialing.jpg',
    },
  ]

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 font-[DM_Sans]">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            End-to-end healthcare revenue cycle solutions designed to improve your efficiency and profitability.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group"
            >
              {/* Image */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Text */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
