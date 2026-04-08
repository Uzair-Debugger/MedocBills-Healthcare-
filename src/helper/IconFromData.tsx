import { Suspense } from 'react';
import { iconComponents, IconName } from '../utils/icon-map';

interface IconFromDataProps {
  name: IconName | string;
  className?: string;
  size?: number;
}

export const IconFromData = ({ name, className = "w-6 h-6", size = 24 }: IconFromDataProps) => {
  const IconComponent = iconComponents[name as keyof typeof iconComponents];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return null;
  }
  
  return (
    <Suspense fallback={<div className={className} style={{ width: size, height: size }} />}>
      <IconComponent className={className} size={size} />
    </Suspense>
  );
};