import { ReactNode } from 'react';
import clsx from 'clsx';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={clsx(
        'bg-white rounded-2xl shadow-soft p-6 transition-shadow hover:shadow-medium',
        className
      )}
    >
      {children}
    </div>
  );
}
