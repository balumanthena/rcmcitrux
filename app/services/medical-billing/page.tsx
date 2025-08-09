// app/services/medical-billing/page.tsx
import Link from 'next/link';

export default function MedicalBillingPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Decrease Billing Errors & Collect Faster for Increased Cashflow
        </h1>
        <p className="mt-4">
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Schedule a 1:1 Meeting
          </Link>
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Medical Billing & A/R Management</h2>
        <p>
          Your healthcare facility’s revenue cycle relies on medical billing best practices. Citrux Health Solutions provides medical billing and A/R management solutions to hospitals, physician offices, Independent Practice Associations, and a variety of other healthcare providers. Our medical billing and A/R management solutions reduce errors, improve collections speed, and increase cash flow.
        </p>
        <p>
          Our all-inclusive Revenue Cycle Management solutions will give you the freedom to focus on your facility’s highest priority: providing excellent patient care. Our solutions optimize all aspects of revenue cycle management, including Provider Enrollment and Credentialing, Insurance Verification, Payment Posting, Accounts Receivables, Denial Management, and much more.
        </p>
        <p>
          Our billing experts have at least 10 years of experience and always maintain HIPAA, HITECH, CMS, In-Network, and Out-of-Network compliance. We keep meticulous records of all your payments to maintain the highest standards of accuracy, privacy, and security. While other RCM companies may implement a one-size-fits-all model, Citrux customizes medical billing and A/R management solutions to meet and exceed individual facility needs.
        </p>
        <p>
          Citrux is one of the top medical billing and A/R management companies—not only do our billing experts process your claims, but we investigate the source of the issue to identify and remedy any errors in your billing processes.
        </p>
        <p>
          To learn more about our revenue cycle management solutions and apply the Citrux Advantage to your facility, explore our{' '}
          <Link href="/services/medical-coding" className="text-blue-600 hover:underline">
            medical coding solutions
          </Link>,{' '}
          <Link href="/services/hcc-coding" className="text-blue-600 hover:underline">
            HCC coding solutions
          </Link>,{' '}
          <Link href="/services/auditing" className="text-blue-600 hover:underline">
            ICD-10 third-party auditing
          </Link>, and{' '}
          <Link href="/services/clinical-documentation-improvement" className="text-blue-600 hover:underline">
            CDI solutions
          </Link>.
        </p>
      </section>

      <section className="mt-10">
        <h3 className="text-xl font-semibold text-gray-800">Comprehensive End-to-End Revenue Cycle Management</h3>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Provider Enrollment and Credentialing</li>
          <li>Pre-certification (Authorization) & Insurance Eligibility Verification</li>
          <li>Patient Demographic Entry</li>
          <li>Medical Coding</li>
          <li>Charge Entry</li>
          <li>Claims Submission</li>
          <li>Payment Posting</li>
          <li>Account Receivables Follow-up</li>
          <li>Denial Management</li>
          <li>Patient Collections</li>
        </ul>
      </section>

      <section className="mt-10">
        <h3 className="text-xl font-semibold text-gray-800">Specialties</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 list-disc pl-6 mt-2 space-y-1">
          <li>Ambulance Services</li>
          <li>Anesthesiology</li>
          <li>Cardiology</li>
          <li>Cardiovascular Surgery</li>
          <li>Chiropractic</li>
          <li>Dermatology</li>
          <li>Durable Medical Equipment</li>
          <li>Emergency Medicine</li>
          <li>Endocrinology</li>
          <li>Family Practice</li>
          <li>General Surgery</li>
          <li>Hematology / Oncology</li>
          <li>Internal Medicine</li>
          <li>Mental Health</li>
          <li>Motor Vehicle Injuries</li>
          <li>Nephrology</li>
          <li>Neurology</li>
          <li>Obstetrics / Gynecology</li>
          <li>Orthopedics</li>
          <li>Pain Management</li>
          <li>Pathology</li>
          <li>Pediatrics</li>
          <li>Physical & Occupational Therapy</li>
          <li>Podiatry</li>
          <li>Psychiatry</li>
          <li>Radiology</li>
          <li>Sleep Disorders</li>
          <li>Urology</li>
          <li>Workers Compensation</li>
        </ul>
      </section>
    </main>
  );
}
