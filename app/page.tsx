"use client";

import { FiFolder, FiPhone } from "react-icons/fi";
import Image from "next/image";
import dev from "@/public/hero.png";
import Link from "next/link";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section className="pt-20 pb-10 md:pb-12">
      <div className="containers flex flex-col-reverse md:flex-row items-center md:justify-between gap-8 md:gap-10">

        {/* Text block */}
        <div
          className={`flex-1 text-center md:text-left transition-all duration-1000 ${animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">Hello, I'm</h2>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Nuriddinov Hamrozbek</h1>
          <p className="text-gray-300 text-sm md:text-base max-w-md md:max-w-xl mb-6">
            I’m a Frontend Developer. I create interactive and user-friendly web applications, turning designs into clean and high-quality code. I work with React and modern JavaScript frameworks. My goal is to build beautiful applications and provide convenience to users.
          </p>

          <div className="flex justify-center md:justify-start gap-3 sm:gap-5">
            <Link href="/contact">
              <button className="px-4 py-2 cursor-pointer border-2 hover:bg-sky-500 duration-300 border-sky-500 font-semibold rounded-md flex items-center justify-center gap-2 text-sm sm:text-base">
                Contact Me <FiPhone />
              </button>
            </Link>

            <Link href="/projects">
              <button className="px-4 py-2 cursor-pointer border-2 hover:bg-sky-500 duration-300 border-sky-500 font-semibold rounded-md flex items-center justify-center gap-2 text-sm sm:text-base">
                Projects <FiFolder />
              </button>
            </Link>
          </div>
        </div>

        {/* Image block */}
        <div
          className={`flex-1 flex justify-center md:justify-end mb-6 md:mb-0 transition-all duration-1000 ${animate ? "opacity-100 translate-x-0 scale-100" : "opacity-0 translate-x-10 scale-90"
            }`}
        >
          <Image
            src={dev}
            alt="HomePage Image"
            width={500}
            height={700}
            className="w-72 sm:w-96 md:w-full h-auto rounded-lg"
            loading="lazy"
          />
        </div>

      </div>
    </section>
  );
};

export default HomePage;