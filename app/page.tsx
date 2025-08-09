'use client';

import Hero from '../components/Hero';
import Footer from '@/components/ui/Footer';

export default function Landing() {
  return (
    <main className="min-h-screen bg-background font-body">
      <Hero />

      {/* You can add Process Steps & Testimonials sections here */}

      <Footer />
    </main>
  );
}
