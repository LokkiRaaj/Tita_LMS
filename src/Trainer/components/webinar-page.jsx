import React from "react";
import TrainerSidebar from "../common/trainer-sidebar";
import TrainerHeader from "../common/trainer-header";
import TrainerwebinarCalendar from "../layout/Webinar/trainer-webinar";


function TrainerWebinarPage() {
    return (
        <>
            <div className="meeting-container">
                <TrainerSidebar />
                <div className="dashboard-main-wrapper">
                    <TrainerHeader />
                    <div className="dashboard-body">
                        <TrainerwebinarCalendar />
                    </div>
                </div>
            </div>
        </>
    );
}

export default TrainerWebinarPage;