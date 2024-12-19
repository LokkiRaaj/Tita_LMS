import React from "react";
import StudentSidebar from "../common/student-sidebar";
import StudentHeader from "../common/student-header";
import StudentwebinarHead from "../layout/Webinar/webinar-head";
import StudentwebinarCalendar from "../layout/Webinar/webinar-page";

function StudentWebinar() {
    return (
        <div className="meeting-container">
            <StudentSidebar />
            <div className="dashboard-main-wrapper">
                <StudentHeader />
                <div className="dashboard-body">
                    <StudentwebinarHead />
                    <StudentwebinarCalendar />
                </div>
            </div>
        </div>
    );
}

export default StudentWebinar;