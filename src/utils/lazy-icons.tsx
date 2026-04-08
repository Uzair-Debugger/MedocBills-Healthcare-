// Instead of importing all icons, create a centralized lazy-loaded icon component
import { lazy, Suspense } from 'react';
import type { LucideProps } from 'lucide-react';

// Dynamically import only the icons you need
const IconComponents = {
    Menu: lazy(() => import('lucide-react').then(m => ({ default: m.Menu }))),
    X: lazy(() => import('lucide-react').then(m => ({ default: m.X }))),
    Phone: lazy(() => import('lucide-react').then(m => ({ default: m.Phone }))),
    Mail: lazy(() => import('lucide-react').then(m => ({ default: m.Mail }))),
    Instagram: lazy(() => import('lucide-react').then(m => ({ default: m.Instagram }))),
    Facebook: lazy(() => import('lucide-react').then(m => ({ default: m.Facebook }))),
    Twitter: lazy(() => import('lucide-react').then(m => ({ default: m.Twitter }))),
    ArrowRight: lazy(() => import('lucide-react').then(m => ({ default: m.ArrowRight }))),
    MenuIcon: lazy(() => import('lucide-react').then(m => ({ default: m.Menu }))),
    Shield: lazy(() => import('lucide-react').then(m => ({ default: m.Shield }))),
    Activity: lazy(() => import('lucide-react').then(m => ({ default: m.Activity }))),
    Clock: lazy(() => import('lucide-react').then(m => ({ default: m.Clock }))),
    ChevronDown: lazy(() => import('lucide-react').then(m => ({ default: m.ChevronDown }))),
    Building2: lazy(() => import('lucide-react').then(m => ({ default: m.Building2 }))),
    Calendar: lazy(() => import('lucide-react').then(m => ({ default: m.Calendar }))),
    Search: lazy(() => import('lucide-react').then(m => ({ default: m.Search }))),
    MapPin: lazy(() => import('lucide-react').then(m => ({ default: m.MapPin }))),
    CheckCircle2: lazy(() => import('lucide-react').then(m => ({ default: m.CheckCircle2 }))),
    Users: lazy(() => import('lucide-react').then(m => ({ default: m.Users }))),
    Heart: lazy(() => import('lucide-react').then(m => ({ default: m.Heart }))),
    Award: lazy(() => import('lucide-react').then(m => ({ default: m.Award }))),
    PhoneOutgoing: lazy(() => import('lucide-react').then(m => ({ default: m.PhoneOutgoing }))),
    MessageSquare: lazy(() => import('lucide-react').then(m => ({ default: m.MessageSquare }))),
    Linkedin: lazy(() => import('lucide-react').then(m => ({ default: m.Linkedin }))),
    Youtube: lazy(() => import('lucide-react').then(m => ({ default: m.Youtube }))),
} as const;

type IconName = keyof typeof IconComponents;

interface IconProps extends LucideProps {
    name: IconName;
}

export const Icon = ({ name, ...props }: IconProps) => {
    const LucideIcon = IconComponents[name];
    return (
        <Suspense fallback={<span style={{ width: props.width || 20, height: props.height || 20 }} />}>
            <LucideIcon {...props} />
        </Suspense>
    );
};