import React, { useState } from "react";

function CreateProjectPage({ onContinue }) {
    const [formData, setFormData] = useState({
        title: '',
        course: '',
        courseLevel: '',
        batch: '',
        type: '',
        file: null,
        description: '',
    });
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [uploadedDocumentName, setUploadedDocumentName] = useState("");
    const [error, setError] = useState(""); // State for handling errors

    const handleDocumentChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileType = file.type.includes("pdf") || file.type.includes("document")
                ? "pdf"
                : "unsupported";

            if (fileType === "unsupported") {
                setError("Only document files (PDF or text) are allowed.");
                return;
            }

            if (file.size > 10 * 1024 * 1024) { // Set a size limit for documents (10MB)
                setError("File size exceeds 10MB limit.");
                return;
            }

            setFormData((prev) => ({ ...prev, file }));
            setUploadedDocumentName(file.name); // Set uploaded file name
            setError(""); // Clear error on successful file selection
        }
    };

    // Handle form input changes
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: value
        }));
    };

    // Handle continue button click
    const handleContinue = () => {
        setShowSuccessModal(true);
    };

    // Close the success modal and reset form
    const closeModal = () => {
        setShowSuccessModal(false);
        // Reset form data to initial state
        setFormData({
            title: '',
            course: '',
            courseLevel: '',
            batch: '',
            type: '',
            file: null,
            description: '',
        });
        setUploadedDocumentName(""); // Reset uploaded file name
        setError(""); // Clear errors
    };

    // Check if all fields are filled
    const isFormValid = formData.title && formData.course && formData.courseLevel && formData.batch && formData.type && formData.file && formData.description;

    return (
        <>
            <div className="card">
                <div className="card-header border-bottom border-gray-100 flex-align gap-8">
                    <h5 className="mb-0">Create New Project</h5>
                </div>
                <div className="card-body">
                    <form>
                        <div className="row gy-20">
                            <div className="col-xxl-9 col-md-8 col-sm-7">
                                <div className="row g-20">
                                    <div className="col-sm-12">
                                        <label htmlFor="title" className="h5 mb-8 fw-semibold font-heading">Project Title</label>
                                        <input
                                            type="text"
                                            className="text-counter placeholder-13 form-control py-11 pe-76"
                                            maxLength={100}
                                            id="title"
                                            placeholder="Project Title"
                                            value={formData.title}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="course" className="h5 mb-8 fw-semibold font-heading">Course</label>
                                        <select id="course" className="form-select py-9 placeholder-13 text-15" value={formData.course} onChange={handleChange}>
                                            <option value="" disabled>Select Course</option>
                                            <option value="React Js">React Js</option>
                                            <option value="Node Js">Node Js</option>
                                            <option value="Java">Java</option>
                                            <option value="Python">Python</option>
                                            <option value="AI">AI</option>
                                            <option value="Data Science">Data Science</option>
                                            <option value="Data Analytics">Data Analytics</option>
                                            <option value="Cyber Security">Cyber Security</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="courseLevel" className="h5 mb-8 fw-semibold font-heading">Course Level</label>
                                        <select id="courseLevel" className="form-select py-9 placeholder-13 text-15" value={formData.courseLevel} onChange={handleChange}>
                                            <option value="" disabled>Select Course Level</option>
                                            <option value="Advanced">Advanced</option>
                                            <option value="Beginner">Beginner</option>
                                            <option value="Intermediate">Intermediate</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="type" className="h5 mb-8 fw-semibold font-heading">Project Type</label>
                                        <select id="type" className="form-select py-9 placeholder-13 text-15" value={formData.type} onChange={handleChange}>
                                            <option value="" disabled>Select Type</option>
                                            <option value="Team Project">Team Project</option>
                                            <option value="Single Project">Single Project</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="batch" className="h5 mb-8 fw-semibold font-heading">Batch</label>
                                        <select id="batch" className="form-select py-9 placeholder-13 text-15" value={formData.batch} onChange={handleChange}>
                                            <option value="" disabled>Select Batch</option>
                                            <option value="Batch 1">Batch 1</option>
                                            <option value="Batch 2">Batch 2</option>
                                            <option value="Batch 3">Batch 3</option>
                                            <option value="Batch 4">Batch 4</option>
                                            <option value="Batch 5">Batch 5</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-12">
                                        <label htmlFor="file" className="h5 mb-8 fw-semibold font-heading">Upload Document</label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            id="file"
                                            accept="application/pdf,.doc,.docx,.txt"
                                            onChange={handleDocumentChange}
                                        />
                                        {uploadedDocumentName && (
                                            <span className="uploaded-document-name">
                                                {uploadedDocumentName}
                                            </span>
                                        )}
                                        <p className="text-13 text-gray-600">
                                            Only PDF, DOC, DOCX, or TXT formats are allowed (max file size 10MB).
                                        </p>
                                        {error && <p className="text-danger">{error}</p>}
                                    </div>
                                    <div className="col-sm-12">
                                        <label htmlFor="description" className="h5 mb-8 fw-semibold font-heading">Project Description</label>
                                        <textarea
                                            className="form-control"
                                            id="description"
                                            placeholder="Write your project description here..."
                                            value={formData.description}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-align justify-content-end gap-8">
                                <button
                                    type="button"
                                    className={`btn btn-main rounded-pill py-9 ${!isFormValid ? 'disabled' : ''}`}
                                    onClick={handleContinue}
                                    disabled={!isFormValid} // Disable button if form is incomplete
                                >
                                    Continue
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {showSuccessModal && (
                <div className="modal fade show" style={{ display: "block" }} tabIndex="-1" aria-hidden="true" onClick={closeModal}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{ justifyContent: 'flex-start' }}>
                                <h5 className="modal-title">Project Created Successfully!</h5>
                            </div>
                            <div className="modal-body">
                                <p>Your project has been successfully created. You can now proceed with the next steps.</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={closeModal}>
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default CreateProjectPage;