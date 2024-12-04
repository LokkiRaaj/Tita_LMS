import React from "react";
import { Link } from "react-router-dom";

function TrainerList() {
    const trainers = [
        { name: "Jane Cooper", email: "example10mail.com", phone: 8855485, courses: 10, status: "In Progress", image: "assets/images/thumbs/student-img1.png" },
        { name: "Guy Hawkins", email: "example10mail.com", phone: 7979855, courses: 12, status: "In Progress", image: "assets/images/thumbs/student-img1.png" },
        // Add more students...
    ];

    return (
        <div className="card">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table">
                        <thead style={{ borderBottom: '1px solid gray' }}>
                            <tr>
                                <th>Select</th>
                                <th></th>
                                <th>Trainer</th>
                                <th>Email ID</th>
                                <th>Phone</th>
                                <th>Courses</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {trainers.map((trainer, index) => (
                                <tr key={index}>
                                    <td><input type="checkbox" /></td>
                                    <td><img src={trainer.image} alt={trainer.name} style={{ width: '50px', height: '50px', borderRadius: '50%' }} /></td>
                                    <td>{trainer.name}</td>
                                    <td>{trainer.email}</td>
                                    <td>{trainer.phone}</td>
                                    <td>{trainer.courses}</td>
                                    <td><span className={`badge ${trainer.status === "Completed" ? "badge-success" : "badge-warning"}`}>{trainer.status}</span></td>
                                    <td><button className="btn btn-primary">View More</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Link to="/create-new-trainer">
                        <button className="btn btn-primary">Create New Trainer</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default TrainerList;