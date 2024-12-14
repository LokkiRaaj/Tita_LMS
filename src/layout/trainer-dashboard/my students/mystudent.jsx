import React from "react";
import TrainerDashboardSidebar from "../tdsidebar";
import Header from "../../../common/header";
import StudentsHead from "./mystudent-head";
import MystudentsList from "./mystudent-list";

function Mystudents() {


    return (
        <>
            <div>
                <TrainerDashboardSidebar />
                <div className="dashboard-main-wrapper">
                    <Header />
                    <div className="dashboard-body">
                        <StudentsHead />
                        <div className="row gy-4">
                            <MystudentsList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Mystudents;