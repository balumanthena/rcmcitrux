// components/StatsCard.tsx
interface StatsCardProps {
  title: string;
  value: number | string;
}

export function StatsCard({ title, value }: StatsCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-soft p-6 text-center">
      <h3 className="font-display text-lg text-gray-600">{title}</h3>
      <p className="font-display text-3xl font-bold text-primary">{value}</p>
    </div>
  );
}
