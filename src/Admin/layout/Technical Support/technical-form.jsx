import React from "react";

function AdminTechnicalForm() {
    const Technicals = [
        {
            clientID: "001",
            firstName: "Lokkesh",
            lastName: "Raaj",
            batch: "Batch 1",
            email: "lokkesh@gmail.com",
            issueDate: "2024-12-19",
            closeDate: "2024-12-21",
            status: "Completed",
        },
        {
            clientID: "002",
            firstName: "John",
            lastName: "Doe",
            batch: "Batch 1",
            email: "john.doe@gmail.com",
            issueDate: "2024-12-18",
            closeDate: "",
            status: "In Process",
        }, 
        {
            clientID: "003",
            firstName: "Saravana",
            lastName: "Balaji",
            batch: "",
            email: "saravana.doe@gmail.com",
            issueDate: "2024-12-03",
            closeDate: "",
            status: "In Process",
        },
        {
            clientID: "004",
            firstName: "Monish",
            lastName: "R",
            batch: "",
            email: "monish@gmail.com",
            issueDate: "2024-12-15",
            closeDate: "2024-12-17",
            status: "Completed",
        },
    ];

    return (
        <div className="card overflow-hidden">
            <div className="card-body p-0 overflow-x-auto">
                <table id="studentTable" className="table table-striped">
                    <thead>
                        <tr style={{ borderBottom: "1px solid #ccc" }}>
                            <th className="h6 text-gray-300">Client ID</th>
                            <th className="h6 text-gray-300">First Name</th>
                            <th className="h6 text-gray-300">Last Name</th>
                            <th className="h6 text-gray-300">Batch</th>
                            <th className="h6 text-gray-300">Email ID</th>
                            <th className="h6 text-gray-300">Issue Date</th>
                            <th className="h6 text-gray-300">Close Date</th>
                            <th className="h6 text-gray-300">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Technicals.map((technical, index) => (
                            <tr key={index}>
                                 <td>
                                    <span className="h6 mb-0 fw-medium text-gray-300">
                                        {technical.clientID}
                                    </span>
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
                                    <span className="h6 mb-0 fw-medium text-gray-300">
                                        {technical.closeDate}
                                    </span>
                                </td>
                                <td>
                                    <span
                                        className={`text-13 py-2 px-8 ${technical.status === "Completed"
                                            ? "bg-success-50 text-success-600"
                                            : "bg-warning-50 text-warning-600"
                                            } d-inline-flex align-items-center gap-8 rounded-pill`}
                                    >
                                        <span
                                            className={`w-6 h-6 ${technical.status === "Completed"
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