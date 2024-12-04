import React, { useState } from "react";

function CourseDetails({ onContinue }) {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        level: '',
        time: '',
        amount: '',
        seat: '', // Added seat field
        thumbnail: null
    });

    const handleChange = (e) => {
        const { id, value, type, files } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [id]: type === 'file' ? files[0] : value
        }));
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
                                    <label className="h5 fw-semibold font-heading mb-0">Thumbnail Image <span className="text-13 text-gray-400 fw-medium">(Required)</span> </label>
                                </div>
                                <input 
                                    type="file" 
                                    id="thumbnail" 
                                    className="fileUpload image-upload" 
                                    onChange={handleChange} 
                                />
                            </div>
                            <div className="col-xxl-9 col-md-8 col-sm-7">
                                <div className="row g-20">
                                    <div className="col-sm-12">
                                        <label htmlFor="courseTitle" className="h5 mb-8 fw-semibold font-heading">Course Title <span className="text-13 text-gray-400 fw-medium">(Required)</span> </label>
                                        <div className="position-relative">
                                            <input 
                                                type="text" 
                                                className="text-counter placeholder-13 form-control py-11 pe-76" 
                                                maxLength={100} 
                                                id="title" 
                                                placeholder="Name of the Lesson" 
                                                onChange={handleChange} 
                                            />
                                            <div className="text-gray-400 position-absolute inset-inline-end-0 top-50 translate-middle-y me-16">
                                                <span id="current">18</span>
                                                <span id="maximum">/ 100</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <label htmlFor="courseTitle" className="h5 mb-8 fw-semibold font-heading">Course Description  </label>
                                        <div className="position-relative">
                                            <textarea 
                                                className="text-counter placeholder-13 form-control py-11 pe-76" 
                                                maxLength={100} 
                                                id="description" 
                                                placeholder="Course Description" 
                                                rows={4} 
                                                onChange={handleChange} 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="courseCategory" className="h5 mb-8 fw-semibold font-heading">Course Category </label>
                                        <div className="position-relative">
                                            <select id="category" className="form-select py-9 placeholder-13 text-15" value={formData.category} onChange={handleChange}>
                                                <option value={1} disabled selected>Enter course category</option>
                                                <option value="Web Development">Web Development</option>
                                                <option value="Web Designing">Web Designing</option> 
                                                <option value="Data Science">Data Science</option>
                                                <option value="Artificial Intelligence">Artificial Intelligence</option>
                                                <option value="Cloud Computing">Cloud Computing</option>
                                                <option value="Database">Database</option>
                                                <option value="Software Testing">Software Testing</option>
                                                <option value="Microsoft">Microsoft</option>
                                                <option value="Data Analytics">Data Analytics</option>
                                                <option value="Mobile App">Mobile App</option>
                                                <option value="UI/UX">UI/UX</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="courseLevel" className="h5 mb-8 fw-semibold font-heading">Course Level</label>
                                        <div className="position-relative">
                                            <select id="level" className="form-select py-9 placeholder-13 text-15" value={formData.level} onChange={handleChange}>
                                                <option value={1} disabled selected>Select course level</option>
                                                <option value="Advanced">Advanced </option>
                                                <option value="Intermediate">Intermediate </option>
                                                <option value="Beginner">Beginner </option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="courseTime" className="h5 mb-8 fw-semibold font-heading">Course Time</label>
                                        <div className="position-relative">
                                            <select id="time" className="form-select py-9 placeholder-13 text-15" value={formData.time} onChange={handleChange}>
                                                <option value="1" disabled selected>Enter course time</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="courseLesson" className="h5 mb-8 fw-semibold font-heading">Course Amount</label>
                                        <div className="position-relative">
                                            <input 
                                                type="number" 
                                                className="text-counter placeholder-13 form-control py-11 pe-76" 
                                                id="amount" 
                                                placeholder="Amount" 
                                                onChange={handleChange} 
                                            />
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="courseSeat" className="h5 mb-8 fw-semibold font-heading">Course Seats</label>
                                        <div className="position-relative">
                                            <input 
                                                type="number" 
                                                className="text-counter placeholder-13 form-control py-11 pe-76" 
                                                id="seat" 
                                                placeholder="Number of Seats" 
                                                onChange={handleChange} 
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-align justify-content-end gap-8">
                                <button 
                                    type="button" 
                                    className="btn btn-main rounded-pill py-9" 
                                    onClick={() => {
                                        const courseDetails = {
                                            courseTitle: formData.title,
                                            courseDescription: formData.description,
                                            courseCategory: formData.category,
                                            courseImage: formData.thumbnail, 
                                            courseDuration: parseInt(formData.time) || 0,
                                            courseSeat: parseInt(formData.seat) || 0,
                                            courseAmount: parseFloat(formData.amount) || 0
                                        };

                                        console.log("Course details data:", courseDetails);
                                        onContinue(courseDetails);
                                    }}
                                >
                                    Continue
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            {/* Course Tab End */}
        </>
    );
}

export default CourseDetails;

