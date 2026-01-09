import React from 'react';
import ScrollReveal from './ScrollReveal';

const About = () => {
    return (
        <div className="min-h-screen bg-transparent flex items-center justify-center p-10">
            <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={5}
                blurStrength={10}
                containerClassName="max-w-4xl w-full bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 shadow-2xl"
            >
                <h2 className="text-5xl font-bold text-black mb-8 border-b-4 border-[#454344] inline-block pb-2">
                    About Me
                </h2>

                <div className="space-y-6 text-lg text-black-200">
                    <p>
                        I'm a Computer Science student at Vellore Institute of Technology, Vellore.
                        I love blending creativity with code to build applications that look great and perform even better.
                    </p>
                    <p>
                        My journey started with a curiosity for how things work on the internet, and it has evolved into a
                        full-blown career in full-stack development. I enjoy working with modern technologies.
                    </p>
                    <p>
                        When I'm not coding, you can find me gaming , singing or just exploring new tech.
                    </p>
                </div>
            </ScrollReveal>
        </div>
    );
};

export default About;
