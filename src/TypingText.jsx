import React, { useState, useEffect } from 'react';

const TypingText = ({ text, speed = 150, className = '' }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                setDisplayedText((prev) => prev + text.charAt(i));
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);

        return () => clearInterval(timer);
    }, [text, speed]);

    return (
        <div className={`inline-block border-r-4 border-black animate-pulse ${className}`} style={{ animation: 'blink 1s step-end infinite' }}>
            {displayedText}
            <style>{`
        @keyframes blink {
          0%, 100% { border-color: transparent }
          50% { border-color: black }
        }
      `}</style>
        </div>
    );
};

export default TypingText;
