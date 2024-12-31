import React from "react";
import StudentSidebar from "../common/student-sidebar";
import StudentHeader from "../common/student-header";
import StartTestpage from "../layout/Tests/start-test";

function StudentTestPage() {
    return (
        <div>
            <StudentSidebar />
            <div className="dashboard-main-wrapper">
                <StudentHeader />
                <div className="dashboard-body">
                    <div className="row gy-4">
                        <StartTestpage />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentTestPage;