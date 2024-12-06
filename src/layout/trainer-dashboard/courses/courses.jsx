import React from "react";
import TrainerDashboardSidebar from "../tdsidebar";
import Header from "../../../common/header";
import Homebody2 from "../../home/homebody2";
import TrainerCoursesHead from "./courses-head";

function TrainerCourses() {
    return (
        <>
            <div>
                <TrainerDashboardSidebar />
                <div className="dashboard-main-wrapper">
                    <Header />
                    <div className="dashboard-body">
                        <TrainerCoursesHead />
                        <div className="row gy-4">
                            <Homebody2 />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TrainerCourses;