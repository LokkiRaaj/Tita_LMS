import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";


function TrainerSidebar() {
    const [isMeetingOpen, setIsMeetingOpen] = useState(false);
    const [isMaterialsOpen, setIsMaterialsOpen] = useState(false);
    const [isTestsOpen, setIsTestsOpen] = useState(false);

    const toggleMeetingDropdown = () => {
        setIsMeetingOpen((prevState) => !prevState);
    };

    const toggleMaterialsDropdown = () => {
        setIsMaterialsOpen((prevState) => !prevState);
    };

    const toggleTestsDropdown = () => {
        setIsTestsOpen((prevState) => !prevState);
    };

    const submenuLinkStyle = {
        textDecoration: "none",
        padding: "8px 15px",
        display: "block",
        color: "333",
    };

    return (
        <>
            <aside className="sidebar">
               
            <button type="button" className="sidebar-close-btn" style={{ float: 'right' }}>
                    <span className="font-bold"><IoMdClose /></span>
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
                                <Link to="/trainer-mycourses" className="sidebar-menu__link">
                                    <span className="icon"><i className="ph ph-bookmark-simple"></i></span>
                                    <span className="text">My Courses</span>
                                </Link>
                            </li>

                            <li className="sidebar-menu__item">
                                <a
                                    href=""
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
                                        backgroundColor: "f4f4f4",
                                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                                        borderRadius: "4px",
                                    }}
                                >
                                    <li className="sidebar-submenu__item">
                                        <Link to="/trainer-calendar" className="sidebar-submenu__link" style={submenuLinkStyle}>
                                            My Meeting
                                        </Link>
                                    </li>
                                    <li className="sidebar-submenu__item">
                                        <Link to="/trainer-newschedule" className="sidebar-submenu__link" style={submenuLinkStyle}>
                                            New Schedule
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="sidebar-menu__item">
                                <Link to="/trainer-mystudents" className="sidebar-menu__link">
                                    <span className="icon"><i className="ph ph-student"></i></span>
                                    <span className="text">My Students</span>
                                </Link>
                            </li>

                            <li className="sidebar-menu__item">
                                <a
                                    href=""
                                    className="sidebar-menu__link"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        toggleMaterialsDropdown();
                                    }}
                                >
                                    <span className="icon"><i className="ph ph-book-open"></i></span>
                                    <span className="text">Reading Materials</span>
                                </a>
                                <ul
                                    className="sidebar-submenu"
                                    style={{
                                        display: isMaterialsOpen ? "block" : "none",
                                        paddingLeft: "20px",
                                        listStyle: "none",
                                        margin: "0",
                                        backgroundColor: "f4f4f4",
                                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                                        borderRadius: "4px",
                                    }}
                                >
                                    <li className="sidebar-submenu__item">
                                        <Link to="/trainer-creatematerials" className="sidebar-submenu__link" style={submenuLinkStyle}>
                                            Create Materials
                                        </Link>
                                    </li>
                                    <li className="sidebar-submenu__item">
                                        <Link to="/trainer-readingmaterials" className="sidebar-submenu__link" style={submenuLinkStyle}>
                                            Materials
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="sidebar-menu__item">
                                <Link to="/trainer-createprojects" className="sidebar-menu__link">
                                    <span class="icon"><i className="ph ph-clipboard-text"></i></span>
                                    <span className="text">Create Projects</span>
                                </Link>
                            </li>

                            <li className="sidebar-menu__item">
                                <Link to="/trainer-webinar" className="sidebar-menu__link">
                                    <span className="icon"><i className="ph ph-monitor-play"></i></span>
                                    <span className="text">Webinar</span>
                                </Link>
                            </li>

                            <li className="sidebar-menu__item">
                                <a
                                    href=""
                                    className="sidebar-menu__link"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        toggleTestsDropdown();
                                    }}
                                >
                                    <span className="icon"><i className="ph ph-file"></i></span>
                                    <span className="text">Tests</span>
                                </a>
                                <ul
                                    className="sidebar-submenu"
                                    style={{
                                        display: isTestsOpen ? "block" : "none",
                                        paddingLeft: "20px",
                                        listStyle: "none",
                                        margin: "0",
                                        backgroundColor: "f4f4f4",
                                        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                                        borderRadius: "4px",
                                    }}
                                >
                                    <li className="sidebar-submenu__item">
                                        <Link to="/trainer-createtests" className="sidebar-submenu__link" style={submenuLinkStyle}>
                                            Create Tests
                                        </Link>
                                    </li>
                                    <li className="sidebar-submenu__item">
                                        <Link to="/trainer-viewtests" className="sidebar-submenu__link" style={submenuLinkStyle}>
                                            View Tests
                                        </Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="sidebar-menu__item">
                                <Link
                                    to="/trainer-badges"
                                    className="sidebar-menu__link"
                                    style={{ pointerEvents: 'none', opacity: 0.6, cursor: 'not-allowed' }}
                                    onClick={(e) => e.preventDefault()}>
                                    <span className="icon"><i className="ph ph-medal"></i></span>
                                    <span className="text">Badges <span>(coming soon)</span></span>
                                </Link>
                            </li>

                            <li className="sidebar-menu__item">
                                <Link
                                    to=""
                                    className="sidebar-menu__link"
                                    style={{ pointerEvents: 'none', opacity: 0.6, cursor: 'not-allowed' }}
                                    onClick={(e) => e.preventDefault()}>
                                    <span className="icon"><i className="ph ph-certificate"></i></span>
                                    <span className="text">Certificates <span>(coming soon)</span> </span>
                                </Link>
                            </li>

                            <li className="sidebar-menu__item">
                                <Link to="/trainer-technicalsupports" className="sidebar-menu__link">
                                    <span className="icon"><i className="ph ph-question"></i></span>
                                    <span className="text">Technical Support</span>
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

export default TrainerSidebar;