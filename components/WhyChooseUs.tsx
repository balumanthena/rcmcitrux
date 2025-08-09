// components/WhyChooseUsShowcase.tsx
'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { CheckCircle, Clock, Users, ShieldCheck, BarChart2, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { JSX } from 'react/jsx-runtime';

type Feature = {
  id: number;
  title: string;
  tagline: string;
  description: string;
  icon: JSX.Element;
  accent: string;
};

const FEATURES: Feature[] = [
  {
    id: 0,
    title: 'Reliable Accuracy',
    tagline: '99%+ coding accuracy',
    description:
      'Certified coders, multi-layer QA, and automated validation rules that reduce denials and rework.',
    icon: <CheckCircle className="w-6 h-6" aria-hidden="true" />,
    accent: 'text-emerald-400',
  },
  {
    id: 1,
    title: 'Rapid Turnaround',
    tagline: 'Results in 24 hours',
    description:
      'Optimized workflows and smart batching let us process claims quickly without sacrificing quality.',
    icon: <Clock className="w-6 h-6" aria-hidden="true" />,
    accent: 'text-blue-400',
  },
  {
    id: 2,
    title: 'Dedicated Support',
    tagline: 'People-first help',
    description:
      'A real person assigned to your account — SLAs, escalation paths, and continuous training.',
    icon: <Users className="w-6 h-6" aria-hidden="true" />,
    accent: 'text-violet-400',
  },
  {
    id: 3,
    title: 'HIPAA & Compliance',
    tagline: 'Security-first',
    description:
      'End-to-end encryption, audit trails, and compliance checks baked into every workflow.',
    icon: <ShieldCheck className="w-6 h-6" aria-hidden="true" />,
    accent: 'text-cyan-400',
  },
  {
    id: 4,
    title: 'Analytics',
    tagline: 'Insights that matter',
    description:
      'Custom dashboards and trend alerts to help you spot improvement opportunities quickly.',
    icon: <BarChart2 className="w-6 h-6" aria-hidden="true" />,
    accent: 'text-amber-400',
  },
  {
    id: 5,
    title: 'Smart Automation',
    tagline: 'Rules + AI assist',
    description:
      'Hybrid human + automation approach that suggests codes and highlights risky claims for review.',
    icon: <Zap className="w-6 h-6" aria-hidden="true" />,
    accent: 'text-pink-400',
  },
];

export default function WhyChooseUsShowcase() {
  const itemCount = FEATURES.length;
  const [selected, setSelected] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  // Focus the nth card (used for keyboard navigation)
  const focusItem = useCallback((index: number) => {
    const root = containerRef.current;
    if (!root) return;
    const items = root.querySelectorAll<HTMLButtonElement>('[role="option"]');
    const el = items[index];
    if (el) el.focus();
  }, []);

  // Keyboard navigation: left/right/up/down, Home/End
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const root = containerRef.current;
      if (!root) return;
      // only when focus is inside the orbit group OR the user presses keys while hovering a child
      if (!root.contains(document.activeElement)) return;

      if (['ArrowRight', 'ArrowDown'].includes(e.key)) {
        e.preventDefault();
        setSelected((s) => {
          const next = (s + 1) % itemCount;
          focusItem(next);
          return next;
        });
      } else if (['ArrowLeft', 'ArrowUp'].includes(e.key)) {
        e.preventDefault();
        setSelected((s) => {
          const prev = (s - 1 + itemCount) % itemCount;
          focusItem(prev);
          return prev;
        });
      } else if (e.key === 'Home') {
        e.preventDefault();
        setSelected(0);
        focusItem(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setSelected(itemCount - 1);
        focusItem(itemCount - 1);
      }
    };

    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [focusItem, itemCount]);

  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      {/* decorative radial */}
      <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full bg-gradient-to-tr from-primary/10 via-transparent to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: static orbit cluster */}
        <div className="flex items-center justify-center">
          <div
            ref={containerRef}
            className="relative w-[360px] h-[360px] md:w-[440px] md:h-[440px] lg:w-[520px] lg:h-[520px] why-orbit"
            role="listbox"
            aria-label="Core services orbit"
          >
            <div className="absolute inset-0 flex items-center justify-center orbit-stage">
              {/* center hub */}
              <div
                className="w-36 h-36 rounded-full bg-white/30 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-md"
                aria-hidden="true"
              >
                <div className="text-center">
                  <div className="text-sm text-gray-700 font-medium">RCM</div>
                  <div className="text-xs text-gray-500">Core Services</div>
                </div>
              </div>

              {/* orbit cards (static positions; angles set via CSS variable --angle) */}
              {FEATURES.map((f, i) => {
                const angle = (360 / itemCount) * i;
                return (
                  <button
                    key={f.id}
                    role="option"
                    aria-selected={selected === f.id}
                    aria-controls="feature-detail"
                    tabIndex={0}
                    onMouseEnter={() => setSelected(f.id)}
                    onFocus={() => setSelected(f.id)}
                    className="card-orbit"
                    data-selected={selected === f.id}
                    // set CSS variables for rotation; CSS uses --angle and --angle-neg
                    style={
                      {
                        ['--angle' as any]: `${angle}deg`,
                        ['--angle-neg' as any]: `${-angle}deg`,
                      } as React.CSSProperties
                    }
                  >
                    <div className="card-inner">
                      <div className={`${f.accent} mb-2`}>{f.icon}</div>
                      <div className="text-sm font-semibold text-gray-900">{f.title}</div>
                      <div className="text-xs text-gray-600 mt-1">{f.tagline}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right: detail panel */}
        <div>
          <div className="mb-6">
            <h2 className="text-4xl font-display font-bold text-gray-900">
              Why choose <span className="text-primary">RCM Health Service</span>
            </h2>
            <p className="mt-3 text-gray-600 max-w-xl">
              We blend certified expertise, automation, and security to reduce denials, speed up reimbursements, and give you continuous operational visibility.
            </p>
          </div>

          {/* detail card (aria-live for SR) */}
          <div id="feature-detail" role="region" aria-live="polite" className="bg-white rounded-3xl shadow-xl p-8 border border-white/40">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                  <div className={`${FEATURES[selected].accent} w-8 h-8`}>{FEATURES[selected].icon}</div>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-gray-900">{FEATURES[selected].title}</h3>
                <p className="mt-2 text-gray-600">{FEATURES[selected].description}</p>

                <div className="mt-6 flex flex-wrap gap-3 items-center">
                  <Button className="px-6 py-2 rounded-xl">Get Started</Button>
                  <a href="#contact" className="text-sm text-primary hover:underline ml-2">
                    Talk to sales →
                  </a>
                </div>
              </div>
            </div>

            {/* small list for mobile */}
            <div className="mt-6 md:hidden">
              <ul className="grid grid-cols-1 gap-3">
                {FEATURES.map((f) => (
                  <li key={f.id} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                    <div className={`${f.accent} w-8 h-8`}>{f.icon}</div>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{f.title}</div>
                      <div className="text-xs text-gray-600">{f.tagline}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-500">Tip: use <span className="font-medium">arrow keys</span> or hover to preview features.</div>
        </div>
      </div>
    </section>
  );
}
