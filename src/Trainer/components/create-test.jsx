import React from "react";
import TrainerSidebar from "../common/trainer-sidebar";
import TrainerHeader from "../common/trainer-header";
import CreateTestPage from "../layout/Tests/createtest-page";

function CreateTest() {
    return (
        <div>
            <TrainerSidebar />
            <div className="dashboard-main-wrapper">
                <TrainerHeader />
                <div className="dashboard-body">
                    <div className="row gy-4">
                        <CreateTestPage />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateTest;