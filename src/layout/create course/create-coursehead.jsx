import React from "react";
import { Link } from "react-router-dom";

function CreatecourseHead({ currentStep }) {
    return (
        <>
            <div className="breadcrumb-with-buttons mb-24 flex-between flex-wrap gap-8">
                {/* Breadcrumb Start */}
                <div className="breadcrumb mb-24">
                    <ul className="flex-align gap-4">
                        <li><Link to="/" className="text-gray-200 fw-normal text-15 hover-text-main-600">Home</Link></li>
                        <li> <span className="text-gray-500 fw-normal d-flex"><i className="ph ph-caret-right" /></span> </li>
                        <li><span className="text-main-600 fw-normal text-15">Create Account</span></li>
                    </ul>
                </div>
                {/* Breadcrumb End */}
                {/* Buttons Start */}
                <div className="flex-align justify-content-end gap-8">
                    <button type="button" className="btn btn-main rounded-pill py-9" disabled>Publish Course</button>
                </div>
                {/* Buttons End */}
            </div>
            {/* Create Course Step List Start */}
            <ul className="step-list mb-24">
                <li className={`step-list__item py-15 px-24 text-15 text-heading fw-medium flex-center gap-6 ${currentStep === 1 ? 'active' : 'completed'}`}>
                    <span className="icon text-xl d-flex"><i className="ph ph-circle" /></span>
                    Course Details
                    <span className="line position-relative" />
                </li>
                <li className={`step-list__item py-15 px-24 text-15 text-heading fw-medium flex-center gap-6 ${currentStep === 2 ? 'active' : ''}`}>
                    <span className="icon text-xl d-flex"><i className="ph ph-circle" /></span>
                    Upload Videos
                    <span className="line position-relative" />
                </li>
                <li className={`step-list__item py-15 px-24 text-15 text-heading fw-medium flex-center gap-6 ${currentStep === 3 ? 'active' : ''}`}>
                    <span className="icon text-xl d-flex"><i className="ph ph-circle" /></span>
                    About Course
                    <span className="line position-relative" />
                </li>
                <li className={`step-list__item py-15 px-24 text-15 text-heading fw-medium flex-center gap-6 ${currentStep === 4 ? 'active' : ''}`}>
                    <span className="icon text-xl d-flex"><i className="ph ph-circle" /></span>
                    Publish Course
                    <span className="line position-relative" />
                </li>
            </ul>
        </>
    );
}

export default CreatecourseHead;