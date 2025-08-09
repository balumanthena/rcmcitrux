// components/ui/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-primary text-white text-center py-6 mt-12 font-body">
      <p className="text-sm">
        © {new Date().getFullYear()} RCM Health Service. All rights reserved.
      </p>
    </footer>
  );
}
