'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import clsx from 'clsx';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    {
      href: '/services',
      label: 'Services',
      children: [
        { href: '/services/medical-coding', label: 'Medical Coding' },
        { href: '/services/medical-billing', label: 'Medical Billing' },
        { href: '/services/auditing', label: 'Auditing' },
        { href: '/services/clinical-documentation-improvement', label: 'Clinical Documentation Improvement' },
        { href: '/services/risk-adjustment', label: 'Risk Adjustment' },
      ],
    },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  return (
    <nav role="navigation" className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-gray-900 text-2xl tracking-wide hover:text-blue-700 transition-colors"
        >
          RCM
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-800">
          {links.map(({ href, label, children }) => {
            const isActive = pathname === href || (children && children.some(c => pathname === c.href));
            return (
              <li key={href} className="relative group">
                <Link
                  href={href}
                  className={clsx(
                    'pb-1 transition-all duration-200 hover:text-blue-700 border-b-2 border-transparent hover:border-blue-700',
                    isActive && 'text-blue-700 border-blue-700'
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {label}
                </Link>

                {/* Dropdown */}
                {children && (
                  <ul className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all">
                    {children.map((child) => (
                      <li key={child.href} className="border-b border-gray-100 last:border-none">
                        <Link
                          href={child.href}
                          className="block px-5 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-700"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="md:hidden text-gray-700 hover:text-blue-700"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          'md:hidden bg-white border-t border-gray-200 transition-all duration-300 ease-in-out',
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        )}
      >
        <ul className="flex flex-col p-4 space-y-2">
          {links.map(({ href, label, children }) => {
            const isActive = pathname === href || (children && children.some(c => pathname === c.href));
            return (
              <li key={href}>
                <div
                  className={clsx(
                    'flex justify-between items-center px-4 py-2 rounded hover:bg-gray-50 hover:text-blue-700',
                    isActive && 'text-blue-700 font-semibold bg-gray-50'
                  )}
                  onClick={() => {
                    if (children) {
                      setServicesOpen((prev) => !prev);
                    }
                  }}
                >
                  <Link href={href} aria-current={isActive ? 'page' : undefined}>
                    {label}
                  </Link>
                  {children && <span>{servicesOpen ? '−' : '+'}</span>}
                </div>

                {children && servicesOpen && (
                  <ul className="pl-6 space-y-1">
                    {children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-4 py-1 text-gray-600 hover:text-blue-700"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
