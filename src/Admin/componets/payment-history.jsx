import React from "react";
import AdminSidebar from "../common/sidebar";
import AdminHeader from "../common/header";
import PaymentsList from "../layout/Payment/payment-list";



function PaymentHistory() {
    return (
        <div>
            <AdminSidebar />
            <div className="dashboard-main-wrapper">
                <AdminHeader />
                <div className="dashboard-body">
                    <h4 className="py-2">Payment History</h4>
                    <PaymentsList />
                </div>

            </div>
        </div>
    );
}

export default PaymentHistory;