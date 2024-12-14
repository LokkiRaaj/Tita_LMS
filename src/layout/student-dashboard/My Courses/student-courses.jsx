import React from "react";
import StudentDashboardSidebar from "../student-sidebar";
import Header from "../../../common/header";
import StudentCoursesHead from "./studentcourses-head";
import StudentcourseList from "./studentcourse-list";

function StudentsmyCourses() {
    return (
        <>
            <div>
                <StudentDashboardSidebar />
                <div className="dashboard-main-wrapper">
                    <Header />
                    <div className="dashboard-body">
                        <StudentCoursesHead />
                        <div className="row gy-4">
                            <StudentcourseList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StudentsmyCourses;