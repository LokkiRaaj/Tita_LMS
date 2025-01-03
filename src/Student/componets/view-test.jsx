import React from "react";
import StudentSidebar from "../common/student-sidebar";
import StudentHeader from "../common/student-header";
import ViewTestTable from "../layout/Tests/viewtest-table";

function StudentviewTest() {
    return (
        <div>
            <StudentSidebar />
            <div className="dashboard-main-wrapper">
                <StudentHeader />
                <div className="dashboard-body">
                    <div className="row gy-4">
                        <ViewTestTable />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentviewTest;