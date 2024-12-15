import React from "react";
import StudentDashboardSidebar from "../student-sidebar";
import Header from "../../../common/header";
import CertificatesHead from "./certificates-head";
import CertificatesPage from "./certificates-page";


function Certificates() {
    return (
        <>
            <div>
                <StudentDashboardSidebar />
                <div className="dashboard-main-wrapper">
                    <Header />
                    <div className="dashboard-body">
                        <CertificatesHead />
                        <div className="row gy-4">
                            <CertificatesPage />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Certificates;