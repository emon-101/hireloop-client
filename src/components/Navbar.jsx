"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@heroui/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { authClient } from "@/lib/auth-client";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const { data: session } = authClient.useSession();

  const user = session?.user;
  // console.log(user);

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

  const handleLogout = async () => {
    try {
      await authClient.signOut();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header className="fixed top-5 left-0 right-0 z-50 px-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-divider bg-background/70 px-6 py-4 backdrop-blur-xl">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <h1 className="text-3xl font-black tracking-tight md:text-4xl">
            <span className="text-primary">hire</span>
            <span className="text-warning">loop</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
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

          <div className="mx-5 h-6 w-px bg-divider" />

          {user ? (
            <div className="flex items-center gap-4">
              {/* User Info */}
              <div className="flex items-center gap-3">
                <Image
                  src={user.image || "/default-avatar.png"}
                  alt={user.name || "User"}
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full border border-divider object-cover"
                />

                <span className="max-w-35 truncate font-medium">
                  {user.name}
                </span>
              </div>

              <Button
                color="danger"
                variant="bordered"
                radius="lg"
                onPress={handleLogout}
                className="bg-linear-to-r from-violet-600 to-indigo-500 text-white"
              >
                Sign Out
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link
                href="/auth/signin"
                className="font-medium text-primary transition hover:opacity-80"
              >
                Sign In
              </Link>

              <Link href="/auth/signup">
                <Button
                  radius="lg"
                  className="bg-linear-to-r from-violet-600 to-indigo-500 text-white"
                >
                  Sign Up
                </Button>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center justify-center text-foreground transition-colors hover:cursor-pointer hover:text-primary lg:hidden"
          aria-label="Toggle Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="mx-auto mt-3 max-w-7xl rounded-2xl border border-divider bg-content1/95 p-6 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-5">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* User Section */}
            {user && (
              <div className="flex items-center gap-3 border-b border-divider pb-5">
                <Image
                  src={user.image || "/default-avatar.png"}
                  alt={user.name || "User"}
                  width={50}
                  height={50}
                  className="rounded-full border border-divider object-cover"
                />

                <div>
                  <h3 className="font-semibold">{user.name}</h3>

                  <p className="text-sm text-foreground/60">{user.email}</p>
                </div>
              </div>
            )}

            {/* Nav Links */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-foreground/70 transition hover:text-foreground"
              >
                {link.name}
              </Link>
            ))}

            {/* Auth Buttons */}
            {user ? (
              <Button color="danger" variant="bordered" onPress={handleLogout}>
                Sign Out
              </Button>
            ) : (
              <div className="flex flex-col gap-3">
                <Button as={Link} href="/auth/signin" variant="bordered">
                  Sign In
                </Button>

                <Button
                  as={Link}
                  href="/auth/signup"
                  className="bg-linear-to-r from-violet-600 to-indigo-500 text-white"
                >
                  Sign Up
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
