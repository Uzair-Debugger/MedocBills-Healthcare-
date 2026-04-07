import React, { useEffect, useRef, useState } from 'react';

const AnimatedSection = ({ children, delay = 0, direction = 'left', className = '' }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), delay);
                }
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [delay]);

    const getInitialTransform = () => {
        switch (direction) {
            case 'left':
                return 'translateX(-100px)';
            case 'right':
                return 'translateX(100px)';
            case 'up':
                return 'translateY(50px)';
            default:
                return 'translateX(-100px)';
        }
    };

    return (
        <div
            ref={sectionRef}
            className={className}
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translate(0)' : getInitialTransform(),
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
            }}
        >
            {children}
        </div>
    );
};

export default AnimatedSection;
