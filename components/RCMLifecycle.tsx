'use client';

import React, { useCallback, useEffect, useRef, useState, useMemo } from 'react';
import {
  UserPlus,
  FileText,
  Share2,
  DollarSign,
  RefreshCcw,
  AlertTriangle,
  CheckCircle,
} from 'lucide-react';
import { motion, easeOut } from 'framer-motion';

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

const headingVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.1, type: "spring" as const, stiffness: 100 },
  }),
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 + custom * 0.2, ease: easeOut },
  }),
};

export default function RcmLifecycleCircle() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [selected, setSelected] = useState<number>(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [positions, setPositions] = useState<{ x: number; y: number }[]>([]);
  const [size, setSize] = useState({ width: 560, height: 560 });

  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const computePositions = useCallback(() => {
    const root = containerRef.current;
    if (!root) return;
    const rect = root.getBoundingClientRect();
    setSize({ width: rect.width, height: rect.height });
    const w = rect.width;
    const h = rect.height;
    const cx = w / 2;
    const cy = h / 2;
    const radius = Math.min(w, h) / 2 - 120;
    const pts = STAGES.map((_, i) => {
      const angle = (i / STAGES.length) * Math.PI * 2 - Math.PI / 2;
      const x = cx + radius * Math.cos(angle);
      const y = cy + radius * Math.sin(angle);
      return { x, y };
    });
    setPositions(pts);
  }, []);

  useEffect(() => {
    computePositions();
    if (!containerRef.current) return;
    const ro = new ResizeObserver(() => computePositions());
    ro.observe(containerRef.current);
    return () => ro.disconnect();
  }, [computePositions]);

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

  const makeCurve = (
    p1: { x: number; y: number },
    p2: { x: number; y: number },
    center: { x: number; y: number }
  ) => {
    const mx = (p1.x + p2.x) / 2;
    const my = (p1.y + p2.y) / 2;
    let nx = mx - center.x;
    let ny = my - center.y;
    const len = Math.sqrt(nx * nx + ny * ny) || 1;
    nx = nx / len;
    ny = ny / len;
    const bow = 64;
    const cx = mx + nx * bow;
    const cy = my + ny * bow;
    return `M ${p1.x.toFixed(1)} ${p1.y.toFixed(1)} Q ${cx.toFixed(
      1
    )} ${cy.toFixed(1)} ${p2.x.toFixed(1)} ${p2.y.toFixed(1)}`;
  };

  const centerPoint = { x: size.width / 2, y: size.height / 2 };

  const curves = useMemo(() => {
    if (!positions.length) return [];
    return positions.map((p, i) => {
      const next = positions[(i + 1) % positions.length];
      return makeCurve(p, next, centerPoint);
    });
  }, [positions, centerPoint]);

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white to-slate-50">
      {/* Heading at the top */}
      <div className="max-w-7xl mx-auto mb-12 px-4 text-center md:text-left">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-5xl font-extrabold text-center leading-tight text-slate-900 tracking-tight select-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={headingVariants}
          custom={0}
          aria-level={2}
        >
          How It Works — the lifecycle
        </motion.h2>

        <motion.div
          className="w-28 h-1 bg-cyan-400 rounded-full mt-4 origin-left mx-auto md:mx-78"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: easeOut }}
          style={{ transformOrigin: 'left' }}
        />
      </div>

      {/* Main grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 p-4 items-center">
        {/* Circle */}
        <div className="w-full flex items-center justify-center">
          <div
            ref={containerRef}
            tabIndex={0}
            aria-label="RCM lifecycle visual"
            className="relative w-full max-w-[560px] aspect-square rounded-full mx-auto"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white to-slate-100 shadow-inner pointer-events-none" />

            {/* Paths */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox={`0 0 ${size.width} ${size.height}`}
              preserveAspectRatio="none"
              aria-hidden
            >
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

              {positions.length > 0 &&
                curves.map((path, i) => {
                  const isActive =
                    hovered === i ||
                    hovered === (i + 1) % positions.length ||
                    selected === i ||
                    selected === (i + 1) % positions.length;
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
                    aria-pressed={isSelected}
                    aria-label={`${s.title} — ${s.short}`}
                    onClick={() => setSelected(i)}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered((h) => (h === i ? null : h))}
                    onFocus={() => setHovered(i)}
                    onBlur={() => setHovered((h) => (h === i ? null : h))}
                    className={`absolute w-40 h-40 rounded-2xl p-3 text-left shadow-lg
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
                      boxShadow: isSelected || isHovered
                        ? '0 18px 40px rgba(2,6,23,0.12)'
                        : '0 6px 20px rgba(2,6,23,0.06)',
                    }}
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

            {/* Center Hub */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full flex flex-col items-center justify-center"
              style={{
                background: 'linear-gradient(180deg,#fff,#f8fafc)',
                boxShadow: '0 10px 30px rgba(2,6,23,0.08)',
                border: '1px solid rgba(0,0,0,0.04)',
              }}
            >
              <div className="text-lg font-bold text-slate-700">RCM</div>
              <div className="text-xs text-slate-500">Revenue Cycle</div>
            </div>
          </div>
        </div>

        {/* Detail panel */}
        <div>
          <motion.p
            className="text-gray-600 mb-6 max-w-xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={paragraphVariants}
            custom={1}
          >
            Hover or focus any stage on the left to highlight its connections. Click or press Enter to lock it and read details.
          </motion.p>

          <div className="bg-white/60 backdrop-blur-md border border-white/40 rounded-3xl p-6 shadow-md">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-5">
              <div>
                <div className={`w-16 h-16 rounded-lg flex items-center justify-center bg-gradient-to-br ${STAGES[selected].color} text-white shadow`}>
                  {React.createElement(STAGES[selected].Icon, { className: "w-7 h-7" })}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900">{STAGES[selected].title}</h3>
                <p className="mt-2 text-gray-600">{STAGES[selected].long}</p>
                <div className="mt-4 flex gap-3">
                  <button className="px-5 py-2 rounded-lg bg-indigo-600 text-white shadow-sm hover:brightness-105 transition">
                    Schedule a free consultation
                  </button>
                </div>
              </div>
            </div>

            <hr className="my-4 border-t border-white/50" />

            <div className="hidden md:flex gap-3 flex-wrap">
              {STAGES.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => setSelected(i)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm ${
                    selected === i ? 'bg-indigo-50 ring-1 ring-indigo-100' : 'bg-gray-50'
                  } transition`}
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
    </section>
  );
}
