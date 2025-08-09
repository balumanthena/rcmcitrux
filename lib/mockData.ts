// lib/mockData.ts

// Features for landing page grid
export const features = [
  {
    icon: '📈',
    title: 'Real-time Analytics',
    description: 'Track your coding volume & claim status at a glance.',
  },
  {
    icon: '✅',
    title: '99%+ Accuracy',
    description: 'Ensure compliance and reduce claim denials.',
  },
  {
    icon: '⚡',
    title: 'Fast Turnaround',
    description: 'Get coding results within 24 hours of submission.',
  },
];

// Example claim data for dashboard
export const claims = [
  {
    id: 'C12345',
    patientName: 'John Doe',
    status: 'Pending',
    date: '2024-07-01',
  },
  {
    id: 'C54321',
    patientName: 'Jane Smith',
    status: 'Denied',
    date: '2024-06-28',
  },
  // More mock claims...
];

// Dashboard KPIs
export const kpis = [
  { title: 'Claims Pending', value: 15 },
  { title: 'Coding Volume', value: 320 },
  { title: 'Denials', value: 3 },
];
