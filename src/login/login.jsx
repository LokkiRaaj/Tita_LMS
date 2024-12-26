import React, { useState, useEffect } from "react";
import './login.css';
import Admin from "../Admin";
import Trainer from "../Trainer";
import Students from "../Student/indext";

export default function Loginpage({ onLogin }) {
    const credentials = {
        admin: { email: "admin@example.com", password: "admin123" },
        student: { email: "student@example.com", password: "student123" },
        trainer: { email: "trainer@example.com", password: "trainer123" },
    };

    const [error, setError] = useState("");
    const [role, setRole] = useState(null);

    const handleLogin = (event) => {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        for (const role in credentials) {
            if (credentials[role].email === email && credentials[role].password === password) {
                alert(`Welcome, ${role}!`);
                onLogin(role);
                setRole(role);
                return;
            }
        }
        setError("Invalid email or password.");
    };

    const handleRole = (role) => {
        switch (role) {
            case 'admin':
                return <Admin></Admin>;
            case 'trainer':
                return <Trainer></Trainer>;
            case 'student':
                return <Students></Students>;
            default:
                return null;
        }
    };

    useEffect(() => {
        if (role) {
            handleRole(role);
        }
    }, [role]);

    return (
        <>
            <link
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
                rel="stylesheet"
            />
            <div className="animated-background">
                <div className="gradient-sphere sphere-1" />
                <div className="gradient-sphere sphere-2" />
                <div className="gradient-sphere sphere-3" />
                <div className="particles" id="particles" />
            </div>
            <div className="login-container">
                <div className="login-header">
                    <h1>Welcome to iTrain</h1>
                    <p>Sign in to continue your journey</p>
                </div>
                <form id="loginForm" onSubmit={handleLogin}>
                    <div className="form-group">
                        <input
                            type="email"
                            className="form-input"
                            id="email"
                            placeholder="Email address"
                            required
                        />
                        <i className="input-icon fas fa-envelope" />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className="form-input"
                            id="password"
                            placeholder="Password"
                            required
                        />
                        <i className="input-icon fas fa-lock" />
                    </div>
                    {error && <p className="error-message">{error}</p>}
                    <button type="submit" className="submit-button">
                        Sign In
                    </button>
                </form>
                <div className="additional-options">
                    <a href="#">Forgot password?</a>
                </div>
            </div>
        </>
    );
}