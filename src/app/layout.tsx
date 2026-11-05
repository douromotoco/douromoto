import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DOURO MOTO CO. | Motorcycle Gear & Accessories",
  description: "Custom engineered motorcycle crash guards, riding gear, auxiliary mounts, and rare apparel.",
  verification: {
    google: "83dhm97mJj--8-5JfT99CffuuKFRFhHVEZTKnJun6UM",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0a0a0a] text-[#f5f5f5] min-h-screen flex flex-col font-sans selection:bg-orange-600 selection:text-white">
        <header className="sticky top-0 z-50 bg-neutral-900/80 backdrop-blur-md border-b border-neutral-800 px-4 py-3">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <a href="/" className="font-extrabold text-lg tracking-wider text-white flex items-center gap-2">
              DOURO MOTO CO. <span className="text-orange-500 text-xs px-1.5 py-0.5 rounded bg-orange-500/10 border border-orange-500/30">DMC</span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a href="/" className="hover:text-orange-500 transition">Explore</a>
              <a href="/shop" className="hover:text-orange-500 transition text-amber-400 font-bold">SHOP</a>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="border-t border-neutral-800 py-8 text-center text-xs text-gray-500 mt-12 bg-neutral-950">
          © {new Date().getFullYear()} DOURO MOTO CO. • Contact: douromoto@gmail.com
        </footer>
      </body>
    </html>
  );
}
