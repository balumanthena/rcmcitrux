// /app/services/risk-adjustment/page.tsx

import React from "react";

export default function RiskAdjustmentPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Risk Adjustment Solutions</h1>

      <p className="mb-4">
        Citrux Health Solutions offers comprehensive Risk Adjustment services to help healthcare
        organizations accurately capture patient complexity and ensure proper reimbursement. Our
        solutions leverage cutting-edge technology, certified coders, and a proven methodology to
        deliver reliable, compliant, and actionable results.
      </p>

      <p className="mb-4">
        We provide both prospective and retrospective risk adjustment reviews, enabling providers to
        improve documentation quality, close care gaps, and maintain compliance with CMS and HHS
        guidelines.
      </p>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Our Risk Adjustment Services</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Prospective Risk Adjustment</li>
        <li>Retrospective Risk Adjustment</li>
        <li>HCC Coding and Review</li>
        <li>Documentation Improvement Support</li>
        <li>Compliance and Accuracy Auditing</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-6 mb-3">Why Choose Citrux</h2>
      <ul className="list-disc list-inside">
        <li>Certified risk adjustment coders with years of experience</li>
        <li>Advanced NLP technology for structured and unstructured data</li>
        <li>Customizable reporting and interactive dashboards</li>
        <li>Real-time feedback and coder education</li>
        <li>Proven compliance and accuracy track record</li>
      </ul>
    </div>
  );
}
