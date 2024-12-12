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
        image: '',
        resume: ''
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
                image: trainer.image || '',
                resume: trainer.resume || ''
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

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(
                `https://lms-backend-ylpd.onrender.com/trainer/updateTrainer/${trainer._id}`, 
                formData
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
                    {/* Add more input fields similarly */}
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
                            background: '#4CAF50',
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
