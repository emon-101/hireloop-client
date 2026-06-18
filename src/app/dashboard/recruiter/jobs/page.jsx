import JobsTable from "@/components/dashboard/recruiterDashboard/JobsTable";
import { getLoggedInRecruiterCompany } from "@/lib/api/companies";
import { getCompanyJobs } from "@/lib/api/jobs";

const RecruiterJobs = async () => {
  const company = await getLoggedInRecruiterCompany();
  const jobs = (await getCompanyJobs(company?._id)) || [];

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