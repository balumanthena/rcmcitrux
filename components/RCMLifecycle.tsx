// components/RcmLifecycleCircle.tsx
'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  UserPlus,
  FileText,
  Share2,
  DollarSign,
  RefreshCcw,
  AlertTriangle,
  CheckCircle,
} from 'lucide-react';

type Stage = {
  id: number;
  title: string;
  short: string;
  long?: string;
  Icon: React.ElementType;
  color: string;
};

const STAGES: Stage[] = [
  { id: 0, title: 'Patient Registration', short: 'Capture & verify', long: 'Accurate demographic capture, eligibility & benefits checks.', Icon: UserPlus, color: 'from-sky-400 to-indigo-500' },
  { id: 1, title: 'Charge Capture & Coding', short: 'CPT / ICD-10', long: 'Precise, audit-ready coding to maximize correct reimbursement.', Icon: FileText, color: 'from-emerald-400 to-teal-500' },
  { id: 2, title: 'Claim Submission', short: 'Clean claims out', long: 'Payer-ready X12/EDI submissions with built-in validation.', Icon: Share2, color: 'from-indigo-400 to-violet-500' },
  { id: 3, title: 'Payment Posting', short: 'Post quickly', long: 'Accurate allocation of payments to patient accounts.', Icon: DollarSign, color: 'from-amber-400 to-orange-500' },
  { id: 4, title: 'A/R Follow-Up', short: 'Proactive outreach', long: 'Targeted follow-up and payer negotiation to close AR.', Icon: RefreshCcw, color: 'from-rose-400 to-pink-500' },
  { id: 5, title: 'Denial Management', short: 'Appeal & recover', long: 'Timely appeals, root-cause analysis, and prevention loop.', Icon: AlertTriangle, color: 'from-cyan-400 to-blue-500' },
  { id: 6, title: 'Reporting & Analytics', short: 'Actionable insights', long: 'KPIs, trends, and dashboards to optimize revenue.', Icon: CheckCircle, color: 'from-lime-400 to-emerald-500' },
];

export default function RcmLifecycleCircle() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [selected, setSelected] = useState<number>(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // compute positions (circle) based on container size
  const computePositions = useCallback(() => {
    const root = containerRef.current;
    if (!root) return;
    const rect = root.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;
    const cx = w / 2;
    const cy = h / 2;
    const radius = Math.min(w, h) / 2 - 120; // leave room for card size
    const pts = STAGES.map((_, i) => {
      // start at top (-90deg)
      const angle = (i / STAGES.length) * Math.PI * 2 - Math.PI / 2;
      const x = cx + radius * Math.cos(angle);
      const y = cy + radius * Math.sin(angle);
      return { x, y };
    });
    setPositions(pts);
  }, []);

  // initialize + observe resize
  useEffect(() => {
    computePositions();
    if (!containerRef.current) return;
    const ro = new ResizeObserver(() => computePositions());
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [computePositions]);

  // keyboard navigation when focus is inside container
  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;
    const onKey = (e: KeyboardEvent) => {
      if (!root.contains(document.activeElement)) return;
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        setSelected((s) => (s + 1) % STAGES.length);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        setSelected((s) => (s - 1 + STAGES.length) % STAGES.length);
      } else if (e.key === 'Home') {
        e.preventDefault();
        setSelected(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        setSelected(STAGES.length - 1);
      }
    };
    root.addEventListener('keydown', onKey);
    return () => root.removeEventListener('keydown', onKey);
  }, []);

  // helper to build curved SVG path between two points (slightly bowed outward)
  const makeCurve = (p1: { x: number; y: number }, p2: { x: number; y: number }, center: { x: number; y: number }) => {
    const mx = (p1.x + p2.x) / 2;
    const my = (p1.y + p2.y) / 2;
    // outward normal from center to midpoint
    let nx = mx - center.x;
    let ny = my - center.y;
    const len = Math.sqrt(nx * nx + ny * ny) || 1;
    nx = nx / len;
    ny = ny / len;
    const bow = 64; // curve strength (tweakable)
    const cx = mx + nx * bow;
    const cy = my + ny * bow;
    return `M ${p1.x.toFixed(1)} ${p1.y.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
  };

  // center point for curves
  const centerPoint = positions.length ? { x: positions[0].x * 0 + positions[0].x * 0 + (containerRef.current!.getBoundingClientRect().width / 2), y: containerRef.current!.getBoundingClientRect().height / 2 } : { x: 0, y: 0 };

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Circle + SVG paths (desktop) */}
        <div className="w-full flex items-center justify-center">
          <div
            ref={containerRef}
            tabIndex={0}
            aria-label="RCM lifecycle visual"
            className="relative w-[560px] h-[560px] lg:w-[560px] lg:h-[560px] rounded-full"
            // focus ring handled by card buttons inside
          >
            {/* subtle background ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white to-slate-100 shadow-inner pointer-events-none" />

            {/* svg connecting paths */}
            <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 ${containerRef.current?.getBoundingClientRect().width ?? 560} ${containerRef.current?.getBoundingClientRect().height ?? 560}`} preserveAspectRatio="none" aria-hidden>
              <defs>
                <linearGradient id="pathGrad" x1="0" x2="1">
                  <stop offset="0%" stopColor="#c7d2fe" stopOpacity="0.9" />
                  <stop offset="50%" stopColor="#a78bfa" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#7c3aed" stopOpacity="0.9" />
                </linearGradient>

                <linearGradient id="activeGrad" x1="0" x2="1">
                  <stop offset="0%" stopColor="#60a5fa" stopOpacity="1" />
                  <stop offset="100%" stopColor="#7c3aed" stopOpacity="1" />
                </linearGradient>

                <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* draw curved segments between each stage (i -> i+1), last connects to first */}
              {positions.length > 0 &&
                positions.map((p, i) => {
                  const next = positions[(i + 1) % positions.length];
                  const path = makeCurve(p, next, { x: containerRef.current!.getBoundingClientRect().width / 2, y: containerRef.current!.getBoundingClientRect().height / 2 });
                  const isActive = hovered === i || hovered === (i + 1) % positions.length || selected === i || selected === (i + 1) % positions.length;
                  return (
                    <path
                      key={i}
                      d={path}
                      fill="none"
                      stroke={isActive ? 'url(#activeGrad)' : 'url(#pathGrad)'}
                      strokeWidth={isActive ? 4.5 : 3}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ transition: 'stroke-width 180ms ease, stroke 180ms ease' }}
                      filter={isActive ? 'url(#glow)' : undefined}
                    />
                  );
                })}
            </svg>

            {/* Stage cards */}
            {positions.length > 0 &&
              STAGES.map((s, i) => {
                const pos = positions[i];
                const Icon = s.Icon;
                const isSelected = selected === i;
                const isHovered = hovered === i;
                return (
                  <button
                    key={s.id}
                    role="button"
                    aria-pressed={isSelected}
                    aria-label={`${s.title} — ${s.short}`}
                    onClick={() => setSelected(i)}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered((h) => (h === i ? null : h))}
                    onFocus={() => setHovered(i)}
                    onBlur={() => setHovered((h) => (h === i ? null : h))}
                    className={`absolute w-40 h-40 rounded-2xl p-3 text-left focus:outline-none shadow-lg
                      ${isSelected ? 'ring-4 ring-indigo-200' : ''}
                      ${prefersReducedMotion ? '' : 'transition-transform duration-220'}
                    `}
                    style={{
                      left: `${pos.x}px`,
                      top: `${pos.y}px`,
                      transform: 'translate(-50%, -50%)',
                      background: 'rgba(255,255,255,0.6)',
                      backdropFilter: 'blur(6px)',
                      border: '1px solid rgba(255,255,255,0.5)',
                      boxShadow: isSelected || isHovered ? '0 18px 40px rgba(2,6,23,0.12)' : '0 6px 20px rgba(2,6,23,0.06)',
                    }}
                    // keyboard nav order
                  >
                    <div className="flex flex-col items-start gap-2">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${s.color} text-white shadow-sm`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="mt-2 text-sm font-semibold text-gray-900">{s.title}</div>
                      <div className="text-xs text-gray-500">{s.short}</div>
                    </div>
                  </button>
                );
              })}
            {/* central hub */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full flex flex-col items-center justify-center"
              style={{ background: 'linear-gradient(180deg,#fff,#f8fafc)', boxShadow: '0 10px 30px rgba(2,6,23,0.08)', border: '1px solid rgba(0,0,0,0.04)' }}
              aria-hidden
            >
              <div className="text-lg font-bold text-slate-700">RCM</div>
              <div className="text-xs text-slate-500">Revenue Cycle</div>
            </div>
          </div>
        </div>

        {/* Detail panel */}
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-3">How It Works — the lifecycle</h2>
          <p className="text-gray-600 mb-6 max-w-xl">
            Hover or focus any stage on the left to highlight its connections. Click or press Enter to lock it and read details.
          </p>

          <div className="bg-white/60 backdrop-blur-md border border-white/40 rounded-3xl p-6 shadow-md">
            <div className="flex items-start gap-5">
              <div>
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center bg-gradient-to-br ${STAGES[selected].color} text-white shadow`}>
                  {React.createElement(STAGES[selected].Icon, { className: "w-7 h-7" })}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{STAGES[selected].title}</h3>
                <p className="mt-2 text-gray-600">{STAGES[selected].long}</p>
                <div className="mt-4 flex gap-3">
                  <button className="px-5 py-2 rounded-lg bg-indigo-600 text-white shadow-sm hover:brightness-105 transition">Get Started</button>
                  <a className="text-sm text-indigo-600 underline" href="#contact">Talk to sales →</a>
                </div>
              </div>
            </div>

            <hr className="my-4 border-t border-white/50" />

            <div className="hidden md:flex gap-3 flex-wrap">
              {STAGES.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setSelected(i)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${selected === i ? 'bg-indigo-50 ring-1 ring-indigo-100' : 'bg-gray-50'} transition`}
                >
                  <s.Icon className="w-4 h-4 text-indigo-500" />
                  <span>{s.title}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 text-sm text-gray-500">
            Tip: Use <span className="font-medium">arrow keys</span> to move, <span className="font-medium">Enter</span> to select.
          </div>
        </div>
      </div>

      {/* Mobile fallback: stacked list with subtle connectors */}
      <div className="mt-12 lg:hidden max-w-3xl mx-auto">
        <ol className="space-y-6">
          {STAGES.map((s, i) => (
            <li key={s.id} className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center bg-gradient-to-br ${s.color} text-white flex-shrink-0`}>
                <s.Icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-sm font-semibold text-gray-900">{s.title}</div>
                <div className="text-xs text-gray-500">{s.short}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
