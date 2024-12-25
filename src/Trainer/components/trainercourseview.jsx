import React from "react";
import TrainerSidebar from "../common/trainer-sidebar";
import TrainerHeader from "../common/trainer-header";
import Trainerviewcoursebyid from "../layout/trainerviewcourse/trainerviewcoursebtid";

function Trainerviewcourse() {

    return (
        <>
            <div className="meeting-container">
                <TrainerSidebar />
                <div className="dashboard-main-wrapper">
                    <TrainerHeader />
                    <Trainerviewcoursebyid/>
                </div>
            </div>
        </>
    );
}

export default Trainerviewcourse;