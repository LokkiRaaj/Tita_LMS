import React from "react";
import TrainerSidebar from "../common/trainer-sidebar";
import TrainerHeader from "../common/trainer-header";
import CraeteprojectHead from "../layout/Create Projects/createproject-head";
import CraeteprojectPage from "../layout/Create Projects/createproject-page";

function TrainercreateProjects() {
    return (
        <>
            <div>
                <TrainerSidebar />
                <div className="dashboard-main-wrapper">
                    <TrainerHeader />
                    <div className="dashboard-body">
                        <CraeteprojectHead />
                        <div className="row gy-4">
                            <CraeteprojectPage />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TrainercreateProjects;