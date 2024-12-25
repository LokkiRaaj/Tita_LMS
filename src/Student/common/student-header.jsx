import React from "react";
import { Link } from "react-router-dom";

function StudentHeader() {
    return (
        <>
            <div className="top-navbar flex-between gap-16">
                <div className="flex-align gap-16">
                    <button type="button" className="toggle-btn d-xl-none d-flex text-26 text-gray-500"><i className="ph ph-list" /></button>
                </div>
                <div className="flex-align gap-16">
                    <div className="dropdown">
                        <button className="users arrow-down-icon border border-gray-200 rounded-pill p-4 d-inline-block pe-40 position-relative" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <span className="position-relative">
                                <img src="assets/images/thumbs/user-img.png" alt="Image" className="h-32 w-32 rounded-circle" />
                                <span className="activation-badge w-8 h-8 position-absolute inset-block-end-0 inset-inline-end-0" />
                            </span>
                        </button>
                        <div className="dropdown-menu dropdown-menu--lg border-0 bg-transparent p-0">
                            <div className="card border border-gray-100 rounded-12 box-shadow-custom">
                                <div className="card-body">
                                    <div className="flex-align gap-8 mb-20 pb-20 border-bottom border-gray-100">
                                        <img src="assets/images/thumbs/user-img.png" alt className="w-54 h-54 rounded-circle" />
                                        <div className>
                                            <h4 className="mb-0">Michel John</h4>
                                            <p className="fw-medium text-13 text-gray-200">examplemail@mail.com</p>
                                        </div>
                                    </div>
                                    <ul className="max-h-270 overflow-y-auto scroll-sm pe-4">
                                        <li className="mb-4">
                                            <Link to="/student-profilesettings" className="py-12 text-15 px-20 hover-bg-gray-50 text-gray-300 rounded-8 flex-align gap-8 fw-medium text-15">
                                                <span className="text-2xl text-primary-600 d-flex"><i className="ph ph-user-circle" /></span>
                                                <span className="text">Profile</span>
                                            </Link>
                                        </li>
                                        <li className="mb-4">
                                            <a href="" className="py-12 text-15 px-20 hover-bg-gray-50 text-gray-300 rounded-8 flex-align gap-8 fw-medium text-15">
                                                <span className="text-2xl text-primary-600 d-flex"><i className="ph ph-gear" /></span>
                                                <span className="text">Account Settings</span>
                                            </a>
                                        </li>
                                        <li className="pt-8 border-top border-gray-100">
                                            <a href="" className="py-12 text-15 px-20 hover-bg-danger-50 text-gray-300 hover-text-danger-600 rounded-8 flex-align gap-8 fw-medium text-15">
                                                <span className="text-2xl text-danger-600 d-flex"><i className="ph ph-sign-out" /></span>
                                                <span className="text">Log Out</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StudentHeader;