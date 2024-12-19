import React from "react";
import AdminSidebar from "../common/sidebar";
import AdminHeader from "../common/header";
import StudentsHead from "../layout/Students List/student-head";
import StudentsList from "../layout/Students List/student-list";



function Studentspage() {
    return (
        <div>
            <AdminSidebar />
            <div className="dashboard-main-wrapper">
                <AdminHeader />
                <div className="dashboard-body">
                    <StudentsHead />
                    <StudentsList />
                </div>

            </div>
        </div>
    );
}

export default Studentspage;