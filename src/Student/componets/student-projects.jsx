import React from "react";
import StudentSidebar from "../common/student-sidebar";
import StudentHeader from "../common/student-header";
import StudentProjectHead from "../layout/Projects/projects-head";
import StudentprojectPage from "../layout/Projects/projects-page";

function StudentProjects() {
    return (
        <div>
            <StudentSidebar />
            <div className="dashboard-main-wrapper">
                <StudentHeader />
                <div className="dashboard-body">
                    <StudentProjectHead />
                    <div className="row gy-4">
                        <StudentprojectPage />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentProjects;