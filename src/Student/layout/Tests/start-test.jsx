import React, { useState, useEffect } from "react";
import { FaClock } from "react-icons/fa"; // Import the clock icon from react-icons
import { useLocation } from "react-router-dom";

function StartTestPage() {
    const [questionsData, setQuestionsData] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [timeLeft, setTimeLeft] = useState(3600); // 2 minutes in seconds
    const [errorMessage, setErrorMessage] = useState("");
    const query = new URLSearchParams(useLocation().search);
    const courseId = query.get("id");

    // Fetch test data from API
    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await fetch(`http://192.168.1.11:4000/test/getTestByCourseId/${courseId}`);
                const data = await response.json(); // Ensure the response is parsed as JSON

                // Log the full response data to the console
                console.log(data);

                // Check if the response contains a 'test' array
                if (data.success && data.test && data.test.length > 0) {
                    const testData = data.test[0]; // Get the first item in the test array
                    const formattedQuestions = Object.keys(testData)
                        .filter((key) => key.startsWith("question")) // Filter keys that start with 'question'
                        .map((key) => ({
                            question: testData[key].question, // Access the question text
                            options: testData[key].options, // Corrected: should be options, not option
                            correctAnswer: testData[key].answer, // Correct answer
                        }));

                    setQuestionsData(formattedQuestions);
                    setSelectedAnswers(Array(formattedQuestions.length).fill(null)); // Initialize selected answers
                }
            } catch (error) {
                console.error("Error fetching questions:", error);
            }
        };

        fetchQuestions();
    }, [courseId]);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 0) {
                    clearInterval(timer);
                    setIsSubmitted(true); // Auto-submit when time runs out
                    return 0;
                }
                return prevTime - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleOptionChange = (index) => {
        const updatedAnswers = [...selectedAnswers];
        updatedAnswers[currentQuestionIndex] = index;
        setSelectedAnswers(updatedAnswers);
        setErrorMessage("");
    };

    const handleNext = () => {
        if (selectedAnswers[currentQuestionIndex] !== null) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        } else {
            setErrorMessage("Please select an answer before proceeding.");
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
                ans !== null && questionsData[index].options[ans] === questionsData[index].correctAnswer
                    ? count + 1
                    : count,
            0
        );
        return { attempted, correct };
    };

    const formatTime = (timeInSeconds) => {
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = timeInSeconds % 60;
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
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
                            backgroundColor: isPass ? "green" : "#FF001E",
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
                    <div className="row">
                        <div>
                            <div
                                style={{ position: "fixed", right: "50px", display: "flex", alignItems: "center" }}
                            >
                                <FaClock style={{ marginRight: "5px", color: "#FF001E" }} />
                                <span
                                    style={{
                                        fontSize: "18px",
                                        fontWeight: "bold",
                                        color: "#FF001E",
                                    }}
                                >
                                    {formatTime(timeLeft)}
                                </span>
                            </div>
                            {currentQuestion && (
                                <>
                                    <h2 style={{ textAlign: "center", color: "#FF001E" }}>
                                        Test
                                    </h2>
                                    <h2>{currentQuestionIndex + 1}. {currentQuestion.question}</h2>
                                    <div>
                                        {currentQuestion.options.map((option, index) => (
                                            <label
                                                key={index}
                                                style={{
                                                    display: "block",
                                                    margin: "10px 0",
                                                    cursor: "pointer",
                                                }}
                                            >
                                                <input
                                                    type="radio"
                                                    checked={selectedAnswers[currentQuestionIndex] === index}
                                                    onChange={() => handleOptionChange(index)}
                                                    style={{ marginRight: "10px" }}
                                                />
                                                {option}
                                            </label>
                                        ))}
                                    </div>
                                    {errorMessage && (
                                        <p style={{ color: "red", fontWeight: "bold" }}>
                                            {errorMessage}
                                        </p>
                                    )}
                                    <div
                                        style={{
                                            textAlign: "right",
                                            paddingTop: "5px",
                                        }}
                                    >
                                        {currentQuestionIndex > 0 && (
                                            <button
                                                className="btn btn-primary btn-sm float-start"
                                                onClick={handleBack}
                                            >
                                                Back
                                            </button>
                                        )}
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
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StartTestPage;
