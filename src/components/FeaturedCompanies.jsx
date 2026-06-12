"use client";

import Image from "next/image";
import { Button } from "@heroui/react";

const companies = [
  {
    name: "Google",
    jobs: 120,
    location: "California",
    logo: "/companies/google.svg",
  },
  {
    name: "Microsoft",
    jobs: 85,
    location: "Remote",
    logo: "/companies/microsoft.svg",
  },
  {
    name: "Amazon",
    jobs: 95,
    location: "Seattle",
    logo: "/companies/amazon.svg",
  },
  {
    name: "Netflix",
    jobs: 40,
    location: "Los Angeles",
    logo: "/companies/netflix.svg",
  },
];

export default function FeaturedCompanies() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-primary font-medium">
            Trusted Employers
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            Featured Companies Hiring Now
          </h2>

          <p className="mt-4 text-foreground/70">
            Discover opportunities from leading companies
            actively recruiting top talent.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {companies.map((company) => (
            <div
              key={company.name}
              className="
                rounded-3xl
                border
                border-divider
                bg-content1/70
                p-6
                backdrop-blur-xl
                transition-all
                hover:-translate-y-2
                hover:shadow-xl
              "
            >
              <div className="flex justify-center">
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={60}
                  height={60}
                />
              </div>

              <h3 className="mt-5 text-center text-xl font-semibold">
                {company.name}
              </h3>

              <p className="mt-2 text-center text-foreground/70">
                {company.jobs} Open Positions
              </p>

              <p className="text-center text-sm text-foreground/50">
                {company.location}
              </p>

              <Button
                color="primary"
                variant="flat"
                className="mt-5 w-full"
              >
                View Jobs
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}