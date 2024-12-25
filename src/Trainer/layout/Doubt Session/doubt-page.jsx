import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";

const courses = [
    {
        id: 1,
        image: "assets/images/thumbs/trainer.jpg",
        trainerName: "Mani",
        category: "Web Development",
        title: "React JS",
        batch: "Batch 1",
        time: "10:00 AM",
    },
    {
        id: 2,
        image: "assets/images/thumbs/trainer.jpg",
        trainerName: "Lokki",
        category: "Web Development",
        title: "Node JS",
        batch: "Batch 2",
        time: "11:00 AM",
    },
    {
        id: 3,
        image: "assets/images/thumbs/trainer.jpg",
        trainerName: "Saravana",
        category: "Web Development",
        title: "Java",
        batch: "Batch 3",
        time: "12:00 PM",
    },
];

function TrainerdoubtsessionPage() {
    const [selectedCourse, setSelectedCourse] = useState(null);

    const handleBookMeeting = (course) => {
        alert(`Meeting booked for ${course.title} at ${course.time}`);
    };

    return (
        <div className="card mt-24">
            <div className="card-body">
                <div className="mb-20 flex-between flex-wrap gap-8">
                    <h4 className="mb-0">Student Profile</h4>
                </div>

                <div className="row g-20">
                    {courses.map((course) => (
                        <div key={course.id} className="col-xxl-3 col-lg-4 col-sm-6">
                            <div className="card">
                                <div className="card-body border rounded-8">
                                    <div className="bg-main-100 rounded-8 overflow-hidden text-center mb-8 h-164 flex-center p-8">
                                        <img
                                            src={course.image}
                                            alt="Trainer"
                                            style={{ maxWidth: "100%", maxHeight: "100%" }}
                                        />
                                    </div>
                                    <div>
                                        <h5>{course.trainerName}</h5>
                                        <h6>{course.title}</h6>
                                        <p>Category: {course.category}</p>
                                        <p>Batch: {course.batch}</p>
                                        <p>Time: {course.time}</p>
                                        <button
                                            className="btn btn-outline-main rounded-pill py-10 mt-5" 
                                            onClick={() => handleBookMeeting(course)}
                                        >
                                        Meeting
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TrainerdoubtsessionPage;