import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata = {
  title: "My Portfolio",
  description: "Frontend Developer Portfolio",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#0f1524] text-white">
        <div className="flex flex-col min-h-screen">

          {/* Navbar sticky */}
          <header className="sticky top-0 z-50">
            <Navbar />
          </header>

          <main className="flex-1 pb-20">
            {children}
          </main>

          {/* Footer sticky bottom */}
          <footer className="fixed bottom-0 left-0 w-full z-50">
            <Footer />
          </footer>

        </div>
      </body>
    </html>
  );
}
