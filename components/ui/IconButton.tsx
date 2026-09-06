import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const IconButton = ({
  label,
  className,
  children,
  ...props
}: IconButtonProps) => {
  return (
    <button
      type="button"
      aria-label={label}
      className={cn(
        'inline-flex items-center justify-center p-1 text-on-surface-variant hover:text-on-surface transition-colors',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};
