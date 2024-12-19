import React from "react";
import AdminSidebar from "../common/sidebar";
import AdminHeader from "../common/header";
import AdmintechnicalHead from "../layout/Technical Support/technical-head";
import AdminTechnicalForm from "../layout/Technical Support/technical-form";

function AdminTechnicalSupport() {
    return (
        <>
            <div>
                <AdminSidebar />
                <div className="dashboard-main-wrapper">
                    <AdminHeader />
                    <div className="dashboard-body">
                        <AdmintechnicalHead />
                        <div className="row gy-4">
                            <AdminTechnicalForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminTechnicalSupport;