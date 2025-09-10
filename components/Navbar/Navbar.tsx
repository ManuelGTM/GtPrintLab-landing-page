"use client";

import { Button } from "../ui/button";
import Link from "next/link";
import ThemeToggle from "../theme-toggle";
import { Menu } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Navlink } from "./Navlink";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="font-bold text-2xl sm:text-xl text-primary">
            <Link href={"/"} className="flex items-center gap-2">
              <div className="p-4 bg-gray-200 rounded-xl"></div>
              GT Print Lab
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Navlink
              href="/services"
              text="Services"
              pathname={pathname}
              setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
            <Navlink
              href="/portfolio"
              text="Portfolio"
              pathname={pathname}
              setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
            <Navlink
              href="/contact"
              text="Contact"
              pathname={pathname}
              setIsMobileMenuOpen={setIsMobileMenuOpen}
            />

            <Navlink
              href="/about"
              text="About"
              pathname={pathname}
              setIsMobileMenuOpen={setIsMobileMenuOpen}
            />
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              className="w-9 h-9 rounded-full"
              onClick={toggleMobileMenu}
            >
              <Menu className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md animate-in slide-in-from-top-2 duration-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Navlink
                href="/services"
                text="Services"
                pathname={pathname}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              />
              <Navlink
                href="/portfolio"
                text="Portfolio"
                pathname={pathname}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              />
              <Navlink
                href="/contact"
                text="Contact"
                pathname={pathname}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              />

              <Navlink
                href="/about"
                text="About"
                pathname={pathname}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
