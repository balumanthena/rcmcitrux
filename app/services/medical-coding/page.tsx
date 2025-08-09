// app/services/medical-coding/page.tsx
import Link from 'next/link';

export default function MedicalCodingPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">
          Coding Optimized: Accuracy, Efficiency & Compliance for a High-Performing Revenue Cycle
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
        <h2 className="text-2xl font-semibold text-gray-800">Medical Coding</h2>
        <p>
          Medical coding plays a crucial role in your healthcare facility’s revenue cycle. Your coding must be accurate, efficient, and secure to maintain healthy revenue and compliance. Citrux Health Solutions provides medical coding solutions for hospitals, physician offices, Independent Practice Associations, and a variety of other healthcare providers.
        </p>
        <p>
          Citrux's coding solutions cater to a variety of healthcare settings and specialties with expertise in complex Inpatient, Outpatient, and Professional Fee (Ambulatory) coding. Our coders are highly trained, experienced, and AHIMA and/or AAPC certified. Quality and Security are our highest priorities—we continually strive to maintain compliance and guarantee 95% or greater accuracy, so you can be assured your facility is receiving the best-in-class coding partnership experience.
        </p>
        <p>
          Our medical coding solutions offer a quick and customizable turnaround time, giving your facility the freedom to seamlessly secure accurate coding quickly. Our 3-Tier Quality Assurance Process identifies and fixes any coding and/or compliance errors to ensure our coding is accurate every time.
        </p>
        <p>
          To learn more about our revenue cycle management solutions and applying the Citrux advantage to your facility, explore our{' '}
          <Link href="/services/medical-billing" className="text-blue-600 hover:underline">
            medical billing solutions
          </Link>,{' '}
          <Link href="/services/auditing" className="text-blue-600 hover:underline">
            ICD-10 third-party auditing
          </Link>, and{' '}
          <Link href="/services/clinical-documentation-improvement" className="text-blue-600 hover:underline">
            CDI solutions
          </Link> and start your journey here.
        </p>
      </section>

      <section className="mt-10">
        <h3 className="text-xl font-semibold text-gray-800">Service Types and Specialties</h3>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Acute Care Inpatient</li>
          <li>Emergency Department</li>
          <li>Ambulatory Surgery</li>
          <li>Interventional Radiology</li>
          <li>Outpatient Diagnostics</li>
          <li>Ancillary Visits</li>
          <li>Physician Office Visits</li>
          <li>E&M (Evaluation and Management) Levels</li>
          <li>Observation Services</li>
          <li>Recurring and Series Accounts</li>
        </ul>
      </section>

      <section className="mt-10">
        <h3 className="text-xl font-semibold text-gray-800">HCC / Risk Adjustment Coding & Audit</h3>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Assigning appropriate HCC value to the corresponding MRA Diagnosis code.</li>
          <li>Adherence to official coding rules and CMS guidelines for risk adjustment reporting.</li>
          <li>Chart Reviews and Audits of medical records to detect HCC coding inaccuracies or missing diagnoses affecting RAF score.</li>
          <li>Flexible staffing scalability up to full-outsource capacity.</li>
          <li>Coders receive ongoing continued education and training.</li>
        </ul>
        <p className="mt-4">
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
          >
            Tell me more
          </Link>
        </p>
      </section>
    </main>
  );
}
