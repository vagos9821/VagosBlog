"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import SVGComponent from "../svg/svglogo";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./ui/Logo";

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 inset-x-0 z-50 backdrop-grayscale">
      <nav className="max-w-6xl w-full py-4 px-4 sm:px-6 lg:px-8 mx-auto flex items-center justify-between">
        <Logo />

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative px-3 py-2 rounded-lg text-[#ededed] transition-colors 
                ${
                  pathname === href
                    ? "font-semibold text-[#AEC157] after:scale-x-100"
                    : "after:scale-x-0"
                }
                after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] 
                after:bg-[#AEC157] after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100`}
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile burger icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="text-[#ededed]" />
            ) : (
              <Menu className="text-[#ededed]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu dropdown */}
      <div
        className={`md:hidden px-4 transform transition-all duration-300 ease-in-out origin-top ${
          menuOpen
            ? "max-h-48 opacity-100 pointer-events-auto"
            : "max-h-0 opacity-0 pointer-events-none"
        } flex flex-col gap-2 overflow-hidden`}
      >
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            onClick={() => setMenuOpen(false)}
            className={`relative px-3 py-2 rounded-md text-[#ededed] transition-colors 
        ${
          pathname === href
            ? "font-semibold text-[#AEC157] after:scale-x-100"
            : "after:scale-x-0"
        }
        after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] 
        after:bg-[#AEC157] after:transition-transform after:duration-300 after:origin-left hover:after:scale-x-100`}
          >
            {label}
          </Link>
        ))}
      </div>
    </header>
  );
}
