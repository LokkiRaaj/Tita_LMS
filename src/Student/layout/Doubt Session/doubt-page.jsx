import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const courses = [
    {
        id: 1,
        image: "assets/images/thumbs/trainer.jpg",
        trainerName: "Mani",
        category: "Web Development",
        title: "React JS",
        batch: "Batch 1",
    },
    {
        id: 2,
        image: "assets/images/thumbs/trainer.jpg",
        trainerName: "Lokki",
        category: "Web Development",
        title: "Node JS",
        batch: "Batch 2",
    },
    {
        id: 3,
        image: "assets/images/thumbs/trainer.jpg",
        trainerName: "Saravana",
        category: "Web Development",
        title: "Java",
        batch: "Batch 3",
    },
    {
        id: 4,
        image: "assets/images/thumbs/trainer.jpg",
        trainerName: "Mohan",
        category: "Data Science",
        title: "Data Science",
        batch: "Batch 4",
    },
];

function StudentdoubtsessionPage() {
    const [selectedCourse, setSelectedCourse] = useState("");
    const [selectedTrainer, setSelectedTrainer] = useState("");
    const [selectedBatch, setSelectedBatch] = useState("");
    const [filterActive, setFilterActive] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [currentCourse, setCurrentCourse] = useState(null);
    const [selectedTime, setSelectedTime] = useState("");

    const timeSlots = ["10:00 AM", "11:00 AM", "12:00 PM", "02:00 PM", "03:00 PM", "04:00 PM"];

    const courseTitles = [...new Set(courses.map((course) => course.title))];
    const trainers = [...new Set(courses.map((course) => course.trainerName))];
    const batches = [...new Set(courses.map((course) => course.batch))];

    const filteredCourses = courses.filter((course) => {
        return (
            (!selectedCourse || course.title === selectedCourse) &&
            (!selectedTrainer || course.trainerName === selectedTrainer) &&
            (!selectedBatch || course.batch === selectedBatch)
        );
    });

    const handleBookMeeting = (course) => {
        setCurrentCourse(course);
        setShowPopup(true);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        setSelectedTime(""); // Reset time selection when date changes
    };

    const handlePopupClose = () => {
        setShowPopup(false);
        setCurrentCourse(null);
        setSelectedDate(null);
        setSelectedTime("");
    };

    return (
        <div className="card mt-24">
            <div className="card-body">
                <div className="mb-20 flex-between flex-wrap gap-8">
                    <h4 className="mb-0">Doubt Session</h4>
                </div>

                {/* Only show the course filter section if no popup is active */}
                {!showPopup && (
                    <>
                        <div className="row g-20 mb-20">
                            <div className="col-xxl-4 col-lg-4 col-sm-6">
                                <select className="form-select" value={selectedCourse}
                                    onChange={(e) => setSelectedCourse(e.target.value)}
                                >
                                    <option value="">Select Course</option>
                                    {courseTitles.map((title) => (
                                        <option key={title} value={title}>
                                            {title}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-xxl-4 col-lg-4 col-sm-6">
                                <select className="form-select" value={selectedTrainer}
                                    onChange={(e) => setSelectedTrainer(e.target.value)}
                                >
                                    <option value="">Select Trainer</option>
                                    {trainers.map((trainer) => (
                                        <option key={trainer} value={trainer}>
                                            {trainer}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-xxl-4 col-lg-4 col-sm-6">
                                <select className="form-select" value={selectedBatch}
                                    onChange={(e) => setSelectedBatch(e.target.value)}
                                >
                                    <option value="">Select Batch</option>
                                    {batches.map((batch) => (
                                        <option key={batch} value={batch}>
                                            {batch}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="text-center mb-20">
                            <button className="btn btn-main" onClick={() => setFilterActive(true)}>
                                Continue
                            </button>
                        </div>
                    </>
                )}

                {filterActive && !showPopup && (
                    <div className="row g-20">
                        {filteredCourses.length > 0 ? (
                            filteredCourses.map((course) => (
                                <div key={course.id} className="col-xxl-3 col-lg-4 col-sm-6">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="bg-main-100 rounded-8 overflow-hidden text-center mb-8 h-164 flex-center p-8">
                                                <img src={course.image} alt="Course" style={{ maxWidth: "100%", maxHeight: "100%" }} />
                                            </div>
                                            <div>
                                                <h5>{course.trainerName}</h5>
                                                <h6>{course.title}</h6>
                                                <p>{course.batch}</p>
                                                <button className="btn btn-outline-main rounded-pill py-9"
                                                    onClick={() => handleBookMeeting(course)}>
                                                    Book Meeting
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className="text-center">No courses found</p>
                        )}
                    </div>
                )}

                {/* Popup with Calendar and Time Slots Inside the Calendar Box */}
                {showPopup && (
                    <div className="popup" style={{ position: "fixed", top: 0, left: 0, width: "100vw", height: "100vh", backgroundColor: "rgba(0,0,0,0.5)", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <div className="popup-content" style={{ backgroundColor: "#fff", borderRadius: "8px", padding: "20px", display: "flex", flexDirection: "column", maxWidth: "800px", width: "100%" }}>
                            {/* Calendar and Time Selection */}
                            <h3>{currentCourse?.title}</h3>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                {/* Calendar on the left */}
                                <div style={{ marginBottom: "20px" }}>
                                    <Calendar value={selectedDate} onChange={handleDateChange} />
                                </div>

                                {/* Time slots inside the calendar box */}
                                {selectedDate && (
                                    <>
                                        <h4>Available Time Slots</h4>
                                        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center" }}>
                                            {timeSlots.map((time, index) => (
                                                <button
                                                    key={index}
                                                    className={`btn ${selectedTime === time ? "btn-main" : "btn-outline-main"}`}
                                                    onClick={() => setSelectedTime(time)}>
                                                    {time}
                                                </button>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
                                <button className="btn btn-secondary" onClick={handlePopupClose}>
                                    Cancel
                                </button>
                                <button
                                    className="btn btn-main"
                                    disabled={!selectedTime}
                                    onClick={() => {
                                        alert(`Meeting booked for ${selectedDate.toDateString()} at ${selectedTime}`);
                                        handlePopupClose();
                                    }}>
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default StudentdoubtsessionPage;
