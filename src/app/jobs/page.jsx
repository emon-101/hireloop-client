import JobCard from "@/components/jobs/JobCard";
import JobsContainer from "@/components/jobs/JobsContainer";
import { getJobs } from "@/lib/api/jobs";

const JobsBrowsePage = async () => {
  const jobs = await getJobs();

  return (
    <div className="mx-auto max-w-7xl px-8 py-12 mt-25">
      {/* Header */}
      <div className="mb-12">
        <span className="rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
          Find Your Next Opportunity
        </span>

        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
          Browse Available Jobs
        </h1>

        <p className="mt-4 max-w-3xl text-lg text-foreground/60">
          Discover opportunities from top companies around the world. Explore
          full-time, part-time, contract, and remote positions tailored to your
          skills and career goals.
        </p>
      </div>

      <div className="mb-12 rounded-4xl bg-gradient-to-r from-violet-600 to-indigo-600 p-10 text-white">
        <p className="text-sm uppercase tracking-wider opacity-80">
          Career Portal
        </p>

        <h1 className="mt-3 text-5xl font-bold">Find Your Dream Job</h1>

        <p className="mt-4 max-w-2xl text-white/80">
          Connect with leading companies and discover exciting career
          opportunities across technology, design, marketing, and more.
        </p>

        <div className="mt-8 flex gap-6">
          <div>
            <h2 className="text-3xl font-bold">{jobs.length}</h2>
            <p className="text-white/80">Open Positions</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">12+</h2>
            <p className="text-white/80">Top Companies</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">{jobs.filter((job) => job.status === "active").length}</h2>
            <p className="text-white/80">Active Jobs</p>
          </div>
        </div>
      </div>

      {/* Jobs Grid */}
      {/* <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {jobs.map((job) => (
          <JobCard key={job._id} job={job} />
        ))}
      </div> */}

      {/* Search + Filter + Jobs */}
      <JobsContainer jobs={jobs} />
    </div>
  );
};

export default JobsBrowsePage;
