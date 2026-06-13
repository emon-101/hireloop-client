"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { authClient } from "@/lib/auth-client";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const {data: session} = authClient.useSession();
  console.log(session?.user);

  const navLinks = [
    {
      name: "Browse Jobs",
      href: "/jobs",
    },
    {
      name: "Company",
      href: "/companies",
    },
    {
      name: "Pricing",
      href: "/pricing",
    },
  ];

  return (
    <header className="fixed top-5 left-0 right-0 z-50 px-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-divider bg-background/70 px-6 py-4 backdrop-blur-xl">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <h1 className="text-3xl md:text-4xl font-black tracking-tight">
            <span className="text-primary">hire</span>
            <span className="text-warning">loop</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-10 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-foreground/70 transition hover:text-foreground"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center lg:flex">
          <ThemeToggle />

          {/* Divider */}
          <div className="mx-5 h-6 w-px bg-divider" />

          <Link
            href="/login"
            className="font-medium text-primary transition-colors hover:opacity-80">
            Sign In
          </Link>

          <Button
            radius="lg"
            className="ml-5 bg-linear-to-r from-violet-600 to-indigo-500px-6 text-white">
            Get Started
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex items-center justify-center text-foreground hover:text-primary transition-colors hover:cursor-pointer"
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="mx-auto mt-3 max-w-7xl rounded-2xl border border-divider bg-content1/95 p-6 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-5">
            <div className="pt-2">
              <ThemeToggle />
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-foreground/70 hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}

            <Link href="/login" className="font-medium text-violet-500">
              Sign In
            </Link>

            <Button className="bg-linear-to-r from-violet-600 to-indigo-500 text-white">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
