import React, { useState } from "react";
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        const meetingData = {
            webinarTitle,
            trainerName,
            startDate,
            startTime,
            endTime,
            category,
            course,
            timezone,
        };

        try {
            const response = await axios.post("https://lms-backend-ylpd.onrender.com/meeting/createMeeting", meetingData);
            setResponseMessage("Meeting created successfully!");
            setShowModal(true);
        } catch (error) {
            setResponseMessage("Error creating meeting.");
            setShowModal(true);
        }
    };

    const closeModal = () => {
        setShowModal(false);
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
                                    <input
                                        type="text"
                                        className="form-control radius-8"
                                        placeholder="Enter Trainer Name"
                                        value={trainerName}
                                        onChange={(e) => setTrainerName(e.target.value)}
                                    />
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

                                {/* Categories */}
                                <div className="col-md-6 mb-20">
                                    <label className="form-label fw-semibold text-primary-light text-sm mb-8">Category:</label>
                                    <select
                                        className="form-select py-9 text-15"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    >
                                        <option value="" disabled>
                                            Select Category
                                        </option>
                                            <option value="Web Development">Web Development</option>
                                            <option value="Web Designing">Web Designing</option>
                                            <option value="Data Science">Data Science</option>
                                            <option value="Artificial Intelligence">Artificial Intelligence</option>
                                            <option value="Cloud Computing">Cloud Computing</option>
                                            <option value="Database">Database</option>
                                            <option value="Software Testing">Software Testing</option>
                                            <option value="Data Analytics">Data Analytics</option>
                                            <option value="Mobile App">Mobile App</option>
                                            <option value="UI/UX">UI/UX</option>
                                            <option value="UI/UX">Cyber Security</option>
                                    </select>
                                </div>

                                {/* Courses */}
                                <div className="col-md-6 mb-20">
                                    <label className="form-label fw-semibold text-primary-light text-sm mb-8">Course:</label>
                                    <select
                                        className="form-select py-9 text-15"
                                        value={course}
                                        onChange={(e) => setCourse(e.target.value)}
                                    >
                                        <option value="" disabled>
                                            Select Course
                                        </option>
                                        <option value="React Js">React Js</option>
                                        <option value="Node Js">Node Js</option>
                                        <option value="Java">Java</option>
                                        <option value="Python">Python</option>
                                        <option value="Artificial Intelligence">Artificial Intelligence</option>
                                        <option value="Data Science">Data Science</option>
                                        <option value="Data Analytics">Data Analytics</option>
                                        <option value="Cyber Security">Cyber Security</option>
                                    </select>
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