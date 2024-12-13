import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Ensure useLocation is imported
import DashboardSidebar from "../common/sidebar";
import Header from "../common/header";

function ViewCourse() {
    const [courseDetails, setCourseDetails] = useState(null); // State to hold course details
    const query = new URLSearchParams(useLocation().search); // Get query parameters
    const courseId = query.get("id"); // Extract the course ID from the query parameters

    useEffect(() => {
        const fetchCourseDetails = async () => {
            if (courseId) {
                try {
                    const response = await fetch(`https://lms-backend-ylpd.onrender.com/courses/getCourseById/${courseId}`); // Use the course ID in the API call
                    const data = await response.json();
                    setCourseDetails(data.course); // Set the course details
                } catch (error) {
                    console.error("Error fetching course details:", error);
                }
            }
        };

        fetchCourseDetails();
    }, [courseId]); // Run the effect when courseId changes

    return (
        <>
            <div className="meeting-container">
                <DashboardSidebar />
                <div className="dashboard-main-wrapper">
                    <Header />
                    <div className="dashboard-body">
                        {/* Breadcrumb Start */}
                        <div className="breadcrumb mb-24">
                            <ul className="flex-align gap-4">
                                <li>
                                    <a
                                        href="index.html"
                                        className="text-gray-200 fw-normal text-15 hover-text-main-600"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <span className="text-gray-500 fw-normal d-flex">
                                        <i className="ph ph-caret-right" />
                                    </span>
                                </li>
                                <li>
                                    <span className="text-main-600 fw-normal text-15">
                                        Course Details
                                    </span>
                                </li>
                            </ul>
                        </div>
                        {/* Breadcrumb End */}
                        <div className="row gy-4">
                            <div className="col-md-8">
                                {/* Course Card Start */}
                                <div className="card">
                                    <div className="card-body p-lg-20 p-sm-3">
                                        <div className="flex-between flex-wrap gap-12 mb-20">
                                            <div>
                                                <h3 className="mb-4">{courseDetails?.courseTitle}</h3>
                                                <span className="text-main-600 fw-bold">{courseDetails?.courseCategory}</span> {/* Display course category */}
                                            </div>
                                        </div>
                                        <div className="rounded-16 overflow-hidden">
                                            {courseDetails?.courseVideo && (
                                                <video
                                                    id="player"
                                                    className="player"
                                                    playsInline
                                                    controls
                                                    style={{ width: '100%', height: 'auto', objectFit: 'cover' }} // Ensure video fits the container
                                                >
                                                    <source
                                                        src={courseDetails.courseVideo}
                                                        type="video/mp4"
                                                    />
                                                    <source
                                                        src={courseDetails.courseVideo}
                                                        type="video/webm"
                                                    />
                                                    Your browser does not support the video tag.
                                                </video>
                                            )}
                                            {!courseDetails?.courseVideo && (
                                                <p className="text-gray-300">No video available for this course.</p>
                                            )}
                                        </div>
                                        <div className="mt-24">
                                            <h5 className="mb-12 fw-bold">About this course</h5>
                                            <p className="text-gray-300 text-15">
                                                {courseDetails?.courseDescription}
                                            </p>
                                            <p className="text-gray-300 text-15">
                                                Duration: {courseDetails?.courseDuration} hours
                                            </p>
                                            <p className="text-gray-300 text-15">
                                                Seats Available: {courseDetails?.courseSeat}
                                            </p>
                                            <p className="text-gray-300 text-15">
                                                Amount: ${courseDetails?.courseAmount}
                                            </p>
                                        </div></div></div></div>
                            <div className="col-md-4">
                                <div className="card">
                                    <div className="card-body p-lg-20 p-sm-3">
                                        <div className="course-item">

                                            <h5 className="mb-12 fw-bold">Attachments</h5>
                                            <ul>
                                                {courseDetails?.courseAttachment.map((attachment, index) => (
                                                    <li key={index}>
                                                        <a href={attachment} target="_blank" rel="noopener noreferrer">
                                                            Download Attachment {index + 1}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* Course Card End */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ViewCourse;