import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TrainerEditModal({ isOpen, onClose, trainer, onUpdateTrainer }) {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        mailId: '',
        mobileNumber: '',
        city: '',
        myCourse: '',
        image: null,
        resume: null
    });

    // Animation styles
    const modalStyle = {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? 'visible' : 'hidden',
        transition: 'all 0.3s ease-in-out'
    };

    const modalContentStyle = {
        backgroundColor: 'white',
        borderRadius: '10px',
        width: '90%',
        maxWidth: '600px',
        maxHeight: '90%',
        overflowY: 'auto',
        transform: isOpen ? 'scale(1)' : 'scale(0.7)',
        opacity: isOpen ? 1 : 0,
        transition: 'all 0.3s ease-in-out',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    };

    // Populate form when trainer prop changes
    useEffect(() => {
        if (trainer) {
            setFormData({
                firstname: trainer.firstname || '',
                lastname: trainer.lastname || '',
                mailId: trainer.mailId || '',
                mobileNumber: trainer.mobileNumber || '',
                city: trainer.city || '',
                myCourse: trainer.myCourse ? trainer.myCourse.toString() : '',
                image: null,
                resume: null
            });
        }
    }, [trainer]);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle file changes
    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: files[0]
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSubmit = new FormData();

        // Append form data
        formDataToSubmit.append('firstname', formData.firstname);
        formDataToSubmit.append('lastname', formData.lastname);
        formDataToSubmit.append('mobileNumber', formData.mobileNumber);
        formDataToSubmit.append('mailId', formData.mailId);
        formDataToSubmit.append('city', formData.city);
        formDataToSubmit.append('myCourse', formData.myCourse);
        if (formData.image) {
            formDataToSubmit.append('image', formData.image);
        }
        if (formData.resume) {
            formDataToSubmit.append('resume', formData.resume);
        }

        try {
            const response = await axios.put(
                `http://148.135.138.203:4000/trainer/updateTrainer/${trainer._id}`, 
                formDataToSubmit,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );
            
            onUpdateTrainer(response.data);
            onClose();
        } catch (error) {
            console.error("Error updating trainer:", error);
            alert("Failed to update trainer");
        }
    };

    // If modal is not open, return null
    if (!isOpen) return null;

    return (
        <div style={modalStyle}>
            <div 
                style={modalContentStyle} 
                onClick={(e) => e.stopPropagation()}
            >
                {/* Modal Header */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '20px',
                    borderBottom: '1px solid #e0e0e0'
                }}>
                    <h2 style={{
                        margin: 0,
                        fontSize: '1.5rem',
                        fontWeight: 'bold'
                    }}>
                        Edit Trainer
                    </h2>
                    <button 
                        onClick={onClose}
                        style={{
                            background: 'none',
                            border: 'none',
                            fontSize: '1.5rem',
                            cursor: 'pointer',
                            color: '#888'
                        }}
                    >
                        ×
                    </button>
                </div>

                {/* Modal Body */}
                <form 
                    onSubmit={handleSubmit} 
                    style={{
                        padding: '20px',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr',
                        gap: '15px'
                    }}
                >
                    {/* Input Fields */}
                    <div>
                        <label style={{display: 'block', marginBottom: '5px'}}>First Name</label>
                        <input
                            type="text"
                            name="firstname"
                            value={formData.firstname}
                            onChange={handleChange}
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: '1px solid #ddd',
                                borderRadius: '5px'
                            }}
                            required
                        />
                    </div>
                    <div>
                        <label style={{display: 'block', marginBottom: '5px'}}>Last Name</label>
                        <input
                            type="text"
                            name="lastname"
                            value={formData.lastname}
                            onChange={handleChange}
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: '1px solid #ddd',
                                borderRadius: '5px'
                            }}
                            required
                        />
                    </div>
                    <div>
                        <label style={{display: 'block', marginBottom: '5px'}}>Email</label>
                        <input
                            type="email"
                            name="mailId"
                            value={formData.mailId}
                            onChange={handleChange}
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: '1px solid #ddd',
                                borderRadius: '5px'
                            }}
                            required
                        />
                    </div>
                    <div>
                        <label style={{display: 'block', marginBottom: '5px'}}>Mobile Number</label>
                        <input
                            type="text"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={handleChange}
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: '1px solid #ddd',
                                borderRadius: '5px'
                            }}
                            required
                        />
                    </div>
                    <div>
                        <label style={{display: 'block', marginBottom: '5px'}}>City</label>
                        <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: '1px solid #ddd',
                                borderRadius: '5px'
                            }}
                        />
                    </div>
                    <div>
                        <label style={{display: 'block', marginBottom: '5px'}}>Course</label>
                        <input
                            type="text"
                            name="myCourse"
                            value={formData.myCourse}
                            onChange={handleChange}
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: '1px solid #ddd',
                                borderRadius: '5px'
                            }}
                        />
                    </div>
                    <div>
                        <label style={{display: 'block', marginBottom: '5px'}}>Image Upload</label>
                        <input
                            type="file"
                            name="image"
                            onChange={handleFileChange}
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: '1px solid #ddd',
                                borderRadius: '5px'
                            }}
                        />
                    </div>
                    <div>
                        <label style={{display: 'block', marginBottom: '5px'}}>Resume Upload</label>
                        <input
                            type="file"
                            name="resume"
                            onChange={handleFileChange}
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: '1px solid #ddd',
                                borderRadius: '5px'
                            }}
                        />
                    </div>
                </form>

                {/* Modal Footer */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    padding: '20px',
                    borderTop: '1px solid #e0e0e0'
                }}>
                    <button 
                        onClick={onClose}
                        style={{
                            marginRight: '10px',
                            padding: '10px 20px',
                            background: 'none',
                            border: '1px solid #ddd',
                            borderRadius: '5px'
                        }}
                    >
                        Cancel
                    </button>
                    <button 
                        onClick={handleSubmit}
                        style={{
                            padding: '10px 20px',
                            background: '#FF001E',
                            color: 'white',
                            border: 'none',
                            borderRadius: '5px'
                        }}
                    >
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TrainerEditModal;
