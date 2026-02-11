"use client";

import { FiFolder, FiPhone } from "react-icons/fi";
// img 
import Image from "next/image";
import dev from "@/public/hero.png"
import Link from "next/link";

const HomePage = () => {

  return (
    <section className="pt-20">
      <div className="containers flex flex-col-reverse md:flex-row items-center md:justify-between gap-10">

        {/* Text block */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-semibold mb-2">Hello, I'm</h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuriddinov Hamrozbek</h1>
          <p className="text-gray-300 text-base md:text-lg max-w-xl mb-6">
            I’m a Frontend Developer. I create interactive and user-friendly web applications, turning designs into clean and high-quality code. I work with React and modern JavaScript frameworks. My goal is to build beautiful applications and provide convenience to users.
          </p>

          <div className="flex gap-5">
            <Link href="/contact">
              <button className="px-5 py-1 cursor-pointer border-2 hover:bg-sky-500 duration-300 border-sky-500 font-semibold rounded-md flex items-center gap-2">
                Contact Me <FiPhone />
              </button>
            </Link>

            <Link href="/projects">
              <button className="px-5 py-1 cursor-pointer border-2 hover:bg-sky-500 duration-300 border-sky-500 font-semibold rounded-md flex items-center gap-2">
                Projects <FiFolder />
              </button>
            </Link>
          </div>
        </div>

        {/* Image block */}
        <div className="flex-1 flex justify-center md:justify-end">
          <Image
            src={dev}
            alt="HomePage Image"
            width={500}
            height={700}
            className="w-full h-auto rounded-lg"
          />
        </div>

      </div>
    </section>
  );
};

export default HomePage;
