import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavlinkProps {
  href: string;
  text: string;
  pathname: string;
  setIsMobileMenuOpen: (state: boolean) => void;
}

export function Navlink({
  href,
  text,
  pathname,
  setIsMobileMenuOpen,
}: NavlinkProps) {
  const isActive = (path: string) => pathname === path;

  return (
    <Link
      href={href}
      className={cn(
        "block transition-all sm:mb-3 md:mb-0 duration-200 text-base rounded-lg hover:underline",
        isActive(href)
          ? "text-primary font-semibold lg:underline"
          : "text-muted-foreground hover:text-foreground"
      )}
      onClick={() => setIsMobileMenuOpen(false)}
    >
      {text}
    </Link>
  );
}
