import React from "react";
import TrainerDashboardSidebar from "../layout/trainer-dashboard/tdsidebar";
import Header from "../common/header";
import MycoursesList from "../layout/trainer-dashboard/my courses/mycourses-list";


function TrainerDashboard() {
    return (
        <>
            <div>
                <TrainerDashboardSidebar />
                <div className="dashboard-main-wrapper">
                    <Header />
                    <div className="dashboard-body">
                        <div className="row gy-4">
                            <MycoursesList />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default TrainerDashboard;