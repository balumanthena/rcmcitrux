// app/layout.tsx
import './globals.css';
import Navbar from './components/Navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body bg-white text-gray-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
