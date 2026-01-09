import React from 'react';
import Dock from './Dock';
import ScrollReveal from './ScrollReveal';

const Contact = () => {
    const items = [
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="black" className="w-full h-full">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            ),
            label: "GitHub",
            href: "https://github.com/abhijeet586"
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="blue" className="w-full h-full">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
            ),
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/abhijeet-senapati-b6a27a2a7/"
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="orange" className="w-full h-full">
                    <path d="M24 4.5v15c0 .85-.65 1.5-1.5 1.5H21V7.387l-9 6.463-9-6.463V21H1.5C.649 21 0 20.35 0 19.5v-15c0-.425.162-.8.431-1.068C.7 3.16 1.076 3 1.5 3H2l10 7.25L22 3h.5c.425 0 .8.162 1.069.432.27.268.431.643.431 1.068z" />
                </svg>
            ),
            label: "Email",
            href: "mailto:senapatiabhijeet55@gmail.com"
        },
        {
            icon: (
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <linearGradient id="instagramGradient" x1="0%" y1="100%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#833ab4" stopOpacity="1" />
                            <stop offset="50%" stopColor="#fd1d1d" stopOpacity="1" />
                            <stop offset="100%" stopColor="#fcb045" stopOpacity="1" />
                        </linearGradient>
                    </defs>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#instagramGradient)" strokeWidth="2" />
                    <circle cx="12" cy="12" r="5" stroke="url(#instagramGradient)" strokeWidth="2" />
                    <circle cx="18" cy="6" r="1.5" fill="url(#instagramGradient)" />
                </svg>
            ),
            label: "Instagram",
            href: "https://www.instagram.com/senapatiabhijeet55"
        }
    ];

    return (
        <div className="min-h-[50vh] bg-transparent flex flex-col items-center justify-center p-10 pb-32">
            <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={-5}
                blurStrength={10}
                containerClassName="w-full flex flex-col items-center"
            >
                <h2 className="text-5xl font-bold text-black mb-12 border-b-4 border-[#454344] inline-block pb-2">
                    Get In Touch
                </h2>
                <p className="text-black-200 text-lg mb-8 max-w-xl text-center">
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>

                <Dock items={items} />
            </ScrollReveal>
        </div>
    );
};

export default Contact;
