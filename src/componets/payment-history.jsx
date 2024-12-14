import React from "react";
import DashboardSidebar from "../common/sidebar";
import Header from "../common/header";
import PaymentsList from "../layout/payment/payment-list";


function PaymentHistory() {
    return (
        <div>
            <DashboardSidebar />
            <div className="dashboard-main-wrapper">
                <Header />
                <div className="dashboard-body">
                <h4 className="py-2">Payment History</h4>
                    <PaymentsList />
                </div>

            </div>
        </div>
    );
}

export default PaymentHistory;