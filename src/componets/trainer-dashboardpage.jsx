import React from "react";
import TrainerDashboardSidebar from "../layout/trainer-dashboard/tdsidebar";
import Header from "../common/header";
import Categories from "../layout/home/categories";


function TrainerDashboard() {
    return (
        <>
            <div>
                <TrainerDashboardSidebar />
                <div className="dashboard-main-wrapper">
                    <Header />
                    <div className="dashboard-body">
                        <div className="row gy-4">
                            <Categories />
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default TrainerDashboard;