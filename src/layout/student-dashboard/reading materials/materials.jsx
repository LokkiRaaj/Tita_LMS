import React from "react";
import StudentDashboardSidebar from "../student-sidebar";
import Header from "../../../common/header";
import ReadingMaterialsHead from "./materials-head";
import ReadingMaterialsPage from "./materials-page";


function ReadingMaterials() {
    return (
        <div>
            <StudentDashboardSidebar />
            <div className="dashboard-main-wrapper">
                <Header />
                <div className="dashboard-body">
                    <ReadingMaterialsHead />
                    <div className="row gy-4">
                        <ReadingMaterialsPage />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReadingMaterials;