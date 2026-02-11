import Link from "next/link";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
}

const NavLinkPage = ({ href, children }: NavLinkProps) => {
    return (
        <Link
            href={href}
            className="border-b-2 border-transparent hover:border-white transition duration-300 font-semibold px-1 text-white"
        >
            {children}
        </Link>
    );
};

export default NavLinkPage;
