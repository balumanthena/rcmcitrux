'use client';

import { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline';
  children: ReactNode;
  className?: string;
}

export function Button({ variant = 'solid', className, children, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(
        'font-display rounded-2xl px-6 py-3 font-semibold transition hover:shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2',
        variant === 'solid' && 'bg-primary text-white hover:bg-accent focus:ring-accent',
        variant === 'outline' && 'border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
