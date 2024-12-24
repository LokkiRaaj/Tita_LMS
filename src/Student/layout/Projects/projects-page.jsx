import React, { useState, useEffect } from "react";

function StudentprojectPage() {
    const [selectedGroup, setSelectedGroup] = useState(""); // To track selected group project
    const [selectedProject, setSelectedProject] = useState(""); // To track selected project for single view
    const [uploadedDocumentName, setUploadedDocumentName] = useState("");
    const [error, setError] = useState(""); // Declare error state
    const [isFormValid, setIsFormValid] = useState(false); // To enable/disable the Continue button
    const [isModalOpen, setIsModalOpen] = useState(false); // To track if modal is open
    const [currentProject, setCurrentProject] = useState(null); // Store the selected project details

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

            // No error, reset error state and update file info
            setUploadedDocumentName(file.name);
            setError(""); // Clear error on successful file selection
        }
    };

    const courses = [
        { id: 1, title: "Student Attendance Tracker", description: "UI/UX design for this landing page", buttonLink: "#", group: "Team Project", details: "This project tracks student attendance." },
        { id: 2, title: "Student Portfolio Builder", description: "UI/UX design for this landing page", buttonLink: "#", group: "Team Project", details: "This project allows students to build their portfolios." },
        { id: 3, title: "Student Performance Analyzer", description: "UI/UX design for this landing page", buttonLink: "#", group: "Single Project", details: "This project analyzes student performance over time." },
        { id: 4, title: "Student Enrollment System", description: "UI/UX design for this landing page", buttonLink: "#", group: "Single Project", details: "This project handles student enrollment data." },
    ];

    const groups = ["Team Project", "Single Project"];

    const handleGroupChange = (event) => {
        const selected = event.target.value;
        setSelectedGroup(selected);
        setSelectedProject(""); // Reset selected project when switching groups
    };

    const handleProjectChange = (event) => {
        setSelectedProject(event.target.value);
    };

    useEffect(() => {
        // Validate form: Ensure group is selected, and for "Single Project", a project is selected
        if (selectedGroup && (selectedGroup !== "Single Project" || selectedProject) && uploadedDocumentName) {
            setIsFormValid(true);
        } else {
            setIsFormValid(false);
        }
    }, [selectedGroup, selectedProject, uploadedDocumentName]);

    // Filter courses based on the selected group and project title
    const filteredCourses = courses.filter(course => {
        if (selectedGroup === "Single Project" && selectedProject) {
            return course.title === selectedProject; // Show only the selected project in "Single Project"
        } else if (selectedGroup === "Team Project") {
            return course.group === "Team Project"; // Show all Team Projects
        } else {
            return true; // Show all projects if no group is selected
        }
    });

    const openModal = (project) => {
        setCurrentProject(project);
        setIsModalOpen(true); // Open the modal when a project is selected
    };

    const closeModal = () => {
        setIsModalOpen(false); // Close the modal
        setCurrentProject(null);
    };

    // Inline CSS for modal and overlay
    const modalOverlayStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000
    };

    const modalContentStyle = {
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        width: "400px",
        textAlign: "center"
    };

    return (
        <div className="card mt-24">
            <div className="card-body">
                <div className="mb-20 flex-between flex-wrap gap-8">
                    <h4 className="mb-0">Projects</h4>
                    <div className="d-flex gap-4">
                        <select
                            className="form-select form-select-sm"
                            onChange={handleGroupChange}
                            value={selectedGroup}
                        >
                            <option value="">Select Group</option>
                            {groups.map((group, index) => (
                                <option key={index} value={group}>
                                    {group}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="row g-20">
                    {filteredCourses.map((course) => (
                        <div key={course.id} className="col-xxl-3 col-lg-4 col-sm-6">
                            <div className="card border border-gray-100">
                                <div className="card-body p-8">
                                    <div className="p-8">
                                        <h5 className="mb-0">
                                            <a href={course.buttonLink} className="hover-text-main-600">
                                                {course.title}
                                            </a>
                                        </h5>
                                        <span className={`text-13 py-2 px-10 rounded-pill bg-${course.group.toLowerCase()}-50 text-${course.group.toLowerCase()}-600 mb-16`}>
                                            {course.description}
                                        </span>
                                        <div className="flex-between gap-4 flex-wrap mt-24">
                                            <button
                                                className="btn btn-outline-main rounded-pill py-9"
                                                onClick={() => openModal(course)} // Open modal with project details
                                            >
                                                Project Details
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="col-sm-12">
                        <label htmlFor="file" className="h5 mb-8 fw-semibold font-heading">Upload Document</label>
                        <input type="file" className="form-control" id="file" accept="application/pdf,.doc,.docx,.txt" onChange={handleDocumentChange} />
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
                </div>

                <div className="flex-align justify-content-end gap-8">
                    <button
                        type="button"
                        className="btn btn-main rounded-pill py-9"
                    >
                        Continue
                    </button>
                </div>
            </div>

            {/* Modal for displaying project details */}
            {isModalOpen && currentProject && (
                <div style={modalOverlayStyle}>
                    <div style={modalContentStyle}>
                        <h5>{currentProject.title}</h5>
                        <p>{currentProject.details}</p>
                        <button className="btn btn-main" onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default StudentprojectPage;