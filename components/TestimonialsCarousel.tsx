// components/TestimonialsCarousel.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react'; // Optional icon

const testimonials = [
  {
    quote: "The RCM Health Service team transformed our billing accuracy and drastically improved our cash flow.",
    name: "Dr. Amy Chen",
    role: "Chief Medical Officer",
    company: "Sunrise Health Clinic",
    avatar: "/avatars/amy-chen.jpg", // Place these images inside public/avatars/
  },
  {
    quote: "Efficient, reliable, and customer-focused — their coding solutions are unmatched.",
    name: "Michael Reynolds",
    role: "Revenue Manager",
    company: "CarePlus Hospital",
    avatar: "/avatars/michael-reynolds.jpg",
  },
  {
    quote: "Their expert consulting helped us streamline our entire revenue cycle like never before.",
    name: "Sarah Martinez",
    role: "Healthcare Consultant",
    company: "MedOptimize Partners",
    avatar: "/avatars/sarah-martinez.jpg",
  },
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % testimonials.length);
    }, 7000); // Switch testimonial every 7 seconds

    return () => clearInterval(timer);
  }, []);

  const { quote, name, role, company, avatar } = testimonials[currentIndex];

  return (
    <section className="bg-white py-16 px-6 max-w-4xl mx-auto text-center rounded-2xl shadow-soft">
      <h2 className="text-3xl font-display font-semibold text-primary mb-10">
        What Our Clients Say
      </h2>

      <AnimatePresence mode="wait" initial={false}>
        <motion.blockquote
          key={currentIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="text-gray-700 italic text-lg min-h-[150px]"
        >
          <Quote className="inline-block w-6 h-6 text-primary mb-2" />
          <p>&ldquo;{quote}&rdquo;</p>
        </motion.blockquote>
      </AnimatePresence>

      <motion.div
        key={currentIndex + '-author'}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-8 flex flex-col items-center space-y-2"
      >
        <img
          src={avatar}
          alt={`${name} avatar`}
          className="w-16 h-16 rounded-full object-cover shadow-md"
          loading="lazy"
        />
        <p className="font-semibold text-primary">{name}</p>
        <p className="text-sm text-gray-500">
          {role} at {company}
        </p>
      </motion.div>

      {/* Carousel controls */}
      <div className="mt-8 flex justify-center space-x-4">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            aria-label={`Show testimonial ${idx + 1}`}
            className={`w-3 h-3 rounded-full transition ${
              idx === currentIndex ? 'bg-primary' : 'bg-gray-300 hover:bg-primary/70'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
