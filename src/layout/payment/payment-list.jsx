import React from "react";

function PaymentsList() {
    const Payments = [
        {
            name: "Ajith",
            mobilenumber: "9876543210",
            paymentid: "GIC201",
            amount: "$199",
            date: "12/05/2024", // Changed to a string
            status: "Completed",
        },
        {
            name: "Rajesh",
            mobilenumber: "1234567890",
            paymentid: "PIC102",
            amount: "$199",
            date: "22/08/2024", // Changed to a string
            status: "In Progress",
        },
    ];

    return (
        <div className="card overflow-hidden">
            <div className="card-body p-0 overflow-x-auto">
                <table id="studentTable" className="table table-striped">
                    <thead>
                        <tr style={{ borderBottom: "1px solid #ccc" }}>
                            <th className="fixed-width">
                                <div className="form-check">
                                    <input
                                        className="form-check-input border-gray-200 rounded-4"
                                        type="checkbox"
                                        id="selectAll"
                                    />
                                </div>
                            </th>
                            <th className="h6 text-gray-300">Student Name</th>
                            <th className="h6 text-gray-300">Mobile Number</th>
                            <th className="h6 text-gray-300">Payment ID</th>
                            <th className="h6 text-gray-300">Paid Amount</th>
                            <th className="h6 text-gray-300">Date</th>
                            <th className="h6 text-gray-300">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Payments.map((payment, index) => (
                            <tr key={index}>
                                <td className="fixed-width">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input border-gray-200 rounded-4"
                                            type="checkbox"
                                        />
                                    </div>
                                </td>
                                <td>
                                    <div className="flex-align gap-8">
                                        <span className="h6 mb-0 fw-medium text-gray-300">
                                            {payment.name}
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <span className="h6 mb-0 fw-medium text-gray-300">
                                        {payment.mobilenumber}
                                    </span>
                                </td>
                                <td>
                                    <span className="h6 mb-0 fw-medium text-gray-300">
                                        {payment.paymentid}
                                    </span>
                                </td>
                                <td>
                                    <span className="h6 mb-0 fw-medium text-gray-300">
                                        {payment.amount}
                                    </span>
                                </td>
                                <td>
                                    <span className="h6 mb-0 fw-medium text-gray-300">
                                        {payment.date}
                                    </span>
                                </td>
                                <td>
                                    <span
                                        className={`text-13 py-2 px-8 ${
                                            payment.status === "Completed"
                                                ? "bg-success-50 text-success-600"
                                                : "bg-warning-50 text-warning-600"
                                        } d-inline-flex align-items-center gap-8 rounded-pill`}
                                    >
                                        <span
                                            className={`w-6 h-6 ${
                                                payment.status === "Completed"
                                                    ? "bg-success-600"
                                                    : "bg-warning-600"
                                            } rounded-circle flex-shrink-0`}
                                        />
                                        {payment.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="card-footer flex-between flex-wrap"></div>
        </div>
    );
}

export default PaymentsList;
