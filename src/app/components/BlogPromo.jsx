"use client";
import Link from "next/link";
import { ArrowRight, Pencil } from "lucide-react";

export default function BlogPromo() {
  return (
    <section className="relative py-12 mt-12 overflow-hidden w-full">
      <div className="absolute inset-0 bg-gradient-to-br from-[#AEC157]/15 to-[#AEC157]/5 dark:from-[#AEC157]/10 dark:to-[#1a1a1a]/80 z-0" />

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#AEC157]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#AEC157]/50 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="bg-whitedenim  p-3 rounded-full mb-2">
            <Pencil className="h-6 w-6 text-neutral-950" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Incessant yapping about frontend, tech, and life's nuances
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl">
            Dive into my blog for code snippets, design musings, and the
            occasional overcaffeinated rant about the digital world.
          </p>

          <Link
            href="/blog"
            className="group flex items-center gap-2 mt-4 px-6 py-3 skew-x-12 font-medium bg-whitedenim text-neutral-900 hover:bg-[#9BB347] 
            transition-all shadow-lg shadow-[#AEC157]/20 hover:shadow-[#AEC157]/30 hover:translate-y-[-2px]"
          >
            <span className="italic">Explore the Blog</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
