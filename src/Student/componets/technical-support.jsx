import React from "react";
import StudentSidebar from "../common/student-sidebar";
import StudentHeader from "../common/student-header";
import StudentTeachnicalsupportHead from "../layout/Technical Support/technical-head";
import StudentTechnicalSupportForm from "../layout/Technical Support/technical-form";

function StudentTechnicalSupport() {
    return (
        <>
            <div>
                <StudentSidebar />
                <div className="dashboard-main-wrapper">
                    <StudentHeader />
                    <div className="dashboard-body">
                        <StudentTeachnicalsupportHead />
                        <div className="row gy-4">
                            <StudentTechnicalSupportForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StudentTechnicalSupport;