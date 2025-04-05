"use client";
import Link from "next/link";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Mountain,
  ArrowRight,
} from "lucide-react";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import Logo from "./ui/Logo";

export default function Footer() {
  return (
    <footer className="bg-demim border-t border-border mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="space-y-4 lg:col-span-3">
            <Logo />
            <p className="text-muted-foreground text-sm max-w-xs">Hi.</p>
            <div className="flex space-x-4 pt-2">
              <Link
                href="https://github.com/vagos9821"
                className="text-muted-foreground hover:text-[#AEC157] transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/evangelos-sigalas/"
                className="text-muted-foreground hover:text-[#AEC157] transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Blog", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-[#AEC157] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} VagosBlog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
