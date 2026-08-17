"use client";

import Link from "next/link";
import { profile } from "@/data/profile";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-8 border-t border-accent/10 bg-cream/30">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Left Side: Copyright */}
        <p className="text-xs font-semibold tracking-wider text-muted/80 uppercase font-sans">
          &copy; {currentYear} {profile.name}. All Rights Reserved.
        </p>

        {/* Right Side: Social & Github Links */}
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${profile.email}`}
            className="text-xs font-semibold tracking-wider text-muted hover:text-accent uppercase transition-colors"
          >
            Email
          </a>
          <a
            href="https://github.com/CoderxRaghav"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold tracking-wider text-muted hover:text-accent uppercase transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/raghav-tiwari-4a4b7c/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold tracking-wider text-muted hover:text-accent uppercase transition-colors"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
