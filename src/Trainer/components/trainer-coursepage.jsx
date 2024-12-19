import React from "react";
import TrainerSidebar from "../common/trainer-sidebar";
import TrainerHeader from "../common/trainer-header";
import TrainerCoursesList from "../layout/Course/trainercourses-list";


function TrainerCourses() {
    return (
        <div>
            <TrainerSidebar />
            <div className="dashboard-main-wrapper">
                <TrainerHeader />
                <div className="dashboard-body">
                    <TrainerCoursesList />
                </div>

            </div>
        </div>
    );
}

export default TrainerCourses;