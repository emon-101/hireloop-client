"use client";

import {
  Search,
  Building2,
  Rocket,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    title: "Smart Job Search",
    description:
      "Discover opportunities tailored to your skills and career goals.",
    icon: Search,
  },
  {
    title: "Top Companies",
    description:
      "Connect directly with trusted employers from around the world.",
    icon: Building2,
  },
  {
    title: "Faster Hiring",
    description:
      "Streamlined application and recruitment process for quicker results.",
    icon: Rocket,
  },
  {
    title: "Secure Platform",
    description:
      "Verified employers and secure data handling for peace of mind.",
    icon: ShieldCheck,
  },
];

export default function WhyChooseHireLoop() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-medium text-primary">
            Why HireLoop
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            Why Choose HireLoop?
          </h2>

          <p className="mt-4 text-foreground/70">
            Everything you need to find jobs,
            hire talent, and grow your career.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="
                  rounded-3xl
                  border
                  border-divider
                  bg-content1/70
                  p-8
                  backdrop-blur-xl
                  transition-all
                  hover:-translate-y-2
                  hover:border-primary
                "
              >
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-primary/10
                    text-primary
                  "
                >
                  <Icon size={28} />
                </div>

                <h3 className="mt-5 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-foreground/70">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}