import React, { useState } from "react";
import DashboardSidebar from "../../common/sidebar";
import Header from "../../common/header";

function CreatenewTrainer() {
    const [image, setImage] = useState(null);
    const [files, setFiles] = useState([]); // Added state for files
    const [uploadedFileName, setUploadedFileName] = useState(""); // Added state for uploaded file name

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // Updated handleFileChange function
    const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setFiles(selectedFiles);
        if (selectedFiles.length > 0) {
            setUploadedFileName(selectedFiles[0].name); // Set the uploaded file name
        }
    };

    return (
        <>
            <div>
                <DashboardSidebar />
                <div className="dashboard-main-wrapper">
                    <Header />
                    <div className="dashboard-body">

                        <div className="breadcrumb mb-24">
                            <ul className="flex-align gap-4">
                                <li><a href="/" className="text-gray-200 fw-normal text-15 hover-text-main-600">Home</a></li>
                                <li> <span className="text-gray-500 fw-normal d-flex"><i className="ph ph-caret-right" /></span> </li>
                                <li><span className="text-main-600 fw-normal text-15">Create New Trainer</span></li>
                            </ul>
                        </div>

                        <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active" id="pills-details" role="tabpanel" aria-labelledby="pills-details-tab" tabIndex={0}>
                                <div className="card mt-24">
                                    <div className="card-header border-bottom">
                                        <h4 className="mb-4">Trainer Details</h4>
                                        <p className="text-gray-600 text-15">Please fill full details about yourself</p>
                                    </div>
                                    <div className="card-body">
                                        <form action="#">
                                            <div className="row gy-4">
                                                <div className="col-sm-6 col-xs-6">
                                                    <label htmlFor="fname" className="form-label mb-8 h6">First Name</label>
                                                    <input type="text" className="form-control py-11" id="fname" placeholder="Enter First Name" />
                                                </div>
                                                <div className="col-sm-6 col-xs-6">
                                                    <label htmlFor="lname" className="form-label mb-8 h6">Last Name</label>
                                                    <input type="text" className="form-control py-11" id="lname" placeholder="Enter Last Name" />
                                                </div>
                                                <div className="col-sm-6 col-xs-6">
                                                    <label htmlFor="email" className="form-label mb-8 h6">Email</label>
                                                    <input type="email" className="form-control py-11" id="email" placeholder="Enter Email" />
                                                </div>
                                                <div className="col-sm-6 col-xs-6">
                                                    <label htmlFor="phone" className="form-label mb-8 h6">Phone Number</label>
                                                    <input type="number" className="form-control py-11" id="phone" placeholder="Enter Phone Number" />
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="imageUpload" className="form-label mb-8 h6">Your Photo</label>
                                                    <div className="flex-align gap-22">
                                                        <div className="avatar-upload flex-shrink-0">
                                                            <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg" onChange={handleImageChange} />
                                                            <div className="avatar-preview">
                                                                <div id="profileImagePreview">
                                                                    {image && <img src={image} alt="Profile Preview" className="rounded-16" />}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="avatar-upload-box text-center position-relative flex-grow-1 py-24 px-4 rounded-16 border border-main-300 border-dashed bg-main-50 hover-bg-main-100 hover-border-main-400 transition-2 cursor-pointer">
                                                            <label htmlFor="imageUpload" className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 rounded-16 cursor-pointer z-1" />
                                                            <span className="text-32 icon text-main-600 d-inline-flex"><i className="ph ph-upload" /></span>
                                                            <span className="text-13 d-block text-gray-400 text my-8">Click to upload or drag and drop</span>
                                                            <span className="text-13 d-block text-main-600">SVG, PNG, JPEG OR GIF (max 1080px1200px)</span>
                                                        </div>
                                                    </div>
                                                </div>


                                                <div className="col-12">
                                                    <label htmlFor="fileupload" className="form-label mb-8 h6">Your Resume</label>
                                                    <div className="flex-align gap-22">
                                                        <div className="avatar-upload flex-shrink-0">
                                                            <div className="avatar-preview d-flex justify-content-center align-items-center">
                                                                <div id="profileImagePreview">
                                                                    {files.length > 0 && (
                                                                        <>
                                                                            <span className="text-32 icon text-main-600 d-inline-flex">
                                                                                <i className="ph ph-file-text" />
                                                                            </span>
                                                                            <p className="text-gray-500">Uploaded your File</p>
                                                                        </>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="avatar-upload-box text-center position-relative flex-grow-1 py-24 px-4 rounded-16 border border-main-300 border-dashed bg-main-50 hover-bg-main-100 hover-border-main-400 transition-2 cursor-pointer">
                                                            <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
                                                            <span className="text-13 d-block text-gray-400 text my-8">Click to upload or drag and drop</span>
                                                            <span className="text-13 d-block text-main-600"> PDF, DOC, DOCX (max file size 100mb each)</span>
                                                            {files.length > 0 && (
                                                                <div className="uploaded-files">
                                                                    <p className="text-gray-500">Uploaded File Name: {uploadedFileName}</p> {/* Display the uploaded file name */}
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-sm-6 col-xs-6">
                                                    <label htmlFor="role" className="form-label mb-8 h6">Role</label>
                                                    <input type="text" className="form-control py-11" id="role" placeholder="Enter Role" />
                                                </div>
                                                <div className="col-sm-6 col-xs-6">
                                                    <label htmlFor="zip" className="form-label mb-8 h6">ZIP Code</label>
                                                    <input type="number" className="form-control py-11" id="zip" placeholder="Enter ZIP Code" />
                                                </div>
                                                <div className="col-12">
                                                    <div className="editor">
                                                        <label className="form-label mb-8 h6">Bio</label>
                                                        <div id="editor">
                                                        <textarea className="text-counter placeholder-13 form-control py-11 pe-76" maxLength={100} id="courseTitle" placeholder="Your Bio..." rows={4} />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="flex-align justify-content-end gap-8">
                                                        <button type="reset" className="btn btn-outline-main bg-main-100 border-main-100 text-main-600 rounded-pill py-9">Cancel</button>
                                                        <button type="submit" className="btn btn-main rounded-pill py-9">Save  Changes</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-notification" role="tabpanel" aria-labelledby="pills-notification-tab" tabIndex={0}>
                                <div className="card mt-24">
                                    <div className="card-footer">
                                        <div className="flex-align justify-content-end gap-8">
                                            <button type="reset" className="btn btn-outline-main bg-main-100 border-main-100 text-main-600 rounded-pill py-9">Cancel</button>
                                            <button type="submit" className="btn btn-main rounded-pill py-9">Save  Changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

export default CreatenewTrainer;