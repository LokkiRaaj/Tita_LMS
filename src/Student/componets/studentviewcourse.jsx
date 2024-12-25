import React from "react";
import StudentSidebar from "../common/student-sidebar";
import StudentHeader from "../common/student-header";
import Studentcourselist from "../layout/Courses/courses-list";
import Studentviewcoursebyid from "../layout/studentviewcourse/studentviewcoursebyid";

function Studentviewcourse() {

    return (
        <>
            <div className="meeting-container">
                <StudentSidebar />
                <div className="dashboard-main-wrapper">
                    <StudentHeader />
                    <Studentviewcoursebyid />
                </div>
            </div>
        </>
    );
}

export default Studentviewcourse;