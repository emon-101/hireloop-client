import JobCard from "@/components/jobs/JobCard";
import { getJobs } from "@/lib/api/jobs";

const JobsBrowsePage = async() => {
    const jobs = await getJobs();
  return (
    <div className="max-w-7xl mx-auto mt-30 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {jobs.map((job) => (
        <JobCard key={job._id} job={job} />
      ))}
    </div>
  );
};

export default JobsBrowsePage;
