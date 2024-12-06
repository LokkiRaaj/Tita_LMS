import React, { useState } from "react";

function CourseVideo({ onContinue, onBack }) {
    const [uploadedVideoName, setUploadedVideoName] = useState("");
    const [videoFile, setVideoFile] = useState(null);
    const [error, setError] = useState("");

    const handleDrop = (event) => {
        event.preventDefault();
        const files = event.dataTransfer.files;
        if (files.length > 0) {
            handleFileUpload(files[0]);
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleFileChange = (event) => {
        const files = event.target.files;
        if (files.length > 0) {
            handleFileUpload(files[0]);
        }
    };

    const handleFileUpload = (file) => {
        if (file.size > 100 * 1024 * 1024) { // 100MB limit
            setError("File size exceeds 100MB.");
            setUploadedVideoName("");
            setVideoFile(null);
        } else {
            setError("");
            setVideoFile(file);
            setUploadedVideoName(file.name);
        }
    };

    const displayUploadedVideoName = () => {
        return uploadedVideoName ? (
            <span className="uploaded-video-name">{uploadedVideoName}</span>
        ) : null;
    };

    return (
        <>
            <div className="card">
                <div className="card-header border-bottom border-gray-100 flex-align gap-8">
                    <h5 className="mb-0">Upload Videos</h5>
                    <button type="button" className="text-main-600 text-md d-flex" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Upload Videos">
                        <i className="ph-fill ph-question" />
                    </button>
                </div>
                <div className="card-body">
                    <div 
                        className="upload-card-item p-16 rounded-12 bg-main-50 mb-20" 
                        onDrop={handleDrop} 
                        onDragOver={handleDragOver}
                    >
                        <div className="flex-align gap-10 flex-wrap">
                            <span className="w-36 h-36 text-lg rounded-circle bg-white flex-center text-main-600 flex-shrink-0">
                                <i className="ph-fill ph-video-camera" />
                            </span>
                            <div>
                                <p className="text-15 text-gray-500">
                                    Drag &amp; drop your single/multiple videos of course, or
                                    <label htmlFor="video" className="text-main-600 cursor-pointer">Browse</label>
                                    <input 
                                        type="file" 
                                        id="video" 
                                        accept="video/mp4,video/x-m4v,video/*" 
                                        hidden 
                                        onChange={handleFileChange} 
                                    />
                                    {displayUploadedVideoName()}
                                </p>
                                <p className="text-13 text-gray-600">Mp4 format with 16:9 aspect ratio (max file size 100MB each)</p>
                                {error && <p className="text-danger">{error}</p>} {/* Display error message */}
                            </div>
                        </div>
                    </div>
                    <div className="flex-align justify-content-end gap-8">
                        <a href="#" className="btn btn-outline-main rounded-pill py-9" onClick={(e) => { e.preventDefault(); onBack(); }}>BACK</a>
                        <button 
                            type="button" 
                            className="btn btn-main rounded-pill py-9" 
                            onClick={(e)  => {
                                e.preventDefault();
                                const videoData = {
                                    courseVideoTitle: uploadedVideoName,
                                    courseVideo: videoFile // This will be a File object
                                };
                                
                                console.log("Video upload data:", videoData);
                                onContinue(videoData);
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

export default CourseVideo;