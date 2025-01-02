"use client";
import Link from "next/link";
import "./globals.css";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { ClerkProvider } from "@clerk/nextjs";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) =>
    pathname === path ? "text-indigo-300" : "hover:text-indigo-200";

  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {/* Navbar */}
          <header className="fixed top-0 w-full bg-gradient-to-r from-purple-900 via-indigo-800 to-purple-900 text-white shadow-lg z-50">
            <div className="container mx-auto flex justify-between items-center px-6 py-3">
              {/* Logo */}
              <div className="text-2xl font-bold">
                <Link href="/" className={`hover:underline`}>
                  <img src="/logo.png" alt="logo" className="h-10" />
                </Link>
              </div>
              {/* Desktop Nav Links */}
              <nav className="hidden md:flex space-x-8 text-lg font-medium">
                <Link href="/" className={`transition ${isActive("/")}`}>
                  Home
                </Link>
                <Link href="/about" className={`transition ${isActive("/about")}`}>
                  About
                </Link>
                <Link
                  href="/services"
                  className={`transition ${isActive("/services")}`}
                >
                  Services
                </Link>
                <Link
                  href="/contact"
                  className={`transition ${isActive("/contact")}`}
                >
                  Contact
                </Link>
              </nav>
              {/* Mobile Toggle */}
              <button
                className="md:hidden focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M4 6h16M4 12h16m-7 6h7"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                </svg>
              </button>
              {/* Mobile Nav */}
              {isMenuOpen && (
                <nav className="absolute top-full left-0 w-full bg-gradient-to-r from-purple-700 via-indigo-800 to-purple-900 text-white shadow-md md:hidden">
                  <div className="flex flex-col items-center space-y-4 py-4">
                    <Link href="/" className={isActive("/")}>
                      Home
                    </Link>
                    <Link href="/about" className={isActive("/about")}>
                      About
                    </Link>
                    <Link href="/services" className={isActive("/services")}>
                      Services
                    </Link>
                    <Link href="/contact" className={isActive("/contact")}>
                      Contact
                    </Link>
                  </div>
                </nav>
              )}
            </div>
          </header>

          {/* Main Content */}
          <main className="mt-[64px] min-h-screen">{children}</main>

          {/* Footer */}
          <footer className="bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-800 text-gray-200 py-8">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* About Us */}
              <div>
                <h3 className="text-xl font-bold text-white">About Us</h3>
                <p className="mt-2 text-sm text-gray-300">
                  At AI-Solution, we create innovative AI-driven solutions for
                  tomorrow’s challenges.
                </p>
              </div>
              {/* Quick Links */}
              <div>
                <h3 className="text-xl font-bold text-white">Quick Links</h3>
                <ul className="mt-2 space-y-2">
                  <li>
                    <Link href="/privacy-policy" className="hover:text-indigo-300">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-of-service" className="hover:text-indigo-300">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-indigo-300">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              {/* Newsletter */}
              <div>
                <h3 className="text-xl font-bold text-white">Newsletter</h3>
                <form className="mt-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-2 rounded-md bg-gray-800 text-gray-300"
                  />
                  <button
                    type="submit"
                    className="mt-2 w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className="mt-6 text-center text-xs text-gray-400">
              © {new Date().getFullYear()} AI-Solution. All rights reserved.
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
