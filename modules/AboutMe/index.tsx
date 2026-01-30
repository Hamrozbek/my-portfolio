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
        <section id="about-me" >
            <div className="bg-[#0f1524] py-10">
            </div>
            <div className="containers">

                {/* About Me */}
                <div className="my-10">
                    <h1 className="text-2xl md:text-3xl font-semibold text-sky-500 mb-4">
                        About Me:
                    </h1>
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed max-w-3xl">
                        I’m a Frontend Developer, creating interactive and user-friendly web applications. I turn designs into clean and high-quality code using React and modern JavaScript frameworks. I constantly learn new technologies to improve my skills and bring creativity and attention to detail to every project.
                    </p>
                </div>

                {/* Skills */}
                <div className="pb-10">
                    <h2 className="text-2xl md:text-3xl font-semibold text-sky-500 mb-6">
                        Skills:
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {skills.map((skill) => (
                            <div
                                key={skill}
                                className="bg-[#1e293b] text-white py-2 px-4 rounded-lg flex justify-center items-center font-semibold shadow-md hover:bg-sky-500 hover:scale-105 transition-transform duration-300"
                            >
                                {skill}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutMe;
