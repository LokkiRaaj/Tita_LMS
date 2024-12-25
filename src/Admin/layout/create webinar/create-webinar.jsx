import React, { useState, useEffect } from "react";
import axios from "axios";
import TimezoneSelect from "react-timezone-select";

function CreateWebinarPage() {
    const [webinarTitle, setWebinarTitle] = useState("");
    const [trainerName, setTrainerName] = useState("");
    const [startDate, setStartDate] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [category, setCategory] = useState("");
    const [course, setCourse] = useState("");
    const [responseMessage, setResponseMessage] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [timezone, setTimezone] = useState("");
    const [courseLevel, setCourseLevel] = useState("");
    const [trainers, setTrainers] = useState([]);
    const [courses, setCourses] = useState([]);
    
    // New state variables for selected IDs
    const [selectedTrainerId, setSelectedTrainerId] = useState("");
    const [selectedCourseId, setSelectedCourseId] = useState("");

    useEffect(() => {
        const fetchTrainers = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}trainer/getTrainers`);
                setTrainers(response.data.trainers);
            } catch (error) {
                console.error("Error fetching trainers:", error);
            }
        };

        fetchTrainers();
    }, []);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}courses/getAllCourses`);
                setCourses(response.data.courses);
            } catch (error) {
                console.error("Error fetching courses:", error);
            }
        };

        fetchCourses();
    }, []);

    const closeModal = () => {
        setShowModal(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent the default form submission
        const webinarData = {
            webinarTitle: webinarTitle,
            date: startDate,
            time: startTime,
            course: selectedCourseId,
            courseLevel: courseLevel,
            timeZone: timezone,
            trainerName: selectedTrainerId
        };

        try {
            const response = await axios.post("http://192.168.1.12:4000/webinar/createWebinar", webinarData);
            setResponseMessage("created webinar");
            setShowModal(true);
        } catch (error) {
            console.error("Error creating webinar:", error);
            setResponseMessage("Failed to create webinar.");
            setShowModal(true);
        }
    };

    return (
        <>
            <div className="card">
                <form onSubmit={handleSubmit}>
                    <div className="modal-content radius-16 bg-base">
                        <div className="modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0">
                            <h1 className="modal-title fs-5">Create Webinar</h1>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {/* Webinar Title */}
                                <div className="col-12 mb-20">
                                    <label className="form-label fw-semibold text-primary-light text-sm mb-8">
                                        Webinar Title:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control radius-8"
                                        placeholder="Enter Webinar Title"
                                        value={webinarTitle}
                                        onChange={(e) => setWebinarTitle(e.target.value)}
                                    />
                                </div>

                                {/* Trainer Name */}
                                <div className="col-md-6 mb-20">
                                    <label className="form-label fw-semibold text-primary-light text-sm mb-8">
                                        Trainer Name:
                                    </label>
                                    <select
                                        className="form-select radius-8"
                                        value={trainerName}
                                        onChange={(e) => {
                                            setTrainerName(e.target.value);
                                            const selectedTrainer = trainers.find(trainer => trainer.firstname === e.target.value);
                                            setSelectedTrainerId(selectedTrainer ? selectedTrainer._id : "");
                                        }}
                                    >
                                        <option value="" disabled>Select Trainer</option>
                                        {trainers.map((trainer) => (
                                            <option key={trainer._id} value={trainer.firstname}>{trainer.firstname}&nbsp;{trainer.lastname}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Start Date */}
                                <div className="col-md-6 mb-20">
                                    <label className="form-label fw-semibold text-primary-light text-sm mb-8">
                                        Start Date:
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control radius-8"
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                    />
                                </div>

                                {/* Start Time */}
                                <div className="col-md-6 mb-20">
                                    <label className="form-label fw-semibold text-primary-light text-sm mb-8">
                                        Start Time:
                                    </label>
                                    <input
                                        type="time"
                                        className="form-control radius-8"
                                        value={startTime}
                                        onChange={(e) => setStartTime(e.target.value)}
                                    />
                                </div>

                                {/* End Time */}
                                <div className="col-md-6 mb-20">
                                    <label className="form-label fw-semibold text-primary-light text-sm mb-8">
                                        End Time:
                                    </label>
                                    <input
                                        type="time"
                                        className="form-control radius-8"
                                        value={endTime}
                                        onChange={(e) => setEndTime(e.target.value)}
                                    />
                                </div>


                                {/* Courses */}
                                <div className="col-md-6 mb-20">
                                    <label className="form-label fw-semibold text-primary-light text-sm mb-8">Course:</label>
                                    <select
                                        className="form-select py-9 text-15"
                                        value={course}
                                        onChange={(e) => {
                                            setCourse(e.target.value);
                                            const selectedCourse = courses.find(courseItem => courseItem.courseTitle === e.target.value);
                                            setSelectedCourseId(selectedCourse ? selectedCourse._id : "");
                                        }}
                                    >
                                        <option value="" disabled>
                                            Select Course
                                        </option>
                                        {courses.map((courseItem) => (
                                            <option key={courseItem._id} value={courseItem.courseTitle}>{courseItem.courseTitle}</option>
                                        ))}
                                    </select>
                                </div>

                                {/* Course Level */}
                                <div className="col-md-6 mb-20">
                                    <label className="form-label fw-semibold text-primary-light text-sm mb-8">Course Level:</label>
                                    <input
                                        type="text"
                                        className="form-control radius-8"
                                        placeholder="Enter Course Level"
                                        value={courseLevel}
                                        onChange={(e) => setCourseLevel(e.target.value)}
                                    />
                                </div>

                                {/* Time Zone */}
                                <div className="col-md-6 mb-20">
                                    <label className="form-label fw-semibold text-primary-light text-sm mb-8">Time Zone:</label>
                                    <TimezoneSelect
                                        value={timezone}
                                        onChange={setTimezone}
                                        className="form-select py-9 text-15"
                                    />
                                </div>

                                {/* Buttons */}
                                <div className="d-flex align-items-center justify-content-center gap-8 mt-24">
                                    <button type="reset" className="btn bg-danger-600 text-md px-24 py-12 radius-8">
                                        Cancel
                                    </button>
                                    <button type="submit" className="btn bg-main-600 text-md px-24 py-12 radius-8">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal fade show" style={{ display: "block" }} tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Response</h5>
                                <button type="button" className="close" onClick={closeModal}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <p>{responseMessage}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default CreateWebinarPage;