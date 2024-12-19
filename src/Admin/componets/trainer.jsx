import React from "react";
import AdminSidebar from "../common/sidebar";
import AdminHeader from "../common/header";
import TrainerHead from "../layout/Trainers List/trainer-head";
import TrainerList from "../layout/Trainers List/trainer-list";


function AdminTrainerPage() {
    return (
        <>
            <div>
                <AdminSidebar/>
                <div className="dashboard-main-wrapper">
                    <AdminHeader/>
                    <div className="dashboard-body">
                        <TrainerHead/>
                        <TrainerList />
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminTrainerPage;