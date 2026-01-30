"use client";

import me from "@/public/dev.webp";
import Image from "next/image";
import { useState } from "react";
import { FiFolder, FiPhone } from "react-icons/fi";

const Hero = () => {
    const [activeButton, setActiveButton] = useState<number | null>(null);

    return (
        <section id="home" className="pt-40">
            <div className="containers flex flex-col-reverse md:flex-row items-center md:justify-between gap-10">

                {/* Text block */}
                <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-2">
                        Hello, I'm
                    </h2>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Nuriddinov Hamrozbek
                    </h1>
                    <p className="text-gray-300 text-base md:text-lg max-w-xl mb-6">
                        I’m a Frontend Developer. I create interactive and user-friendly web applications, turning designs into clean and high-quality code. I work with React and modern JavaScript frameworks. My goal is to build beautiful applications and provide convenience to users.
                    </p>

                    {/* Buttons */}
                    <div className="flex gap-5">
                        <button
                            onClick={() => setActiveButton(1)}
                            className={`px-5 py-1 border-2 border-sky-500 cursor-pointer rounded-md flex items-center gap-2 font-semibold transition-colors duration-300 focus:outline-none ${activeButton === 1
                                ? "bg-sky-500 text-white"
                                : "bg-transparent text-white hover:bg-sky-500"
                                }`}
                        >
                            Contact Me
                            <FiPhone className="w-5 h-5" />
                        </button>

                        <button
                            onClick={() => setActiveButton(2)}
                            className={`px-5 py-1 border-2 border-sky-500 cursor-pointer rounded-md flex items-center gap-2 font-semibold transition-colors duration-300 focus:outline-none ${activeButton === 2
                                ? "bg-sky-500 text-white"
                                : "bg-transparent text-white hover:bg-sky-500"
                                }`}
                        >
                            Projects
                            <FiFolder className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Image block */}
                <div className="flex-1 flex justify-center md:justify-end">
                    <Image
                        src={me}
                        alt="Hero Image"
                        width={500}
                        height={700}
                        className="w-full h-auto rounded-lg"
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;
