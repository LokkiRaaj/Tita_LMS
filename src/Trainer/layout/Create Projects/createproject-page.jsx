import React, { useState } from "react";

function CreateProjectPage({ onContinue }) {
    const [formData, setFormData] = useState({
        title: '',
        group: '',
        level: '',
        description: '',
    });
    const [showSuccessModal, setShowSuccessModal] = useState(false); // State to show/hide modal

    // Handle form input changes
    const handleChange = (e) => {
        const { id, value, type, files } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: type === 'file' ? files[0] : value
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
            group: '',
            level: '',
            description: '',
        });
    };

    // Check if all fields are filled
    const isFormValid = formData.title && formData.group && formData.level && formData.description;

    return (
        <>
            {/* Form to create a project */}
            <div className="card">
                <div className="card-header border-bottom border-gray-100 flex-align gap-8">
                    <h5 className="mb-0">Create a New Project</h5>
                </div>
                <div className="card-body">
                    <form action="">
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
                                        <label htmlFor="category" className="h5 mb-8 fw-semibold font-heading">Project Group</label>
                                        <select id="group" className="form-select py-9 placeholder-13 text-15" value={formData.group} onChange={handleChange}>
                                            <option value="" disabled>Select Group</option>
                                            <option value="Web Development">Team Projects</option>
                                            <option value="Web Designing">Single Projects</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="level" className="h5 mb-8 fw-semibold font-heading">Project Level</label>
                                        <select id="level" className="form-select py-9 placeholder-13 text-15" value={formData.level} onChange={handleChange}>
                                            <option value="" disabled>Select Level</option>
                                            <option value="Advanced">Advanced</option>
                                            <option value="Intermediate">Intermediate</option>
                                            <option value="Beginner">Beginner</option>
                                        </select>
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

            {/* Success Modal */}
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