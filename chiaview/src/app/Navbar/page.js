"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1e3a5f] shadow-lg shadow-black/30 z-50">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          {/* Mobile menu button - Left */}
          <div className="flex items-center md:hidden">
            <button
              className="text-white text-2xl p-2 hover:text-blue-300 transition"
              onClick={toggleMenu}
            >
              ☰
            </button>
          </div>

          {/* Centered Navigation Links */}
          <div className="hidden md:flex flex-1 justify-center px-12">
            <div className="flex space-x-8">
              {[
                { href: "/", label: "Home" },
                { href: "../About", label: "About Us" },
                { href: "/ministries", label: "Ministries" },
                { href: "/sermons", label: "Sermons" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-medium text-lg py-1 border-b-2 transition-all duration-200 hover:scale-105 ${
                    pathname === link.href
                      ? "text-white border-white"
                      : "text-white border-transparent hover:text-blue-300 hover:border-blue-300"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Logo - Right */}
          <div className="flex items-center flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Logo"
              width={60}
              height={60}
              className="drop-shadow-lg hover:scale-105 transition-transform duration-200"
            />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1e3a5f] py-4">
          <div className="flex flex-col space-y-4 px-6">
            {[
              { href: "/", label: "Home" },
              { href: "/About", label: "About Us" },
              { href: "/ministries", label: "Ministries" },
              { href: "/sermons", label: "Sermons" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium text-lg py-1 border-b-2 transition-all duration-200 hover:scale-105 ${
                  pathname === link.href
                    ? "text-white border-white"
                    : "text-white border-transparent hover:text-blue-300 hover:border-blue-300"
                }`}
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}