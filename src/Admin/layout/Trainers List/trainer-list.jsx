import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { 
    ChevronLeftIcon, 
    ChevronRightIcon 
} from '@heroicons/react/24/outline';
import TrainerEditModal from '../Trainers List/traineredit';

function TrainerList() {
    const [trainers, setTrainers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const itemsPerPage = 5;
    const navigate = useNavigate();
    const [selectedTrainer, setSelectedTrainer] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    // Fetch trainers with pagination
    const fetchTrainers = async (page = 1) => {
        try {
            const response = await axios.get("https://lms-backend-ylpd.onrender.com/trainer/getTrainers", {
                params: {
                    page: page,
                    limit: itemsPerPage
                }
            });
            
            setTrainers(response.data.trainers);
            setTotalPages(Math.ceil(response.data.total / itemsPerPage));
            setCurrentPage(page);
        } catch (error) {
            console.error("Error fetching trainers:", error);
        }
    };

    // Pagination change handler
    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            fetchTrainers(pageNumber);
        }
    };

    // Edit trainer handler
    const handleEditTrainer = (trainer) => {
        setSelectedTrainer(trainer);
        setIsEditModalOpen(true);
    };

    // Delete trainer handler
    const handleDeleteTrainer = async (trainerId) => {
        try {
            await axios.delete(`https://lms-backend-ylpd.onrender.com/trainer/deleteTrainer/${trainerId}`);
            
            // Refresh the list
            if (trainers.length === 1 && currentPage > 1) {
                fetchTrainers(currentPage - 1);
            } else {
                fetchTrainers(currentPage);
            }
            
            alert("Trainer deleted successfully");
        } catch (error) {
            console.error("Error deleting trainer:", error);
            alert("Failed to delete trainer");
        }
    };

    // Handler to update trainer in the list after edit
    const handleUpdateTrainer = (updatedTrainer) => {
        setTrainers(prevTrainers => 
            prevTrainers.map(trainer => 
                trainer._id === updatedTrainer._id ? updatedTrainer : trainer
            )
        );
    };

    // Initial data fetch
    useEffect(() => {
        fetchTrainers();
    }, []);

    // Enhanced Pagination Rendering
    const renderPagination = () => {
        // Generate page numbers to show
        const generatePageNumbers = () => {
            const pages = [];
            const maxPagesToShow = 5;
            let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
            let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

            // Adjust start page if we're near the end
            if (endPage - startPage + 1 < maxPagesToShow) {
                startPage = Math.max(1, endPage - maxPagesToShow + 1);
            }

            for (let i = startPage; i <= endPage; i++) {
                pages.push(
                    <button
                        key={i}
                        onClick={() => handlePageChange(i)}
                        className={`
                            px-4 py-2 mx-1 rounded-md 
                            ${currentPage === i 
                                ? 'bg-primary text-white' 
                                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}
                            transition-colors duration-200 ease-in-out
                        `}
                    >
                        {i}
                    </button>
                );
            }
            return pages;
        };

        return (
            <div className="flex items-center justify-end space-x-2 p-4">
                {/* Previous Button */}
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`
                        flex items-center justify-center 
                        p-2 rounded-md 
                        ${currentPage === 1 
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
                        transition-colors duration-200 ease-in-out
                    `}
                >
                    <ChevronLeftIcon className="h-5 w-5" />
                    <span className="ml-2 hidden md:inline">Previous</span>
                </button>

                {/* Page Numbers */}
                <div className="flex items-center space-x-1">
                    {generatePageNumbers()}
                </div>

                {/* Next Button */}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`
                        flex items-center justify-center 
                        p-2 rounded-md 
                        ${currentPage === totalPages 
                            ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}
                        transition-colors duration-200 ease-in-out
                    `}
                >
                    <span className="mr-2 hidden md:inline">Next</span>
                    <ChevronRightIcon className="h-5 w-5" />
                </button>
            </div>
        );
    };

    return (
        <div className="dashboard-body">
            <div className="row gy-4">
                <div className="card overflow-hidden">
                    <div className="card-body p-0 overflow-x-auto">
                        <table id="studentTable" className="table table-striped">
                            <thead>
                                <tr style={{ borderBottom: '1px solid #ccc' }}>
                                    <th className="fixed-width">
                                        <div className="form-check">
                                            <input className="form-check-input border-gray-200 rounded-4" type="checkbox" id="selectAll" />
                                        </div>
                                    </th>
                                    <th className="h6 text-gray-300">Trainer Name</th>
                                    <th className="h6 text-gray-300">Email ID</th>
                                    <th className="h6 text-gray-300">Phone</th>
                                    <th className="h6 text-gray-300">City</th>
                                    <th className="h6 text-gray-300">My Courses</th>
                                    <th className="h6 text-gray-300">Resume</th>
                                    <th className="h6 text-gray-300">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {trainers.map((trainer) => (
                                    <tr key={trainer._id}>
                                        <td className="fixed-width">
                                            <div className="form-check">
                                                <input className="form-check-input border-gray-200 rounded-4" type="checkbox" />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="flex-align gap-8">
                                                <img src={trainer.image} alt={trainer.firstname} className="w-40 h-40 rounded-circle" />
                                                <span className="h6 mb-0 fw-medium text-gray-300">{trainer.firstname} {trainer.lastname}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="h6 mb-0 fw-medium text-gray-300">{trainer.mailId}</span>
                                        </td>
                                        <td>
                                            <span className="h6 mb-0 fw-medium text-gray-300">{trainer.mobileNumber}</span>
                                        </td>
                                        <td>
                                            <span className="h6 mb-0 fw-medium text-gray-300">{trainer.city}</span>
                                        </td>
                                        <td>
                                            <ul className="list-unstyled mb-0">
                                                {trainer.myCourse && 
                                                 trainer.myCourse.toString().split(',').map((course, index) => (
                                                    <li key={index} className="h6 mb-0 fw-medium text-gray-300">
                                                        {course.trim().replace(/["\[\]]/g, '')}
                                                    </li>
                                                ))}
                                            </ul>
                                        </td>
                                        <td>
                                            <a href={trainer.resume} target="_blank" rel="noopener noreferrer" className="bg-main-50 text-main-600 py-2 px-14 rounded-pill hover-bg-main-600 hover-text-white">View Resume</a>
                                        </td>
                                        <td>
                                            <div className="d-flex gap-2">
                                                <button 
                                                    onClick={() => handleEditTrainer(trainer)} 
                                                    className="btn btn-sm btn-primary"
                                                >
                                                    Edit
                                                </button>
                                                <button 
                                                    onClick={() => handleDeleteTrainer(trainer._id)} 
                                                    className="btn btn-sm btn-danger" style={{background: "#0A0909"}}
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="card-footer flex justify-between items-center">
                        <Link to="/admin-createtrainer">
                            <button className="btn btn-primary">Create New Trainer</button>
                        </Link>
                        
                        {/* Pagination Component */}
                        {totalPages > 1 && renderPagination()}
                    </div>
                </div>
            </div>
            <TrainerEditModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                trainer={selectedTrainer}
                onUpdateTrainer={handleUpdateTrainer}
            />
        </div>
    );
}

export default TrainerList;
