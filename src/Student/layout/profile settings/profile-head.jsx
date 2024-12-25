import React, { useState } from "react";

function StudentProfilesHeader() {
    return (
        <div className="card overflow-hidden">
            <div className="card-body p-0">
                <div className="cover-img position-relative">
                    <div className="setting-profile px-24">
                        <div className="flex-between">
                            <div className="d-flex align-items-end flex-wrap mb-32 gap-24 position-relative">
                                <div className="position-relative">
                                    <label htmlFor="imageUpload" style={{ cursor: "pointer" }}>
                                        <div
                                            className="profile-image-container"
                                            style={{
                                                width: "100px",
                                                height: "100px",
                                                borderRadius: "50%",
                                                overflow: "hidden",
                                                position: "relative",
                                                marginTop: "50px",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                backgroundColor: "#f0f0f0",
                                                border: "2px solid #ccc",
                                            }}
                                        >
                                         <img src="assets/images/thumbs/student-img1.png"/>
                                        </div>
                                    </label>
                                </div>
                                <div>
                                    <h4 className="mb-8">Lokki</h4>
                                    <div className="setting-profile__infos flex-align flex-wrap gap-16">
                                        <div className="flex-align gap-6">
                                            <span className="text-gray-600 d-flex text-lg"><i className="ph ph-swatches" /></span>
                                            <span className="text-gray-600 d-flex text-15">Student</span>
                                        </div>
                                        <div className="flex-align gap-6">
                                            <span className="text-gray-600 d-flex text-lg"><i className="ph ph-map-pin" /></span>
                                            <span className="text-gray-600 d-flex text-15">Madurai</span>
                                        </div>
                                        <div className="flex-align gap-6">
                                            <span className="text-gray-600 d-flex text-lg"><i className="ph ph-calendar-dots" /></span>
                                            <span className="text-gray-600 d-flex text-15">Join Jan 2025</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul className="nav common-tab style-two nav-pills mb-0" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link active"
                                    id="pills-details-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-details"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-details"
                                    aria-selected="true"
                                >
                                    My Details
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className="nav-link"
                                    id="pills-password-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-password"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-password"
                                    aria-selected="false"
                                >
                                    Password
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentProfilesHeader;