import type { Metadata } from "next";
import "./globals.css"; // Ensure you have your Tailwind/global styles imported

export const metadata: Metadata = {
  title: "DOURO MOTO CO. | Motorcycle Gear & Accessories",
  description: "Custom engineered heavy-duty crash guards, riding gear, and accessories.",
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
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">
        {/* Optional Header / Navigation Bar */}
        <header className="border-b border-gray-200 py-4 px-6 flex justify-between items-center max-w-6xl mx-auto">
          <a href="/" className="font-bold text-xl tracking-wide">DOURO MOTO CO.</a>
          <nav className="space-x-6">
            <a href="/shop" className="hover:text-gray-600 font-medium">SHOP</a>
            <a href="/wishlist" className="hover:text-gray-600 font-medium">WISHLIST</a>
          </nav>
        </header>

        {/* Main Page Content */}
        {children}

        {/* Optional Footer */}
        <footer className="border-t border-gray-200 py-6 text-center text-sm text-gray-500 mt-12">
          © {new Date().getFullYear()} DOURO MOTO CO. All rights reserved. | Contact: douromoto@gmail.com
        </footer>
      </body>
    </html>
  );
}
