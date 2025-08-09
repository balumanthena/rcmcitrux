'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Button } from './ui/button';
import FeaturesGrid from './FeaturesGrid';
import ProcessSteps from './ProcessSteps';
import TestimonialsCarousel from './TestimonialsCarousel';
import WhyChooseUs from './WhyChooseUs';
import RCMLifecycle from './RCMLifecycle';

const slides = [
  {
    url: '/images/bg1.jpg',
    title: 'Reliable Medical Coding Solutions',
    subtitle: 'Fast, accurate, and HIPAA-compliant services tailored for your practice.',
  },
  {
    url: '/images/bg2.jpg',
    title: 'Streamlined Revenue Cycle Management',
    subtitle: 'Boost efficiency and maximize reimbursements effortlessly.',
  },
  {
    url: '/images/bg3.jpg',
    title: 'Accurate & Compliant Medical Coding',
    subtitle: 'Trusted by leading healthcare providers worldwide.',
  },
];

export default function Hero() {
  return (
    <>
      {/* Fullscreen Hero Slider */}
      <section className="relative w-full h-screen">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          speed={800}
          loop
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full">
                {/* Background Image */}
                <Image
                  src={slide.url}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0} // Preload first image
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />

                {/* Centered Text */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4 sm:px-6">
                  <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 sm:mb-6 drop-shadow-lg">
                    {slide.title}
                  </h1>
                  <p className="text-base sm:text-lg md:text-2xl max-w-3xl mb-6 sm:mb-8 drop-shadow-md">
                    {slide.subtitle}
                  </p>
                  <Button className="bg-highlight hover:bg-amber-500 text-white px-6 sm:px-8 py-3 rounded-xl shadow-lg focus:ring-4 focus:ring-amber-400 transition-all">
                    Get Started
                  </Button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Rest of your sections */}
      <WhyChooseUs />
       <RCMLifecycle />
      <ProcessSteps />
      <FeaturesGrid />
      <TestimonialsCarousel />
    </>
  );
}
