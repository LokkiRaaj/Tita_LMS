import React, { useState } from "react";
import { FaVideo } from "react-icons/fa";

function TrainerMaterialsPage() {
    const [materials, setMaterials] = useState([]);
    const [uploadedVideoName, setUploadedVideoName] = useState("");
    const [uploadedDocumentName, setUploadedDocumentName] = useState("");
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        description: "",
        file: null,
        fileType: "",
    });
    const [showPopup, setShowPopup] = useState(false); // state to control popup visibility

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
        setError(""); // Clear error on input change
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileType = file.type.includes("video") ? "video" : "unsupported";

            if (fileType === "unsupported") {
                setError("Only video files (MP4, MOV) are allowed.");
                return;
            }

            if (file.size > 50 * 1024 * 1024) { // Set a size limit for videos (50MB)
                setError("File size exceeds 50MB limit.");
                return;
            }

            setFormData((prev) => ({ ...prev, file, fileType }));
            setUploadedVideoName(file.name); // Set uploaded file name
            setError(""); // Clear error on successful file selection
        } else {
            setError("Please select a valid video file.");
        }
    };

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

            setFormData((prev) => ({ ...prev, file, fileType }));
            setUploadedDocumentName(file.name); // Set uploaded file name
            setError(""); // Clear error on successful file selection
        } else {
            setError("Please select a valid document file.");
        }
    };

    const handleUpload = (e) => {
        e.preventDefault();
        const { description, file, fileType } = formData;

        if (!file || !description) {
            setError("All fields are required!");
            return;
        }

        const newMaterial = {
            type: fileType,
            description,
            link: URL.createObjectURL(file),
        };

        setMaterials((prevMaterials) => [...prevMaterials, newMaterial]);

        // Reset form
        setFormData({
            description: "",
            file: null,
            fileType: "",
        });
        setUploadedVideoName("");
        setError(""); // Clear error after successful upload

        // Show success popup
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false); // Close the popup
    };

    const getIcon = (type) => {
        switch (type) {
            case "video":
                return <FaVideo className="icon" />;
            default:
                return <FaVideo className="icon" />;
        }
    };

    return (
        <div className="card">
            <div className="card-header border-bottom border-gray-100 flex-align gap-8">
                <h5 className="mb-0">Create Materials</h5>
            </div>
            <div className="card-body">
                <form onSubmit={handleUpload}>
                    <div className="row gy-20">
                        <div className="col-xxl-9 col-md-8 col-sm-7">
                            <div className="row g-20">
                                <div className="col-sm-12">
                                    <label htmlFor="title" className="h5 mb-8 fw-semibold font-heading">Title</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="title"
                                        placeholder="Enter document title"
                                        value={formData.title}
                                        onChange={handleInputChange}
                                    />
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
                                    <label htmlFor="file" className="h5 mb-8 fw-semibold font-heading">Upload Video</label>
                                    <input
                                        type="file"
                                        className="form-control"
                                        id="file"
                                        accept="video/mp4,video/mov"
                                        onChange={handleFileChange}
                                    />
                                    {uploadedVideoName && (
                                        <span className="uploaded-video-name">
                                            {uploadedVideoName}
                                        </span>
                                    )}
                                    <p className="text-13 text-gray-600">
                                        Only MP4 or MOV formats are allowed (max file size 50MB).
                                    </p>
                                    {error && <p className="text-danger">{error}</p>}
                                </div>

                                <div className="col-sm-12">
                                    <label htmlFor="description" className="h5 mb-8 fw-semibold font-heading">Description</label>
                                    <textarea
                                        className="form-control"
                                        id="description"
                                        placeholder="Write your description here..."
                                        value={formData.description}
                                        onChange={handleInputChange}
                                    ></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="flex-align justify-content-end gap-8">
                            <button
                                type="submit"
                                className="btn btn-main rounded-pill py-9"
                            >
                                Upload
                            </button>
                        </div>
                    </div>
                </form>
            </div>

            {/* Success Popup */}
            {showPopup && (
                <div
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: "rgba(0, 0, 0, 0.5)",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        zIndex: 1000,
                    }}
                    onClick={handleClosePopup}
                >
                    <div
                        style={{
                            background: "#fff",
                            padding: "20px",
                            borderRadius: "8px",
                            textAlign: "center",
                            maxWidth: "400px",
                            width: "100%",
                        }}
                    >
                        <h4 style={{ marginBottom: "10px" }}>Upload Successful!</h4>
                        <p>Your file has been successfully uploaded.</p>
                        <button
                            onClick={handleClosePopup}
                            style={{
                                marginTop: "20px",
                                padding: "10px 20px",
                                backgroundColor: "#007bff",
                                color: "#fff",
                                border: "none",
                                borderRadius: "4px",
                                cursor: "pointer",
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TrainerMaterialsPage;