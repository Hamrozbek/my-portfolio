"use client";

import Link from "next/link";
import Image from "next/image";

// img 
import logenImg from "@/public/login.jpg"

const FutureProjects = () => {
    const futureProjects = [
        {
            id: 1,
            title: "Logen & Regaster",
            image: logenImg
        },
    ];

    return (
        <section className="py-10">
            <div className="containers">
                <h1 className="text-2xl md:text-3xl font-semibold text-sky-500 pb-4">
                    Future Projects:
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {futureProjects.map((project) => (
                        <Link
                            key={project.id}
                            href="/under-development"
                            className="group relative rounded-lg overflow-hidden
                                       border border-sky-500/30 hover:border-sky-500
                                       hover:-translate-y-2 hover:shadow-xl
                                       transition-all duration-300"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-black/60"></div>

                            {/* Content */}
                            <div className="relative z-10 p-6 text-center h-[200px]">
                                <span className="inline-block mb-2 px-3 py-1 font-semibold rounded-full
                                                 bg-sky-500/10 text-sky-500">
                                    Planned
                                </span>

                                <h2 className="text-white text-lg font-semibold mb-3">
                                    {project.title}
                                </h2>

                                <span className="block mt-4 text-sky-500 text-sm opacity-0
                                                 group-hover:opacity-100 transition-opacity">
                                    View details →
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FutureProjects;
