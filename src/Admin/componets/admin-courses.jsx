import React from "react";
import AdminSidebar from "../common/sidebar";
import AdminHeader from "../common/header";
import AdminCoursesList from "../layout/Courses/courses-list"

function AdminCourses() {
    return (
        <div>
            <AdminSidebar />
            <div className="dashboard-main-wrapper">
                <AdminHeader />
                <div className="dashboard-body">
                    <div className="row gy-4">
                        <AdminCoursesList />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminCourses;