import React, { useState, useEffect } from "react";
import { FaClock } from "react-icons/fa"; // Import the clock icon from react-icons

const questionsData = [
    {
        question: "What is React?",
        options: [
            "A programming language",
            "A framework for building mobile applications",
            "A JavaScript library for building user interfaces",
            "A database"
        ],
        correctAnswer: 2,
    },
    {
        question: "Which of the following is used to create a component in React?",
        options: [
            "ReactDOM",
            "React.createElement()",
            "class or function",
            "document.createComponent()"
        ],
        correctAnswer: 2,
    },
    {
        question: "What is the virtual DOM in React?",
        options: [
            "The actual DOM in the browser",
            "An optimized version of the real DOM",
            "A lightweight copy of the real DOM",
            "A library separate from React"
        ],
        correctAnswer: 2,
    },
    {
        question: "How do you pass data to components in React?",
        options: ["Through methods", "Using state", "Using props", "Using context only"],
        correctAnswer: 2,
    },
    {
        question: "What is the default behavior of `setState` in React?",
        options: [
            "It synchronously updates the state",
            "It deletes the current state",
            "It merges the new state with the old state",
            "It re-renders only the root component"
        ],
        correctAnswer: 2,
    },
    {
        question: "Which method is used to update the state in React?",
        options: ["updateState()", "changeState()", "setState()", "refreshState()"],
        correctAnswer: 2,
    },
    {
        question: "What is JSX in React?",
        options: [
            "A templating language",
            "A syntax extension for JavaScript",
            "A JavaScript library",
            "A type of CSS"
        ],
        correctAnswer: 1,
    },
    {
        question: "What is the purpose of the `useEffect` hook in React?",
        options: [
            "To manage component state",
            "To handle side effects in functional components",
            "To create reusable components",
            "To optimize rendering performance"
        ],
        correctAnswer: 1,
    },
    {
        question: "Which statement is true about React keys?",
        options: [
            "They must be unique globally.",
            "They must be unique among siblings.",
            "They are optional in lists.",
            "They are used to bind events."
        ],
        correctAnswer: 1,
    },
    {
        question: "How can you optimize performance in a React application?",
        options: [
            "Avoid using hooks",
            "Use React.memo and useCallback for memoization",
            "Use inline styles for all elements",
            "Avoid splitting components"
        ],
        correctAnswer: 1,
    },
];

function StartTestpage() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState(Array(questionsData.length).fill(null));
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes in seconds
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime <= 0) {
                    clearInterval(timer);
                    setIsSubmitted(true); // Auto-submit when time runs out
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000); // Update every second

        return () => clearInterval(timer); // Cleanup the interval on unmount
    }, []);

    const handleOptionChange = (index) => {
        const updatedAnswers = [...selectedAnswers];
        updatedAnswers[currentQuestionIndex] = index;
        setSelectedAnswers(updatedAnswers);
        setErrorMessage(""); // Reset error message on selection change
    };

    const handleNext = () => {
        // Check if the current answer is correct or not
        if (selectedAnswers[currentQuestionIndex] !== null) {
            const correctAnswer = questionsData[currentQuestionIndex].correctAnswer;
           
        }

        if (currentQuestionIndex < questionsData.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    const handleBack = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleSubmit = () => {
        setIsSubmitted(true);
    };

    const getResults = () => {
        const attempted = selectedAnswers.filter((ans) => ans !== null).length;
        const correct = selectedAnswers.reduce(
            (count, ans, index) =>
                ans === questionsData[index].correctAnswer ? count + 1 : count,
            0
        );
        return { attempted, correct };
    };

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    if (isSubmitted) {
        const { attempted, correct } = getResults();
        const scorePercentage = (correct / questionsData.length) * 100;
        const isPass = scorePercentage >= 80;

        return (
            <div
                style={{
                    maxWidth: "600px",
                    margin: "20px auto",
                    padding: "20px",
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    backgroundColor: "#f9f9f9",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                }}
            >
                <h2 style={{ textAlign: "center", color: "#0A0909" }}>Test Results</h2>
                <p>Questions Attempted: {attempted}</p>
                <p>Correct Answers: {correct}</p>
                <p>Score: {scorePercentage.toFixed(2)}%</p>
                <div style={{ textAlign: "center", marginTop: "20px" }}>
                    <button
                        style={{
                            backgroundColor: isPass ? "green" : "red",
                            color: "white",
                            padding: "10px 20px",
                            fontSize: "16px",
                            border: "none",
                            borderRadius: "5px",
                        }}
                    >
                        {isPass ? "PASS" : "FAIL"}
                    </button>
                </div>
            </div>
        );
    }

    const currentQuestion = questionsData[currentQuestionIndex];

    return (
        <div>
            <div className="card mt-24">
                <div className="card-body">
                    <div className="mb-20 flex-between flex-wrap gap-8">
                        <h4 className="mb-0"></h4>
                    </div>
                    <div className="row">
                        <div>
                            {/* Timer section */}
                            <div style={{ position: "fixed", right: "50px", display: "flex", alignItems: "center" }}>
                                <FaClock style={{ marginRight: "5px", color: "#FF001E" }} />
                                <span style={{ fontSize: "18px", fontWeight: "bold", color: "#FF001E" }}>
                                    {formatTime(timeLeft)}
                                </span>
                            </div>

                            <h2 style={{ textAlign: "center", color: "#FF001E" }}>
                                Question {currentQuestionIndex + 1}
                            </h2>

                            <h2>{currentQuestion.question}</h2>
                            <div>
                                {currentQuestion.options.map((option, index) => (
                                    <label
                                        key={index}
                                        style={{ display: "block", margin: "10px 0", cursor: "pointer" }}
                                    >
                                        <input
                                            type="checkbox"
                                            checked={selectedAnswers[currentQuestionIndex] === index}
                                            onChange={() => handleOptionChange(index)}
                                            style={{ marginRight: "10px" }}
                                        />
                                        {option}
                                    </label>
                                ))}
                            </div>
                            
                            {/* Display error message */}
                            {errorMessage && <p style={{ color: "red", fontWeight: "bold" }}>{errorMessage}</p>}

                            <div style={{ textAlign: "right", paddingTop: "5px" }}>
                                <button
                                    className="btn btn-primary btn-sm float-start"
                                    onClick={handleBack}
                                >
                                    Back
                                </button>
                                {currentQuestionIndex < questionsData.length - 1 ? (
                                    <button
                                        className="btn btn-primary btn-sm float-end"
                                        onClick={handleNext}
                                    >
                                        Next
                                    </button>
                                ) : (
                                    <button
                                        className="btn btn-primary btn-sm float-end"
                                        onClick={handleSubmit}
                                    >
                                        Submit
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StartTestpage;
