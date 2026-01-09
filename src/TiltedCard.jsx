import React, { useRef, useState } from "react";

const TiltedCard = ({
    imageSrc,
    altText = "Tilted card image",
    captionText = "",
    containerHeight = "300px",
    containerWidth = "100%",
    imageHeight = "300px",
    imageWidth = "300px",
    scaleOnHover = 1.1,
    rotateAmplitude = 14,
    showMobileWarning = true,
    showTooltip = true,
    overlayContent = null,
    displayOverlayContent = false,
}) => {
    const ref = useRef(null);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [scale, setScale] = useState(1);

    const handleMouseMove = (e) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const rotationX = ((mouseY / height) - 0.5) * rotateAmplitude;
        const rotationY = ((mouseX / width) - 0.5) * rotateAmplitude;

        setRotateX(-rotationX); // Invert X to tilt correctly
        setRotateY(rotationY);
    };

    const handleMouseEnter = () => {
        setScale(scaleOnHover);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
        setScale(1);
    };

    return (
        <figure
            ref={ref}
            className="relative w-full h-full flex items-center justify-center perspective-1000"
            style={{
                height: containerHeight,
                width: containerWidth,
                perspective: "1000px",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onMouseEnter={handleMouseEnter}
        >
            <div
                className="relative transition-transform duration-100 ease-out will-change-transform"
                style={{
                    width: imageWidth,
                    height: imageHeight,
                    transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`,
                    transformStyle: "preserve-3d",
                }}
            >
                <img
                    src={imageSrc}
                    alt={altText}
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-[15px] shadow-2xl"
                />

                {displayOverlayContent && overlayContent && (
                    <div className="absolute top-0 left-0 w-full h-full z-10 p-5 transform translate-z-12">
                        {overlayContent}
                    </div>
                )}

                {showTooltip && (
                    <figcaption
                        className="absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 p-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg text-sm shadow-md pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                        style={{
                            transform: `translateZ(30px) translateX(-50%)`,
                            opacity: Math.abs(rotateX) + Math.abs(rotateY) > 2 ? 1 : 0
                        }}
                    >
                        {captionText}
                    </figcaption>
                )}
            </div>
        </figure>
    );
};

export default TiltedCard;
