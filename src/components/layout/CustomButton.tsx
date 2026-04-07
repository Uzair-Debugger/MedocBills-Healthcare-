import type { ButtonHTMLAttributes } from 'react';
import { mergeClass } from '../../utils/classUtils';
import type { ButtonVariant } from '../../constants/types';


interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-white hover:bg-secondary transition-colors',
  secondary: 'bg-secondary text-white hover:bg-secondary-hover transition-colors',
  outline: 'border border-primary text-primary bg-transparent hover:bg-primary/10 transition-colors',
  ghost: 'bg-transparent text-primary hover:bg-primary/10 transition-colors',
};

export function CustomButton({ variant = 'primary', className, ...props }: CustomButtonProps) {
  return (
    <button
      {...props}
      className={mergeClass(
        'inline-flex items-center justify-center rounded-full px-6 py-3 font-medium shadow-sm',
        variantClasses[variant],
        className,
      )}
    />
  );
}
