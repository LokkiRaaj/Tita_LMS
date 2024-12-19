import React from "react";
import StudentSidebar from "../common/student-sidebar";
import StudentHeader from "../common/student-header";
import StudentMaterialsHead from "../layout/Reading materials/materials-head";
import StudentMaterialsPage from "../layout/Reading materials/materials-page";

function StudentMaterials() {
    return (
        <div>
            <StudentSidebar />
            <div className="dashboard-main-wrapper">
                <StudentHeader />
                <div className="dashboard-body">
                    <StudentMaterialsHead />
                    <div className="row gy-4">
                        <StudentMaterialsPage />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentMaterials;