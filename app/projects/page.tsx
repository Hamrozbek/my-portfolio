"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// img
import project1 from "@/public/hero.webp";
import project2 from "@/public/metallix.png";
import project3 from "@/public/image.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "East Way",
      description:
        "A modern travel platform showcasing hotels and tours across four countries. Built with HTML, CSS, and React, focusing on clean UI, smooth navigation, and a user-friendly experience.",
      image: project1,
      link: "https://www.eastway-travel.com/",
      github: "https://github.com/Steelgrou/easyway-travel-hub",
    },
    {
      id: 2,
      title: "Metalix",
      description:
        "Metallix is a modern metal construction company based in Tashkent, Uzbekistan. We specialize in the manufacturing of metal structures, metal grilles, and custom-designed solutions for industrial and commercial projects.",
      image: project2,
      link: "https://metalix-rho.vercel.app/ru",
      github: "https://github.com/Steelgrou/metalix",
    },
    {
      id: 3,
      title: "Agent",
      description:
        "This project is a modern and responsive CoinBase Sign In page UI designed with a clean and minimal style. The interface provides users with a simple and smooth login experience using email and password fields.",
      image: project3,
      link: "https://agent-ten-amber.vercel.app/",
      github: "https://github.com/Hamrozbek/Agent",
    },
  ];

  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Biroz kechiktirib animatsiya boshlash
    const timer = setTimeout(() => setAnimate(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="pt-16 pb-26 md:pb-16">
      <div className="containers">
        <h1 className="text-2xl md:text-3xl font-semibold text-sky-500 pb-6">
          Projects:
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-[#1e293b] rounded-lg overflow-hidden shadow-md
              hover:shadow-xl hover:-translate-y-4 transform transition-all duration-200`}
              style={{
                opacity: animate ? 1 : 0,
                transform: animate ? "translateY(0)" : "translateY(40px)",
                transition: `all 0.8s ease-out ${index * 0.2}s`,
              }}
            >
              <div className="relative w-full h-56 sm:h-48 md:h-48 cursor-pointer overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h2 className="text-sky-500 font-bold text-lg sm:text-xl md:text-[20px]">
                  {project.title}
                </h2>

                <p className="text-gray-300 text-sm sm:text-base md:text-[14px] line-clamp-none">
                  {project.description}
                </p>


                <div className="flex flex-col sm:flex-row justify-center sm:justify-between gap-3 pt-5">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-1 border-2 border-sky-500 rounded-md font-semibold text-white
                      transition-colors duration-300 hover:bg-sky-500 text-center"
                  >
                    View Live
                  </Link>

                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-1 border-2 border-sky-500 rounded-md font-semibold text-white
                      transition-colors duration-300 hover:bg-sky-500 text-center"
                  >
                    Github Repo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center pt-4 md:pt-8">
          <Link
            href="https://github.com/Hamrozbek"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-2 border-2 border-sky-500 rounded-md font-semibold text-white
               transition-all duration-300 hover:bg-sky-500 hover:scale-105 text-center"
          >
            See More Projects on GitHub
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
