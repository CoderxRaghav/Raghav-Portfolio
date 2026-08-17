import Link from "next/link";
import { cn } from "@/lib/utils";

interface LiveProjectButtonProps {
  href: string;
  className?: string;
  label?: string;
}

export default function LiveProjectButton({
  href,
  className,
  label = "Live Project",
}: LiveProjectButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest transition-colors hover:bg-[#D7E2EA]/10 active:scale-95",
        "px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base",
        className
      )}
    >
      {label}
    </Link>
  );
}
