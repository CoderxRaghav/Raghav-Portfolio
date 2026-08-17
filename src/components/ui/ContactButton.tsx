import Link from "next/link";
import { cn } from "@/lib/utils";

interface ContactButtonProps {
  className?: string;
  href?: string;
  label?: string;
}

export default function ContactButton({
  className,
  href = "mailto:tiwariraghav249@gmail.com",
  label = "Connect with Me",
}: ContactButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "relative overflow-hidden rounded-full font-medium uppercase tracking-widest text-white transition-transform hover:scale-105 active:scale-95 inline-flex items-center justify-center",
        "px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 text-xs sm:text-sm md:text-base",
        className
      )}
      style={{
        background: "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow: "0px 4px 4px rgba(181,1,167,0.25), 4px 4px 12px #7721B1 inset",
        outline: "2px solid rgba(255, 255, 255, 0.8)",
        outlineOffset: "-3px"
      }}
    >
      <span className="relative z-10">{label}</span>
    </Link>
  );
}
