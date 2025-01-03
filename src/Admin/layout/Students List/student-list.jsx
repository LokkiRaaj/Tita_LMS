import React from "react";

function StudentsList() {
    const students = [
        {
            name: "Lokkesh",
            email: "lokkesh@gmail.com",
            mobilenumber: "9876543210",
            batch: "Batch 1",
            enrollcourses: "AI, Data Science",
            certificates: 2,
            status: "Completed",
            image: "assets/images/thumbs/student-img1.png",
        },
        {
            name: "Guy Hawkins",
            email: "example11@mail.com",
            mobilenumber: "1234567890",
            batch: "Batch 2",
            enrollcourses: "React js, Node js, AI",
            certificates: 3,
            status: "In Progress",
            image: "assets/images/thumbs/student-img2.png",
        },
    ];

    return (
        <div className="card overflow-hidden">
            <div className="card-body p-0 overflow-x-auto">
                <table id="studentTable" className="table table-striped">
                    <thead>
                        <tr style={{ borderBottom: "1px solid #ccc" }}>
                            <th className="h6 text-gray-300">Students</th>
                            <th className="h6 text-gray-300">Email ID</th>
                            <th className="h6 text-gray-300">Mobile Number</th>
                            <th className="h6 text-gray-300">Batch</th>
                            <th className="h6 text-gray-300">Enroll Courses</th>
                            <th className="h6 text-gray-300">Certificates</th>
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
                                        {student.email}
                                    </span>
                                </td>
                                <td>
                                    <span className="h6 mb-0 fw-medium text-gray-300">
                                        {student.mobilenumber}
                                    </span>
                                </td>
                                <td>
                                    <span className="h6 mb-0 fw-medium text-gray-300">
                                        {student.batch}
                                    </span>
                                </td>
                                <td>
                                    <span className="h6 mb-0 fw-medium text-gray-300">
                                        {student.enrollcourses}
                                    </span>
                                </td>
                                <td>
                                    <span className="h6 mb-0 fw-medium text-gray-300">
                                        {student.certificates}
                                    </span>
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

export default StudentsList;
