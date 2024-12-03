import React, { useState } from "react";

function AboutCourse({ onContinue , onBack}) {
    const [files, setFiles] = useState([]);

    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setFiles(selectedFiles);
    };

    return (
        <>
            <div className="card">
                <div className="card-header border-bottom border-gray-100 flex-align gap-8">
                    <h5 className="mb-0">About Course</h5>
                    <button type="button" className="text-main-600 text-md d-flex" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="About Course">
                        <i className="ph-fill ph-question" />
                    </button>
                </div>
                <div className="card-body">
                    <h6 className="mb-8 fw-semibold">Document Upload</h6>
                    <div className="p-16 rounded-12 bg-main-50 mb-20">
                        <input type="file" accept=".pdf,.doc,.docx" className="form-control" onChange={handleFileChange} />
                        <p className="text-13 text-gray-600">(max file size 100mb each)</p>
                        {files.length > 0 && (
                            <div className="uploaded-files">
                                <h6 className="mb-8 fw-semibold">Uploaded Files:</h6>
                                <ul>
                                    {files.map((file, index) => (
                                        <li key={index} className="text-gray-500">{file.name}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <h6 className="mb-8 fw-semibold">Attachment Files</h6>
                    <div className="upload-card-item p-16 rounded-12 bg-main-50 mb-20">
                        <div className="flex-between gap-8">
                            <div className="flex-align gap-10 flex-wrap">
                                <span className="w-36 h-36 text-lg rounded-circle bg-white flex-center text-main-600 flex-shrink-0">
                                    <i className="ph ph-paperclip" />
                                </span>
                                <div className>
                                    <p className="text-15 text-gray-500">Drag &amp; drop your single/multiple videos of course, or Browse </p>
                                    <p className="text-13 text-gray-600">(max file size 100mb each)</p>
                                </div>
                            </div>
                            <div className="flex-align gap-8">
                                <span className="text-main-600 d-flex text-xl"><i className="ph-fill ph-check-circle" /></span>
                                {/* Dropdown Start */}
                                <div className="dropdown flex-shrink-0">
                                    <button className="text-gray-600 text-xl d-flex rounded-4" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className="ph-fill ph-dots-three-outline" />
                                    </button>
                                    <div className="dropdown-menu dropdown-menu--md border-0 bg-transparent p-0">
                                        <div className="card border border-gray-100 rounded-12 box-shadow-custom">
                                            <div className="card-body p-12">
                                                <div className="max-h-200 overflow-y-auto scroll-sm pe-8">
                                                    <ul>
                                                        <li className="mb-0">
                                                            <button type="button" className="delete-item-btn py-6 text-15 px-8 hover-bg-gray-50 text-gray-300 w-100 rounded-8 fw-normal text-xs d-block text-start">
                                                                <span className="text">Delete</span>
                                                            </button>
                                                            <button type="button" className="view-item-btn py-6 text-15 px-8 hover-bg-gray-50 text-gray-300 w-100 rounded-8 fw-normal text-xs d-block text-start">
                                                                <span className="text">View</span>
                                                            </button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-align justify-content-end gap-8">
                                <a href="" className="btn btn-outline-main rounded-pill py-9" onClick={onBack}>BACK</a>
                                <button 
                                    type="button" 
                                    className="btn btn-main rounded-pill py-9" 
                                    onClick={onContinue}
                                >
                                    Continue
                                </button>
                            </div>
                </div>
            </div>
        </>
    );
}

export default AboutCourse;