import React from "react";

function Homebody2() {
    return (
        <>
            <div className="card mt-24">
                <div className="card-body">
                    <div className="mb-20 flex-between flex-wrap gap-8">
                        <h4 className="mb-0">Course Categorys</h4>
                        <div className="flex-align gap-8 flex-wrap">
                            <div className="position-relative">
                                <select id="courseLevel" className="form-select py-9 placeholder-13 text-15">
                                    <option value={1} disabled selected>Select course level</option>
                                    <option value={2}>Advanced </option>
                                    <option value={2}>Intermediate </option>
                                    <option value={2}>Beginner </option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row g-20">
                        <div className="col-xxl-3 col-lg-4 col-sm-6">
                            <div className="card border border-gray-100">
                                <div className="card-body p-8">
                                    <a href="" className="bg-main-100 rounded-8 overflow-hidden text-center mb-8 h-164 flex-center p-8">
                                        <img src="assets/images/thumbs/course-img1.png" alt="Course Image" />
                                    </a>
                                    <div className="p-8">
                                        <span className="text-13 py-2 px-10 rounded-pill bg-success-50 text-success-600 mb-16">Development</span>
                                        <h5 className="mb-0"><a href="" className="hover-text-main-600">React JS</a></h5>
                                        <div className="flex-align gap-8 flex-wrap mt-16">
                                            <img src="assets/images/thumbs/user-img1.png" className="w-28 h-28 rounded-circle object-fit-cover" alt="User Image" />
                                            <div>
                                                <span className="text-gray-600 text-13">Created by <a href="profile.html" className="fw-semibold text-gray-700 hover-text-main-600 hover-text-decoration-underline">Albert James</a> </span>
                                            </div>
                                        </div>
                                        <div className="flex-align gap-8 mt-12 pt-12 border-top border-gray-100">
                                            <div className="flex-align gap-4">
                                                <span className="text-sm text-main-600 d-flex"><i className="ph ph-video-camera" /></span>
                                                <span className="text-13 text-gray-600">24 Lesson</span>
                                            </div>
                                            <div className="flex-align gap-4">
                                                <span className="text-sm text-main-600 d-flex"><i className="ph ph-clock" /></span>
                                                <span className="text-13 text-gray-600">40 Hours</span>
                                            </div>
                                        </div>
                                        <div className="flex-between gap-4 flex-wrap mt-24">
                                            <div className="flex-align gap-4">
                                                <span className="text-15 fw-bold text-warning-600 d-flex"><i className="ph-fill ph-star" /></span>
                                                <span className="text-13 fw-bold text-gray-600">4.9</span>
                                                <span className="text-13 fw-bold text-gray-600">(12k)</span>
                                            </div>
                                            <a href="" className="btn btn-outline-main rounded-pill py-9">View Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-lg-4 col-sm-6">
                            <div className="card border border-gray-100">
                                <div className="card-body p-8">
                                    <a href="" className="bg-main-100 rounded-8 overflow-hidden text-center mb-8 h-164 flex-center p-8">
                                        <img src="assets/images/thumbs/course-img5.png" alt="Course Image" />
                                    </a>
                                    <div className="p-8">
                                        <span className="text-13 py-2 px-10 rounded-pill bg-warning-50 text-warning-600 mb-16">Design</span>
                                        <h5 className="mb-0"><a href="" className="hover-text-main-600">Node</a></h5>
                                        <div className="flex-align gap-8 flex-wrap mt-16">
                                            <img src="assets/images/thumbs/user-img5.png" className="w-28 h-28 rounded-circle object-fit-cover" alt="User Image" />
                                            <div>
                                                <span className="text-gray-600 text-13">Created by <a href="" className="fw-semibold text-gray-700 hover-text-main-600 hover-text-decoration-underline">Albert James</a> </span>
                                            </div>
                                        </div>
                                        <div className="flex-align gap-8 mt-12 pt-12 border-top border-gray-100">
                                            <div className="flex-align gap-4">
                                                <span className="text-sm text-main-600 d-flex"><i className="ph ph-video-camera" /></span>
                                                <span className="text-13 text-gray-600">24 Lesson</span>
                                            </div>
                                            <div className="flex-align gap-4">
                                                <span className="text-sm text-main-600 d-flex"><i className="ph ph-clock" /></span>
                                                <span className="text-13 text-gray-600">40 Hours</span>
                                            </div>
                                        </div>
                                        <div className="flex-between gap-4 flex-wrap mt-24">
                                            <div className="flex-align gap-4">
                                                <span className="text-15 fw-bold text-warning-600 d-flex"><i className="ph-fill ph-star" /></span>
                                                <span className="text-13 fw-bold text-gray-600">4.9</span>
                                                <span className="text-13 fw-bold text-gray-600">(12k)</span>
                                            </div>
                                            <a href="" className="btn btn-outline-main rounded-pill py-9">View Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-lg-4 col-sm-6">
                            <div className="card border border-gray-100">
                                <div className="card-body p-8">
                                    <a href="" className="bg-main-100 rounded-8 overflow-hidden text-center mb-8 h-164 flex-center p-8">
                                        <img src="assets/images/thumbs/course-img6.png" alt="Course Image" />
                                    </a>
                                    <div className="p-8">
                                        <span className="text-13 py-2 px-10 rounded-pill bg-danger-50 text-danger-600 mb-16">Frontend</span>
                                        <h5 className="mb-0"><a href="" className="hover-text-main-600">Microsoft Office</a></h5>
                                        <div className="flex-align gap-8 flex-wrap mt-16">
                                            <img src="assets/images/thumbs/user-img6.png" className="w-28 h-28 rounded-circle object-fit-cover" alt="User Image" />
                                            <div>
                                                <span className="text-gray-600 text-13">Created by <a href="profile.html" className="fw-semibold text-gray-700 hover-text-main-600 hover-text-decoration-underline">Albert James</a> </span>
                                            </div>
                                        </div>
                                        <div className="flex-align gap-8 mt-12 pt-12 border-top border-gray-100">
                                            <div className="flex-align gap-4">
                                                <span className="text-sm text-main-600 d-flex"><i className="ph ph-video-camera" /></span>
                                                <span className="text-13 text-gray-600">24 Lesson</span>
                                            </div>
                                            <div className="flex-align gap-4">
                                                <span className="text-sm text-main-600 d-flex"><i className="ph ph-clock" /></span>
                                                <span className="text-13 text-gray-600">40 Hours</span>
                                            </div>
                                        </div>
                                        <div className="flex-between gap-4 flex-wrap mt-24">
                                            <div className="flex-align gap-4">
                                                <span className="text-15 fw-bold text-warning-600 d-flex"><i className="ph-fill ph-star" /></span>
                                                <span className="text-13 fw-bold text-gray-600">4.9</span>
                                                <span className="text-13 fw-bold text-gray-600">(12k)</span>
                                            </div>
                                            <a href="" className="btn btn-outline-main rounded-pill py-9">View Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-lg-4 col-sm-6">
                            <div className="card border border-gray-100">
                                <div className="card-body p-8">
                                    <a href="" className="bg-main-100 rounded-8 overflow-hidden text-center mb-8 h-164 flex-center p-8">
                                        <img src="assets/images/thumbs/course-img9.png" alt="Course Image" />
                                    </a>
                                    <div className="p-8">
                                        <span className="text-13 py-2 px-10 rounded-pill bg-purple-50 text-purple-600 mb-16">AI Solution</span>
                                        <h5 className="mb-0"><a href="" className="hover-text-main-600">Artificial Inteligence</a></h5>
                                        <div className="flex-align gap-8 flex-wrap mt-16">
                                            <img src="assets/images/thumbs/user-img9.png" className="w-28 h-28 rounded-circle object-fit-cover" alt="User Image" />
                                            <div>
                                                <span className="text-gray-600 text-13">Created by <a href="profile.html" className="fw-semibold text-gray-700 hover-text-main-600 hover-text-decoration-underline">Albert James</a> </span>
                                            </div>
                                        </div>
                                        <div className="flex-align gap-8 mt-12 pt-12 border-top border-gray-100">
                                            <div className="flex-align gap-4">
                                                <span className="text-sm text-main-600 d-flex"><i className="ph ph-video-camera" /></span>
                                                <span className="text-13 text-gray-600">24 Lesson</span>
                                            </div>
                                            <div className="flex-align gap-4">
                                                <span className="text-sm text-main-600 d-flex"><i className="ph ph-clock" /></span>
                                                <span className="text-13 text-gray-600">40 Hours</span>
                                            </div>
                                        </div>
                                        <div className="flex-between gap-4 flex-wrap mt-24">
                                            <div className="flex-align gap-4">
                                                <span className="text-15 fw-bold text-warning-600 d-flex"><i className="ph-fill ph-star" /></span>
                                                <span className="text-13 fw-bold text-gray-600">4.9</span>
                                                <span className="text-13 fw-bold text-gray-600">(12k)</span>
                                            </div>
                                            <a href="" className="btn btn-outline-main rounded-pill py-9">View Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-lg-4 col-sm-6">
                            <div className="card border border-gray-100">
                                <div className="card-body p-8">
                                    <a href="" className="bg-main-100 rounded-8 overflow-hidden text-center mb-8 h-164 flex-center p-8">
                                        <img src="assets/images/thumbs/course-img3.png" alt="Course Image" />
                                    </a>
                                    <div className="p-8">
                                        <span className="text-13 py-2 px-10 rounded-pill bg-info-50 text-info-600 mb-16">Development</span>
                                        <h5 className="mb-0"><a href="" className="hover-text-main-600">Data Science</a></h5>
                                        <div className="flex-align gap-8 flex-wrap mt-16">
                                            <img src="assets/images/thumbs/user-img3.png" className="w-28 h-28 rounded-circle object-fit-cover" alt="User Image" />
                                            <div>
                                                <span className="text-gray-600 text-13">Created by <a href="profile.html" className="fw-semibold text-gray-700 hover-text-main-600 hover-text-decoration-underline">Albert James</a> </span>
                                            </div>
                                        </div>
                                        <div className="flex-align gap-8 mt-12 pt-12 border-top border-gray-100">
                                            <div className="flex-align gap-4">
                                                <span className="text-sm text-main-600 d-flex"><i className="ph ph-video-camera" /></span>
                                                <span className="text-13 text-gray-600">24 Lesson</span>
                                            </div>
                                            <div className="flex-align gap-4">
                                                <span className="text-sm text-main-600 d-flex"><i className="ph ph-clock" /></span>
                                                <span className="text-13 text-gray-600">40 Hours</span>
                                            </div>
                                        </div>
                                        <div className="flex-between gap-4 flex-wrap mt-24">
                                            <div className="flex-align gap-4">
                                                <span className="text-15 fw-bold text-warning-600 d-flex"><i className="ph-fill ph-star" /></span>
                                                <span className="text-13 fw-bold text-gray-600">4.9</span>
                                                <span className="text-13 fw-bold text-gray-600">(12k)</span>
                                            </div>
                                            <a href="" className="btn btn-outline-main rounded-pill py-9">View Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-lg-4 col-sm-6">
                            <div className="card border border-gray-100">
                                <div className="card-body p-8">
                                    <a href="" className="bg-main-100 rounded-8 overflow-hidden text-center mb-8 h-164 flex-center p-8">
                                        <img src="assets/images/thumbs/course-img7.png" alt="Course Image" />
                                    </a>
                                    <div className="p-8">
                                        <span className="text-13 py-2 px-10 rounded-pill bg-warning-50 text-warning-600 mb-16">Codning</span>
                                        <h5 className="mb-0"><a href="" className="hover-text-main-600">Data Analytics</a></h5>
                                        <div className="flex-align gap-8 flex-wrap mt-16">
                                            <img src="assets/images/thumbs/user-img7.png" className="w-28 h-28 rounded-circle object-fit-cover" alt="User Image" />
                                            <div>
                                                <span className="text-gray-600 text-13">Created by <a href="profile.html" className="fw-semibold text-gray-700 hover-text-main-600 hover-text-decoration-underline">Albert James</a> </span>
                                            </div>
                                        </div>
                                        <div className="flex-align gap-8 mt-12 pt-12 border-top border-gray-100">
                                            <div className="flex-align gap-4">
                                                <span className="text-sm text-main-600 d-flex"><i className="ph ph-video-camera" /></span>
                                                <span className="text-13 text-gray-600">24 Lesson</span>
                                            </div>
                                            <div className="flex-align gap-4">
                                                <span className="text-sm text-main-600 d-flex"><i className="ph ph-clock" /></span>
                                                <span className="text-13 text-gray-600">40 Hours</span>
                                            </div>
                                        </div>
                                        <div className="flex-between gap-4 flex-wrap mt-24">
                                            <div className="flex-align gap-4">
                                                <span className="text-15 fw-bold text-warning-600 d-flex"><i className="ph-fill ph-star" /></span>
                                                <span className="text-13 fw-bold text-gray-600">4.9</span>
                                                <span className="text-13 fw-bold text-gray-600">(12k)</span>
                                            </div>
                                            <a href="" className="btn btn-outline-main rounded-pill py-9">View Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-lg-4 col-sm-6">
                            <div className="card border border-gray-100">
                                <div className="card-body p-8">
                                    <a href="" className="bg-main-100 rounded-8 overflow-hidden text-center mb-8 h-164 flex-center p-8">
                                        <img src="assets/images/thumbs/course-img8.png" alt="Course Image" />
                                    </a>
                                    <div className="p-8">
                                        <span className="text-13 py-2 px-10 rounded-pill bg-success-50 text-success-600 mb-16">Writing</span>
                                        <h5 className="mb-0"><a href="" className="hover-text-main-600">Cyber Security</a></h5>
                                        <div className="flex-align gap-8 flex-wrap mt-16">
                                            <img src="assets/images/thumbs/user-img8.png" className="w-28 h-28 rounded-circle object-fit-cover" alt="User Image" />
                                            <div>
                                                <span className="text-gray-600 text-13">Created by <a href="profile.html" className="fw-semibold text-gray-700 hover-text-main-600 hover-text-decoration-underline">Albert James</a> </span>
                                            </div>
                                        </div>
                                        <div className="flex-align gap-8 mt-12 pt-12 border-top border-gray-100">
                                            <div className="flex-align gap-4">
                                                <span className="text-sm text-main-600 d-flex"><i className="ph ph-video-camera" /></span>
                                                <span className="text-13 text-gray-600">24 Lesson</span>
                                            </div>
                                            <div className="flex-align gap-4">
                                                <span className="text-sm text-main-600 d-flex"><i className="ph ph-clock" /></span>
                                                <span className="text-13 text-gray-600">40 Hours</span>
                                            </div>
                                        </div>
                                        <div className="flex-between gap-4 flex-wrap mt-24">
                                            <div className="flex-align gap-4">
                                                <span className="text-15 fw-bold text-warning-600 d-flex"><i className="ph-fill ph-star" /></span>
                                                <span className="text-13 fw-bold text-gray-600">4.9</span>
                                                <span className="text-13 fw-bold text-gray-600">(12k)</span>
                                            </div>
                                            <a href="" className="btn btn-outline-main rounded-pill py-9">View Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="flex-between flex-wrap gap-8 mt-20">
                        <a href="" className="btn btn-outline-gray rounded-pill py-9 flex-align gap-4">
                            <span className="d-flex text-xl"><i className="ph ph-arrow-left" /></span>
                            Previous
                        </a>
                        <ul className="pagination flex-align flex-wrap">
                            <li className="page-item active">
                                <a className="page-link h-44 w-44 flex-center text-15 rounded-8 fw-medium" href="">1</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link h-44 w-44 flex-center text-15 rounded-8 fw-medium" href="">2</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link h-44 w-44 flex-center text-15 rounded-8 fw-medium" href="">3</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link h-44 w-44 flex-center text-15 rounded-8 fw-medium" href="">...</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link h-44 w-44 flex-center text-15 rounded-8 fw-medium" href="">8</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link h-44 w-44 flex-center text-15 rounded-8 fw-medium" href="">9</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link h-44 w-44 flex-center text-15 rounded-8 fw-medium" href="">10</a>
                            </li>
                        </ul>
                        <a href="" className="btn btn-outline-main rounded-pill py-9 flex-align gap-4">
                            Next <span className="d-flex text-xl"><i className="ph ph-arrow-right" /></span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Homebody2;