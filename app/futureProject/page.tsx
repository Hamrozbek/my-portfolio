"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// img 
import TodoImg from "@/public/todo.png"

const FutureProjects = () => {
    const futureProjects = [
        {
            id: 1,
            title: "ToDo List",
            image: TodoImg
        },
    ];

    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setAnimate(true), 200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="py-16">
            <div className="containers">
                <h1 className="text-2xl md:text-3xl font-semibold text-sky-500 pb-6">
                    Future Projects:
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {futureProjects.map((project, index) => (
                        <Link
                            key={project.id}
                            href="/under-development"
                            className={`group relative rounded-lg overflow-hidden
                border border-sky-500/30 hover:border-sky-500
                hover:-translate-y-3 hover:shadow-xl
                transform transition-all duration-300`}
                            style={{
                                opacity: animate ? 1 : 0,
                                transform: animate ? "translateY(0)" : "translateY(40px)",
                                transition: `all 0.6s ease-out ${index * 0.2}s`,
                            }}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover opacity-70 group-hover:scale-105 transition-transform duration-300"
                                    loading="lazy"
                                />
                            </div>

                            {/* Dark overlay */}
                            <div className="absolute inset-0 bg-black/60"></div>

                            {/* Content */}
                            <div className="relative z-10 p-6 text-center h-[200px] flex flex-col justify-center">
                                <span className="inline-block mb-2 px-4 py-1 font-semibold rounded-full
                                    bg-sky-500 text-white text-sm sm:text-base w-max mx-auto">
                                    Planned
                                </span>


                                <h2 className="text-white text-lg sm:text-xl font-semibold mb-2">
                                    {project.title}
                                </h2>

                                <span className="block mt-4 text-sky-500 text-sm sm:text-base opacity-0
                                 group-hover:opacity-100 transition-opacity duration-300">
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
