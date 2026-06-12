"use client";

import { Button, Chip } from "@heroui/react";
import {
  MapPin,
  Briefcase,
  Clock3,
} from "lucide-react";

const jobs = [
  {
    title: "Senior Frontend Developer",
    company: "Google",
    location: "Remote",
    type: "Full Time",
    salary: "$5k - $8k",
  },
  {
    title: "UI/UX Designer",
    company: "Adobe",
    location: "New York",
    type: "Full Time",
    salary: "$4k - $6k",
  },
  {
    title: "Backend Engineer",
    company: "Netflix",
    location: "California",
    type: "Remote",
    salary: "$6k - $9k",
  },
  {
    title: "Product Manager",
    company: "Spotify",
    location: "Remote",
    type: "Contract",
    salary: "$4k - $7k",
  },
];

export default function LatestJobs() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="font-medium text-primary">
            Fresh Opportunities
          </p>

          <h2 className="mt-2 text-4xl font-bold">
            Latest Jobs
          </h2>

          <p className="mt-4 text-foreground/70">
            Explore recently posted positions from
            leading companies.
          </p>
        </div>

        <div className="mt-14 space-y-5">
          {jobs.map((job) => (
            <div
              key={job.title}
              className="
                rounded-3xl
                border
                border-divider
                bg-content1/70
                p-6
                backdrop-blur-xl
                transition-all
                hover:border-primary
                hover:shadow-lg
              "
            >
              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <h3 className="text-xl font-semibold">
                    {job.title}
                  </h3>

                  <p className="mt-1 text-foreground/70">
                    {job.company}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-4 text-sm text-foreground/60">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {job.location}
                    </div>

                    <div className="flex items-center gap-2">
                      <Briefcase size={16} />
                      {job.type}
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock3 size={16} />
                      Posted 2 days ago
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Chip color="success">
                    {job.salary}
                  </Chip>

                  <Button color="primary">
                    Apply Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            variant="bordered"
            color="primary"
          >
            View All Jobs
          </Button>
        </div>
      </div>
    </section>
  );
}