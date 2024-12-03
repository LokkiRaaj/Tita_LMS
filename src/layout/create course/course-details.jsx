import React, { useState } from "react";

function CourseDetails({ onContinue }) {
    return (
        <>
            {/* Course Tab Start */}
            <div className="card">
                <div className="card-header border-bottom border-gray-100 flex-align gap-8">
                    <h5 className="mb-0">Course Details</h5>
                    <button type="button" className="text-main-600 text-md d-flex" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Course Details">
                        <i className="ph-fill ph-question" />
                    </button>
                </div>
                <div className="card-body">
                    <form action="">
                        <div className="row gy-20">
                            <div className="col-xxl-3 col-md-4 col-sm-5">
                                <div className="mb-20">
                                    <label className="h5 fw-semibold font-heading mb-0">Thumbnail Image <span className="text-13 text-gray-400 fw-medium">(Required)</span> </label>
                                </div>
                                <div id="fileUpload" className="fileUpload image-upload" />
                            </div>
                            <div className="col-xxl-9 col-md-8 col-sm-7">
                                <div className="row g-20">
                                    <div className="col-sm-12">
                                        <label htmlFor="courseTitle" className="h5 mb-8 fw-semibold font-heading">Course Title <span className="text-13 text-gray-400 fw-medium">(Required)</span> </label>
                                        <div className="position-relative">
                                            <input type="text" className="text-counter placeholder-13 form-control py-11 pe-76" maxLength={100} id="courseTitle" placeholder="Name of the Lesson" />
                                            <div className="text-gray-400 position-absolute inset-inline-end-0 top-50 translate-middle-y me-16">
                                                <span id="current">18</span>
                                                <span id="maximum">/ 100</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <label htmlFor="courseTitle" className="h5 mb-8 fw-semibold font-heading">Course Description  </label>
                                        <div className="position-relative">
                                            <textarea className="text-counter placeholder-13 form-control py-11 pe-76" maxLength={100} id="courseTitle" placeholder="Course Description" rows={4} />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="courseCategory" className="h5 mb-8 fw-semibold font-heading">Course Category </label>
                                        <div className="position-relative">
                                            <select id="courseCategory" className="form-select py-9 placeholder-13 text-15">
                                            <option value={1} disabled selected>Enter course category</option>
                                                <option value={2}>Web Development</option>
                                                <option value={2}>Web Designing</option> 
                                                <option value={2}>Data Science</option>
                                                <option value={2}>Artificial Intelligence</option>
                                                <option value={2}>Cloud Computing</option>
                                                <option value={2}>Database</option>
                                                <option value={2}>Software Testing</option>
                                                <option value={2}>Microsoft</option>
                                                <option value={2}>Data Analytics</option>
                                                <option value={2}>Mobile App</option>
                                                <option value={2}>UI/UX</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="courseLevel" className="h5 mb-8 fw-semibold font-heading">Course Level</label>
                                        <div className="position-relative">
                                            <select id="courseLevel" className="form-select py-9 placeholder-13 text-15">
                                                <option value={1} disabled selected>Select course level</option>
                                                <option value={2}>Advanced </option>
                                                <option value={2}>Intermediate </option>
                                                <option value={2}>Beginner </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="courseTime" className="h5 mb-8 fw-semibold font-heading">Course Time</label>
                                        <div className="position-relative">
                                            <select id="courseTime" className="form-select py-9 placeholder-13 text-15">
                                                <option value={1} disabled selected>Enter course category</option>
                                                <option value={2}>2 Hours</option>
                                                <option value={2}>3 Hours</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="courseLesson" className="h5 mb-8 fw-semibold font-heading">Course Amount</label>
                                        <div className="position-relative">
                                            <input type="number" className="text-counter placeholder-13 form-control py-11 pe-76" maxLength={100} id="courseTitle" placeholder="Amount" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-align justify-content-end gap-8">
                                <a href="" className="btn btn-outline-main rounded-pill py-9">Cancel</a>
                                <button 
                                    type="button" 
                                    className="btn btn-main rounded-pill py-9" 
                                    onClick={onContinue}
                                >
                                    Continue
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* Course Tab End */}
        </>
    );
}

export default CourseDetails;