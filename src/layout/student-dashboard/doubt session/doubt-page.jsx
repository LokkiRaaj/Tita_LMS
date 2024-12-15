import React, { useState } from "react";

function DoubtSessionPage() {
    // State for managing the message input and the list of messages
    const [isMeetingActive, setIsMeetingActive] = useState(false); // Track meeting status
    const [meetingLink, setMeetingLink] = useState(""); // Store generated meeting link
    const [messages, setMessages] = useState([]); // List of messages for chat

    // Function to generate a random meeting link
    const generateMeetingLink = () => {
        return `https://meeting-platform.com/${Math.random().toString(36).substr(2, 9)}`;
    };

    // Function to start the meeting session
    const startMeeting = () => {
        const link = generateMeetingLink();
        setMeetingLink(link); // Set the generated link
        setIsMeetingActive(true);
        setMessages([
            ...messages, 
            { type: "trainer", text: "Let's connect for a live session to clear your doubt!" },
            { type: "trainer", text: `Meeting Link: ${link}` }
        ]);
    };

    // Function to end the meeting session
    const endMeeting = () => {
        setIsMeetingActive(false);
        setMessages([
            ...messages,
            { type: "trainer", text: "The meeting session has ended. Feel free to ask more doubts." }
        ]);
    };

    return (
        <div className="card mt-24">
            <div className="card-body">
                <div className="mb-20 flex-between flex-wrap gap-8">
                    <h4 className="mb-0">Doubt Session</h4>
                    
                </div>

                {/* Meeting Section */}
                <div className="mt-32">
                    <h4 className="mb-16">Join Live Meeting</h4>
                    {!isMeetingActive ? (
                        <button
                            onClick={startMeeting}
                            className="btn btn-success py-5"
                            style={{
                                padding: "10px",
                                borderRadius: "8px",
                                backgroundColor: "#FF001E",
                                color: "#fff",
                                border: "none",
                                marginLeft: "8px",
                                fontSize: "20px",
                                width: "180px",
                                height: "50px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            Join Meeting
                        </button>
                    ) : (
                        <button
                            onClick={endMeeting}
                            className="btn btn-danger py-5"
                            style={{
                                padding: "10px",
                                borderRadius: "8px",
                                backgroundColor: "#0A0909",
                                color: "#fff",
                                border: "none",
                                marginLeft: "8px",
                                fontSize: "20px",
                                width: "180px",
                                height: "50px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }}
                        >
                            End Meeting
                        </button>
                    )}

                    {/* Display Meeting Link if Active */}
                    {isMeetingActive && meetingLink && (
                        <div className="mt-16">
                            <p><strong>Trainer's Meeting Link:</strong> <a href={meetingLink} target="_blank" rel="noopener noreferrer">{meetingLink}</a></p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}

export default DoubtSessionPage;
