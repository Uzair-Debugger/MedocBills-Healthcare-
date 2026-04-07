import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { mergeClass } from '../../utils/classUtils';

export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'small' | 'label';

interface TypographyProps<T extends ElementType> {
  as?: T;
  variant?: TypographyVariant;
  className?: string;
  children: ReactNode;
}

const variantClasses: Record<TypographyVariant, string> = {
  h1: 'text-5xl sm:text-6xl font-bold tracking-tight',
  h2: 'text-4xl sm:text-5xl font-bold tracking-tight',
  h3: 'text-3xl font-semibold tracking-tight',
  h4: 'text-2xl font-semibold tracking-tight',
  h5: 'text-xl font-semibold tracking-tight',
  p: 'text-base leading-relaxed',
  small: 'text-sm leading-relaxed',
  label: 'text-sm font-medium uppercase tracking-[0.3em]',
};

export function Typography<T extends ElementType = 'p'>(
  { as, variant = 'p', className, children, ...rest }: TypographyProps<T> & Omit<ComponentPropsWithoutRef<T>, 'as' | 'className' | 'children'>,
) {
  const Component = (as || 'p') as ElementType;
  return (
    <Component className={mergeClass(variantClasses[variant], className)} {...rest}>
      {children}
    </Component>
  );
}
