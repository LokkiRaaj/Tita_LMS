import React from "react";
import AdminSidebar from "../common/sidebar";
import AdminHeader from "../common/header";
import AdminCategories from "../layout/Categories/admin-categories";
import HomebodyCard from "../layout/Home/homebody-card"

function AdminHome() {
    return (
        <div>
            <AdminSidebar />
            <div className="dashboard-main-wrapper">
                <AdminHeader />
                <div className="dashboard-body">
                    <div className="row gy-4">
                        <HomebodyCard />
                        <AdminCategories />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminHome;