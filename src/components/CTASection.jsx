"use client";

import { Button } from "@heroui/react";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            border
            border-divider
            bg-content1
            px-8
            py-16
            text-center
            md:px-16
          "
        >
          {/* Background Glow */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-divider bg-background/60 px-4 py-2 text-sm">
            <BriefcaseBusiness size={16} />
            Join 50,000+ professionals worldwide
          </div>

          {/* Heading */}
          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Ready to Find Your Next
            <span className="text-primary"> Opportunity?</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-lg text-foreground/70">
            Whether you&#39;re searching for your dream job or
            looking for top talent, HireLoop helps you
            connect faster and smarter.
          </p>

          {/* Actions */}
          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              as={Link}
              href="/jobs"
              color="primary"
              size="lg"
              endContent={<ArrowRight size={18} />}
            >
              Explore Jobs
            </Button>

            <Button
              as={Link}
              href="/post-job"
              variant="bordered"
              size="lg"
            >
              Post a Job
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-6 border-t border-divider pt-8 md:grid-cols-4">
            <div>
              <h3 className="text-2xl font-bold text-primary">
                25K+
              </h3>
              <p className="text-sm text-foreground/60">
                Active Jobs
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary">
                10K+
              </h3>
              <p className="text-sm text-foreground/60">
                Companies
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary">
                50K+
              </h3>
              <p className="text-sm text-foreground/60">
                Candidates
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-primary">
                95%
              </h3>
              <p className="text-sm text-foreground/60">
                Success Rate
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}