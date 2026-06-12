"use client";

import { Button, Chip } from "@heroui/react";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started with your job search.",
    button: "Get Started",
    features: [
      "Browse unlimited jobs",
      "Apply to 5 jobs per day",
      "Basic company profiles",
      "Job alerts",
      "Community support",
    ],
  },

  {
    name: "Pro",
    price: "$19",
    popular: true,
    description:
      "Designed for professionals looking to accelerate their careers.",
    button: "Start Pro Plan",
    features: [
      "Unlimited applications",
      "Priority job matching",
      "AI resume insights",
      "Featured candidate profile",
      "Advanced job filters",
      "Application tracking",
      "Priority support",
    ],
  },

  {
    name: "Business",
    price: "$39",
    description: "Ideal for recruiters and growing teams hiring top talent.",
    button: "Start Hiring",
    features: [
      "Unlimited job postings",
      "Applicant management",
      "Company branding",
      "Featured job listings",
      "Analytics dashboard",
      "Candidate recommendations",
      "Team collaboration",
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center">
          <p className="font-medium text-primary">Pricing Plans</p>

          <h2 className="mt-2 text-4xl font-bold md:text-5xl">
            Choose Your Perfect Plan
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-foreground/70">
            Whether you&#39;re searching for your dream job or hiring top
            talent, HireLoop has a plan built for your needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`
                relative
                rounded-[2rem]
                border
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl

                ${
                  plan.popular
                    ? "border-primary bg-content1 shadow-xl shadow-primary/20 scale-105"
                    : "border-divider bg-content1/70"
                }
              `}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Chip color="primary">
                    <div className="flex items-center gap-2">
                      <Sparkles size={14} />
                      Most Popular
                    </div>
                  </Chip>
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold">{plan.name}</h3>

                <p className="mt-3 text-sm text-foreground/70">
                  {plan.description}
                </p>

                <div className="mt-6">
                  <span className="text-5xl font-black">{plan.price}</span>

                  {plan.price !== "$0" && (
                    <span className="text-foreground/60">/month</span>
                  )}
                </div>

                <Button
                  color={plan.popular ? "primary" : "default"}
                  className="mt-8 w-full"
                  size="lg"
                >
                  {plan.button}
                </Button>

                <div className="mt-8 border-t border-divider pt-8">
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <Check size={12} />
                        </div>

                        <span className="text-sm text-foreground/80">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Glow Effect */}
              {plan.popular && (
                <div
                  className="
                    absolute
                    inset-0
                    -z-10
                    rounded-[2rem]
                    bg-primary/10
                    blur-3xl
                  "
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
