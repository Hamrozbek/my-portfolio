"use client";

import Link from "next/link";

const FutureProjects = () => {
    const futureProjects = [
        { id: 1, title: "Online Education Platform" },
        { id: 2, title: "AI Dashboard App" },
        { id: 3, title: "Finance Management System" },
    ];

    return (
        <section>
            <div className="containers">
                <h1 className="text-2xl md:text-3xl pt-10 font-semibold text-sky-500">
                    Future Projects:
                </h1>

                <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {futureProjects.map((project) => (
                        <Link
                            key={project.id}
                            href="/under-development"
                            className="group bg-[#1e293b] rounded-lg p-6 text-center
                         border border-sky-500/30 hover:border-sky-500
                         transition-all duration-300"
                        >
                            <h2 className="text-white text-lg font-semibold mb-3">
                                {project.title}
                            </h2>

                            <p className="text-gray-400 text-sm">
                                Planned Project
                            </p>

                            <span className="block mt-4 text-sky-500 text-sm opacity-0
                               group-hover:opacity-100 transition-opacity">
                                View details →
                            </span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FutureProjects;
