import React, { useState } from "react";
import { Link } from "react-router-dom";

function TrainerDashboardSidebar() {
    const [isMeetingOpen, setIsMeetingOpen] = useState(false);

    const toggleMeetingDropdown = () => {
        setIsMeetingOpen((prevState) => !prevState);
    };

    const submenuLinkStyle = {
        textDecoration: "none",
        padding: "8px 15px",
        display: "block",
        color: "#333",
    };

    return (
        <>
            <aside className="sidebar">
                <button
                    type="button"
                    className="sidebar-close-btn text-gray-500 hover-text-white hover-bg-main-600 text-md w-24 h-24 border border-gray-100 hover-border-main-600 d-xl-none d-flex flex-center rounded-circle position-absolute"
                >
                    <i className="ph ph-x"></i>
                </button>
                <a className="sidebar__logo text-center p-20 position-sticky inset-block-start-0 bg-white w-100 z-1 pb-10">
                    <img src="assets/images/logo/logo.png" alt="Logo" />
                </a>
                <div className="sidebar-menu-wrapper overflow-y-auto scroll-sm">
                    <div className="p-20 pt-10">
                        <ul className="sidebar-menu">
                            <li className="sidebar-menu__item">
                                <Link to="/trainer-dashboard" className="sidebar-menu__link">
                                    <span className="icon"><i className="ph ph-graduation-cap"></i></span>
                                    <span className="text">Courses</span>
                                </Link>
                            </li>

                            <li className="sidebar-menu__item">
                                <Link to="/my-courses" className="sidebar-menu__link">
                                    <span className="icon"><i className="ph ph-bookmark-simple"></i></span>
                                    <span className="text">My Courses</span>
                                </Link>
                            </li>

                            <li className="sidebar-menu__item">
                                <a
                                    href="#"
                                    className="sidebar-menu__link"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        toggleMeetingDropdown();
                                    }}
                                >
                                    <span className="icon"><i className="ph ph-calendar-blank"></i></span>
                                    <span className="text">Meeting</span>
                                </a>
                                <ul
                                    className="sidebar-submenu"
                                    style={{
                                        display: isMeetingOpen ? "block" : "none",
                                        paddingLeft: "20px",
                                        listStyle: "none",
                                        margin: "0",
                                        backgroundColor: "#f4f4f4",
                                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                                        borderRadius: "4px",
                                    }}
                                >
                                    <li className="sidebar-submenu__item">
                                        <Link to="/my-meeting" className="sidebar-submenu__link" style={submenuLinkStyle}>
                                            My Meeting
                                        </Link>
                                    </li>
                                    <li className="sidebar-submenu__item">
                                        <Link to="/new-schedule" className="sidebar-submenu__link" style={submenuLinkStyle}>
                                            New Schedule
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="sidebar-menu__item">
                                <Link to="/my-students" className="sidebar-menu__link">
                                    <span className="icon"><i className="ph ph-student"></i></span>
                                    <span className="text">My Students</span>
                                </Link>
                            </li>

                            <li className="sidebar-menu__item">
                                <Link to="" className="sidebar-menu__link">
                                    <span className="icon"><i className="ph ph-medal"></i></span>
                                    <span className="text">Badges</span>
                                </Link>
                            </li>

                            <li className="sidebar-menu__item">
                                <Link to="" className="sidebar-menu__link">
                                    <span className="icon"><i className="ph ph-certificate"></i></span>
                                    <span className="text">Certificates</span>
                                </Link>
                            </li>

                            <li className="sidebar-menu__item">
                                <Link to="" className="sidebar-menu__link">
                                    <span className="icon"><i className="ph ph-sign-out"></i></span>
                                    <span className="text">Log Out</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
        </>
    );
}



export default TrainerDashboardSidebar;
