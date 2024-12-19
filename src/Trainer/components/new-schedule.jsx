import React, { useState } from "react";
import TrainerSidebar from "../common/trainer-sidebar";
import TrainerHeader from "../common/trainer-header";
import TrainerNewScheduleHead from "../layout/New Schedules/newschedule-head";
import TrainerCreatenewSchedule from "../layout/New Schedules/createnew-schedule";

function TrainerNewSchedule() {
    return (
        <>
            <div>
                <TrainerSidebar />
                <div className="dashboard-main-wrapper">
                    <TrainerHeader />
                    <div className="dashboard-body">
                        <TrainerNewScheduleHead />
                        <TrainerCreatenewSchedule />
                    </div>
                </div>
            </div>
        </>
    );
}

export default TrainerNewSchedule;