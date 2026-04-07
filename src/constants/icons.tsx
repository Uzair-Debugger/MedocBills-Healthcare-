import type { ReactElement, SVGProps } from 'react';

type IconType = (props: SVGProps<SVGSVGElement>) => ReactElement;

// --- Placeholder Icons ---
// In a real application, you would import these from a library like react-icons
export const IconSyringe: IconType = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3v-1m18-8v-1a3 3 0 00-3-3H6a3 3 0 00-3 3v1" />
    </svg>
);
export const IconHeart: IconType = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
);
export const IconSpine: IconType = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.5v15M9 5.25v13.5A2.25 2.25 0 0011.25 21v-1.5M15 5.25v13.5A2.25 2.25 0 0112.75 21v-1.5" />
    </svg>
);
export const IconTooth: IconType = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 11l3-3m0 0l3 3m-3-3v8m4 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);
export const IconHead: IconType = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 21v-5a2 2 0 012-2h2a2 2 0 012 2v5m-4-7a4 4 0 100-8 4 4 0 000 8zM12 4v4m0 0a4 4 0 100 8" />
    </svg>
);
export const IconBrain: IconType = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 21v-2a4 4 0 00-4-4H3a2 2 0 01-2-2v-4c0-1.66 1.34-3 3-3h18c1.66 0 3 1.34 3 3v4a2 2 0 01-2 2h-2a4 4 0 00-4 4v2m-6 0h4" />
    </svg>
);
export const IconEye: IconType = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-1.274 4.057-5.065 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
);
export const IconKnee: IconType = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19l6-7-6-7" />
    </svg>
);
export const IconPain: IconType = (props: SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
    </svg>
);


// =============================== Hero.tsx ===============================
export const PersonSVG = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-white text-gray-400">
        <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.153.332l-.004.004-.006.007-.021.02a8.775 8.775 0 01-1.01.996.75.75 0 01-.58.12l-.025-.005a9.143 9.143 0 00-1.07.126l-.066-.011a6.6 6.6 0 01-1.428-.152.75.75 0 01-.484-.664v-1.897a.75.75 0 00-.75-.75H12a.75.75 0 00-.75.75v1.897a.75.75 0 01-.484.664 6.6 6.6 0 01-1.428.152l-.066.011a9.143 9.143 0 00-1.07-.126l-.025.005a.75.75 0 01-.58-.12 8.775 8.775 0 01-1.01-.996l-.006-.007-.004-.004a.75.75 0 01-.153-.332z" clipRule="evenodd" />
    </svg>
);
// =========================================================================