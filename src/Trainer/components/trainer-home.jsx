import React from "react";
import TrainerSidebar from "../common/trainer-sidebar";
import TrainerHeader from "../common/trainer-header";
import TrainerCategories from "../layout/Trainer Home/trainer-categories";


function TrainerHome() {
    return (
        <>
            <div>
                <TrainerSidebar />
                <div className="dashboard-main-wrapper">
                    <TrainerHeader />
                    <div className="dashboard-body">
                        <div className="row gy-4">
                            <TrainerCategories />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TrainerHome;