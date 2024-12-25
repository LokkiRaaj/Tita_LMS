import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CreateProjectPage({ onContinue }) {
    const [formData, setFormData] = useState({
        title: '',
        desc: '',
        courseLevel: '',
        course: '',
        projectType: '',
        batch: '',
        projectTime: 0,
        projectSubmission: '',
        projectEndDate: '',
    });
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [uploadedDocumentName, setUploadedDocumentName] = useState("");
    const [error, setError] = useState(""); // State for handling errors
    const [course, setCourse] = useState("");

    const [courses, setCourses] = useState([]);
    
    // New state variables for selected IDs
    const [selectedCourseId, setSelectedCourseId] = useState("");


    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_BASE_URL}courses/getAllCourses`);
                setCourses(response.data.courses);
            } catch (error) {
                console.error("Error fetching courses:", error);
            }
        };

        fetchCourses();
    }, []);

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
    const handleContinue = async () => {
        if (!isFormValid) return; // Ensure the form is valid before proceeding

        // Prepare the data to match the backend schema
        const dataToSend = {
            title: formData.title,
            desc: formData.desc,
            courseLevel: formData.courseLevel,
            course: selectedCourseId, // Use the selected course ID
            projectType: formData.projectType, // Corrected spelling from projectTpye to projectType
            batch: formData.batch, // Ensure this is set correctly
            projectTime: formData.projectTime, // Ensure this is set correctly
            projectSubmission: formData.projectSubmission, // Optional field
            projectEndDate: formData.projectEndDate, // Ensure this is set correctly
        };

        console.log("Data to send:", dataToSend); // Log the data being sent

        try {
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}project/createProject`, dataToSend);
            console.log("Project created successfully:", response.data);
            toast.success("Project created successfully!"); // Show success toast
            setShowSuccessModal(true);
        } catch (error) {
            console.error("Error creating project:", error);
            toast.error("Failed to create project. Please try again."); // Show error toast
        }
    };

    // Close the success modal and reset form
    const closeModal = () => {
        setShowSuccessModal(false);
        // Reset form data to initial state
        setFormData({
            title: '',
            desc: '',
            courseLevel: '',
            course: '',
            projectType: '',
            batch: '',
            projectTime: 0,
            projectSubmission: '',
            projectEndDate: '',
        });
        setUploadedDocumentName(""); // Reset uploaded file name
        setError(""); // Clear errors
    };

    // Check if all fields are filled
    const isFormValid = formData.title && formData.desc && formData.courseLevel && formData.course && formData.projectType && formData.batch && formData.projectTime && formData.projectEndDate;

    return (
        <>
            <ToastContainer />
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
                                    <div className="col-sm-12">
                                        <label htmlFor="desc" className="h5 mb-8 fw-semibold font-heading">Project Description</label>
                                        <textarea
                                            className="form-control"
                                            id="desc"
                                            placeholder="Write your project description here..."
                                            value={formData.desc}
                                            onChange={handleChange}
                                            required
                                        ></textarea>
                                    </div>
                                    <div className="col-md-6 mb-20">
                                    <label className="form-label fw-semibold text-primary-light text-sm mb-8">Course:</label>
                                    <select
                                        className="form-select py-9 text-15"
                                        value={course}
                                        onChange={(e) => {
                                            setCourse(e.target.value);
                                            const selectedCourse = courses.find(courseItem => courseItem.courseTitle === e.target.value);
                                            setSelectedCourseId(selectedCourse ? selectedCourse._id : "");
                                        }}
                                    >
                                        <option value="" disabled>
                                            Select Course
                                        </option>
                                        {courses.map((courseItem) => (
                                            <option key={courseItem._id} value={courseItem.courseTitle}>{courseItem.courseTitle}</option>
                                        ))}
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
                                        <label htmlFor="projectType" className="h5 mb-8 fw-semibold font-heading">Project Type</label>
                                        <select id="projectType" className="form-select py-9 placeholder-13 text-15" value={formData.projectType} onChange={handleChange}>
                                            <option value="" disabled>Select Type</option>
                                            <option value="Individual">Individual</option>
                                            <option value="Group">Group</option>
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
                                    <div className="col-sm-6">
                                        <label htmlFor="projectTime" className="h5 mb-8 fw-semibold font-heading">Project Time (in hours)</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="projectTime"
                                            placeholder="Enter project time"
                                            value={formData.projectTime}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="projectSubmission" className="h5 mb-8 fw-semibold font-heading">Project Submission</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="projectSubmission"
                                            placeholder="Enter project submission details"
                                            value={formData.projectSubmission}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <label htmlFor="projectEndDate" className="h5 mb-8 fw-semibold font-heading">Project End Date</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            id="projectEndDate"
                                            value={formData.projectEndDate}
                                            onChange={handleChange}
                                            required
                                        />
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