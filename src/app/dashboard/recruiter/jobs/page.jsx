import JobsTable from "@/components/dashboard/recruiterDashboard/JobsTable";
import { getCompanyJobs } from "@/lib/api/jobs";

const RecruiterJobs = async () => {
  const companyId = "company_123";
  const jobs = (await getCompanyJobs(companyId)) || [];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold tracking-tight">
          Manage All Jobs
        </h2>
        <p className="text-sm text-default-500">
          View, update, and manage your current job postings.
        </p>
      </div>

      <JobsTable jobs={jobs} />
    </div>
  );
};

export default RecruiterJobs;