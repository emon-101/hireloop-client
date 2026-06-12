"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const footerLinks = {
    Product: [
      {
        name: "Browse Jobs",
        href: "/jobs",
      },
      {
        name: "Companies",
        href: "/companies",
      },
      {
        name: "Pricing",
        href: "/pricing",
      },
    ],

    Resources: [
      {
        name: "Blog",
        href: "/blog",
      },
      {
        name: "Career Guide",
        href: "/career-guide",
      },
      {
        name: "FAQ",
        href: "/faq",
      },
    ],

    Company: [
      {
        name: "About Us",
        href: "/about",
      },
      {
        name: "Contact",
        href: "/contact",
      },
      {
        name: "Partners",
        href: "/partners",
      },
    ],

    Legal: [
      {
        name: "Privacy Policy",
        href: "/privacy",
      },
      {
        name: "Terms of Service",
        href: "/terms",
      },
      {
        name: "Cookies",
        href: "/cookies",
      },
    ],
  };

  return (
    <footer className="bg-background pt-10">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-3xl border border-divider bg-content1 p-10 text-center">
          <h2 className="text-4xl font-bold">
            Ready to find your next opportunity?
          </h2>

          <p className="mt-4 text-foreground/70">
            Join thousands of professionals and companies already using
            HireLoop.
          </p>

          <button className="mt-8 rounded-xl bg-primary px-6 py-3 text-white">
            Get Started
          </button>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/">
              <h2 className="text-4xl font-black tracking-tight">
                <span className="text-primary">hire</span>
                <span className="text-warning">loop</span>
              </h2>
            </Link>

            <p className="mt-5 max-w-md text-foreground/70">
              Helping companies hire faster and candidates discover meaningful
              careers through a smarter, data-driven hiring experience.
            </p>

            <div className="mt-6 flex items-center gap-4">
              <Link
                href="#"
                className="rounded-full border border-divider p-2 transition hover:bg-content2"
              >
                <FaLinkedin size={18} />
              </Link>

              <Link
                href="#"
                className="rounded-full border border-divider p-2 transition hover:bg-content2"
              >
                <FaGithub size={18} />
              </Link>

              <Link
                href="#"
                className="rounded-full border border-divider p-2 transition hover:bg-content2"
              >
                <FaXTwitter size={18} />
              </Link>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="mb-4 font-semibold text-foreground">{title}</h3>

              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="
                        text-sm
                        text-foreground/70
                        transition-colors
                        hover:text-primary
                      "
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-divider pt-6 text-sm text-foreground/60 md:flex-row">
          <p>© {new Date().getFullYear()} HireLoop. All rights reserved.</p>

          <p>Connecting talent with opportunity.</p>
        </div>
      </div>
    </footer>
  );
}
