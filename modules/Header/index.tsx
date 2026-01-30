"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger icon

const Header = () => {
    const [active, setActive] = useState("Home");
    const [isOpen, setIsOpen] = useState(false);

    const linkClass = (link: string) =>
        `font-bold px-1 cursor-pointer border-b-2 border-transparent transition-colors duration-200 ${active === link ? "text-sky-500 border-sky-500" : "text-white hover:text-sky-400"
        }`;

    return (
        <header className="p-4 fixed w-full z-50  bg-[#0f1524]">
            <div className="containers flex justify-between items-center">

                {/* Logo */}
                <h1 className="text-2xl md:text-3xl font-bold text-sky-500">
                    N/H
                </h1>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-10">
                    <a href="#home" onClick={() => setActive("Home")} className={linkClass("Home")}>
                        Home
                    </a>
                    <a href="#about-me" onClick={() => setActive("About")} className={linkClass("About")}>
                        About Me
                    </a>
                    <a href="#projects" onClick={() => setActive("Projects")} className={linkClass("Projects")}>
                        Projects
                    </a>
                    <a href="#contact-me" onClick={() => setActive("Contact")} className={linkClass("Contact")}>
                        Contact Me
                    </a>
                </nav>

                {/* Mobile hamburger */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl focus:outline-none">
                        {isOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <nav className="flex flex-col items-center gap-6 mt-4 md:hidden bg-[#0f172a] p-4 rounded-lg shadow-lg">
                    <a href="#home" onClick={() => { setActive("Home"); setIsOpen(false); }} className={linkClass("Home")}>
                        Home
                    </a>
                    <a href="#about-me" onClick={() => { setActive("About"); setIsOpen(false); }} className={linkClass("About")}>
                        About Me
                    </a>
                    <a href="#projects" onClick={() => { setActive("Projects"); setIsOpen(false); }} className={linkClass("Projects")}>
                        Projects
                    </a>
                    <a href="#contact-me" onClick={() => { setActive("Contact"); setIsOpen(false); }} className={linkClass("Contact")}>
                        Contact Me
                    </a>
                </nav>
            )}
        </header>
    );
};

export default Header;
