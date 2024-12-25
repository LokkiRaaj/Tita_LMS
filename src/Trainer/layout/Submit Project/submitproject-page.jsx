import React from "react";

function SubmitprojectPage() {

    const students = [
        {
            name: "Lokkesh",
            course: "React Js",
            batch: "Batch 1",
            document: "",
            submitDate: "12-12-2024",
            status: "In Progress",
            image: "assets/images/thumbs/student-img1.png",
        },
    ];

    return (
        <div className="card overflow-hidden">
            <div className="card-body p-0 overflow-x-auto">
                <table id="studentTable" className="table table-striped">
                    <thead>
                        <tr style={{ borderBottom: "1px solid #ccc" }}>
                            <th className="h6 text-gray-300">Students</th>
                            <th className="h6 text-gray-300">Course</th>
                            <th className="h6 text-gray-300"> Batch</th>
                            <th className="h6 text-gray-300">Submit Date</th>
                            <th className="h6 text-gray-300"> File</th>
                            <th className="h6 text-gray-300">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={index}>
                                <td>
                                    <div className="flex-align gap-8">
                                        <img
                                            src={student.image}
                                            alt={`${student.name}`}
                                            className="w-40 h-40 rounded-circle"
                                        />
                                        <span className="h6 mb-0 fw-medium text-gray-300">
                                            {student.name}
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <span className="h6 mb-0 fw-medium text-gray-300">
                                        {student.course}
                                    </span>
                                </td>
                                <td>
                                    <span className="h6 mb-0 fw-medium text-gray-300">
                                        {student.batch}
                                    </span>
                                </td>
                                <td>
                                    <span className="h6 mb-0 fw-medium text-gray-300">
                                        {student.submitDate}
                                    </span>
                                </td>
                                <td>
                                    <a href={student.document} target="_blank" rel="noopener noreferrer" className="bg-main-50 text-main-600 py-2 px-14 rounded-pill hover-bg-main-600 hover-text-white">View File</a>
                                </td>
                                <td>
                                    <span
                                        className={`text-13 py-2 px-8 ${student.status === "Completed"
                                            ? "bg-success-50 text-success-600"
                                            : "bg-warning-50 text-warning-600"
                                            } d-inline-flex align-items-center gap-8 rounded-pill`}
                                    >
                                        <span
                                            className={`w-6 h-6 ${student.status === "Completed"
                                                ? "bg-success-600"
                                                : "bg-warning-600"
                                                } rounded-circle flex-shrink-0`}
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

export default SubmitprojectPage;