// components/Table.tsx

type Claim = {
  id: string;
  patientName: string;
  status: 'Pending' | 'Denied' | 'Approved';
  date: string;
};

interface TableProps {
  data: Claim[];
}

export function Table({ data }: TableProps) {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-primary text-white rounded-xl">
          <th className="p-3 text-left rounded-tl-xl">Claim ID</th>
          <th className="p-3 text-left">Patient</th>
          <th className="p-3 text-left">Date</th>
          <th className="p-3 text-left rounded-tr-xl">Status</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, patientName, status, date }) => (
          <tr key={id} className="border-b border-gray-200 hover:bg-background">
            <td className="p-3">{id}</td>
            <td className="p-3">{patientName}</td>
            <td className="p-3">{date}</td>
            <td className="p-3">
              <span
                className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                  status === 'Pending'
                    ? 'bg-amber-200 text-amber-800'
                    : status === 'Denied'
                    ? 'bg-red-200 text-red-800'
                    : 'bg-green-200 text-green-800'
                }`}
                aria-label={`Status: ${status}`}
              >
                {status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
