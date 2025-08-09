'use client';

import { useState } from 'react';
import { kpis, claims } from '@/lib/mockData';
import { Card } from '@/components/ui/card';
// import { StatsCard } from '@/components/ui/StatsCard';
import { StatsCard } from '@/components/StatsCard';
// If StatsCard is located at 'components/StatsCard.tsx', update the path accordingly.
// Update the import path if Table is located elsewhere, for example:
import { Table } from '@/components/Table';
// Or create the Table component at '@/components/ui/Table.tsx' if it doesn't exist.

export default function Dashboard() {
  const [search, setSearch] = useState('');

  // Filter claims mock (basic filter by patient name or claim id)
  const filteredClaims = claims
    .filter(
      claim => 
        claim.patientName.toLowerCase().includes(search.toLowerCase()) ||
        claim.id.toLowerCase().includes(search.toLowerCase())
    )
    .map(claim => ({
      ...claim,
      status: claim.status as "Pending" | "Denied" | "Approved"
    }));

  return (
    <main className="min-h-screen bg-background p-8 font-body max-w-7xl mx-auto">
      <h1 className="text-4xl font-display text-primary mb-8">Dashboard</h1>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {kpis.map(({ title, value }) => (
          <StatsCard key={title} title={title} value={value} />
        ))}
      </section>

      <section>
        <Card>
          <h2 className="text-2xl font-semibold mb-4">Claims</h2>
          <input
            type="search"
            placeholder="Search claims..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full px-4 py-2 mb-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Table data={filteredClaims} />
        </Card>
      </section>
    </main>
  );
}
