import React from "react";
import DashboardSidebar from "../common/sidebar";
import Header from "../common/header";
import AllcoursesList from "../layout/courses/courses-list";



function AllcoursesPage() {
    return (
        <div>
            <DashboardSidebar />
            <div className="dashboard-main-wrapper">
                <Header />
                <div className="dashboard-body">
                    
                    <AllcoursesList />
                </div>

            </div>
        </div>
    );
}

export default AllcoursesPage;