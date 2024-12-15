import React from "react";
import StudentDashboardSidebar from "../layout/student-dashboard/student-sidebar";
import Header from "../common/header";
import Categories from "../layout/home/categories";




function StudentDashboard() {
    return (
        <>
            <div>
                <StudentDashboardSidebar />
                <div className="dashboard-main-wrapper">
                    <Header />
                    <div className="dashboard-body">
                        <div className="row gy-4">
                            <Categories />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default StudentDashboard;