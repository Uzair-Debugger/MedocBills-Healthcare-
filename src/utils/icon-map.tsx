// This replaces all direct icon imports in data.ts
import { lazy } from 'react';

// Define all icon names you use in data.ts
export type IconName =
    | 'ShieldPlus'
    | 'DollarSign'
    | 'Lock'
    | 'Laptop'
    | 'User'
    | 'Heart'
    | 'Award'
    | 'Phone'
    | 'Users'
    | 'SquareActivity'
    | 'Hospital'
    | 'BriefcaseMedical'
    | 'Bed'
    | 'Stethoscope'
    | 'Shield'
    | 'Activity'
    | 'Clock'
    | 'ChevronDown'
    | 'Building2'
    | 'Calendar'
    | 'CheckCircle2'
    | 'Search'
    | 'MapPin'
    | 'Facebook'
    | 'Linkedin'
    | 'Youtube'
    | 'Siren'
    | 'PhoneOutgoing'
    | 'Mail'
    | 'MessageSquare';

// Lazy-loaded icon components (only load when used)
export const iconComponents = {
    ShieldPlus: lazy(() => import('lucide-react').then(m => ({ default: m.ShieldPlus }))),
    DollarSign: lazy(() => import('lucide-react').then(m => ({ default: m.DollarSign }))),
    Lock: lazy(() => import('lucide-react').then(m => ({ default: m.Lock }))),
    Laptop: lazy(() => import('lucide-react').then(m => ({ default: m.Laptop }))),
    User: lazy(() => import('lucide-react').then(m => ({ default: m.User }))),
    Heart: lazy(() => import('lucide-react').then(m => ({ default: m.Heart }))),
    Award: lazy(() => import('lucide-react').then(m => ({ default: m.Award }))),
    Phone: lazy(() => import('lucide-react').then(m => ({ default: m.Phone }))),
    PhoneOutgoing: lazy(() => import('lucide-react').then(m => ({ default: m.PhoneOutgoing }))),
    Mail: lazy(() => import('lucide-react').then(m => ({ default: m.Mail }))),
    MessageSquare: lazy(() => import('lucide-react').then(m => ({ default: m.MessageSquare }))),
    Users: lazy(() => import('lucide-react').then(m => ({ default: m.Users }))),
    SquareActivity: lazy(() => import('lucide-react').then(m => ({ default: m.SquareActivity }))),
    Hospital: lazy(() => import('lucide-react').then(m => ({ default: m.Hospital }))),
    BriefcaseMedical: lazy(() => import('lucide-react').then(m => ({ default: m.BriefcaseMedical }))),
    Bed: lazy(() => import('lucide-react').then(m => ({ default: m.Bed }))),
    Stethoscope: lazy(() => import('lucide-react').then(m => ({ default: m.Stethoscope }))),
    Siren: lazy(() => import('lucide-react').then(m => ({ default: m.Siren }))),
};