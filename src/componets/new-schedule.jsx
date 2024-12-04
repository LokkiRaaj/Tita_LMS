import React, { useState } from "react";
import TrainerSidebar from "../common/sidebar";
import Header from "../common/header";

function NewSchedule() {
 



   

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
                            <form>
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
                                                    />
                                                    <span className="position-absolute end-0 top-50 translate-middle-y me-12 line-height-1" />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-20">
                                                <label htmlFor="Time" className="form-label fw-semibold text-primary-light text-sm mb-8">
                                                    Time:
                                                </label>
                                                <div className="position-relative">
                                                    <input
                                                        className="form-control radius-8 bg-base"
                                                        id="time"
                                                        type="time"
                                                    />
                                                    <span className="position-absolute end-0 top-50 translate-middle-y me-12 line-height-1" />
                                                </div>
                                            </div>


                                            <div className="col-md-6 mb-20">
                                        <label htmlFor="courseCategory" className="form-label fw-semibold text-primary-light text-sm mb-8">Course Category </label>
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
                                    <div className="col-md-6 mb-20">
                                        <label htmlFor="courseLevel" className="form-label fw-semibold text-primary-light text-sm mb-8">Course Level</label>
                                        <div className="position-relative">
                                            <select id="courseLevel" className="form-select py-9 placeholder-13 text-15">
                                                <option value={1} disabled selected>Select course level</option>
                                                <option value={2}>Advanced </option>
                                                <option value={2}>Intermediate </option>
                                                <option value={2}>Beginner </option>
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
        </>
    );
}

export default NewSchedule;
