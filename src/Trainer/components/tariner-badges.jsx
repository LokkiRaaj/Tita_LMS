import React from "react";
import TrainerSidebar from "../common/trainer-sidebar";
import TrainerHeader from "../common/trainer-header";
import TrainerBadgesHead from "../layout/Badges/badges-head";
import TrainerBadgesPage from "../layout/Badges/badges-page";


function TrainerBadges() {
    return (
        <div>
            <TrainerSidebar />
            <div className="dashboard-main-wrapper">
                <TrainerHeader />
                <div className="dashboard-body">
                    <TrainerBadgesHead />
                    <div className="row gy-4">
                        <TrainerBadgesPage />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrainerBadges;