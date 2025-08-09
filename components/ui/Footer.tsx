"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">About Us</h3>
          <p className="text-sm leading-6">
            We provide top-quality medical coding & RCM services with a commitment
            to accuracy, compliance, and timely delivery.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-blue-700 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-blue-700 transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-blue-700 transition">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-700 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: info@citrux.in</li>
            <li>Phone: +91 85559 54798</li>
            <li>Address: 2nd Floor, IT Tower, Siddipet, Telangana, India</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 py-4 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Citrux Health Solutions. All rights reserved.
      </div>
    </footer>
  );
}
