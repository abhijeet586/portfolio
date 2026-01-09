import React, { useRef, useLayoutEffect, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
    children,
    baseOpacity = 0,
    enableBlur = true,
    baseRotation = 3,
    blurStrength = 10,
    rotationStrength = 10, // Not directly used in the simple implementation but here for options
    containerClassName = ""
}) => {
    const el = useRef(null);

    useEffect(() => {
        if (!el.current) return;

        // Split text logic could go here if we wanted character by character, 
        // but the React Bits example often applies to block elements or lines.
        // We will animate the container itself as requested "container be glass".
        // Or we can animate lines inside. Let's make it a wrapper that animates its content.

        const element = el.current;

        gsap.fromTo(
            element,
            {
                opacity: baseOpacity,
                rotate: baseRotation,
                filter: enableBlur ? `blur(${blurStrength}px)` : 'none',
                y: 50,
            },
            {
                opacity: 1,
                rotate: 0,
                filter: 'blur(0px)',
                y: 0,
                duration: 1.5,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: element,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    toggleActions: 'play none none reverse',
                },
            }
        );

        return () => {
            // cleanup if needed
        };
    }, [baseOpacity, enableBlur, baseRotation, blurStrength]);

    return (
        <div ref={el} className={containerClassName}>
            {children}
        </div>
    );
};

export default ScrollReveal;
