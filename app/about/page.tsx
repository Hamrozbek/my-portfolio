"use client";


const AboutMe = () => {
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Git",
        "Responsive Design",
    ];

    return (
        <>
            <section className="py-14">
                <div className="containers">
                    {/* About Me */}
                    <div>
                        <h1 className="text-2xl md:text-3xl font-semibold text-sky-500 mb-4">
                            About Me:
                        </h1>
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl">
                            I’m a Frontend Developer, creating interactive and user-friendly web applications. I turn designs into clean and high-quality code using React and modern JavaScript frameworks. I constantly learn new technologies to improve my skills and bring creativity and attention to detail to every project.
                        </p>
                    </div>

                    {/* Skills */}
                    <div className="pt-5">
                        <h2 className="text-2xl md:text-3xl font-semibold text-sky-500 pb-4">
                            Skills:
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                            {skills.map((skill) => (
                                <div
                                    key={skill}
                                    className="bg-[#1e293b] text-sky-400 py-2 px-4 rounded-full text-sm font-semibold shadow hover:bg-sky-500 hover:text-white hover:-translate-y-1 transition-all duration-300"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default AboutMe;
