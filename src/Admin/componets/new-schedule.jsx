import React, { useState } from "react";
import AdminSidebar from "../common/sidebar";
import AdminHeader from "../common/header";
import NewScheduleHead from "../layout/New Schedule/newschedule-head";
import CreatenewSchedule from "../layout/New Schedule/createnew-schedule";


function NewSchedule() {
    return (
        <>
            <div>
                <AdminSidebar/>
                <div className="dashboard-main-wrapper">
                    <AdminHeader/>
                    <div className="dashboard-body">
                        <NewScheduleHead />
                        <CreatenewSchedule />
                    </div>
                </div>
            </div>
        </>
    );
}

export default NewSchedule;
