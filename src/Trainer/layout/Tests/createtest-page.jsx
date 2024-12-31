import React, { useState, useEffect } from "react";
import axios from 'axios';

function CreateTestPage() {
    const [questions, setQuestions] = useState([]);
    const [newQuestion, setNewQuestion] = useState({
        testTitle: "",
        date: "",
        question: "",
        options: ["", "", "", ""],
        correctOption: null,
        decription: "",
    });
    const [error, setError] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [confirmationDetails, setConfirmationDetails] = useState({
        course: "",
        level: "",
        batch: "",
    });

    const [selectedCourse, setSelectedCourse] = useState("");
    const [selectedLevel, setSelectedLevel] = useState("");
    const [selectedBatch, setSelectedBatch] = useState("");
    const [isSelectionCompleted, setIsSelectionCompleted] = useState(false);
    const [showPopup, setShowPopup] = useState(false);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('http://148.135.138.203:4000/courses/getAllCourses');
                if (response.data && Array.isArray(response.data.courses)) {
                    setCourses(response.data.courses);
                    console.log('Courses:', response.data.courses);
                } else {
                    console.error('Unexpected response format:', response.data);
                }
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, []);

    const levels = ["Beginner", "Intermediate", "Advanced"];
    const batches = [
        "Batch 1", "Batch 2", "Batch 3", "Batch 4", "Batch 5",
        "Batch 6", "Batch 7", "Batch 8", "Batch 9", "Batch 10"
    ];

    const handleTestTitleChange = (e) => {
        setNewQuestion({ ...newQuestion, testTitle: e.target.value });
    };

    const handleDateChange = (e) => {
        setNewQuestion({ ...newQuestion, date: e.target.value });
    };

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

    const handleDescriptionChange = (e) => {
        setNewQuestion({ ...newQuestion, decription: e.target.value });
    };

    const handleAddQuestion = () => {
        if (
            !newQuestion.testTitle ||
            !newQuestion.date ||
            !newQuestion.question ||
            newQuestion.options.some((opt) => !opt) ||
            newQuestion.correctOption === null ||
            !newQuestion.decription ||
            !selectedCourse ||
            !selectedLevel ||
            !selectedBatch
        ) {
            setError("Please fill out the question, all options, select a correct answer, and select course, level, and batch");
            return;
        }

        setQuestions([...questions, newQuestion]);

        setNewQuestion({
            testTitle: "",
            date: "",
            question: "",
            options: ["", "", "", ""],
            correctOption: null,
            decription: "",
        });
        setShowModal(false);
        setError(""); // Clear any previous error
    };

    const handleCourseLevelBatchSelection = () => {
        if (!selectedCourse || !selectedLevel || !selectedBatch) {
            setError("Please select the course, level, batch before adding questions.");
            return;
        }

        setConfirmationDetails({
            course: selectedCourse,
            level: selectedLevel,
            batch: selectedBatch,
        });

        setIsSelectionCompleted(true);
    };

    const handleSubmit = async () => {
        if (questions.length > 0) {
            const selectedCourseObject = courses.find(course => course.courseTitle === selectedCourse);
            const testPayload = {
                course: selectedCourseObject._id,
                courseLevel: selectedLevel,
            };

            // Add each question to the payload
            questions.forEach((q, index) => {
                testPayload[`question${index + 1}`] = {
                    question: q.question,
                    options: q.options,
                    answer: q.options[q.correctOption]
                };
            });

            try {
                await axios.post('http://192.168.1.11:4000/test/createTest', testPayload);
                setShowPopup(true);
            } catch (error) {
                console.error('Error submitting test:', error);
                setError('Error submitting test. Please try again.');
            }
        } else {
            setError("Please add at least one question.");
        }
    };

    const handleClosePopup = () => {
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
                                    <select className="form-select" value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)} style={{ width: "100%" }}>
                                        <option value="" disabled>
                                            Select Course
                                        </option>
                                        {courses.map((course, index) => (
                                            <option key={index} value={course.courseTitle}>
                                                {course.courseTitle}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div style={{ flex: 1 }}>
                                    <label className="form-label">Course Level</label>
                                    <select className="form-select" value={selectedLevel} onChange={(e) => setSelectedLevel(e.target.value)} style={{ width: "100%" }}>
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
                                    <select className="form-select" value={selectedBatch} onChange={(e) => setSelectedBatch(e.target.value)} style={{ width: "100%" }}>
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
                            <button className="btn btn-main rounded-pill py-9 mt-6" onClick={handleCourseLevelBatchSelection}>
                                Create Questions
                            </button>
                            {error && <p className="text-danger">{error}</p>}
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className="mb-2">
                            {confirmationDetails.course && (
                                <div className="mt-4 gap-5">
                                    <h5 className="mb-3">Your Questions</h5>
                                    {questions.length > 0 &&
                                        questions.map((question, index) => (
                                            <li key={index} style={{ marginBottom: '20px' }}> {/* Inline margin for gap */}
                                                <br />
                                                <strong>Title :</strong> {question.testTitle} <br />
                                                <strong>Date :</strong> {question.date} <br />
                                                <strong>Q{index + 1} :</strong> {question.question} <br />
                                                <strong>Options :</strong>
                                                {question.options.map((option, optIndex) => (
                                                    <div key={optIndex} className="form-check">
                                                        <input type="checkbox" className="form-check-input" id={`option-${optIndex}`} checked={question.correctOption === optIndex} disabled />
                                                        <label className="form-check-label" htmlFor={`option-${optIndex}`}>
                                                            {option}
                                                        </label>
                                                    </div>
                                                ))}
                                                <strong>Correct Answer :</strong> {question.options[question.correctOption]}
                                                <br />
                                                <strong>Description :</strong> {question.options[question.decription]}
                                                <br />
                                            </li>
                                        ))}
                                    <button className="btn btn-main rounded-pill py-9 mt-4" onClick={() => setShowModal(true)}>
                                        Create Questions
                                    </button>

                                    <button className="btn btn-main rounded-pill py-9 mt-4 float-end" onClick={handleSubmit}>
                                        Submit
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>

            {showModal && (
                <div className="modal show d-block" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                    <div className="modal-dialog " style={{ maxWidth: "800px" }}>
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
                                <div className="mb-5">
                                    <h5 className="form-label px-5">Title</h5>
                                    <input type="text" className="form-control" placeholder="Enter your question" value={newQuestion.testTitle} onChange={handleTestTitleChange} style={{ width: "100%" }} />
                                </div>

                                <div className="mb-5">
                                    <h5 className="form-label px-5">Date</h5>
                                    <input type="date" className="form-control" value={newQuestion.date} onChange={handleDateChange} style={{ width: "100%" }} />
                                </div>

                                <div className="mb-5">
                                    <h5 className="form-label px-5">Question</h5>
                                    <textarea className="form-control" placeholder="Enter your question" value={newQuestion.question} onChange={handleQuestionChange} style={{ width: "100%" }} />
                                </div>

                                <div style={{ display: "flex", gap: "1rem" }}>
                                    {newQuestion.options.map((option, index) => (
                                        <div key={index} style={{ flex: 1 }}>
                                            <h5 className="form-label py-3 px-10 text-sm">Option {index + 1}</h5>
                                            <input type="text" className="form-control" placeholder={`Enter option ${index + 1}`} value={option}
                                                onChange={(e) => handleOptionChange(index, e.target.value)}
                                                style={{ height: "40px" }} />
                                        </div>
                                    ))}
                                </div>

                                <div className="mb-5">
                                    <h5 className="form-label py-5 px-5">Correct Answer</h5>
                                    <select className="form-select" value={newQuestion.correctOption ?? ""} onChange={(e) => handleCorrectOptionChange(Number(e.target.value))} style={{ width: "100%" }}>
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

                                <div className="mb-5">
                                    <h5 className="form-label px-5">Description </h5>
                                    <textarea className="form-control" placeholder="Enter your question" value={newQuestion.decription} onChange={handleDescriptionChange} style={{ width: "100%" }} />
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                                    Close
                                </button>
                                <button type="button" className="btn btn-main" onClick={handleAddQuestion}>
                                    Create Question
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {showPopup && (
                <div className="modal show d-block" style={{ background: "rgba(0, 0, 0, 0.5)" }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Success</h5>
                                <button type="button" className="btn-close" onClick={handleClosePopup}></button>
                            </div>
                            <div className="modal-body">
                                <p>Your Test has been successfully created!</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CreateTestPage;