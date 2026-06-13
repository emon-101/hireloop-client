import { DashboardSiderbar } from '@/components/dashboard/DashboardSidebar';
import React from 'react';

const DashboardLayout = ({children}) => {
    return (
        <div className='flex min-h-screen mt-30'>
            <DashboardSiderbar />
            <div className='flex-1'>{children}</div>
        </div>
    );
};

export default DashboardLayout;