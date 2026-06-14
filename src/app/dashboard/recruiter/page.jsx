"use client";

import RecruiterStats from "@/components/dashboard/recruiterDashboard/RecruiterStats";
import { useSession } from "@/lib/auth-client";

const RecruiterDashboardPage = () => {
    const {data: session} = useSession();
    const user = session?.user;
    console.log(user);
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold">Welcome back, {user?.name}</h2>
            <RecruiterStats />
        </div>
    );
};

export default RecruiterDashboardPage;