import React, { useState } from "react";
import axios from "axios";
import TrainerSidebar from "../common/sidebar";
import Header from "../common/header";

function NewSchedule() {
    const [meetingTitle, setMeetingTitle] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [courseCategory, setCourseCategory] = useState("");
    const [courseLevel, setCourseLevel] = useState("");
    const [responseMessage, setResponseMessage] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const meetingData = {
            meetingTitle,
            date,
            time,
            courseCategory,
            courseLevel,
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
            <div>
                <TrainerSidebar />
                <div className="dashboard-main-wrapper">
                    <Header />

                    <div className="dashboard-body">
                        {/* Breadcrumb Start */}
                        <div className="breadcrumb mb-24">
                            <ul className="flex-align gap-4">
                                <li>
                                    <a href="/" className="text-gray-200 fw-normal text-15 hover-text-main-600">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <span className="text-gray-500 fw-normal d-flex">
                                        <i className="ph ph-caret-right" />
                                    </span>
                                </li>
                                <li>
                                    <span className="text-main-600 fw-normal text-15">New Schedule</span>
                                </li>
                            </ul>
                        </div>
                        <div className="card">
                            <form onSubmit={handleSubmit}>
                                <div className="modal-content radius-16 bg-base">
                                    <div className="modal-header py-16 px-24 border border-top-0 border-start-0 border-end-0">
                                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                                            Add New Schedule
                                        </h1>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-12 mb-20">
                                                <label className="form-label fw-semibold text-primary-light text-sm mb-8">
                                                    Meeting Title:
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control radius-8"
                                                    placeholder="Enter Meeting Title"
                                                    value={meetingTitle}
                                                    onChange={(e) => setMeetingTitle(e.target.value)}
                                                />
                                            </div>
                                            
                                            
                                            <div className="col-md-6 mb-20">
                                                <label htmlFor="startDate" className="form-label fw-semibold text-primary-light text-sm mb-8">
                                                    Date:
                                                </label>
                                                <div className="position-relative">
                                                    <input
                                                        className="form-control radius-8 bg-base"
                                                        id="startDate"
                                                        type="date"
                                                        value={date}
                                                        onChange={(e) => setDate(e.target.value)}
                                                    />
                                                    <span className="position-absolute end-0 top-50 translate-middle-y me-12 line-height-1" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-20">
                                                <label htmlFor="time" className="form-label fw-semibold text-primary-light text-sm mb-8">
                                                    Time:
                                                </label>
                                                <div className="position-relative">
                                                    <input
                                                        className="form-control radius-8 bg-base"
                                                        id="time"
                                                        type="time"
                                                        value={time}
                                                        onChange={(e) => setTime(e.target.value)}
                                                    />
                                                    <span className="position-absolute end-0 top-50 translate-middle-y me-12 line-height-1" />
                                                </div>
                                            </div>


                                            <div className="col-md-6 mb-20">
                                        <label htmlFor="courseCategory" className="form-label fw-semibold text-primary-light text-sm mb-8">Course Category</label>
                                        <div className="position-relative">
                                            <select 
                                                id="courseCategory" 
                                                className="form-select py-9 placeholder-13 text-15"
                                                value={courseCategory}
                                                onChange={(e) => setCourseCategory(e.target.value)}
                                            >
                                                <option value="" disabled>Select course category</option>
                                                <option value="Web Development">Web Development</option>
                                                <option value="Web Designing">Web Designing</option> 
                                                <option value="Data Science">Data Science</option>
                                                <option value="Artificial Intelligence">Artificial Intelligence</option>
                                                <option value="Cloud Computing">Cloud Computing</option>
                                                <option value="Database">Database</option>
                                                <option value="Software Testing">Software Testing</option>
                                                <option value="Microsoft">Microsoft</option>
                                                <option value="Data Analytics">Data Analytics</option>
                                                <option value="Mobile App">Mobile App</option>
                                                <option value="UI/UX">UI/UX</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-20">
                                        <label htmlFor="courseLevel" className="form-label fw-semibold text-primary-light text-sm mb-8">Course Level</label>
                                        <div className="position-relative">
                                            <select 
                                                id="courseLevel" 
                                                className="form-select py-9 placeholder-13 text-15"
                                                value={courseLevel}
                                                onChange={(e) => setCourseLevel(e.target.value)}
                                            >
                                                <option value="" disabled>Select course level</option>
                                                <option value="Advanced">Advanced</option>
                                                <option value="Intermediate">Intermediate</option>
                                                <option value="Beginner">Beginner</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-20">
                                        <label htmlFor="courseTime" className="form-label fw-semibold text-primary-light text-sm mb-8">Course Time</label>
                                        <div className="position-relative">
                                            <select id="courseTime" className="form-select py-9 placeholder-13 text-15">
                                                <option value={1} disabled selected>Enter course category</option>
                                                <option value={2}>2 Hours</option>
                                                <option value={2}>3 Hours</option>
                                            </select>
                                        </div>
                                    </div>

                                            <div className="d-flex align-items-center justify-content-center gap-8 mt-24">
                                                <button
                                                    type="reset"
                                                    className="btn bg-danger-600 hover-bg-danger-800 border-danger-600 hover-border-danger-800 text-md px-24 py-12 radius-8"
                                                >
                                                    Cancel
                                                </button>
                                                <button
                                                    type="submit"
                                                    className="btn bg-main-600 hover-bg-main-800 border-main-600 hover-border-main-800 text-md px-24 py-12 radius-8"
                                                >
                                                    Save
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

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

export default NewSchedule;
