import CompanyProfile from "@/components/dashboard/recruiterDashboard/CompanyProfile";
import NoCompanyState from "@/components/dashboard/recruiterDashboard/NoCompanyState";
import { getRecruiterCompany } from "@/lib/api/companies";
import { getUserSession } from "@/lib/core/session";

const CompanyPage = async () => {

  const user = await getUserSession();
  console.log("User session in CompanyPage: ", user);
  const recruiter = user;

  const company = await getRecruiterCompany(recruiter.id);

  return (
    <div className="mx-auto max-w-6xl p-6">
      {!company ? (
        <NoCompanyState recruiter={recruiter} company={company} />
      ) : (
        <CompanyProfile recruiter={recruiter} company={company} />
      )}
    </div>
  );
};

export default CompanyPage;
