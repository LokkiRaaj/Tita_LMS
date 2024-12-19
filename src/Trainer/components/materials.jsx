import React from "react";
import TrainerSidebar from "../common/trainer-sidebar";
import TrainerHeader from "../common/trainer-header";
import TrainerMaterialsHead from "../layout/Reading materials/materials-head";
import TrainerMaterialsPage from "../layout/Reading materials/creatematerials-page";

function TrainerMaterials() {
    return (
        <div>
            <TrainerSidebar />
            <div className="dashboard-main-wrapper">
                <TrainerHeader />
                <div className="dashboard-body">
                    <TrainerMaterialsHead />
                    <div className="row gy-4">
                        <TrainerMaterialsPage />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrainerMaterials;