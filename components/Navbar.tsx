import Link from "next/link"
import NavLinkPage from "./NavLinkPage";

const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/futureProject", label: "FutureProject" },
    { href: "/contact", label: "Contact" },
];

const Navbar = () => {
    return (
        <>
            <div className="bg-[#0f1524] p-3">
                <div className="containers flex justify-between items-center">
                    <Link href="/" className="text-3xl text-white font-bold">N/H</Link >
                    <div className="flex gap-10">
                        {links.map((link) => (
                            <NavLinkPage key={link.href} href={link.href}>
                                {link.label}
                            </NavLinkPage>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
