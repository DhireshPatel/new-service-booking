"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingCart, Zap } from "lucide-react";
import { useCart } from "@/context/CartContext";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { cartCount } = useCart();

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-900/5 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 focus-ring rounded-md"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ink-900">
            <Zap className="h-5 w-5 text-volt-400" strokeWidth={2.5} />
          </span>
          <span className="font-display text-lg font-bold tracking-tight text-ink-900">
            Spark<span className="text-volt-500">Pro</span>
          </span>
        </Link>

        {/* Desktop links */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`focus-ring relative rounded-md px-4 py-2 text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "text-ink-900"
                  : "text-ink-500 hover:text-ink-900"
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-volt-500" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right side: cart + mobile toggle */}
        <div className="flex items-center gap-2">
          <Link
            href="/cart"
            className="focus-ring group relative flex items-center gap-2 rounded-full border border-ink-900/10 bg-white px-3 py-2 text-sm font-medium text-ink-900 transition-all hover:border-volt-400 hover:shadow-glow"
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-volt-500 text-[11px] font-bold text-ink-900 shadow-card">
                {cartCount}
              </span>
            )}
          </Link>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((prev) => !prev)}
            className="focus-ring rounded-md p-2 text-ink-900 md:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-ink-900/5 bg-white px-4 pb-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block rounded-md px-3 py-3 text-sm font-medium ${
                isActive(link.href)
                  ? "bg-volt-50 text-ink-900"
                  : "text-ink-500 hover:bg-ink-900/5 hover:text-ink-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/cart"
            onClick={() => setOpen(false)}
            className="block rounded-md px-3 py-3 text-sm font-medium text-ink-500 hover:bg-ink-900/5 hover:text-ink-900"
          >
            Cart {cartCount > 0 ? `(${cartCount})` : ""}
          </Link>
        </nav>
      )}
    </header>
  );
}
