import CompanyProfile from "@/components/dashboard/recruiterDashboard/CompanyProfile";
import NoCompanyState from "@/components/dashboard/recruiterDashboard/NoCompanyState";

const CompanyPage = async () => {
  const company = null // db query

  return (
    <div className="mx-auto max-w-6xl p-6">
      {!company ? (
        <NoCompanyState />
      ) : (
        <CompanyProfile company={company} />
      )}
    </div>
  );
};

export default CompanyPage;