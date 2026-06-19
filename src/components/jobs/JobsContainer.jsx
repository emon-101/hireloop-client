"use client";

import { useMemo, useState } from "react";
import JobFilters from "./JobFilters";
import JobCard from "./JobCard";

export default function JobsContainer({ jobs }) {
  const [filters, setFilters] = useState({
    search: "",
    category: "",
    type: "",
    location: "",
    salary: "",
    remote: false,
  });

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        !filters.search ||
        job.title
          ?.toLowerCase()
          .includes(filters.search.toLowerCase());

      const matchesCategory =
        !filters.category ||
        job.category === filters.category;

      const matchesType =
        !filters.type ||
        job.type === filters.type;

      const matchesLocation =
        !filters.location ||
        `${job.city || ""} ${job.country || ""}`
          .toLowerCase()
          .includes(filters.location.toLowerCase());

      const matchesSalary =
        !filters.salary ||
        Number(job.maxSalary) >= Number(filters.salary);

      const matchesRemote =
        !filters.remote || job.remote;

      return (
        matchesSearch &&
        matchesCategory &&
        matchesType &&
        matchesLocation &&
        matchesSalary &&
        matchesRemote
      );
    });
  }, [jobs, filters]);

  const resetFilters = () => {
    setFilters({
      search: "",
      category: "",
      type: "",
      location: "",
      salary: "",
      remote: false,
    });
  };

  return (
    <div className="space-y-8">
      <JobFilters
        filters={filters}
        setFilters={setFilters}
        onReset={resetFilters}
      />

      <div>
        <h3 className="text-xl font-bold">
          {filteredJobs.length} Jobs Found
        </h3>

        <p className="text-sm text-foreground/60">
          Showing opportunities matching your filters
        </p>
      </div>

      {filteredJobs.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {filteredJobs.map((job) => (
            <JobCard
              key={job._id?.$oid || job._id}
              job={job}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-divider bg-content1 py-20 text-center">
          <h3 className="text-2xl font-semibold">
            No Jobs Found
          </h3>

          <p className="mt-2 text-foreground/60">
            Try adjusting your filters or resetting the search.
          </p>
        </div>
      )}
    </div>
  );
}