import { InputHTMLAttributes } from 'react';
import clsx from 'clsx';

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={clsx(
        'w-full rounded-xl border border-gray-300 px-4 py-2 shadow-sm placeholder-gray-400 focus:border-accent focus:ring-2 focus:ring-accent focus:ring-opacity-50 transition',
        className
      )}
      {...props}
    />
  );
}
