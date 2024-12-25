import React, { useState, useEffect } from "react";

function TrainermyDetails() {
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        bio: "",
        image: null
    });
    const [imagePreview, setImagePreview] = useState("assets/images/thumbs/setting-profile-img.jpg");
    const [isModalOpen, setIsModalOpen] = useState(false); // Track modal visibility
    const [isFormValid, setIsFormValid] = useState(false); // Track form validity

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImagePreview(reader.result); // Set the preview URL
            };
            reader.readAsDataURL(file);
            setFormData((prevData) => ({ ...prevData, image: file }));
        }
    };

    const handleSave = (e) => {
        e.preventDefault(); // Prevent the default form submission
        setIsModalOpen(true); // Open the modal when the form is saved
    };

    const closeModal = () => {
        setIsModalOpen(false); // Close the modal
        setFormData({
            fname: "",
            lname: "",
            email: "",
            phone: "",
            bio: "",
            image: null
        }); // Reset form data
        setImagePreview("assets/images/thumbs/setting-profile-img.jpg"); // Reset image preview
    };

    // Validate the form whenever formData changes
    useEffect(() => {
        const { fname, lname, email, phone, bio, image } = formData;
        const isValid = fname && lname && email && phone && bio && image;
        setIsFormValid(isValid);
    }, [formData]);

    return (
        <div className="tab-pane fade show active" id="pills-details" role="tabpanel">
            <div className="card mt-24">
                <div className="card-header border-bottom">
                    <h4 className="mb-4">My Details</h4>
                    <p className="text-gray-600 text-15">Please fill full details about yourself</p>
                </div>
                <div className="card-body">
                    <form onSubmit={handleSave}>
                        <div className="row gy-4">
                            <div className="col-sm-6 col-xs-6">
                                <label htmlFor="fname" className="form-label mb-8 h6">First Name</label>
                                <input type="text" className="form-control py-11" id="fname" name="fname" value={formData.fname} onChange={handleInputChange} placeholder="Enter First Name"
                                />
                            </div>
                            <div className="col-sm-6 col-xs-6">
                                <label htmlFor="lname" className="form-label mb-8 h6">Last Name</label>
                                <input type="text" className="form-control py-11" id="lname" name="lname" value={formData.lname} onChange={handleInputChange} placeholder="Enter Last Name" />
                            </div>
                            <div className="col-sm-6 col-xs-6">
                                <label htmlFor="email" className="form-label mb-8 h6">Email</label>
                                <input type="email" className="form-control py-11" id="email" name="email" value={formData.email} onChange={handleInputChange} placeholder="Enter Email" />
                            </div>
                            <div className="col-sm-6 col-xs-6">
                                <label htmlFor="phone" className="form-label mb-8 h6">Phone Number</label>
                                <input type="number" className="form-control py-11" id="phone" name="phone" value={formData.phone} onChange={handleInputChange} placeholder="Enter Phone Number" />
                            </div>
                            <div className="col-12">
                                <label htmlFor="imageUpload" className="form-label mb-8 h6">Your Photo</label>
                                <div className="flex-align gap-22">
                                    <div className="avatar-upload flex-shrink-0">
                                        <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg" onChange={handleImageChange} />
                                        <div className="avatar-preview">
                                            <div id="profileImagePreview" style={{ backgroundImage: `url(${imagePreview})` }}></div>
                                        </div>
                                    </div>
                                    <div className="avatar-upload-box text-center position-relative flex-grow-1 py-24 px-4 rounded-16 border border-main-300 border-dashed bg-main-50 hover-bg-main-100 hover-border-main-400 transition-2 cursor-pointer">
                                        <label htmlFor="imageUpload" className="position-absolute inset-block-start-0 inset-inline-start-0 w-100 h-100 rounded-16 cursor-pointer z-1" />
                                        <span className="text-32 icon text-main-600 d-inline-flex"><i className="ph ph-upload" /></span>
                                        <span className="text-13 d-block text-gray-400 text my-8">Click to upload</span>
                                        <span className="text-13 d-block text-main-600">SVG, PNG, JPEG OR GIF (max 1080px1200px)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="editor">
                                    <label className="form-label mb-8 h6">Bio</label>
                                    <div id="editor">
                                        <textarea className="form-control" rows={4} name="bio" value={formData.bio} onChange={handleInputChange} placeholder="Enter your description" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="flex-align justify-content-end gap-8">
                                    <button type="submit" className="btn btn-main rounded-pill py-9" disabled={!isFormValid}>
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* Modal Popup */}
            {isModalOpen && (
                <div
                    style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 9999 }}
                    onClick={closeModal}>
                    <div style={{ backgroundColor: "white", padding: "20px", borderRadius: "8px", textAlign: "center", maxWidth: "400px", width: "100%" }}
                        onClick={(e) => e.stopPropagation()}>
                        <h2>Success!</h2>
                        <p>Your details have been saved successfully.</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TrainermyDetails;