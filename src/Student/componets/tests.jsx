import React from "react";
import StudentSidebar from "../common/student-sidebar";
import StudentHeader from "../common/student-header";
import StudenttestHead from "../layout/Tests/tests-head";
import StudenttestPage from "../layout/Tests/tests.page";

function StudentTests() {
    return (
        <div>
            <StudentSidebar />
            <div className="dashboard-main-wrapper">
                <StudentHeader />
                <div className="dashboard-body">
                    <StudenttestHead />
                    <div className="row gy-4">
                        <StudenttestPage />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentTests;