import React from "react";
import { Link } from "react-router-dom";

function StudentDashboardSidebar() {
    return (
        <>
            <aside class="sidebar">

                <button type="button"
                    class="sidebar-close-btn text-gray-500 hover-text-white hover-bg-main-600 text-md w-24 h-24 border border-gray-100 hover-border-main-600 d-xl-none d-flex flex-center rounded-circle position-absolute"><i
                        class="ph ph-x"></i></button>
                <a href=""
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
                                <a href="" className="sidebar-menu__link">
                                <span class="icon"><i className="ph ph-clipboard-text"></i></span>
                                    <span className="text">Assignment</span>
                                </a>
                            </li>

                             <li className="sidebar-menu__item">
                                <a href="" className="sidebar-menu__link">
                                    <span className="icon"><i className="ph ph-medal"></i></span>
                                    <span className="text">Certification</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default StudentDashboardSidebar;