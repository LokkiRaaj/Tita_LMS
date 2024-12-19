import React from "react";
import AdminSidebar from "../common/sidebar";
import AdminHeader from "../common/header";
import AdmincreateWebinarHead from "../layout/create webinar/createwebinar-head";
import CreateWebinarpage from "../layout/create webinar/create-webinar";


function AdmincreateWebinar() {
    return (
        <>
            <div>
                <AdminSidebar />
                <div className="dashboard-main-wrapper">
                    <AdminHeader />
                    <div className="dashboard-body">
                        <AdmincreateWebinarHead />
                        <div className="card">
                            <CreateWebinarpage />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdmincreateWebinar;
