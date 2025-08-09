'use client';

import { useState } from 'react';
import { Card } from '@/components/ui/card';
// import FileUpload from '@/components/ui/FileUpload';
// If FileUpload is located elsewhere, update the path accordingly, for example:
// import FileUpload from '@/components/ui/FileUpload';
import FileUpload from '@/components/ui/FileUpload';
// Or create the FileUpload component at '@/components/ui/FileUpload.tsx'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

type ClaimMeta = {
  claimId: string;
  patientName: string;
  dateOfService: string;
  status: string;
};

export default function ClaimDetail() {
  const mockClaimMeta: ClaimMeta = {
    claimId: 'C12345',
    patientName: 'John Doe',
    dateOfService: '2024-07-01',
    status: 'Pending',
  };

  const [cptCode, setCptCode] = useState('');
  const [icdCode, setIcdCode] = useState('');

  return (
    <main className="min-h-screen bg-background p-8 font-body max-w-5xl mx-auto">
      <h1 className="text-4xl font-display text-primary mb-8">Claim Detail</h1>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Metadata Panel */}
        <Card>
          <h2 className="font-semibold mb-4">Claim Information</h2>
          <p><strong>Claim ID:</strong> {mockClaimMeta.claimId}</p>
          <p><strong>Patient:</strong> {mockClaimMeta.patientName}</p>
          <p><strong>Date of Service:</strong> {mockClaimMeta.dateOfService}</p>
          <p><strong>Status:</strong> {mockClaimMeta.status}</p>
        </Card>

        {/* CPT/ICD Code Editor */}
        <Card className="md:col-span-2 space-y-6">
          <div>
            <label className="block font-semibold mb-1" htmlFor="cpt">CPT Code</label>
            <Input
              id="cpt"
              value={cptCode}
              onChange={e => setCptCode(e.target.value)}
              placeholder="Enter CPT code"
            />
          </div>

          <div>
            <label className="block font-semibold mb-1" htmlFor="icd">ICD Code</label>
            <Input
              id="icd"
              value={icdCode}
              onChange={e => setIcdCode(e.target.value)}
              placeholder="Enter ICD code"
            />
          </div>

          <Button className="mt-4 bg-primary text-white">Save Codes</Button>
        </Card>
      </section>

      {/* File Upload */}
      <section>
        <FileUpload />
      </section>
    </main>
  );
}
