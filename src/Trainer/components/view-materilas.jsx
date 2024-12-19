import React from "react";
import TrainerSidebar from "../common/trainer-sidebar";
import TrainerHeader from "../common/trainer-header";
import TrainerMaterialsHead from "../layout/Reading materials/materials-head";
import TrainerviewMaterialsPage from "../layout/View Materials/view-materials";


function TrainerviewMaterials() {
    return (
        <div>
            <TrainerSidebar />
            <div className="dashboard-main-wrapper">
                <TrainerHeader />
                <div className="dashboard-body">
                    <TrainerMaterialsHead />
                    <div className="row gy-4">
                        <TrainerviewMaterialsPage />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TrainerviewMaterials;