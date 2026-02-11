import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css"; // Tailwind CSS import

export const metadata = {
  title: "My Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0f1524] text-white">
        <div className="flex flex-col min-h-screen">

          {/* Navbar qotib turadi */}
          <header className="sticky top-0 z-50">
            <Navbar />
          </header>

          {/* Main content */}
          <main className="flex-1">
            {children}
          </main>

          {/* Footer pastga yopishadi */}
          <footer className="mt-auto">
            <Footer />
          </footer>

        </div>
      </body>
    </html>
  );
}
