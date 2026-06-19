"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Button,
  Card,
  Chip,
} from "@heroui/react";

export default function JobCard({ job }) {
  return (
    <Card className="group border border-divider bg-content1 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
      {/* Company */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="relative h-14 w-14 overflow-hidden rounded-xl border bg-content2">
            <Image
              src={job?.companyLogo}
              alt={job?.companyName}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h3 className="font-semibold">
              {job?.companyName}
            </h3>

            <p className="text-sm text-foreground/60">
              {job?.city}, {job?.country}
            </p>
          </div>
        </div>

        <Chip
          color="success"
          variant="flat"
          size="sm"
        >
          {job?.status}
        </Chip>
      </div>

      {/* Job Info */}
      <div className="mt-5">
        <h2 className="line-clamp-2 text-xl font-bold">
          {job?.title}
        </h2>

        <div className="mt-3 flex flex-wrap gap-2">
          <Chip
            size="sm"
            variant="flat"
            color="primary"
          >
            {job?.category}
          </Chip>

          <Chip
            size="sm"
            variant="flat"
            color="secondary"
          >
            {job?.type}
          </Chip>

          {job?.remote && (
            <Chip
              size="sm"
              variant="flat"
              color="success"
            >
              Remote
            </Chip>
          )}
        </div>
      </div>

      {/* Salary */}
      <div className="mt-5 rounded-xl bg-content2 p-3">
        <p className="text-xs text-foreground/60">
          Salary Range
        </p>

        <h4 className="font-bold text-success">
          {job?.currency} {job?.minSalary} - {job?.maxSalary}
        </h4>
      </div>

      {/* Details */}
      <div className="mt-5 space-y-3 text-sm">
        <div>
          <span className="font-medium">
            Deadline:
          </span>{" "}
          <span className="text-danger">
            {job?.deadline}
          </span>
        </div>

        <p className="line-clamp-2 text-foreground/70">
          {job?.responsibilities}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-6 flex gap-3">
        <Link
          href={`/jobs/${job?._id}`}
          color="primary"
          className="flex w-full bg-blue-500 rounded-full justify-center items-center font-bold py-2"
        >
          View Details
        </Link>
      </div>
    </Card>
  );
}