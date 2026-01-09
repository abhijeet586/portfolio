import React from 'react';
import TiltedCard from './TiltedCard';
import ScrollReveal from './ScrollReveal';

const Projects = () => {
    return (
        <div className="min-h-screen bg-transparent flex items-center justify-center p-10">
            <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={-5}
                blurStrength={10}
                containerClassName="max-w-4xl w-full bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 shadow-2xl"
            >
                <h2 className="text-5xl font-bold text-black mb-12 border-b-4 border-[#454344] inline-block pb-2">
                    Projects
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">

                    <a
                        href="https://abhijeet586.github.io/ghost-writer"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                    >
                        <TiltedCard
                            imageSrc={`${import.meta.env.BASE_URL}project-1.jpg`}
                            altText="Ghost Writer Project"
                            captionText="Ghost Writer"
                            containerHeight="350px"
                            containerWidth="350px"
                            imageHeight="350px"
                            imageWidth="350px"
                            rotateAmplitude={12}
                            scaleOnHover={1.1}
                            showMobileWarning={false}
                            showTooltip={true}
                            displayOverlayContent={true}
                            overlayContent={
                                <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/80 to-transparent w-full text-black-300 rounded-b-[15px]">
                                    <h3 className="text-xl font-bold">Ghost Writer</h3>
                                    <p className="text-sm opacity-80">Interactive writing assistant</p>
                                </div>
                            }
                        />
                    </a>

                    {/* placeholder for more projects */}
                    <div className="flex items-center justify-center w-[350px] h-[350px] border-2 border-dashed border-gray-400/50 rounded-[15px] bg-white/5 text-gray-500">
                        <p>"EPOCH" Coming Soon</p>
                    </div>

                </div>
            </ScrollReveal>
        </div>
    );
};

export default Projects;
