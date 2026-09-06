import { InputHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={cn(
        'w-full px-3.5 py-2 text-sm text-on-surface bg-surface-container-low/50 border border-outline-variant rounded-lg placeholder:text-outline focus:outline-none focus:border-primary',
        className,
      )}
      {...props}
    />
  );
};
