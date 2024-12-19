import React from "react";

function AdminTechnicalForm() {
    const Technicals = [
        {
            firstName: "Lokkesh",
            lastName: "Raaj",
            batch: "Batch A",
            email: "lokkesh@gmail.com",
            issueDate: "2024-12-19",
            status: "Solve the Issue",
        },
        {
            firstName: "John",
            lastName: "Doe",
            batch: "Batch B",
            email: "john.doe@gmail.com",
            issueDate: "2024-12-18",
            status: "In Process",
        }, {
            firstName: "Saravana",
            lastName: "Balaji",
            batch: "",
            email: "saravana.doe@gmail.com",
            issueDate: "2024-12-03",
            status: "In Process",
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
                            <th className="h6 text-gray-300">First Name</th>
                            <th className="h6 text-gray-300">Last Name</th>
                            <th className="h6 text-gray-300">Batch</th>
                            <th className="h6 text-gray-300">Email ID</th>
                            <th className="h6 text-gray-300">Issue Date</th>
                            <th className="h6 text-gray-300">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Technicals.map((technical, index) => (
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
                                    <span className="h6 mb-0 fw-medium text-gray-300">
                                        {technical.firstName}
                                    </span>
                                </td>
                                <td>
                                    <span className="h6 mb-0 fw-medium text-gray-300">
                                        {technical.lastName}
                                    </span>
                                </td>
                                <td>
                                    <span className="h6 mb-0 fw-medium text-gray-300">
                                        {technical.batch}
                                    </span>
                                </td>
                                <td>
                                    <span className="h6 mb-0 fw-medium text-gray-300">
                                        {technical.email}
                                    </span>
                                </td>
                                <td>
                                    <span className="h6 mb-0 fw-medium text-gray-300">
                                        {technical.issueDate}
                                    </span>
                                </td>
                                <td>
                                    <span
                                        className={`text-13 py-2 px-8 ${technical.status === "Solve the Issue"
                                                ? "bg-success-50 text-success-600"
                                                : "bg-warning-50 text-warning-600"
                                            } d-inline-flex align-items-center gap-8 rounded-pill`}
                                    >
                                        <span
                                            className={`w-6 h-6 ${technical.status === "Solve the Issue"
                                                    ? "bg-success-600"
                                                    : "bg-warning-600"
                                                } rounded-circle flex-shrink-0`}
                                        />
                                        {technical.status}
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

export default AdminTechnicalForm;