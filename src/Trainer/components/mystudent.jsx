import React from "react";
import TrainerSidebar from "../common/trainer-sidebar";
import TrainerHeader from "../common/trainer-header";
import TrainerstudentsHead from "../layout/My Students/mystudent-head";
import TrainerMystudentsList from "../layout/My Students/mystudent-list";


function TrainermyStudents() {


    return (
        <>
            <div>
                <TrainerSidebar />
                <div className="dashboard-main-wrapper">
                    <TrainerHeader />
                    <div className="dashboard-body">
                        <TrainerstudentsHead />
                        <div className="row gy-4">
                            <TrainerMystudentsList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TrainermyStudents;