import React, { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing eye icons

function TrainerchangePassword() {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [isCurrentPasswordVisible, setIsCurrentPasswordVisible] = useState(false);
    const [isNewPasswordVisible, setIsNewPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);  // Modal state

    // Validation function
    const validatePassword = () => {
        let tempErrors = {};

        if (!currentPassword) {
            tempErrors.currentPassword = "Current password is required";
        }
        if (!newPassword) {
            tempErrors.newPassword = "New password is required";
        } else if (newPassword.length < 8) {
            tempErrors.newPassword = "Password must be at least 8 characters long";
        } else if (!/[a-z]/.test(newPassword)) {
            tempErrors.newPassword = "Password must contain at least one lowercase letter";
        } else if (!/[0-9!@#$%^&*()_+={}|:"<>?]/.test(newPassword)) {
            tempErrors.newPassword = "Password must contain at least one number or symbol";
        }

        if (newPassword !== confirmPassword) {
            tempErrors.confirmPassword = "Confirm password does not match";
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validatePassword()) {
            setIsModalOpen(true);  // Show modal on success
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);  // Close modal
    };

    return (
        <div className="tab-pane fade" id="pills-password" role="tabpanel" aria-labelledby="pills-password-tab" tabIndex={0}>
            <div className="card mt-24">
                <div className="card-header border-bottom">
                    <h4 className="mb-4">Password Settings</h4>
                    <p className="text-gray-600 text-15">Please fill full details about yourself</p>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-md-6">
                            <form onSubmit={handleSubmit}>
                                <div className="row gy-4">
                                    <div className="col-12">
                                        <label htmlFor="current-password" className="form-label mb-8 h6">Current Password</label>
                                        <div className="position-relative">
                                            <input
                                                type={isCurrentPasswordVisible ? "text" : "password"}
                                                className={`form-control py-11 ${errors.currentPassword ? "is-invalid" : ""}`}
                                                id="current-password"
                                                placeholder="Enter Current Password"
                                                value={currentPassword}
                                                onChange={(e) => setCurrentPassword(e.target.value)}
                                            />
                                            <span
                                                className="position-absolute top-50 end-0 translate-middle-y px-5 cursor-pointer"
                                                onClick={() => setIsCurrentPasswordVisible(!isCurrentPasswordVisible)}
                                            >
                                                {isCurrentPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                                            </span>
                                            {errors.currentPassword && <div className="invalid-feedback">{errors.currentPassword}</div>}
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="new-password" className="form-label mb-8 h6">New Password</label>
                                        <div className="position-relative">
                                            <input
                                                type={isNewPasswordVisible ? "text" : "password"}
                                                className={`form-control py-11 ${errors.newPassword ? "is-invalid" : ""}`}
                                                id="new-password"
                                                placeholder="Enter New Password"
                                                value={newPassword}
                                                onChange={(e) => setNewPassword(e.target.value)}
                                            />
                                            <span
                                                className="position-absolute top-50 end-0 translate-middle-y px-5 cursor-pointer"
                                                onClick={() => setIsNewPasswordVisible(!isNewPasswordVisible)}
                                            >
                                                {isNewPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                                            </span>
                                            {errors.newPassword && <div className="invalid-feedback">{errors.newPassword}</div>}
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <label htmlFor="confirm-password" className="form-label mb-8 h6">Confirm Password</label>
                                        <div className="position-relative">
                                            <input
                                                type={isConfirmPasswordVisible ? "text" : "password"}
                                                className={`form-control py-11 ${errors.confirmPassword ? "is-invalid" : ""}`}
                                                id="confirm-password"
                                                placeholder="Enter Confirm Password"
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                            />
                                            <span
                                                className="position-absolute top-50 end-0 translate-middle-y px-5 cursor-pointer"
                                                onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
                                            >
                                                {isConfirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
                                            </span>
                                            {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label mb-8 h6">Password Requirements:</label>
                                        <ul className="list-inside">
                                            <li className="text-gray-600 mb-4">At least one lowercase character</li>
                                            <li className="text-gray-600 mb-4">Minimum 8 characters long - the more, the better</li>
                                            <li className="text-gray-300 mb-4">At least one number, symbol, or whitespace character</li>
                                        </ul>
                                    </div>
                                </div>

                            </form>
                        </div>
                        <div className="col-12">
                            <div className="flex-align justify-content-end gap-8 ">
                                <button type="submit" className="btn btn-main rounded-pill py-9">Save </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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

export default TrainerchangePassword;