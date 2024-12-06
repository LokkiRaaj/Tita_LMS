import React from "react";
import TrainerDashboardSidebar from "../tdsidebar";
import Header from "../../../common/header";
import MycoursesHead from "./mycourses-head";
import MycoursesList from "./mycourses-list";

function Mycourses() {
    return (
        <>
            <div>
                <TrainerDashboardSidebar />
                <div className="dashboard-main-wrapper">
                    <Header />
                    <div className="dashboard-body">
                        <MycoursesHead />
                        <div className="row gy-4">
                            <MycoursesList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Mycourses;