import Link from "next/link";

interface NavLinkProps {
    href: string;
    children: React.ReactNode;
    onClick?: () => void; // <- shu yer qo‘shildi
}

const NavLinkPage = ({ href, children, onClick }: NavLinkProps) => {
    return (
        <Link
            href={href}
            className="border-b-2 border-transparent hover:border-white transition duration-300 font-semibold px-1 text-white"
            onClick={onClick} // endi TypeScript xatosi yo‘q
        >
            {children}
        </Link>
    );
};

export default NavLinkPage;
