import Link from "next/link";

export default function UnderDevelopment() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center
                    bg-[#0f1524] text-center px-4">
            <h1 className="text-7xl font-bold text-sky-500 mb-4">404</h1>

            <p className="text-white text-xl mb-2">
                This project is under development 🚧
            </p>

            <p className="text-gray-400 mb-8">
                We’re working on something awesome. Stay tuned!
            </p>

            <Link
                href="/"
                className="px-6 py-2 border-2 border-sky-500 rounded-md
                   text-white font-semibold hover:bg-sky-500
                   transition-colors"
            >
                Back to Home
            </Link>
        </div>
    );
}
