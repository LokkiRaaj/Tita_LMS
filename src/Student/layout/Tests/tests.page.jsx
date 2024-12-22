import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Sample test data
const tests = [
    {
        id: 1,
        title: "Node js",
        trainerName: "Mani",
        batch: "Batch 1",
        duration: "1 hour",
        questions: "25",
        difficulty: "Medium",
        image: "assets/images/thumbs/course-img3.png",
    },
    {
        id: 2,
        title: "React js",
        trainerName: "Monish",
        batch: "Batch 1",
        duration: "1.5 hours",
        questions: "25",
        difficulty: "Hard",
        image: "assets/images/thumbs/course-img2.png",
    },
];

function StudenttestPage() {
    const [showModal, setShowModal] = useState(false);
    const [selectedTest, setSelectedTest] = useState(null);
    const [completedTests, setCompletedTests] = useState(0); // Track completed tests
    const navigate = useNavigate();

    const handleStartTest = (test) => {
        setSelectedTest(test);
        setShowModal(true);
    };

    const handleStartTestAction = () => {
        // Increment completed tests count
        setCompletedTests((prevCount) => prevCount + 1);
        // Navigate to the test page
        navigate("/student-starttests");
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <div className="card mt-24">
            <div className="card-body">
                <div className="mb-20 flex-between flex-wrap gap-8">
                    <h4 className="mb-0">Tests</h4>
                </div>
                <div className="row g-20">
                    {tests.map((test) => (
                        <div key={test.id} className="col-xxl-3 col-lg-4 col-sm-6">
                            <div className="card border border-gray-100">
                                <div className="card-body p-8">
                                    <a href={test.buttonLink} className="bg-main-100 rounded-8 overflow-hidden text-center mb-8 h-164 flex-center p-8">
                                        <img src={test.image} alt="Test Image" />
                                    </a>
                                    <div className="p-8">
                                        <h4 className={`text-13 py-2 px-10 rounded-pill bg-${test.trainerName.toLowerCase()}-50 text-${test.trainerName.toLowerCase()}-600 mb-16`}>
                                            {test.trainerName}
                                        </h4>
                                        <h5 className="mb-0">
                                            <a href={test.buttonLink} className="hover-text-main-600">
                                                {test.title}
                                            </a>
                                        </h5>
                                        <div className="flex-align gap-8 mt-12 pt-12 border-top border-gray-100">
                                            <div className="flex-align gap-4">
                                                <span className="text-sm text-main-600 d-flex"><i className="ph ph-shield-check" /></span>
                                                <span className="text-13 text-gray-600">{test.batch}</span>
                                            </div>
                                            <div className="flex-align gap-4">
                                                <span className="text-sm text-main-600 d-flex"><i className="ph ph-question" /></span>
                                                <span className="text-13 text-gray-600">{test.questions} questions</span>
                                            </div>
                                        </div>
                                        <div className="flex-between gap-4 flex-wrap mt-24">
                                            <button
                                                onClick={() => handleStartTest(test)}
                                                className="btn btn-outline-main rounded-pill py-9"
                                            >
                                                Start Test
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal show" style={{ display: "block" }} role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{ position: "relative" }}>
                                <h5 className="modal-title">Test Information</h5>
                                <button
                                    type="button"
                                    className="close"
                                    onClick={handleCloseModal}
                                    style={{
                                        position: "absolute",
                                        top: "10px",
                                        right: "10px",
                                        background: "none",
                                        border: "none",
                                        fontSize: "1.5rem",
                                        cursor: "pointer",
                                    }}
                                >
                                    &times;
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-4">
                                    <strong>Completed Tests:</strong> {completedTests}
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        onClick={handleStartTestAction}
                                        className="btn btn-primary rounded-pill"
                                    >
                                        Start Test
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            )}
        </div>
    );
}

export default StudenttestPage;
