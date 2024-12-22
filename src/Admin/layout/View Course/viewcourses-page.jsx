import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function AdminviewCoursesPage() {
    const [courseDetails, setCourseDetails] = useState(null); // State to hold course details
    const query = new URLSearchParams(useLocation().search); // Get query parameters
    const courseId = query.get("id"); // Extract the course ID from the query parameters

    useEffect(() => {
        const fetchCourseDetails = async () => {
            if (courseId) {
                try {
                    const response = await fetch(`https://lms-backend-ylpd.onrender.com/courses/getCourseById/${courseId}`);
                    const data = await response.json();
                    setCourseDetails(data.course); // Set the course details
                    console.log(data.course); // Debugging the course details
                } catch (error) {
                    console.error("Error fetching course details:", error);
                }
            }
        };

        fetchCourseDetails();
    }, [courseId]); // Run the effect when courseId changes

    return (
        <div className="dashboard-body">
            <div className="row gy-4">
                {/* Left Section for Course Details */}
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body p-lg-20 p-sm-3">
                            {/* Course Header */}
                            <div className="flex-between flex-wrap gap-12 mb-20">
                                <div>
                                    <h3 className="mb-4">{courseDetails?.courseTitle}</h3>
                                </div>
                                <div className="flex-align flex-wrap gap-24">
                                    <span className="py-6 px-16 bg-main-50 text-main-600 rounded-pill text-15">
                                        {courseDetails?.courseCategory}
                                    </span>
                                </div>
                            </div>

                            {/* Video Container */}
                            <div className="video-container" style={{ flex: "1", marginRight: "20px" }}>
                                {courseDetails?.courseVideo && (
                                    <video
                                        id="player"
                                        className="player"
                                        playsInline
                                        controls
                                        style={{ width: "100%", height: "auto", objectFit: "cover" }}
                                    >
                                        <source src={courseDetails.courseVideo} type="video/mp4" />
                                        <source src={courseDetails.courseVideo} type="video/webm" />
                                        Your browser does not support the video tag.
                                    </video>
                                )}
                                {!courseDetails?.courseVideo && (
                                    <p className="text-gray-300">No video available for this course.</p>
                                )}
                            </div>

                            {/* About this Course */}
                            <div className="mt-24">
                                <div className="mb-24 pb-24 border-bottom border-gray-100">
                                    <h5 className="mb-12 fw-bold">About this course</h5>
                                    <p className="text-gray-300 text-15">{courseDetails?.courseDescription}</p>
                                </div>

                                {/* Certification */}
                                <div className="mb-24 pb-24 border-bottom border-gray-100">
                                    <h5 className="mb-12 fw-bold">Certification</h5>
                                    <img
                                        src="/assets/images/certification-image.jpg"
                                        alt="Certification"
                                        className="certification-image"
                                        style={{ width: "100%", height: "auto" }}
                                    />
                                </div>

                                {/* Course Includes Section */}
                                <div className="mb-24 pb-24 border-bottom border-gray-100">
                                    <h5 className="mb-16 fw-bold">This Course Includes</h5>
                                    <div className="row g-20">
                                        <div className="col-md-4 col-sm-6">
                                            <ul>
                                                <li className="flex-align gap-6 text-gray-300 text-15 mb-12">
                                                    <span className="flex-shrink-0 text-22 d-flex text-main-600">
                                                        <i className="ph ph-checks" />
                                                    </span>
                                                    Live Class
                                                </li>
                                                <li className="flex-align gap-6 text-gray-300 text-15 mb-12">
                                                    <span className="flex-shrink-0 text-22 d-flex text-main-600">
                                                        <i className="ph ph-checks" />
                                                    </span>
                                                    Hands on Practise
                                                </li>
                                                <li className="flex-align gap-6 text-gray-300 text-15 mb-12">
                                                    <span className="flex-shrink-0 text-22 d-flex text-main-600">
                                                        <i className="ph ph-checks" />
                                                    </span>
                                                    Download : No
                                                </li>
                                                <li className="flex-align gap-6 text-gray-300 text-15 mb-12">
                                                    <span className="flex-shrink-0 text-22 d-flex text-main-600">
                                                        <i className="ph ph-checks" />
                                                    </span>
                                                    Doubt Clearing Session
                                                </li>
                                                <li className="flex-align gap-6 text-gray-300 text-15 mb-12">
                                                    <span className="flex-shrink-0 text-22 d-flex text-main-600">
                                                        <i className="ph ph-checks" />
                                                    </span>
                                                    Access on Mobile
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-4 col-sm-6">
                                            <ul>
                                                <li className="flex-align gap-6 text-gray-300 text-15 mb-12">
                                                    <span className="flex-shrink-0 text-22 d-flex text-main-600">
                                                        <i className="ph ph-checks" />
                                                    </span>
                                                    Test
                                                </li>
                                                <li className="flex-align gap-6 text-gray-300 text-15 mb-12">
                                                    <span className="flex-shrink-0 text-22 d-flex text-main-600">
                                                        <i className="ph ph-checks" />
                                                    </span>
                                                    Lectures: 10
                                                </li>
                                                <li className="flex-align gap-6 text-gray-300 text-15 mb-12">
                                                    <span className="flex-shrink-0 text-22 d-flex text-main-600">
                                                        <i className="ph ph-checks" />
                                                    </span>
                                                    Captions: No
                                                </li>
                                                <li className="flex-align gap-6 text-gray-300 text-15 mb-12">
                                                    <span className="flex-shrink-0 text-22 d-flex text-main-600">
                                                        <i className="ph ph-checks" />
                                                    </span>
                                                    Video: 2 total hours
                                                </li>
                                                <li className="flex-align gap-6 text-gray-300 text-15 mb-12">
                                                    <span className="flex-shrink-0 text-22 d-flex text-main-600">
                                                        <i className="ph ph-checks" />
                                                    </span>
                                                    Language English
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                {/* Instructor Section */}
                                <div>
                                    <h5 className="mb-12 fw-bold">Instructor</h5>
                                    <div className="flex-align gap-8">
                                        <img
                                            src="assets/images/thumbs/mentor-img1.png"
                                            alt=""
                                            className="w-44 h-44 rounded-circle object-fit-cover flex-shrink-0"
                                        />
                                        <div className="d-flex flex-column">
                                            <h6 className="text-15 fw-bold mb-0">Testing</h6>
                                            <span className="text-13 text-gray-300">Web Design Instructor</span>
                                            <div className="flex-align gap-4 mt-4">
                                                <span className="text-15 fw-bold text-warning-600 d-flex">
                                                    <i className="ph-fill ph-star" />
                                                </span>
                                                <span className="text-13 fw-bold text-gray-600">4.9</span>
                                                <span className="text-13 fw-bold text-gray-300">(12k)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Section for Next Batch and Study Materials */}
                <div className="col-md-4">
                    {/* Study Materials Section */}
                    <div className="card">
                        <div className="card-body p-0">
                            <div className="course-item">
                                <button
                                    type="button"
                                    className="course-item__button active flex-align gap-4 w-100 p-16 border-bottom border-gray-100"
                                >
                                    <span className="d-block text-start">
                                        <span className="d-block h5 mb-0 text-line-1">Study Materials</span>
                                    </span>
                                    <span className="course-item__arrow ms-auto text-20 text-gray-500">
                                        <i className="ph ph-arrow-right" />
                                    </span>
                                </button>
                                <div className="course-item-dropdown active border-bottom border-gray-100">
                                    <ul className="course-list p-16 pb-0">
                                        <li className="course-list__item flex-align gap-8 mb-16 active">
                                            <div className="w-100">
                                                <a
                                                    href=""
                                                    className="text-gray-300 fw-medium d-block hover-text-main-600 d-lg-block"
                                                >
                                                    <ul className="mt-3">
                                                        {courseDetails?.courseAttachment.map((attachment, index) => (
                                                            <li key={index}>
                                                                <a
                                                                    href={attachment}
                                                                    onClick={(e) => {
                                                                        e.preventDefault(); // Prevent the default anchor behavior
                                                                        window.open(attachment, '_blank', 'width=800,height=600'); // Open in a new popup window
                                                                    }}
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    {attachment.split('/').pop()}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminviewCoursesPage;