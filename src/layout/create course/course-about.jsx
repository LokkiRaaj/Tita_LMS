import React, { useState } from "react";

function AboutCourse({ onContinue, onBack }) {
    const [files, setFiles] = useState([]);
    const [description, setDescription] = useState('');

    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setFiles(selectedFiles);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
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
                        <input type="file" accept=".pdf,.doc,.docx" className="form-control" onChange={handleFileChange} multiple />
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
                    <h6 className="mb-8 fw-semibold">Course Description</h6>
                    <textarea 
                        className="form-control" 
                        rows={4} 
                        placeholder="Enter course description" 
                        value={description} 
                        onChange={handleDescriptionChange} 
                    />
                    <div className="flex-align justify-content-end gap-8">
                        <a href="" className="btn btn-outline-main rounded-pill py-9" onClick={onBack}>BACK</a>
                        <button 
                            type="button" 
                            className="btn btn-main rounded-pill py-9" 
                            onClick={() => {
                                const aboutData = {
                                    courseAttachment: files,
                                    courseDescription: description
                                };
                                
                                console.log("Course about data:", aboutData);
                                onContinue(aboutData);
                            }}
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

