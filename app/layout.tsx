import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Head from 'next/head'
import { Analytics } from "@vercel/analytics/next"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Citrux Health Solutions – Medical Coding & Revenue Cycle Management</title>
        <meta name="description" content="Expert medical coding, auditing, billing, and clinical documentation solutions to optimize healthcare reimbursements and compliance." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Citrux Health Solutions – Medical Coding & Revenue Cycle Management" />
        <meta property="og:description" content="Expert medical coding, auditing, billing, and clinical documentation solutions to optimize healthcare reimbursements and compliance." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:image" content="https://yourdomain.com/og-image.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Citrux Health Solutions – Medical Coding & Revenue Cycle Management" />
        <meta name="twitter:description" content="Expert medical coding, auditing, billing, and clinical documentation solutions to optimize healthcare reimbursements and compliance." />
        <meta name="twitter:image" content="https://yourdomain.com/twitter-image.png" />

        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className="font-body bg-white text-gray-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
