import React from "react";
import DashboardSidebar from "../common/sidebar";
import Header from "../common/header";
import Homebody1 from "../layout/home/homebody1";
import Categorys from "../layout/home/categorys";

function Home() {
    return (
        <>
            <div>
                <DashboardSidebar />

                <div className="dashboard-main-wrapper">
                    <Header />
                    <div className="dashboard-body">
                        <div className="row gy-4">
                            <Homebody1 />
                            {/* Top Course Start */}
                            <Categorys />
                        </div>
                    </div>
                    <div className="dashboard-footer">
                        <div className="flex-between flex-wrap gap-16">
                            <p className="text-gray-300 text-13 fw-normal"> © Copyright Edmate 2024, All Right Reserverd</p>
                            <div className="flex-align flex-wrap gap-16">
                                <a href="" className="text-gray-300 text-13 fw-normal hover-text-main-600 hover-text-decoration-underline">License</a>
                                <a href="" className="text-gray-300 text-13 fw-normal hover-text-main-600 hover-text-decoration-underline">More Themes</a>
                                <a href="" className="text-gray-300 text-13 fw-normal hover-text-main-600 hover-text-decoration-underline">Documentation</a>
                                <a href="" className="text-gray-300 text-13 fw-normal hover-text-main-600 hover-text-decoration-underline">Support</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;