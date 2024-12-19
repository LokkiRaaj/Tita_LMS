import React from "react";
import AdminSidebar from "../common/sidebar";
import AdminHeader from "../common/header";
import WebinarCalendar from "../layout/Webinar/webinar-calendar";



function AdminWebinarPage() {
    return (
        <>
            <div className="meeting-container">
                <AdminSidebar />
                <div className="dashboard-main-wrapper">
                    <AdminHeader />
                    <div className="dashboard-body">
                        <WebinarCalendar />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminWebinarPage;