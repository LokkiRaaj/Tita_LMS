import React from "react";
import StudentSidebar from "../common/student-sidebar";
import StudentHeader from "../common/student-header";
import StudentCategories from "../layout/Student Home/student-categories";

function StudentHome() {
    return (
        <>
            <div>
                <StudentSidebar />
                <div className="dashboard-main-wrapper">
                    <StudentHeader />
                    <div className="dashboard-body">
                        <div className="row gy-4">
                            <StudentCategories />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default StudentHome;