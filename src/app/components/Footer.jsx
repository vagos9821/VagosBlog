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

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Mountain className="h-8 w-8 text-[#AEC157]" />
              <span className="text-xl font-bold">YourBrand</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Crafting digital experiences with code, design, and the occasional
              spark of inspiration.
            </p>
            <div className="flex space-x-4 pt-2">
              <Link
                href="https://github.com"
                className="text-muted-foreground hover:text-[#AEC157] transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-muted-foreground hover:text-[#AEC157] transition-colors"
              >
                <span className="sr-only">Twitter</span>
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-muted-foreground hover:text-[#AEC157] transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:hello@example.com"
                className="text-muted-foreground hover:text-[#AEC157] transition-colors"
              >
                <span className="sr-only">Email</span>
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "About", "Blog", "Projects", "Contact"].map((item) => (
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

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              {["Tutorials", "Documentation", "Resources", "Tools", "FAQ"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="text-muted-foreground hover:text-[#AEC157] transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe to get notified about new articles and updates.
            </p>
            <form className="space-y-2" onSubmit={(e) => e.preventDefault()}>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="bg-background border-border"
                />
                <Button
                  type="submit"
                  variant="default"
                  size="default"
                  className="rounded-md"
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} YourBrand. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link
              href="/privacy"
              className="hover:text-[#AEC157] transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#AEC157] transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/sitemap"
              className="hover:text-[#AEC157] transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
