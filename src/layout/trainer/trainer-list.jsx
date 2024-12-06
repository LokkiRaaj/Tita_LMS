import React from "react";
import { Link } from "react-router-dom";

function TrainerList() {
    const trainers = [
        { name: "Jane Cooper", email: "example10mail.com", phone: 8855485, courses: 10, status: "In Progress", image: "assets/images/thumbs/student-img1.png" },
        { name: "Guy Hawkins", email: "example10mail.com", phone: 7979855, courses: 12, status: "In Progress", image: "assets/images/thumbs/student-img1.png" },
        
    ];

    return (
        <div className="dashboard-body">
            <div className="row gy-4">
                <div className="card overflow-hidden">
                    <div className="card-body p-0 overflow-x-auto">
                        <table id="studentTable" className="table table-striped">
                            <thead>
                                <tr style={{ borderBottom: '1px solid #ccc' }}>
                                    <th className="fixed-width">
                                        <div className="form-check">
                                            <input className="form-check-input border-gray-200 rounded-4" type="checkbox" id="selectAll" />
                                        </div>
                                    </th>
                                    <th className="h6 text-gray-300">Trainer Name</th>
                                    <th className="h6 text-gray-300">Email ID</th>
                                    <th className="h6 text-gray-300">Phone</th>
                                    <th className="h6 text-gray-300">Courses</th>
                                    <th className="h6 text-gray-300">Status</th>
                                    <th className="h6 text-gray-300">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {trainers.map((trainer, index) => (
                                    <tr key={index}>
                                        <td className="fixed-width">
                                            <div className="form-check">
                                                <input className="form-check-input border-gray-200 rounded-4" type="checkbox" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex-align gap-8">
                                                <img src={trainer.image} alt className="w-40 h-40 rounded-circle" />
                                                <span className="h6 mb-0 fw-medium text-gray-300">{trainer.name}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="h6 mb-0 fw-medium text-gray-300">{trainer.email}</span>
                                        </td>
                                        <td>
                                            <span className="h6 mb-0 fw-medium text-gray-300">{trainer.phone}</span>
                                        </td>
                                        <td>
                                            <span className="h6 mb-0 fw-medium text-gray-300">{trainer.courses}</span>
                                        </td>
                                        <td>
                                            <span className={`text-13 py-2 px-8 ${trainer.status === "Completed" ? "bg-success-50 text-success-600" : "bg-warning-50 text-warning-600"} d-inline-flex align-items-center gap-8 rounded-pill`}>
                                                <span className={`w-6 h-6 ${trainer.status === "Completed" ? "bg-success-600" : "bg-warning-600"} rounded-circle flex-shrink-0`} />
                                                {trainer.status}
                                            </span>
                                        </td>
                                        <td>
                                            <a href="#" className="bg-main-50 text-main-600 py-2 px-14 rounded-pill hover-bg-main-600 hover-text-white">View More</a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="card-footer flex-between flex-wrap" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <div >
                            <Link to="/create-new-trainer">
                                <button className="btn btn-primary">Create New Trainer</button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default TrainerList;