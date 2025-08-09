'use client';

import { features } from '@/lib/mockData';
import { Button } from '@/components/ui/button'

import { Card } from '@/components/ui/card';
import FadeIn from '@/components/FadeIn';
import Hero from '../components/Hero';
import Footer from '@/components/ui/Footer';

export default function Landing() {
  return (
    <main className="min-h-screen bg-background font-body">
      <Hero />

      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-4xl font-display text-primary mb-12 text-center">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map(({ icon, title, description }, i) => (
            <FadeIn key={i}>
              <Card className="text-center">
                <div className="text-5xl mb-4">{icon}</div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Add Process Steps & Testimonials sections here similarly */}

      <Footer />
    </main>
  );
}
