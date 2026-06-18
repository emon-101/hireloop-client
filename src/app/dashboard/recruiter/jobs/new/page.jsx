
import NewJobForm from '@/components/dashboard/recruiterDashboard/NewJobForm';
import { getLoggedInRecruiterCompany } from '@/lib/api/companies';
import React from 'react';

const CreateNewJob = async() => {
    const company = await getLoggedInRecruiterCompany();
    console.log(company);
    return (
        <div>
            <NewJobForm company={company} />
        </div>
    );
};

export default CreateNewJob;