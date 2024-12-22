import React, { useState } from "react";

function CreateTestPage() {
    const [questions, setQuestions] = useState([]); // To store questions
    const [newQuestion, setNewQuestion] = useState({
        question: "",
        options: ["", "", "", ""],
        correctOption: null, // Index of the correct answer
    });
    const [error, setError] = useState(""); // To store error messages
    const [showModal, setShowModal] = useState(false); // To control modal visibility
    const [confirmationDetails, setConfirmationDetails] = useState({
        course: "",
        level: "",
        batch: "",
    });

    const [selectedCourse, setSelectedCourse] = useState("");
    const [selectedLevel, setSelectedLevel] = useState("");
    const [selectedBatch, setSelectedBatch] = useState("");

    const [isSelectionCompleted, setIsSelectionCompleted] = useState(false); // Track if selection is done
    const [showPopup, setShowPopup] = useState(false); // Popup for successful submission

    const courses = [
        "React Js",
        "Node Js",
        "Python",
        "Java",
        "Data Science",
        "Data Analytics",
        "AI",
        "Cyber Security"
    ];
    const levels = ["Beginner", "Intermediate", "Advanced"];
    const batches = [
        "Batch 1", "Batch 2", "Batch 3", "Batch 4", "Batch 5",
        "Batch 6", "Batch 7", "Batch 8", "Batch 9", "Batch 10"
    ];

    const handleQuestionChange = (e) => {
        setNewQuestion({ ...newQuestion, question: e.target.value });
    };

    const handleOptionChange = (index, value) => {
        const updatedOptions = [...newQuestion.options];
        updatedOptions[index] = value;
        setNewQuestion({ ...newQuestion, options: updatedOptions });
    };

    const handleCorrectOptionChange = (index) => {
        setNewQuestion({ ...newQuestion, correctOption: index });
    };

    const handleAddQuestion = () => {
        if (
            !newQuestion.question ||
            newQuestion.options.some((opt) => !opt) ||
            newQuestion.correctOption === null ||
            !selectedCourse ||
            !selectedLevel ||
            !selectedBatch
        ) {
            setError("Please fill out the question, all options, select a correct answer, and select course, level, and batch.");
            return;
        }

        // Add the new question to the list
        setQuestions([...questions, newQuestion]);

        // Clear the form for adding new questions
        setNewQuestion({
            question: "",
            options: ["", "", "", ""],
            correctOption: null,
        });
        setShowModal(false); // Close the modal after adding the question
    };

    const handleCourseLevelBatchSelection = () => {
        if (!selectedCourse || !selectedLevel || !selectedBatch) {
            setError("Please select the course, level, and batch before adding questions.");
            return;
        }

        // Set the confirmation details and allow question creation
        setConfirmationDetails({
            course: selectedCourse,
            level: selectedLevel,
            batch: selectedBatch,
        });

        // Hide the selection fields and show the question creation form
        setIsSelectionCompleted(true);
    };

    const handleSubmit = () => {
        if (questions.length > 0) {
            // Trigger the popup if questions are created
            setShowPopup(true);
        } else {
            setError("Please add at least one question.");
        }
    };

    const handleClosePopup = () => {
        // Close the success popup
        setShowPopup(false);
    };

    return (
        <div className="card">
            <div className="card-header border-bottom border-gray-100 flex-align gap-8">
                <h5 className="mb-0">Create Tests</h5>
            </div>
            <div className="card-body">
                {!isSelectionCompleted ? (
                    <div>
                        <h6 className="mb-3">Select This</h6>
                        <div className="mb-2">
                            <div style={{ display: "flex", gap: "1rem" }}>
                                <div style={{ flex: 1 }}>
                                    <label className="form-label">Course</label>
                                    <select
                                        className="form-select"
                                        value={selectedCourse}
                                        onChange={(e) => setSelectedCourse(e.target.value)}
                                        style={{ width: "100%" }}
                                    >
                                        <option value="" disabled>
                                            Select Course
                                        </option>
                                        {courses.map((course, index) => (
                                            <option key={index} value={course}>
                                                {course}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div style={{ flex: 1 }}>
                                    <label className="form-label">Course Level</label>
                                    <select
                                        className="form-select"
                                        value={selectedLevel}
                                        onChange={(e) => setSelectedLevel(e.target.value)}
                                        style={{ width: "100%" }}
                                    >
                                        <option value="" disabled>
                                            Select Course Level
                                        </option>
                                        {levels.map((level, index) => (
                                            <option key={index} value={level}>
                                                {level}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div style={{ flex: 1 }}>
                                    <label className="form-label">Batch</label>
                                    <select
                                        className="form-select"
                                        value={selectedBatch}
                                        onChange={(e) => setSelectedBatch(e.target.value)}
                                        style={{ width: "100%" }}
                                    >
                                        <option value="" disabled>
                                            Select Batch
                                        </option>
                                        {batches.map((batch, index) => (
                                            <option key={index} value={batch}>
                                                {batch}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <button
                                className="btn btn-main rounded-pill py-9 mt-6"
                                onClick={handleCourseLevelBatchSelection}
                            >
                                Create Questions
                            </button>
                            {error && <p className="text-danger">{error}</p>}
                        </div>
                    </div>
                ) : (
                    <div>

                        <div className="mb-2">
                            {confirmationDetails.course && (
                                <div className="mt-4">
                                    <h5 className="mb-3">Your Questions</h5>
                                    {questions.length > 0 &&
                                        questions.map((question, index) => (
                                            <li key={index}>
                                                <br />
                                                <strong>Q{index + 1}:</strong> {question.question} <br />
                                                <strong>Options:</strong>
                                                {question.options.map((option, optIndex) => (
                                                    <div key={optIndex} className="form-check">
                                                        <input
                                                            type="checkbox"
                                                            className="form-check-input"
                                                            id={`option-${optIndex}`}
                                                            checked={question.correctOption === optIndex}
                                                            disabled
                                                        />
                                                        <label className="form-check-label" htmlFor={`option-${optIndex}`}>
                                                            {option}
                                                        </label>
                                                    </div>
                                                ))}
                                                <strong>Correct Answer:</strong> {question.options[question.correctOption]}
                                                <br />
                                            </li>
                                        ))}
                                    <button
                                        className="btn btn-main rounded-pill py-9 mt-4"
                                        onClick={() => setShowModal(true)}
                                    >
                                        Create Questions
                                    </button>

                                    <button
                                        className="btn btn-main rounded-pill py-9 mt-4 float-end"
                                        onClick={handleSubmit}
                                    >
                                        Submit
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {/* Modal for Adding Questions */}
            {showModal && (
                <div className="modal show d-block" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Create Question</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={() => setShowModal(false)}
                                ></button>
                            </div>
                            <div className="modal-body">
                                {error && <p className="text-danger">{error}</p>}
                                <div className="mb-3">
                                    <label className="form-label">Question</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your question"
                                        value={newQuestion.question}
                                        onChange={handleQuestionChange}
                                        style={{ width: "100%" }}
                                    />
                                </div>

                                <div style={{ display: "flex", gap: "1rem" }}>
                                    {newQuestion.options.map((option, index) => (
                                        <div key={index} style={{ flex: 1 }}>
                                            <label className="form-label">Option {index + 1}</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder={`Enter option ${index + 1}`}
                                                value={option}
                                                onChange={(e) => handleOptionChange(index, e.target.value)}
                                                style={{ height: "30px" }}
                                            />
                                        </div>
                                    ))}
                                </div>

                                {/* Correct Answer Dropdown */}
                                <div className="mb-3">
                                    <label className="form-label">Correct Answer</label>
                                    <select
                                        className="form-select"
                                        value={newQuestion.correctOption ?? ""}
                                        onChange={(e) => handleCorrectOptionChange(Number(e.target.value))}
                                        style={{ width: "100%" }}
                                    >
                                        <option value="" disabled>
                                            Select the correct answer
                                        </option>
                                        {newQuestion.options.map((_, index) => (
                                            <option key={index} value={index}>
                                                Option {index + 1}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={() => setShowModal(false)}
                                >
                                    Close
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-main"
                                    onClick={handleAddQuestion}
                                >
                                    Create Question
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Success Popup */}
            {showPopup && (
                <div className="modal show d-block" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Success</h5>
                                <button
                                    type="button"
                                    className="btn-close"
                                    onClick={handleClosePopup}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <p>Your questions have been successfully created!</p>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={handleClosePopup}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CreateTestPage;