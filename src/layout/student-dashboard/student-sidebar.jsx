import React from "react";
import { Link } from "react-router-dom";

function StudentDashboardSidebar() {
    return (
        <>
            <aside class="sidebar">

                <button type="button"
                    class="sidebar-close-btn text-gray-500 hover-text-white hover-bg-main-600 text-md w-24 h-24 border border-gray-100 hover-border-main-600 d-xl-none d-flex flex-center rounded-circle position-absolute"><i
                        class="ph ph-x"></i></button>
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
                                <Link to="/my-course" className="sidebar-menu__link">
                                    <span class="icon"><i class="ph ph-bookmark-simple"></i></span>
                                    <span className="text">My Courses</span>
                                </Link>
                            </li>

                            <li className="sidebar-menu__item">
                                <Link to="/projects" className="sidebar-menu__link">
                                    <span class="icon"><i className="ph ph-clipboard-text"></i></span>
                                    <span className="text">Projects</span>
                                </Link>
                            </li>

                            <li className="sidebar-menu__item">
                                <Link to="/reading-materials" className="sidebar-menu__link">
                                    <span className="icon"><i className="ph ph-book-open"></i></span>
                                    <span className="text">Reading Materials</span>
                                </Link>
                            </li>

                            <li className="sidebar-menu__item">
                                <Link to="/badges" className="sidebar-menu__link">
                                    <span className="icon"><i className="ph ph-medal"></i></span>
                                    <span className="text">Badges</span>
                                </Link>
                            </li>

                            <li className="sidebar-menu__item">
                                <Link to="/certificates" className="sidebar-menu__link">
                                    <span className="icon"><i className="ph ph-certificate"></i></span>
                                    <span className="text">Certificates</span>
                                </Link>
                            </li>

                            <li className="sidebar-menu__item">
                                <Link to="/calendar" className="sidebar-menu__link">
                                    <span className="icon"><i className="ph ph-calendar"></i></span>
                                    <span className="text">Calendar</span>
                                </Link>
                            </li>

                            <li className="sidebar-menu__item">
                                <Link to="/webinar" className="sidebar-menu__link">
                                    <span className="icon"><i className="ph ph-video-camera"></i></span>
                                    <span className="text">Webinar</span>
                                </Link>
                            </li>

                            <li className="sidebar-menu__item">
                                <Link to="/doubt-session" className="sidebar-menu__link">
                                    <span className="icon"><i className="ph ph-chat-dots"></i></span>
                                    <span className="text">Doubt Session</span>
                                </Link>
                            </li>

                            <li className="sidebar-menu__item">
                                <Link to="/tests" className="sidebar-menu__link">
                                    <span class="icon"><i className="ph ph-file"></i></span>
                                    <span className="text">Tests</span>
                                </Link>
                            </li>

                            <li className="sidebar-menu__item">
                                <Link to="" className="sidebar-menu__link">
                                    <span class="icon"><i className="ph ph-sign-out"></i></span>
                                    <span className="text">Long Out</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default StudentDashboardSidebar;