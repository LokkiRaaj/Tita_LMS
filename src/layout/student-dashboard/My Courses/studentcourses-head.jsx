import React from "react";

function StudentCoursesHead() {
    return (
        <>
            <div className="breadcrumb mb-24">
                <ul className="flex-align gap-4">
                    <li><a href="/student-dashboard" className="text-gray-200 fw-normal text-15 hover-text-main-600">Home</a></li>
                    <li> <span className="text-gray-500 fw-normal d-flex"><i className="ph ph-caret-right" /></span> </li>
                    <li><span className="text-main-600 fw-normal text-15">My Courses</span></li>
                </ul>
            </div>
        </>
    );
}

export default StudentCoursesHead;