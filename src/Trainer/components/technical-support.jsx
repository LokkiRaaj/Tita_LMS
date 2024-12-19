import React from "react";
import TrainerSidebar from "../common/trainer-sidebar";
import TrainerHeader from "../common/trainer-header";
import TrainerTeachnicalsupportHead from "../layout/Technical Support/technical-head";
import TrainerTechnicalSupportForm from "../layout/Technical Support/technical-form";

function TrainerTeachnicalsupports() {
    return (
        <>
            <div>
                <TrainerSidebar />
                <div className="dashboard-main-wrapper">
                    <TrainerHeader />
                    <div className="dashboard-body">
                        <TrainerTeachnicalsupportHead />
                        <div className="row gy-4">
                            <TrainerTechnicalSupportForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TrainerTeachnicalsupports;