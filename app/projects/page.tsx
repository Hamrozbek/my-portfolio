"use client";

import Image from "next/image";
import Link from "next/link";
// img 
import project1 from "@/public/hero.webp";
import project2 from "@/public/metallix.png"

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
      description: "Metallix is a modern metal construction company based in Tashkent, Uzbekistan. We specialize in the manufacturing of metal structures, metal grilles, and custom-designed solutions for industrial and commercial projects.",
      image: project2,
      link: "https://metalix-rho.vercel.app/ru",
      github: "https://github.com/Steelgrou/metalix"
    }
  ];

  return (
    <>
      <section className="py-10">
        <div className="containers">
          {/* Section Title */}
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold text-sky-500 pb-4">
              Projects:
            </h1>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group bg-[#1e293b] rounded-lg overflow-hidden shadow-md
               hover:shadow-xl hover:-translate-y-2
               transition-all duration-300"
              >
                {/* Image */}
                <div className="relative w-full h-48 cursor-pointer overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-4">
                  <h2 className="text-sky-500 font-bold text-[20px]">
                    {project.title}
                  </h2>
                  <p className="text-gray-300 text-sm line-clamp-3">{project.description}</p>

                  {/* Buttons */}
                  <div className="flex justify-between gap-3 pt-5">
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-1 border-2 border-sky-500 rounded-md font-semibold text-white
                                         transition-colors duration-300 hover:bg-sky-500"
                    >
                      View Live
                    </Link>

                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-1 border-2 border-sky-500 rounded-md font-semibold text-white
                                        transition-colors duration-300 hover:bg-sky-500"
                    >
                      Github Repo
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
