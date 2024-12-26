import React, { useState } from "react";

function CourseDetails({ onContinue }) {
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        level: '',
        time: '',
        thumbnail: null
    });

    const handleChange = (e) => {
        const { id, value, type, files } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: type === 'file' ? files[0] : value
        }));
    };

    const handleContinue = (e) => {
        e.preventDefault();
        if (!formData.title || !formData.category || !formData.level || !formData.time) {
            console.error("Please fill in all required fields.");
            return;
        }

        const courseDetails = {
            courseTitle: formData.title,
            courseCategory: formData.category,
            courseThumbnail: formData.thumbnail,
            courseDuration: parseInt(formData.time) || 0,
            courseLevel: formData.level,
        };

        console.log("Course details data:", courseDetails);
        onContinue(courseDetails);
    };

    return (
        <>
            {/* Course Tab Start */}
            <div className="card">
                <div className="card-header border-bottom border-gray-100 flex-align gap-8">
                    <h5 className="mb-0">Course Details</h5>
                    <button type="button" className="text-main-600 text-md d-flex" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Course Details">
                        <i className="ph-fill ph-question" />
                    </button>
                </div>
                <div className="card-body">
                    <form action="">
                        <div className="row gy-20">
                            <div className="col-xxl-3 col-md-4 col-sm-5">
                                <div className="mb-20">
                                    <label className="h5 fw-semibold font-heading mb-0">Thumbnail Image <span className="text-13 text-gray-400 fw-medium">(Required)</span></label>
                                </div>
                                <div className="file-upload">
                                    <input
                                        type="file"
                                        id="thumbnail"
                                        className="form-control"
                                        onChange={handleChange}
                                        style={{ display: 'none' }} // Hide the default file input
                                    />
                                    <div className="upload-area" onClick={() => document.getElementById('thumbnail').click()}>
                                        <p>Select File here</p>
                                        {formData.thumbnail && (
                                            <img
                                                src={URL.createObjectURL(formData.thumbnail)}
                                                alt="Thumbnail Preview"
                                                style={{ marginTop: '10px', maxWidth: '100%', height: 'auto' }}
                                            />
                                        )}
                                        <button type="button" className="btn btn-primary">Choose File</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xxl-9 col-md-8 col-sm-7">
                                <div className="row g-20">
                                    <div className="col-sm-12">
                                        <label htmlFor="title" className="h5 mb-8 fw-semibold font-heading">Course Title <span className="text-13 text-gray-400 fw-medium">(Required)</span></label>
                                        <input
                                            type="text"
                                            className="text-counter placeholder-13 form-control py-11 pe-76"
                                            maxLength={100}
                                            id="title"
                                            placeholder="Name of the Lesson"
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="category" className="h5 mb-8 fw-semibold font-heading">Course Category</label>
                                        <select id="category" className="form-select py-9 placeholder-13 text-15" value={formData.category} onChange={handleChange}>
                                            <option value="" disabled>Select course category</option>
                                            <option value="Web Development">Web Development</option>
                                            <option value="Web Designing">Web Designing</option>
                                            <option value="Data Science">Data Science</option>
                                            <option value="Artificial Intelligence">Artificial Intelligence</option>
                                            <option value="Cloud Computing">Cloud Computing</option>
                                            <option value="Database">Database</option>
                                            <option value="Software Testing">Software Testing</option>
                                            <option value="Data Analytics">Data Analytics</option>
                                            <option value="Mobile App">Mobile App</option>
                                            <option value="Cyber Security">Cyber Security</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="level" className="h5 mb-8 fw-semibold font-heading">Course Level</label>
                                        <select id="level" className="form-select py-9 placeholder-13 text-15" value={formData.level} onChange={handleChange}>
                                            <option value="" disabled>Select course level</option>
                                            <option value="Advanced">Advanced</option>
                                            <option value="Intermediate">Intermediate</option>
                                            <option value="Beginner">Beginner</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="time" className="h5 mb-8 fw-semibold font-heading">Course Duration</label>
                                        <select id="time" className="form-select py-9 placeholder-13 text-15" value={formData.time} onChange={handleChange}>
                                            <option value="" disabled>Select Duration</option>
                                            <option value="2">Week Days</option>
                                            <option value="3">Week End</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-align justify-content-end gap-8">
                                <button
                                    type="button"
                                    className="btn btn-main rounded-pill py-9"
                                    onClick={handleContinue}
                                >
                                    Continue
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* Course Tab End */}

            {/* Internal CSS */}
            <style jsx>{`
                .file-upload {
                    position: relative;
                }

                .upload-area {
                    border: 2px dashed #ccc;
                    padding: 20px;
                    text-align: center;
                    cursor: pointer;
                    background-color: #f9f9f9;
                }

                .upload-area:hover {
                    border-color: #ff001e;
                }

                .upload-area p {
                    margin: 5px 0;
                }

                .btn-primary {
                    background-color: #ff001e;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    cursor: pointer;
                }
            `}</style>
        </>
    );
}

export default CourseDetails;

