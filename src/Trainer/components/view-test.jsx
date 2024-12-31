import React from "react";
import TrainerSidebar from "../common/trainer-sidebar";
import TrainerHeader from "../common/trainer-header";
import ViewTestTable from "../layout/Tests/viewtest-page";

function TrainerviewTest() {
    return (
        <div>
            <TrainerSidebar />
            <div className="dashboard-main-wrapper">
                <TrainerHeader />
                <div className="dashboard-body">
                    <div className="row gy-4">
                        <ViewTestTable />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrainerviewTest;