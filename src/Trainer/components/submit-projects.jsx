import React from "react";
import TrainerSidebar from "../common/trainer-sidebar";
import TrainerHeader from "../common/trainer-header";
import SubmitprojectHead from "../layout/Submit Project/submitproject-head";
import SubmitprojectPage from "../layout/Submit Project/submitproject-page";

function SubmittedProjects() {
    return (
        <div>
            <TrainerSidebar />
            <div className="dashboard-main-wrapper">
                <TrainerHeader />
                <div className="dashboard-body">
                    <SubmitprojectHead />
                    <div className="row gy-4">
                        <SubmitprojectPage />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SubmittedProjects;