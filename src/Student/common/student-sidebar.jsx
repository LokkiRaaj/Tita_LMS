import React from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";


function StudentSidebar() {
    return (
        <>
            <aside class="sidebar">

            <button type="button" className="sidebar-close-btn" style={{ float: 'right' }}>
                    <span className="font-bold"><IoMdClose /></span>
                </button>
                <a
                    class="sidebar__logo text-center p-20 position-sticky inset-block-start-0 bg-white w-100 z-1 pb-10">
                    <img src="assets/images/logo/logo.png" alt="Logo" />
                </a>
                <div class="sidebar-menu-wrapper overflow-y-auto scroll-sm">
                    <div class="p-20 pt-10">
                        <ul class="sidebar-menu">
                            <li className="sidebar-menu__item">
                                <Link to="/student-dashboard" className="sidebar-menu__link">
                                    <span class="icon"><i class="ph ph-graduation-cap"></i></span>
                                    <span className="text">Courses</span>
                                </Link>
                            </li>

                            <li className="sidebar-menu__item">
                                <Link to="/student-mycourses" className="sidebar-menu__link">
                                    <span class="icon"><i class="ph ph-bookmark-simple"></i></span>
                                    <span className="text">My Courses</span>
                                </Link>
                            </li>

                            <li className="sidebar-menu__item">
                                <Link to="/student-projects" className="sidebar-menu__link">
                                    <span class="icon"><i className="ph ph-clipboard-text"></i></span>
                                    <span className="text">Projects</span>
                                </Link>
                            </li>

                            <li className="sidebar-menu__item">
                                <Link to="/student-readingmaterials" className="sidebar-menu__link">
                                    <span className="icon"><i className="ph ph-book-open"></i></span>
                                    <span className="text">Reading Materials</span>
                                </Link>
                            </li>

                            <li className="sidebar-menu__item">
                                <Link to="/student-calendar" className="sidebar-menu__link">
                                    <span className="icon"><i className="ph ph-calendar"></i></span>
                                    <span className="text">Calendar</span>
                                </Link>
                            </li>

                            <li className="sidebar-menu__item">
                                <Link to="/student-webinar" className="sidebar-menu__link">
                                    <span className="icon"><i className="ph ph-video-camera"></i></span>
                                    <span className="text">Webinar</span>
                                </Link>
                            </li>

                            <li className="sidebar-menu__item">
                                <Link to="/student-doubtsession" className="sidebar-menu__link">
                                    <span className="icon"><i className="ph ph-chat-dots"></i></span>
                                    <span className="text">Doubt Session</span>
                                </Link>
                            </li>

                            <li className="sidebar-menu__item">
                                <Link to="/student-test" className="sidebar-menu__link">
                                    <span class="icon"><i className="ph ph-file"></i></span>
                                    <span className="text">Tests</span>
                                </Link>
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
                                <Link to="/student-technicalsupport" className="sidebar-menu__link">
                                    <span className="icon"><i className="ph ph-question"></i></span>
                                    <span className="text">Technical Support</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default StudentSidebar;