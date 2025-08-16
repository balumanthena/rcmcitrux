"use client";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const servicesLinks = [
    { href: "/services/medical-coding", label: "Medical Coding" },
    { href: "/services/medical-billing", label: "Medical Billing" },
    { href: "/services/auditing", label: "Auditing" },
    { href: "/services/clinical-documentation-improvement", label: "Clinical Documentation Improvement" },
    { href: "/services/risk-adjustment", label: "Risk Adjustment" },
  ];

  return (
    <footer className="bg-gradient-to-t from-slate-50 via-white to-white text-gray-700 font-medium border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* About Us */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">About Us</h3>
          <p className="text-sm leading-relaxed text-gray-600">
            Citrux Health Solutions provides elite medical coding & RCM services, distinguished by accuracy, compliance, and consistently timely results.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link 
                href="/" 
                className="transition-colors text-gray-600 hover:text-blue-600 font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/about"
                className="transition-colors text-gray-600 hover:text-blue-600 font-medium"
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                href="/contact"
                className="transition-colors text-gray-600 hover:text-blue-600 font-medium"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">Services</h3>
          <ul className="space-y-2">
            {servicesLinks.map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="transition-colors text-gray-600 hover:text-blue-600 font-medium"
                >
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4 tracking-tight">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-500" />
              <span>info@citrux.in</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-blue-500" />
              <span>+91 85559 54798</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-blue-500" />
              <span>2nd Floor, IT Tower, Siddipet, Telangana, India</span>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-200 text-center py-5 text-[15px] text-gray-500 tracking-wide bg-white">
        © {new Date().getFullYear()} Citrux Health Solutions. All rights reserved.
      </div>
    </footer>
  );
}
