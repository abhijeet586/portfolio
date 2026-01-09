import React from 'react';
import LogoWall from './LogoWall';
import ScrollReveal from './ScrollReveal';

const Skills = () => {
    const skills = [
        { imgUrl: `${import.meta.env.BASE_URL}javascript.svg`, altText: "JavaScript" },
        { imgUrl: `${import.meta.env.BASE_URL}react.svg`, altText: "React" },
        { imgUrl: `${import.meta.env.BASE_URL}tailwind.svg`, altText: "Tailwind CSS" },
        { imgUrl: `${import.meta.env.BASE_URL}nodejs.svg`, altText: "Node.js" },
        { imgUrl: "https://cdn.simpleicons.org/express/000000", altText: "Express.js" },
        { imgUrl: "https://cdn.simpleicons.org/postgresql/4169E1", altText: "PostgreSQL" },
        { imgUrl: `${import.meta.env.BASE_URL}cpp.svg`, altText: "C++" },
        { imgUrl: `${import.meta.env.BASE_URL}python.svg`, altText: "Python" },
        { imgUrl: `${import.meta.env.BASE_URL}java.svg`, altText: "Java" },
        { imgUrl: `${import.meta.env.BASE_URL}github.svg`, altText: "GitHub" },
        { imgUrl: `${import.meta.env.BASE_URL}html.svg`, altText: "HTML5" },
        { imgUrl: `${import.meta.env.BASE_URL}css.svg`, altText: "CSS" },
    ];

    return (
        <div className="min-h-[50vh] bg-transparent flex items-center justify-center p-10">
            <ScrollReveal
                baseOpacity={0}
                enableBlur={true}
                baseRotation={5}
                blurStrength={10}
                containerClassName="max-w-4xl w-full bg-white/10 backdrop-blur-md rounded-3xl p-10 border border-white/20 shadow-2xl"
            >
                <h2 className="text-5xl font-bold text-black mb-12 border-b-4 border-[#454344] inline-block pb-2">
                    Skills
                </h2>

                <div className="w-full h-[100px] flex items-center justify-center">
                    <LogoWall
                        items={skills}
                        direction="horizontal"
                        pauseOnHover={true}
                        duration="20s"
                    />
                </div>
            </ScrollReveal>
        </div>
    );
};

export default Skills;
