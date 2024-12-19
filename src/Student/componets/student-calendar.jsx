import React from "react";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import StudentSidebar from "../common/student-sidebar";
import StudentHeader from "../common/student-header";
import StudentcalendarHead from "../layout/Calendar/student-calendarhead";
import StudentcalendarPage from "../layout/Calendar/student-calendarpage";

function StudentCalendar() {
    return (
        <>
            <div className="meeting-container">
                <StudentSidebar />
                <div className="dashboard-main-wrapper">
                    <StudentHeader />
                    <div className="dashboard-body">
                        <StudentcalendarHead />
                        <StudentcalendarPage />
                    </div>
                </div>
            </div>
        </>
    );
}

export default StudentCalendar;