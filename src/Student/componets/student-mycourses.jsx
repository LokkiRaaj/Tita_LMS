import React from "react";
import StudentSidebar from "../common/student-sidebar";
import StudentHeader from "../common/student-header";
import StudentmyCoursesHead from "../layout/My Courses/studentcourses-head";
import StudentmyCoursesList from "../layout/My Courses/studentcourse-list";

function StudentmyCourses() {
    return (
        <>
            <div>
                <StudentSidebar />
                <div className="dashboard-main-wrapper">
                    <StudentHeader />
                    <div className="dashboard-body">
                        <StudentmyCoursesHead />
                        <div className="row gy-4">
                            <StudentmyCoursesList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StudentmyCourses;