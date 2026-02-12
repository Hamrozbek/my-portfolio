"use client";

import { useState } from "react";
import Link from "next/link";
import NavLinkPage from "./NavLinkPage";
import { FiMenu, FiX } from "react-icons/fi";

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/futureProject", label: "FutureProject" },
    { href: "/contact", label: "Contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => setIsOpen(false);

    return (
        <nav className="bg-[#0f1524] p-2 fixed w-full z-50 top-0 shadow-md">
            <div className="containers flex justify-between items-center">

                {/* Logo */}
                <Link href="/" className="text-3xl text-white font-bold">
                    N/H
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex gap-10">
                    {links.map((link) => (
                        <NavLinkPage key={link.href} href={link.href}>
                            {link.label}
                        </NavLinkPage>
                    ))}
                </div>

                {/* Hamburger */}
                <div
                    className="md:hidden text-white cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </div>
            </div>

            {/* Mobile Menu + Blur */}
            {isOpen && (
                <div className="fixed inset-0 z-40 flex">
                    {/* Blur background */}
                    <div
                        className="absolute inset-0"
                        onClick={() => setIsOpen(false)}
                    ></div>

                    {/* Slide-in menu */}
                    <div className="relative ml-auto w-50  bg-opacity-40 rounded-tl-2xl rounded-bl-2xl backdrop-blur-sm h-70 shadow-lg flex flex-col py-8 px-6 gap-6 transform transition-transform duration-500 ease-in-out">
                        {links.map((link) => (
                            <NavLinkPage
                                key={link.href}
                                href={link.href}
                                onClick={handleLinkClick}
                            >
                                {link.label}
                            </NavLinkPage>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
