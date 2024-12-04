import React from "react";
import TrainerDashboardSidebar from "../layout/trainer-dashboard/tdsidebar";
import Header from "../common/header";
import Homebody2 from "../layout/home/homebody2";


function TrainerDashboard() {
    return (
        <>

            <div>
                <TrainerDashboardSidebar />

                <div className="dashboard-main-wrapper">
                    <Header />
                    <div className="dashboard-body">
                        <div className="row gy-4">
                        <Homebody2 />
                            
                        </div>
                    </div>
                    {/* <div className="dashboard-footer">
                        <div className="flex-between flex-wrap gap-16">
                            <p className="text-gray-300 text-13 fw-normal"> © Copyright Edmate 2024, All Right Reserverd</p>
                            <div className="flex-align flex-wrap gap-16">
                                <a href="" className="text-gray-300 text-13 fw-normal hover-text-main-600 hover-text-decoration-underline">License</a>
                                <a href="" className="text-gray-300 text-13 fw-normal hover-text-main-600 hover-text-decoration-underline">More Themes</a>
                                <a href="" className="text-gray-300 text-13 fw-normal hover-text-main-600 hover-text-decoration-underline">Documentation</a>
                                <a href="" className="text-gray-300 text-13 fw-normal hover-text-main-600 hover-text-decoration-underline">Support</a>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    );
}

export default TrainerDashboard;