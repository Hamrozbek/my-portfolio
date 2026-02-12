"use client";

import { useEffect, useState } from "react";

const AboutMe = () => {
    const skills = [
        { name: "HTML", level: 95, label: "Advanced" },
        { name: "CSS", level: 90, label: "Advanced" },
        { name: "JavaScript", level: 85, label: "Advanced" },
        { name: "TypeScript", level: 75, label: "Intermediate" },
        { name: "React", level: 80, label: "Advanced" },
        { name: "Next.js", level: 75, label: "Intermediate" },
        { name: "Tailwind CSS", level: 90, label: "Advanced" },
        { name: "Git", level: 70, label: "Intermediate" },
        { name: "Responsive Design", level: 90, label: "Advanced" },
    ];

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true);
    }, []);

    return (
        <section className="pt-16 pb-28 md:pb-12 min-h-screen">
            <div className="containers">

                {/* About Me */}
                <div className="pb-5 md:pb-10">
                    <h1 className="text-2xl md:text-3xl font-semibold text-sky-500 pb-2 md:pb-4">
                        About Me:
                    </h1>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                        I am a passionate Frontend Developer who transforms complex ideas into sleek,
                        interactive web experiences. With expertise in React, Next.js, and modern JavaScript,
                        I craft responsive and visually stunning interfaces that engage users. I thrive on solving
                        challenges, continuously learning new technologies, and delivering high-quality code
                        with precision and creativity. Every project I build reflects my commitment to
                        performance, accessibility, and aesthetic excellence.
                    </p>
                </div>

                {/* Skills */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-semibold text-sky-500 pb-3 md:pb-6">
                        Technologies:
                    </h2>

                    <div className="space-y-3 md:space-y-5">
                        {skills.map((skill) => (
                            <div key={skill.name} className="w-full">

                                {/* Top row */}
                                <div className="flex justify-between mb-1">
                                    <span className="text-gray-200 font-medium">{skill.name}</span>
                                    <span className="text-gray-400 text-sm">{skill.label}</span>
                                </div>

                                {/* Progress bar */}
                                <div className="w-full h-3 bg-[#1e3a5f] rounded-full overflow-hidden">
                                    <div
                                        className={`h-full rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400 transition-all duration-1000`}
                                        style={{ width: animate ? `${skill.level}%` : "0%" }}
                                    />
                                </div>

                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutMe;
