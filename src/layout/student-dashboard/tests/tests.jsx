import React from "react";
import StudentDashboardSidebar from "../student-sidebar";
import Header from "../../../common/header";
import TestsHead from "./test-head";
import TestsPage from "./test-page";

function Tests() {
    return (
        <div>
            <StudentDashboardSidebar />
            <div className="dashboard-main-wrapper">
                <Header />
                <div className="dashboard-body">
                    <TestsHead />
                    <div className="row gy-4">
                        <TestsPage />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tests;