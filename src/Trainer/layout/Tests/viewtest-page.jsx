import React from "react";

function ViewTestTable() {
    const studentTable = [
        {
            sNo: "001",
            batchNo: "2024001",
            testDate: "31-12-2024",
            testTopic: "React",
            clientId: "2024005",
            studentName: "John Doe",
            testScore: "80%",
            status: "PASS",
        },
        {
            sNo: "002",
            batchNo: "2024002",
            testDate: "01-01-2025",
            testTopic: "Node.js",
            clientId: "2024006",
            studentName: "Jane Smith",
            testScore: "45%",
            status: "FAIL",
        },
    ];

    return (
        <div className="card overflow-hidden">
            <div className="card-body p-0 overflow-x-auto">
                <table id="studentTable" className="table table-striped">
                    <thead>
                        <tr style={{ borderBottom: "1px solid #ccc" }}>
                            <th className="h6 text-gray-300">S.No</th>
                            <th className="h6 text-gray-300">Batch No</th>
                            <th className="h6 text-gray-300">Test Date</th>
                            <th className="h6 text-gray-300">Test Topic</th>
                            <th className="h6 text-gray-300">Client ID</th>
                            <th className="h6 text-gray-300">Student Name</th>
                            <th className="h6 text-gray-300">Test Score</th>
                            <th className="h6 text-gray-300">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentTable.map((student, index) => (
                            <tr key={index}>
                                <td>
                                    <span className="h6 mb-0 fw-medium text-gray-300">
                                        {student.sNo}
                                    </span>
                                </td>
                                <td>
                                    <span className="h6 mb-0 fw-medium text-gray-300">
                                        {student.batchNo}
                                    </span>
                                </td>
                                <td>
                                    <span className="h6 mb-0 fw-medium text-gray-300">
                                        {student.testDate}
                                    </span>
                                </td>
                                <td>
                                    <span className="h6 mb-0 fw-medium text-gray-300">
                                        {student.testTopic}
                                    </span>
                                </td>
                                <td>
                                    <span className="h6 mb-0 fw-medium text-gray-300">
                                        {student.clientId}
                                    </span>
                                </td>
                                <td>
                                    <span className="h6 mb-0 fw-medium text-gray-300">
                                        {student.studentName}
                                    </span>
                                </td>
                                <td>
                                    <span className="h6 mb-0 fw-medium text-gray-300">
                                        {student.testScore}
                                    </span>
                                </td>
                                <td>
                                    <span
                                        className={`text-13 py-2 px-8 d-inline-flex align-items-center gap-8 rounded-pill`}
                                        style={{
                                            backgroundColor:
                                                student.status === "PASS"
                                                    ? "#E6F7E6"
                                                    : "#FFE6E6",
                                            color:
                                                student.status === "PASS"
                                                    ? "#00B812"
                                                    : "#FF001E",
                                        }}
                                    >
                                        <span
                                            className={`w-6 h-6 rounded-circle flex-shrink-0`}
                                            style={{
                                                backgroundColor:
                                                    student.status === "PASS"
                                                        ? "#00B812"
                                                        : "#FF001E",
                                            }}
                                        />
                                        {student.status}
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

export default ViewTestTable;