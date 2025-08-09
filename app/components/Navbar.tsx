'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import clsx from 'clsx';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      role="navigation"
      className="bg-white sticky top-0 z-50 border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-gray-900 text-2xl font-semibold hover:text-blue-600 transition-colors"
        >
          RCM
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-gray-700">
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={clsx(
                    'relative transition-colors duration-200 hover:text-blue-600',
                    isActive && 'text-blue-600 font-semibold'
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {label}
                  {isActive && (
                    <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600"></span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="md:hidden text-gray-700 focus:outline-none hover:text-blue-600"
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
          {links.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={clsx(
                    'block px-4 py-2 rounded-md hover:bg-blue-50 hover:text-blue-600 transition-colors',
                    isActive && 'text-blue-600 font-semibold bg-blue-50'
                  )}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
