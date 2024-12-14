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
                <li className={`step-list__item py-15 px-24 text-15 text-heading fw-medium flex-center gap-6 ${currentStep >= 1 ? 'completed' : ''}`}>
                    <span className="icon text-xl d-flex">
                        <i className={`ph ${currentStep >= 1 ? 'ph-check-circle' : 'ph-circle'}`} style={{ color: currentStep >= 1 ? 'white' : 'inherit', backgroundColor: currentStep >= 1 ? '#FF001E' : 'transparent' }} />
                    </span>
                    Course Details
                    <span className="line position-relative" />
                </li>
                <li className={`step-list__item py-15 px-24 text-15 text-heading fw-medium flex-center gap-6 ${currentStep >= 2 ? 'completed' : ''}`}>
                    <span className="icon text-xl d-flex">
                        <i className={`ph ${currentStep >= 2 ? 'ph-check-circle' : 'ph-circle'}`} style={{ color: currentStep >= 2 ? 'white' : 'inherit', backgroundColor: currentStep >= 2 ? '#FF001E' : 'transparent' }} />
                    </span>
                    Upload Videos
                    <span className="line position-relative" />
                </li>
                <li className={`step-list__item py-15 px-24 text-15 text-heading fw-medium flex-center gap-6 ${currentStep >= 3 ? 'completed' : ''}`}>
                    <span className="icon text-xl d-flex">
                        <i className={`ph ${currentStep >= 3 ? 'ph-check-circle' : 'ph-circle'}`} style={{ color: currentStep >= 3 ? 'white' : 'inherit', backgroundColor: currentStep >= 3 ? '#FF001E' : 'transparent' }} />
                    </span>
                    About Course
                    <span className="line position-relative" />
                </li>
                <li className={`step-list__item py-15 px-24 text-15 text-heading fw-medium flex-center gap-6 ${currentStep >= 4 ? 'completed' : ''}`}>
                    <span className="icon text-xl d-flex">
                        <i className={`ph ${currentStep >= 4 ? 'ph-check-circle' : 'ph-circle'}`} style={{ color: currentStep >= 4 ? 'white' : 'inherit', backgroundColor: currentStep >= 4 ? '#FF001E' : 'transparent' }} />
                    </span>
                    Publish Course
                    <span className="line position-relative" />
                </li>
            </ul>
        </>
    );
}

export default CreatecourseHead;