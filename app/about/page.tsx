"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants, Easing } from "framer-motion";
import Head from "next/head";

// Animated count-up component with types
function CountUp({ to = 0, duration = 1200, suffix = "" }: { to: number; duration?: number; suffix?: string }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start: number | null = null;

    function step(timestamp: number) {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.floor(to * progress));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
    return () => {}; // cleanup
  }, [to, duration]);

  return (
    <span aria-live="polite" aria-atomic="true">
      {value}
      {suffix}
    </span>
  );
}

// Framer Motion Variants with correct typing
const heroTextVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      ease: "easeInOut" as Easing,
      duration: 0.5,
    },
  }),
};

export default function AboutPage() {
  const bgRef = useRef<HTMLDivElement | null>(null);

  // Parallax background effect on scroll
  useEffect(() => {
    function onScroll() {
      if (bgRef.current) {
        const scrolled = window.scrollY;
        const translateY = Math.min(scrolled * 0.12, 120);
        bgRef.current.style.transform = `translateY(${translateY}px)`;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Head>
        <title>About Us - RCM Health Service</title>
        <meta
          name="description"
          content="Simplifying medical coding and revenue cycle management with accuracy, compliance, and efficiency."
        />
        <meta property="og:title" content="About Us - RCM Health Service" />
        <meta
          property="og:description"
          content="Simplifying medical coding and revenue cycle management for healthcare providers nationwide."
        />
        <meta
          property="og:image"
          content="/images/screen-with-white-color-put-your-text-there-group-young-people-casual-clothes-working-modern-office.jpg"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "RCM Health Service",
              url: "https://www.rcmhealthservice.com",
              logo: "https://www.rcmhealthservice.com/images/logo.png",
              sameAs: [
                "https://www.facebook.com/rcmhealthservice",
                "https://www.linkedin.com/company/rcmhealthservice",
              ],
              description: "Simplifying medical coding and revenue cycle management for healthcare providers nationwide.",
            }),
          }}
        />
      </Head>

      <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 font-sans">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Parallax background shapes */}
          <div
            ref={bgRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 transform-gpu transition-transform duration-300"
          >
            <div className="absolute left-[-10%] top-[-10%] w-[640px] h-[640px] bg-gradient-to-br from-indigo-100 via-sky-50 to-transparent rounded-full blur-3xl opacity-70" />
            <svg
              className="absolute right-[-8%] bottom-[-6%] w-[540px] h-[540px]"
              viewBox="0 0 600 600"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="300" cy="300" r="300" fill="url(#g)" opacity="0.35" />
              <defs>
                <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#e9d5ff" />
                  <stop offset="100%" stopColor="#e0f2fe" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="max-w-7xl mx-auto px-6 py-28 lg:py-36">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.h1
                  initial="hidden"
                  animate="show"
                  className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight text-slate-900"
                >
                  <motion.span variants={heroTextVariants} custom={1}>
                    We make medical coding
                  </motion.span>
                  <br />
                  <motion.span className="text-indigo-600" variants={heroTextVariants} custom={2}>
                    simple, accurate, reliable.
                  </motion.span>
                </motion.h1>

                <motion.p
                  className="mt-6 text-lg text-slate-700 max-w-2xl"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0, transition: { delay: 0.25 } }}
                >
                  RCM Health Service blends deep clinical-coding expertise with modern automation to reduce
                  denials, speed reimbursements, and keep your practice compliant. We partner with hospitals,
                  clinics and specialty groups across the country.
                </motion.p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-transform"
                  >
                    Contact Us
                  </Link>

                  <Link
                    href="/services"
                    className="inline-flex items-center px-5 py-3 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 transition"
                  >
                    Our Services
                  </Link>
                </div>

                {/* Quick Stats */}
                <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 text-center">
                    <div className="text-2xl font-bold">
                      <CountUp to={95} duration={900} suffix="%+" />
                    </div>
                    <div className="text-sm text-slate-500">Accuracy</div>
                  </div>

                  <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 text-center">
                    <div className="text-2xl font-bold">
                      <CountUp to={30} duration={900} suffix="+" />
                    </div>
                    <div className="text-sm text-slate-500">Certified Coders</div>
                  </div>
                </div>
              </div>

              {/* Hero image and floating card */}
              <div className="relative flex justify-center">
                <div className="w-full max-w-xl rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-100">
                  <Image
                    src="/images/screen-with-white-color-put-your-text-there-group-young-people-casual-clothes-working-modern-office.jpg"
                    alt="Group of young people working in a modern office"
                    width={980}
                    height={620}
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="bg-slate-50">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <h2 className="text-2xl font-semibold text-slate-900">Our Values</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">
              Purpose-driven values that guide how we work with clients and partners.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-6">
              {[
                {
                  title: "Compliance First",
                  desc: "Always up-to-date with ICD & CPT changes; we bake compliance into workflows.",
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M12 2L4 5v6c0 5 4 9 8 11 4-2 8-6 8-11V5l-8-3z"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Human + Machine",
                  desc: "Automation accelerates throughput — experienced coders validate edge cases.",
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M12 2v20M2 12h20"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                },
                {
                  title: "Partnership",
                  desc: "We integrate with your team — custom onboarding and continuous feedback loops.",
                  icon: (
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M12 20c4-4 8-8 8-12a8 8 0 10-16 0c0 4 4 8 8 12z"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ),
                },
              ].map(({ title, desc, icon }) => (
                <motion.div
                  whileHover={{ y: -6 }}
                  key={title}
                  className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
                >
                  <div className="text-indigo-600 mb-3">{icon}</div>
                  <h3 className="text-lg font-medium">{title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How we work timeline */}
        <section className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-semibold">How we work</h2>
          <p className="mt-2 text-slate-600 max-w-2xl">A simple, transparent process designed for speed and clarity.</p>

          <ol className="mt-8 space-y-6">
            {[
              { step: "Discover", desc: "We audit workflows and identify gaps." },
              { step: "Integrate", desc: "Connect systems and configure secure data transfer." },
              { step: "Optimize", desc: "Apply automation and coder review to reduce denials." },
              { step: "Scale", desc: "Continuous improvement and reporting to grow value." },
            ].map(({ step, desc }, i) => (
              <motion.li
                key={step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center font-bold text-indigo-600">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">{step}</h3>
                    <p className="mt-1 text-sm text-slate-600">{desc}</p>
                  </div>
                </div>
              </motion.li>
            ))}
          </ol>
        </section>
      </main>
    </>
  );
}
