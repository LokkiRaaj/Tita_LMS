import React, { useState } from "react";
import emailjs from 'emailjs-com';
import SendIcon from '@mui/icons-material/Send';

function TrainerTechnicalSupportForm() {
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [submittedData, setSubmittedData] = useState(null); // To store form data
    const [showMessage, setShowMessage] = useState(false); // Show message after form submission
    const [showData, setShowData] = useState(false); // Show student data after clicking "OK"
    const [viewDetailsClicked, setViewDetailsClicked] = useState(false); // Track if the "View Details" button was clicked

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        emailjs
            .sendForm(
                'service_iv213rq',
                'template_49hd6gg',
                e.target,
                'KihpimgRRDcpebcJk'
            )
            .then(
                () => {
                    setLoading(false);
                    setMessage('Email sent successfully!');
                    setSubmittedData(data); // Store submitted data
                    setShowMessage(true); // Show message after successful submission
                },
                (error) => {
                    setLoading(false);
                    setMessage('Error sending email. Please try again later.');
                    console.error('Error:', error.text);
                }
            );
    };

    const handleViewTicketsClick = () => {
        setShowMessage(false); // Hide message
        setShowData(true); // Show student data
    };


    return (
        <div className="container my-20">
            <div className="card shadow">
                <div className="card-header">
                    <h5 className="mb-0">Technical Support</h5>
                    <button className="btn btn-primary btn-sm float-end" onClick={handleViewTicketsClick} >
                        View Tickets
                    </button>
                </div>
                <div className="card-body py-10">
                    {viewDetailsClicked && !showMessage ? (
                        <div className="text-center">
                            <div className="alert alert-info" role="alert">
                                Please fill out the form below, and click "Send" when done. You will see your details after submission.
                            </div>
                        </div>
                    ) : showMessage ? (
                        <div className="text-center">
                            <div className="alert alert-success" role="alert">
                                Thank you for reaching out! Our support team will contact you shortly.
                            </div>
                        </div>
                    ) : showData ? (
                        <div className="card overflow-hidden">
                            <div className="card-body p-0 overflow-x-auto">
                                <table id="studentTable" className="table table-striped">
                                    <thead>
                                        <tr style={{ borderBottom: "1px solid #ccc" }}>

                                            <th className="h6 text-gray-300">First Name</th>
                                            <th className="h6 text-gray-300">Last Name</th>
                                            <th className="h6 text-gray-300">Email ID</th>
                                            <th className="h6 text-gray-300">Creation Date</th>
                                            <th className="h6 text-gray-300">Closure Date</th>
                                            <th className="h6 text-gray-300">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>

                                            <td>
                                                <span className="h6 mb-0 fw-medium text-gray-300">
                                                    {submittedData?.first_name}
                                                </span>
                                            </td>
                                            <td>
                                                <span className="h6 mb-0 fw-medium text-gray-300">
                                                    {submittedData?.last_name}
                                                </span>
                                            </td>
                                            <td>
                                                <span className="h6 mb-0 fw-medium text-gray-300">
                                                    {submittedData?.email_from}
                                                </span>
                                            </td>
                                            <td>
                                                <span className="h6 mb-0 fw-medium text-gray-300">
                                                    {submittedData?.creationDate}
                                                </span>
                                            </td>
                                            <td>
                                                <span className="h6 mb-0 fw-medium text-gray-300">
                                                    {submittedData?.closurDate}
                                                </span>
                                            </td>
                                            <td>
                                                <span
                                                    className={`text-13 py-2 px-8 ${submittedData?.status === "Solved"
                                                        ? "bg-success-50 text-success-600"
                                                        : "bg-warning-50 text-warning-600"
                                                        } d-inline-flex align-items-center gap-8 rounded-pill`}
                                                >
                                                    <span
                                                        className={`w-6 h-6 ${submittedData?.status === "Solved"
                                                            ? "bg-success-600"
                                                            : "bg-warning-600"
                                                            } rounded-circle flex-shrink-0`}
                                                    />
                                                    {submittedData?.status}
                                                </span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="card-footer flex-between flex-wrap"></div>
                        </div>
                    ) : (
                        <form onSubmit={sendEmail}>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="firstName" className="form-label">First Name :</label>
                                    <input type="text" name="first_name" id="firstName" className="form-control" placeholder="Your First Name" required />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="lastName" className="form-label">Last Name :</label>
                                    <input type="text" name="last_name" id="lastName" className="form-control" placeholder="Your Last Name" required />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label htmlFor="email" className="form-label">Your Email ID :</label>
                                    <input type="email" name="email_from" id="email" className="form-control" placeholder="person@example.com" required />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Describe your issue :</label>
                                <textarea className="form-control" name="message" id="message" placeholder="Write your message here..." required ></textarea>
                            </div>
                            <button className="btn btn-primary  my-5" type="submit" disabled={loading} >
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

export default TrainerTechnicalSupportForm;