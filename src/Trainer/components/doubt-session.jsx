import React from "react";
import TrainerSidebar from "../common/trainer-sidebar";
import TrainerHeader from "../common/trainer-header";
import TrainerdoubtsessionHead from "../layout/Doubt Session/doubt-head";
import TrainerdoubtsessionPage from "../layout/Doubt Session/doubt-page";

function DoubtSession() {
    return(
        <div>
            <TrainerSidebar />
            <div className="dashboard-main-wrapper">
                <TrainerHeader />
                <div className="dashboard-body">
                    <TrainerdoubtsessionHead />
                    <div className="row gy-4">
                        <TrainerdoubtsessionPage />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DoubtSession;