import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Certi from "../../../Dummy.jpg"

function Trainerviewcoursebyid() {
    const [courseDetails, setCourseDetails] = useState(null); // State to hold course details
    const query = new URLSearchParams(useLocation().search); // Get query parameters
    const courseId = query.get("id"); // Extract the course ID from the query parameters

    useEffect(() => {
        const fetchCourseDetails = async () => {
            if (courseId) {
                try {
                    const response = await fetch(`http://148.135.138.203:4000/courses/getCourseById/${courseId}`);
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
                    <div className="card" style={{ marginBottom: '20px' }}>
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
                                {courseDetails?.courseVideo ? (
                                    <video
                                        id="player"
                                        className="player"
                                        playsInline
                                        controls
                                        controlsList="nodownload"
                                        style={{ width: "100%", height: "auto", objectFit: "cover" }}
                                    >
                                        <source src={courseDetails.courseVideo} type="video/mp4" />
                                        <source src={courseDetails.courseVideo} type="video/webm" />
                                        Your browser does not support the video tag.
                                    </video>
                                ) : (
                                    <p className="text-gray-300">No video available for this course.</p>
                                )}
                            </div>

                            {/* About this Course */}
                            <div className="mt-24">
                                <div className="mb-24 pb-24 border-bottom border-gray-100">
                                    <h3 className="mb-12 fw-bold">About this course</h3>
                                    <p className="text-gray-300 text-18">{courseDetails?.courseDescription}</p>
                                </div>
                            </div>


                            <div className="mt-24">
                                <div className="mb-24 pb-24 border-bottom border-gray-100">
                                    <h5 className="mb-12 fw-bold">Why You Should Join: </h5>
                                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                        <li> Introduction to React and JSX</li>
                                        <li> Components, Props, and State</li>
                                        <li> React Hooks (useState, useEffect, etc.)</li>
                                        <li> State management with Redux</li>
                                        <li> Optimizing performance in React applications</li>
                                        <li> Integration with APIs and backend systems</li>

                                    </ul>
                                </div>


                            {/* Why You Should Join */}
                            <div className="mt-24">
                                <div className="mb-24 pb-24 border-bottom border-gray-100">

                                    <h3 className="mb-12 fw-bold">Why You Should Join </h3>
                                    <ul className="text-gray-300 text-18" style={{ paddingLeft: '20px' }}>
                                        {courseDetails?.whyShouldJoin?.length ? (
                                            courseDetails.whyShouldJoin.map((reason, index) => (
                                                <li key={index}>{reason}</li>
                                            ))
                                        ) : (
                                            <p>No reasons available.</p>
                                        )}
                                    </ul>
                                </div>

                                {/* Certification Section */}
                                <div className="mb-24 pb-24 border-bottom border-gray-100">
                                    <h3 className="mb-12 fw-bold">Certification</h3>
                                    <p className="text-gray-300 text-18" style={{ marginBottom: '20px' }}>
                                        {courseDetails?.certification}

                                    <h5 className="mb-12 fw-bold">Certification</h5>
                                    <p style={{ marginBottom: '20px' }}>
                                        Upon course completion, participants will receive a React.js Developer Certification
                                        from TITA Technologies.

                                    </p>
                                    <img
                                        src={Certi}
                                        alt="Certification"
                                        className="certification-image"
                                        style={{ width: "100%", height: "auto" }}
                                    />
                                </div>

                                {/* Course Includes Section */}
                                <div className="mb-24 pb-24 border-bottom border-gray-100">
                                    <h3 className="mb-16 fw-bold">This Course Includes</h3>
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

                    {/* What You Will Learn */}
                    <div className="card" style={{ marginBottom: '20px' }}>
                        <div className="card-body p-0">
                            <div className="course-item">
                                <button
                                    type="button"
                                    className="course-item__button active flex-align gap-4 w-100 p-16 border-bottom border-gray-100"
                                >
                                    <span className="d-block text-start">
                                        <span className="d-block h5 mb-0 text-line-1">What You Will Learn</span>
                                    </span>
                                    <span className="course-item__arrow ms-auto text-20 text-gray-500">
                                        <i className="ph ph-arrow-right" />
                                    </span>
                                </button>
                                <div className="course-item-dropdown active border-bottom border-gray-100">
                                    <ul style={{ paddingTop: '10px', paddingLeft: '20px' }}>
                                        {courseDetails?.whatYouWillLearn?.length ? (
                                            courseDetails.whatYouWillLearn.map((feature, index) => (
                                                <li key={index} className="flex-align gap-6 text-gray-300 text-16 mb-12">
                                                    <i className="ph ph-caret-right" style={{ fontWeight: 'bold', color: '#FF001E' }} />
                                                    {feature}
                                                </li>
                                            ))
                                        ) : (
                                            <p>No learning outcomes available.</p>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Key Features */}
                    <div className="card" style={{ marginBottom: '20px' }}>
                        <div className="card-body p-0">
                            <div className="course-item">
                                <button
                                    type="button"
                                    className="course-item__button active flex-align gap-4 w-100 p-16 border-bottom border-gray-100"
                                >
                                    <span className="d-block text-start">
                                        <span className="d-block h5 mb-0 text-line-1">Key Features</span>
                                    </span>
                                    <span className="course-item__arrow ms-auto text-20 text-gray-500">
                                        <i className="ph ph-arrow-right" />
                                    </span>
                                </button>
                                <div className="course-item-dropdown active border-bottom border-gray-100">
                                    <ul style={{ paddingTop: '10px', paddingLeft: '20px' }}>
                                        {courseDetails?.keyFeatures?.length ? (
                                            courseDetails.keyFeatures.map((feature, index) => (
                                                <li key={index} className="flex-align gap-6 text-gray-300 text-16 mb-12">
                                                    <i className="ph ph-caret-right" style={{ fontWeight: 'bold', color: '#FF001E' }} />
                                                    {feature}
                                                </li>
                                            ))
                                        ) : (
                                            <p>No key features available.</p>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Who Can Enroll */}
                    <div className="card" style={{ marginBottom: '20px' }}>
                        <div className="card-body p-0">
                            <div className="course-item">
                                <button
                                    type="button"
                                    className="course-item__button active flex-align gap-4 w-100 p-16 border-bottom border-gray-100"
                                >
                                    <span className="d-block text-start">
                                        <span className="d-block h5 mb-0 text-line-1">Who Can Enroll</span>
                                    </span>
                                    <span className="course-item__arrow ms-auto text-20 text-gray-500">
                                        <i className="ph ph-arrow-right" />
                                    </span>
                                </button>
                                <div className="course-item-dropdown active border-bottom border-gray-100">
                                    <ul style={{ paddingTop: '10px', paddingLeft: '20px' }}>
                                        {courseDetails?.whoCanEnroll?.length ? (
                                            courseDetails.whoCanEnroll.map((enrollee, index) => (
                                                <li key={index} className="flex-align gap-6 text-gray-300 text-16 mb-12">
                                                    <i className="ph ph-caret-right" style={{ fontWeight: 'bold', color: '#FF001E' }} />
                                                    {enrollee}
                                                </li>
                                            ))
                                        ) : (
                                            <p>No who can enroll available.</p>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* IT Skills Covered */}

                    <div className="card" style={{ marginBottom: '20px' }}>
                        <div className="card-body p-0">
                            <div className="course-item">
                                <button
                                    type="button"
                                    className="course-item__button active flex-align gap-4 w-100 p-16 border-bottom border-gray-100"
                                >
                                    <span className="d-block text-start">
                                        <span className="d-block h5 mb-0 text-line-1">IT Skills Covered</span>
                                    </span>
                                    <span className="course-item__arrow ms-auto text-20 text-gray-500">
                                        <i className="ph ph-arrow-right" />
                                    </span>
                                </button>
                                <div className="course-item-dropdown active border-bottom border-gray-100">
                                    <ul style={{ paddingTop: '10px', paddingLeft: '20px' }}>
                                        {courseDetails?.itSkillsCovered?.length ? (
                                            courseDetails.itSkillsCovered.map((skill, index) => (
                                                <li key={index} className="flex-align gap-6 text-gray-300 text-16 mb-12">
                                                    <i className="ph ph-caret-right" style={{ fontWeight: 'bold', color: '#FF001E' }} />
                                                    {skill}
                                                </li>
                                            ))
                                        ) : (
                                            <p>No IT skills available.</p>
                                        )}
                                    </ul>
                                </div>
                            </div>

                        </div>



                       
                    </div>

                    {/* SKey feature */}
                    <div className="card" style={{ marginBottom: '20px' }}>
                        <div className="card-body p-0">
                            <div className="course-item">
                                <button
                                    type="button"
                                    className="course-item__button active flex-align gap-4 w-100 p-16 border-bottom border-gray-100"
                                >
                                    <span className="d-block text-start">
                                        <span className="d-block h5 mb-0 text-line-1">Key Features</span>
                                    </span>
                                    <span className="course-item__arrow ms-auto text-20 text-gray-500">
                                        <i className="ph ph-arrow-right" />
                                    </span>
                                </button>
                                <div className="course-item-dropdown active border-bottom border-gray-100">
                                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                        <li> Introduction to React and JSX</li>
                                        <li> Components, Props, and State</li>
                                        <li> React Hooks (useState, useEffect, etc.)</li>
                                        <li> State management with Redux</li>
                                        <li> Optimizing performance in React applications</li>
                                        <li> Integration with APIs and backend systems</li>

                                    </ul>
                                </div>
                            </div>

                        </div>
                    </div>

                         {/*who can enroll */}
                         <div className="card" style={{ marginBottom: '20px' }}>
                     <div className="card-body p-0">
                        <div className="course-item">
                            <button
                                type="button"
                                className="course-item__button active flex-align gap-4 w-100 p-16 border-bottom border-gray-100"
                            >
                                <span className="d-block text-start">
                                    <span className="d-block h5 mb-0 text-line-1">Who can enroll</span>
                                </span>
                                <span className="course-item__arrow ms-auto text-20 text-gray-500">
                                    <i className="ph ph-arrow-right" />
                                </span>
                            </button>
                            <div className="course-item-dropdown active border-bottom border-gray-100">
                            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                <li> Frontend developers</li>
                                <li> Web developers looking to upgrade skills</li>
                                <li> Students aspiring to build dynamic web applications</li>
                               

                                </ul>
                            </div>
                        </div>
                        
                    </div>
                    </div>


                     {/* IT Skills Covered */}
                     <div className="card" style={{ marginBottom: '20px' }}>
                     <div className="card-body p-0">
                            <div className="course-item">
                                <button
                                    type="button"
                                    className="course-item__button active flex-align gap-4 w-100 p-16 border-bottom border-gray-100"
                                >
                                    <span className="d-block text-start">
                                        <span className="d-block h5 mb-0 text-line-1">   IT Skills Covered</span>
                                    </span>
                                    <span className="course-item__arrow ms-auto text-20 text-gray-500">
                                        <i className="ph ph-arrow-right" />
                                    </span>
                                </button>
                                <div className="course-item-dropdown active border-bottom border-gray-100">
                                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
                                        <li> React.js</li>
                                        <li> Redux</li>
                                        <li>JavaScript</li>
                                        <li> JSX</li>
                                        <li>  HTML</li>
                                        <li> CSS</li>
                                        <li> Git</li>

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

export default Trainerviewcoursebyid;