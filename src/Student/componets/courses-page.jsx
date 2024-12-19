import React from "react";
import StudentSidebar from "../common/student-sidebar";
import StudentHeader from "../common/student-header";
import StudentCoursesList from "../layout/Courses/courses-list";

function StudentCoursesPage() {
    return (
        <div>
            <StudentSidebar />
            <div className="dashboard-main-wrapper">
                <StudentHeader />
                <div className="dashboard-body">
                    <StudentCoursesList />
                </div>
            </div>
        </div>
    );
}

export default StudentCoursesPage;