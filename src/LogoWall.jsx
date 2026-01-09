import React, { useState } from "react";

const LogoWall = ({
    items = [],
    direction = "horizontal",
    pauseOnHover = false,
    duration = "30s",
}) => {
    const [isPaused, setIsPaused] = useState(false);

    return (
        <div
            className="flex flex-col gap-4 overflow-hidden select-none w-full relative"
            onMouseEnter={() => pauseOnHover && setIsPaused(true)}
            onMouseLeave={() => pauseOnHover && setIsPaused(false)}
            style={{
                "--duration": duration,
            }}
        >
            <div
                className={`flex flex-shrink-0 gap-16 min-w-full animate-scrollX ${isPaused ? "paused" : ""
                    }`}
            >
                {[...items, ...items].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-center flex-shrink-0">
                        <img
                            src={item.imgUrl}
                            alt={item.altText}
                            className="h-16 w-16 md:h-20 md:w-20 object-contain hover:scale-110 transition-transform duration-300"
                            title={item.altText}
                        />
                    </div>
                ))}
            </div>
            <style>{`
        @keyframes scrollX {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scrollX {
          animation: scrollX var(--duration) linear infinite;
        }
        .paused {
          animation-play-state: paused;
        }
      `}</style>
        </div>
    );
};

export default LogoWall;
