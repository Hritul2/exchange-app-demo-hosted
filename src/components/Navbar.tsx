"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CircleDot as Radio, Menu, X } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-transparent p-4 backdrop-blur-2xl">
      <div className="flex items-center justify-center gap-10">
        <div className="flex items-center space-x-8">
          <Link
            href="/"
            className="flex items-center justify-between gap-4 text-xl font-semibold text-primary hover:text-primary/80"
          >
            <Radio height={30} width={30} />
            Exchange
          </Link>
        </div>
        <div className="hidden items-center justify-center space-x-8 md:flex">
          <Link
            href="/markets"
            className={`text-sm ${
              pathname.startsWith("/markets")
                ? "text-primary"
                : "text-muted-foreground"
            } hover:text-primary/80`}
          >
            Markets
          </Link>
          <Link
            href="/trade/SOL_USDC"
            className={`text-sm ${
              pathname.startsWith("/trade")
                ? "text-primary"
                : "text-muted-foreground"
            } hover:text-primary/80`}
          >
            Trade
          </Link>
        </div>
      </div>
      <div className="hidden items-center space-x-2 md:flex">
        <Button variant="secondary" className="blur-[1.5px]">
          Sign up
        </Button>
        <Button variant="destructive" className="blur-[1.5px]">
          Sign in
        </Button>
      </div>
      <div className="flex items-center md:hidden">
        <button
          className="p-2 text-primary hover:text-primary/80"
          onClick={toggleMenu}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {menuOpen && (
        <div className="absolute left-0 right-0 top-16 bg-white p-4 shadow-md md:hidden">
          <nav className="flex flex-col items-center space-y-4">
            <Link
              href="/markets"
              className={`text-sm ${
                pathname.startsWith("/markets")
                  ? "text-primary"
                  : "text-muted-foreground"
              } hover:text-primary/80`}
              onClick={() => setMenuOpen(false)}
            >
              Markets
            </Link>
            <Link
              href="/trade/SOL_USDC"
              className={`text-sm ${
                pathname.startsWith("/trade")
                  ? "text-primary"
                  : "text-muted-foreground"
              } hover:text-primary/80`}
              onClick={() => setMenuOpen(false)}
            >
              Trade
            </Link>
            <Button variant="secondary" className="w-full blur-[1.5px]">
              Sign up
            </Button>
            <Button variant="destructive" className="w-full blur-[1.5px]">
              Sign in
            </Button>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
