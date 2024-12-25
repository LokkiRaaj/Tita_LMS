import React from "react";
import TrainerSidebar from "../common/trainer-sidebar";
import TrainerHeader from "../common/trainer-header";
import TrainerprofileHead from "../layout/profile setting/profilesettings-head";
import TrainerprofileHeader from "../layout/profile setting/profile-header";
import TrainermyDetails from "../layout/profile setting/trainer-mydetails";
import TrainerchangePassword from "../layout/profile setting/change-password";

function TrainerprofileSettings() {
    return (
        <div>
            <div>
                <TrainerSidebar />
                <div className="dashboard-main-wrapper">
                    <TrainerHeader />
                    <div className="dashboard-body">
                        <TrainerprofileHead />
                        <TrainerprofileHeader />
                        <div className="tab-content" id="pills-tabContent">
                            <TrainermyDetails />
                            <TrainerchangePassword />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrainerprofileSettings;