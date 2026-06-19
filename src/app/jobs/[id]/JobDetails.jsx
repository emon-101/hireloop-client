"use client";

import Image from "next/image";
import {
  Button,
  Card,
  Chip,
} from "@heroui/react";
import {
  Briefcase,
  CalendarDays,
  DollarSign,
  Globe,
  MapPin,
} from "lucide-react";

export default function JobDetails({ job }) {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Left Content */}
        <div className="space-y-6 lg:col-span-2">
          {/* Header */}
          <Card className="p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center">
              <Image
                src={job.companyLogo}
                alt={job.companyName}
                width={80}
                height={80}
                className="rounded-2xl border"
              />

              <div className="flex-1">
                <h1 className="text-3xl font-bold">
                  {job.title}
                </h1>

                <p className="mt-2 text-lg text-foreground/70">
                  {job.companyName}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <Chip color="primary" variant="flat">
                    {job.category}
                  </Chip>

                  <Chip color="success" variant="flat">
                    {job.type}
                  </Chip>

                  {job.remote && (
                    <Chip
                      color="secondary"
                      variant="flat"
                    >
                      Remote
                    </Chip>
                  )}
                </div>
              </div>
            </div>
          </Card>

          {/* Responsibilities */}
          <Card className="p-8">
            <h2 className="mb-4 text-2xl font-bold">
              Responsibilities
            </h2>

            <p className="leading-8 text-foreground/80">
              {job.responsibilities}
            </p>
          </Card>

          {/* Requirements */}
          <Card className="p-8">
            <h2 className="mb-4 text-2xl font-bold">
              Requirements
            </h2>

            <p className="leading-8 text-foreground/80">
              {job.requirements}
            </p>
          </Card>

          {/* Benefits */}
          <Card className="p-8">
            <h2 className="mb-4 text-2xl font-bold">
              Benefits
            </h2>

            <p className="leading-8 text-foreground/80">
              {job.benefits}
            </p>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Apply Card */}
          <Card className="p-6">
            <Button
              size="lg"
              color="primary"
              className="w-full"
            >
              Apply Now
            </Button>

            <p className="mt-4 text-center text-sm text-foreground/60">
              Submit your application before the deadline.
            </p>
          </Card>

          {/* Job Overview */}
          <Card className="p-6">
            <h3 className="mb-5 text-xl font-bold">
              Job Overview
            </h3>

            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <DollarSign
                  size={20}
                  className="text-success"
                />

                <div>
                  <p className="text-sm text-foreground/50">
                    Salary
                  </p>

                  <p className="font-semibold">
                    {job.currency} {job.minSalary} -{" "}
                    {job.maxSalary}
                  </p>
                </div>
              </div>

              <div className="border-t border-divider" />

              <div className="flex items-center gap-3">
                <Briefcase
                  size={20}
                  className="text-primary"
                />

                <div>
                  <p className="text-sm text-foreground/50">
                    Employment Type
                  </p>

                  <p className="font-semibold">
                    {job.type}
                  </p>
                </div>
              </div>

             <div className="border-t border-divider" />

              <div className="flex items-center gap-3">
                <CalendarDays
                  size={20}
                  className="text-danger"
                />

                <div>
                  <p className="text-sm text-foreground/50">
                    Deadline
                  </p>

                  <p className="font-semibold">
                    {job.deadline}
                  </p>
                </div>
              </div>

              <div className="border-t border-divider" />

              <div className="flex items-center gap-3">
                <MapPin
                  size={20}
                  className="text-warning"
                />

                <div>
                  <p className="text-sm text-foreground/50">
                    Location
                  </p>

                  <p className="font-semibold">
                    {job.city && job.country
                      ? `${job.city}, ${job.country}`
                      : "Remote / Worldwide"}
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Company Card */}
          <Card className="p-6">
            <h3 className="mb-5 text-xl font-bold">
              About Company
            </h3>

            <div className="flex items-center gap-4">
              <Image
                src={job.companyLogo}
                alt={job.companyName}
                width={60}
                height={60}
                className="rounded-xl border"
              />

              <div>
                <h4 className="font-semibold">
                  {job.companyName}
                </h4>

                <p className="text-sm text-foreground/60">
                  Hiring Company
                </p>
              </div>
            </div>

            <Button
              variant="flat"
              startContent={<Globe size={18} />}
              className="mt-6 w-full"
            >
              View Company
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}