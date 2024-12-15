import React from "react";
import StudentDashboardSidebar from "../student-sidebar";
import Header from "../../../common/header";
import BadgesHead from "./badges-head";
import BadgesPage from "./badges-page";



function Badges() {
    return (
        <div>
            <StudentDashboardSidebar />
            <div className="dashboard-main-wrapper">
                <Header />
                <div className="dashboard-body">
                    <BadgesHead />
                    <div className="row gy-4">
                        <BadgesPage />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Badges;