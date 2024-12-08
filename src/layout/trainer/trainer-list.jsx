import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function TrainerList() {
    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        const fetchTrainers = async () => {
            try {
                const response = await axios.get("http://192.168.1.6:4000/trainer/getTrainers");
                setTrainers(response.data.trainers);
            } catch (error) {
                console.error("Error fetching trainers:", error);
            }
        };

        fetchTrainers();
    }, []);

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
                                    <th className="h6 text-gray-300">City</th>
                                    <th className="h6 text-gray-300">My Courses</th>
                                    <th className="h6 text-gray-300">Resume</th>
                                </tr>
                            </thead>
                            <tbody>
                                {trainers.map((trainer, index) => (
                                    <tr key={trainer._id}>
                                        <td className="fixed-width">
                                            <div className="form-check">
                                                <input className="form-check-input border-gray-200 rounded-4" type="checkbox" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex-align gap-8">
                                                <img src={trainer.image} alt={trainer.firstname} className="w-40 h-40 rounded-circle" />
                                                <span className="h6 mb-0 fw-medium text-gray-300">{trainer.firstname} {trainer.lastname}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="h6 mb-0 fw-medium text-gray-300">{trainer.mailId}</span>
                                        </td>
                                        <td>
                                            <span className="h6 mb-0 fw-medium text-gray-300">{trainer.mobileNumber}</span>
                                        </td>
                                        <td>
                                            <span className="h6 mb-0 fw-medium text-gray-300">{trainer.city}</span>
                                        </td>
                                        <td>
                                            <span className="h6 mb-0 fw-medium text-gray-300">
                                                {trainer.myCourse}
                                            </span>
                                        </td>
                                        <td>
                                            <a href={trainer.resume} target="_blank" rel="noopener noreferrer" className="bg-main-50 text-main-600 py-2 px-14 rounded-pill hover-bg-main-600 hover-text-white">View Resume</a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="card-footer flex-between flex-wrap" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <div>
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
