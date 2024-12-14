import React from "react";
import Header from "../common/header";
import DashboardSidebar from "../common/sidebar";
import StudentsHead from "../layout/trainer-dashboard/my students/mystudent-head";
import StudentsList from "../layout/student/student-list";


function Studentspage() {
    return (
        <div>
            <DashboardSidebar />
            <div className="dashboard-main-wrapper">
                <Header />
                <div className="dashboard-body">
                    <StudentsHead />
                    <StudentsList />
                </div>

            </div>
        </div>
    );
}

export default Studentspage;