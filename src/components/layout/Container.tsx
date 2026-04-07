import type { ReactNode } from 'react';
import { mergeClass } from '../../utils/classUtils';

export type ContainerSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

interface ContainerProps {
  size?: ContainerSize;
  className?: string;
  children: ReactNode;
}

const sizeMap: Record<ContainerSize, string> = {
  sm: 'max-w-3xl',
  md: 'max-w-6xl',
  lg: 'max-w-7xl',
  xl: 'max-w-8xl',
  full: 'max-w-full',
};

export function Container({ size = 'lg', className, children }: ContainerProps) {
  return (
    <div className={mergeClass('mx-auto px-4 sm:px-6 lg:px-8', sizeMap[size], className)}>
      {children}
    </div>
  );
}
