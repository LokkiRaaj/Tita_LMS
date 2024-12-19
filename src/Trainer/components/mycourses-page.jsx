import React from "react";
import TrainerSidebar from "../common/trainer-sidebar";
import TrainerHeader from "../common/trainer-header";
import TrainerMycoursesHead from "../layout/My Courses/mycourses-head";
import TrainerMycoursesList from "../layout/My Courses/mycourses-list";


function TrainerMycourses() {
    return (
        <>
            <div>
                <TrainerSidebar />
                <div className="dashboard-main-wrapper">
                    <TrainerHeader />
                    <div className="dashboard-body">
                        <TrainerMycoursesHead />
                        <div className="row gy-4">
                            <TrainerMycoursesList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TrainerMycourses;