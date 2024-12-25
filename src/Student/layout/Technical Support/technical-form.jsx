import React, { useState, useEffect } from "react";
import axios from "axios";
import SendIcon from "@mui/icons-material/Send";

function StudentTechnicalSupportForm() {
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [submittedData, setSubmittedData] = useState(null);
    const [showMessage, setShowMessage] = useState(false);
    const [showData, setShowData] = useState(false);
    const [ticketsData, setTicketsData] = useState([]);
    const [viewTicketsClicked, setViewTicketsClicked] = useState(false);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: '2-digit' };
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', options).replace(',', '');
    };

    const sendSupportRequest = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');

        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        const payload = {
            clientId: data.client_id,
            firstname: data.first_name,
            lastname: data.last_name,
            emailId: data.email_from,
            message: data.message,
        };
console.log(payload)
        try {
            const response = await axios.post(
                "http://192.168.1.12:4000/technicalSupport/createTechnicalSupport",
                payload
            );
            setLoading(false);
            setMessage('Technical support request submitted successfully!');
            setSubmittedData(data);
            setShowMessage(true);

        } catch (error) {
            setLoading(false);
            setMessage('Error submitting the support request. Please try again later.');
            console.error('Error:', error.response?.data || error.message);
        }
    };
    console.log(submittedData, "check")

    const handleViewTicketsClick = async () => {
        setViewTicketsClicked(true);
        setShowMessage(false); // Hide submission success message
        setShowData(true); // Show table data

        try {
            const response = await axios.get("http://192.168.1.12:4000/technicalSupport/getTechnicalSupports");
            console.log("Fetched tickets data:", response.data); // Log the entire response
            setTicketsData(response.data.tickets || []);
        } catch (error) {
            console.error("Error fetching tickets:", error.response?.data || error.message);
        }
    };
    console.log(ticketsData)

    return (
        <div className="container my-20">
            <div className="card shadow">
                <div className="card-header">
                    <h5 className="mb-0">Technical Support</h5>
                    <button
                        className="btn btn-primary btn-sm float-end"
                        onClick={handleViewTicketsClick}
                    >
                        View Tickets
                    </button>
                </div>
                <div className="card-body py-10">
                    {viewTicketsClicked && !showMessage ? (
                        <div className="card overflow-hidden">
                            <div className="card-body p-0 overflow-x-auto">
                                <table id="studentTable" className="table table-striped">
                                    <thead>
                                        <tr style={{ borderBottom: "1px solid #ccc" }}>
                                            <th>Client Id</th>
                                            <th>Name</th>
                                            <th>Email ID</th>
                                            <th>Issues</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody >
                                        {Array.isArray(ticketsData) && ticketsData.length > 0 ? ticketsData.map((ticket) => (
                                            <tr key={ticket._id}>
                                                <td style={{ color: 'black' }}>{ticket.clientId}</td>
                                                <td style={{ color: 'black' }}>{ticket.firstname}&nbsp;{ticket.lastname}</td>
                                                <td style={{ color: 'black' }}>{ticket.emailId}</td>
                                                <td style={{ color: 'black' }}>{formatDate(ticket.createdAt)}</td>

                                                <td>
                                                    <span
                                                        className={`text-13 py-2 px-8 ${ticket.status === "Solve the Issue"
                                                            ? "bg-success-50 text-success-600"
                                                            : "bg-warning-50 text-warning-600"
                                                            } d-inline-flex align-items-center gap-8 rounded-pill`}
                                                    >
                                                        <span
                                                            className={`w-6 h-6 ${ticket.status === "Solve the Issue"
                                                                ? "bg-success-600"
                                                                : "bg-warning-600"
                                                                } rounded-circle flex-shrink-0`}
                                                        />
                                                        {ticket.status || "Pending"}
                                                    </span>
                                                </td>
                                            </tr>
                                        )) : (
                                            <tr>
                                                <td colSpan="6" className="text-center">No tickets available.</td>
                                            </tr>
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ) : showMessage ? (
                        <div className="text-center">
                            <div className="alert alert-success" role="alert">
                                Thank you for reaching out! Our support team will contact you shortly.
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={sendSupportRequest}>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="firstName" className="form-label">First Name :</label>
                                    <input
                                        type="text"
                                        name="first_name"
                                        id="firstName"
                                        className="form-control"
                                        placeholder="Your First Name"
                                        required
                                    />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="lastName" className="form-label">Last Name :</label>
                                    <input
                                        type="text"
                                        name="last_name"
                                        id="lastName"
                                        className="form-control"
                                        placeholder="Your Last Name"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="clientid" className="form-label">Your Client ID :</label>
                                    <input
                                        type="text"
                                        name="client_id"
                                        id="clientid"
                                        className="form-control"
                                        placeholder="Enter Your Client ID"
                                        required
                                    />
                                </div>
                          
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Your Email ID :</label>
                                <input
                                    type="email"
                                    name="email_from"
                                    id="email"
                                    className="form-control"
                                    placeholder="person@example.com"
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Describe your issue :</label>
                                <textarea
                                    className="form-control"
                                    name="message"
                                    id="message"
                                    placeholder="Write your message here..."
                                    required
                                ></textarea>
                            </div>
                            <button
                                className="btn btn-primary my-5"
                                type="submit"
                                disabled={loading}
                            >
                                {loading ? 'Sending...' : <><SendIcon /> Send</>}
                            </button>
                            {message && <p className="feedback__message mt-3">{message}</p>}
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}

export default StudentTechnicalSupportForm;
