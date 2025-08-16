'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import clsx from 'clsx';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

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
    setOpenSubmenu(null);
  }, [pathname]);

  return (
    <nav role="navigation" className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 pt-4 pb-2 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" aria-label="Home" className="flex items-center">
          <Image
            src="/images/citrux solutions.png"
            alt="RCM Logo"
            width={150}
            height={150}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-800 justify-center flex-grow">
          {links.map(({ href, label, children }) => {
            const isActive = pathname === href || (children && children.some(c => pathname === c.href));

            if (children) {
              return (
                <li key={href} className="relative group">
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={isActive}
                    className={clsx(
                      'pb-1 transition-all duration-200 hover:text-blue-700 border-b-2 border-transparent hover:border-blue-700',
                      isActive && 'text-blue-700 border-blue-700',
                      'cursor-pointer bg-transparent border-none font-medium'
                    )}
                  >
                    {label}
                  </button>

                  {/* Dropdown */}
                  <ul className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all z-50">
                    {children.map((child) => (
                      <li key={child.href} className="border-b border-gray-100 last:border-none">
                        <Link
                          href={child.href}
                          className="block px-5 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-700"
                          aria-current={pathname === child.href ? 'page' : undefined}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              );
            } else {
              return (
                <li key={href}>
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
                </li>
              );
            }
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
            const submenuOpen = openSubmenu === href;

            return (
              <li key={href}>
                {children ? (
                  <>
                    {/* Parent with children */}
                    <div
                      className={clsx(
                        'flex justify-between items-center px-4 py-2 rounded hover:bg-gray-50 hover:text-blue-700 cursor-pointer',
                        isActive && 'text-blue-700 font-semibold bg-gray-50'
                      )}
                      onClick={() => setOpenSubmenu(submenuOpen ? null : href)}
                      role="button"
                      aria-haspopup="true"
                      aria-expanded={submenuOpen}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setOpenSubmenu(submenuOpen ? null : href);
                        }
                      }}
                    >
                      <span className="flex-grow">{label}</span>
                      <span aria-hidden="true" className="ml-2">{submenuOpen ? '−' : '+'}</span>
                    </div>

                    {submenuOpen && (
                      <ul className="pl-6 space-y-1">
                        {children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block px-4 py-1 text-gray-600 hover:text-blue-700"
                              aria-current={pathname === child.href ? 'page' : undefined}
                              onClick={() => setMenuOpen(false)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  // Simple link without children
                  <Link
                    href={href}
                    className={clsx(
                      'block px-4 py-2 rounded hover:bg-gray-50 hover:text-blue-700',
                      isActive && 'text-blue-700 font-semibold bg-gray-50'
                    )}
                    onClick={() => setMenuOpen(false)}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
