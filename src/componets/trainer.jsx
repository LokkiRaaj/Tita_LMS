import React from "react";
import DashboardSidebar from "../common/sidebar";
import Header from "../common/header";
import TrainerHead from "../layout/trainer/trainer-head";
import TrainerList from "../layout/trainer/trainer-list";

function TrainerPage() {
    return (
        <>
            <div>
                <DashboardSidebar />
                <div className="dashboard-main-wrapper">
                    <Header />
                    <div className="dashboard-body">
                        <TrainerHead />
                        <TrainerList />
                    </div>

                </div>
            </div>
        </>
    );
}

export default TrainerPage;