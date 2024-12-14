import React from "react";
import { Link } from "react-router-dom";
import { LuFileBadge2 } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";

function DashboardSidebar() {
    return (
        <>
            <aside className="sidebar">
                <button type="button" className="sidebar-close-btn" style={{ float: 'right' }}>
                    <span className="font-bold"><IoMdClose /></span>
                </button>
                <a href="" className="sidebar__logo text-center p-20 position-sticky inset-block-start-0 bg-white w-100 z-1 pb-10">
                    <img src="assets/images/logo/logo.png" alt="Logo" />
                </a>

                <div className="sidebar-menu-wrapper overflow-y-auto scroll-sm">
                    <div className="p-20 pt-10">
                        <ul className="sidebar-menu">
                            <li className="sidebar-menu__item">
                                <Link to="/" className="sidebar-menu__link">
                                    <span className="icon"><i className="ph ph-squares-four"></i></span>
                                    <span className="text">Dashboard</span>
                                </Link>
                            </li>
                            <li className="sidebar-menu__item has-dropdown">
                                <Link to="" className="sidebar-menu__link">
                                    <span className="icon"><i className="ph ph-graduation-cap"></i></span>
                                    <span className="text">Courses</span>
                                </Link>
                                <ul className="sidebar-submenu">
                                    <li className="sidebar-submenu__item">
                                        <Link to="/create-courses" className="sidebar-submenu__link">Create Courses</Link>
                                    </li>
                                    <li className="sidebar-submenu__item">
                                        <Link to="/edit-courses" className="sidebar-submenu__link">Edit Courses</Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="sidebar-menu__item has-dropdown">
                                <Link to="" className="sidebar-menu__link">
                                    <span className="icon"><i className="ph ph-users-three"></i></span>
                                    <span className="text">People</span>
                                </Link>
                                <ul className="sidebar-submenu">
                                    <li className="sidebar-submenu__item">
                                        <Link to="/trainer" className="sidebar-submenu__link">Trainer</Link>
                                    </li>
                                    <li className="sidebar-submenu__item">
                                        <Link to="/students-list" className="sidebar-submenu__link">Student</Link>
                                    </li>
                                    <li className="sidebar-submenu__item">
                                        <Link to="#" className="sidebar-submenu__link">Admin</Link>
                                    </li>
                                </ul>
                            </li>

                            <li className="sidebar-menu__item has-dropdown">
                                <Link to="#" className="sidebar-menu__link">
                                    <span className="icon"><i className="ph ph-calendar-blank"></i></span>
                                    <span className="text">Meeting</span>
                                </Link>
                                <ul className="sidebar-submenu">
                                    <li className="sidebar-submenu__item">
                                        <Link to="/my-meeting" className="sidebar-submenu__link">My Meeting</Link>
                                    </li>
                                    <li className="sidebar-submenu__item">
                                        <Link to="/new-schedule" className="sidebar-submenu__link">New Schedule</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-menu__item ">
                                <Link to="/payment-history" className="sidebar-menu__link">
                                    <span className="icon"><i className="ph ph-credit-card"></i></span>
                                    <span className="text">Payment History</span>
                                </Link>
                            </li>
                            <li className="sidebar-menu__item">
                                <Link to="" className="sidebar-menu__link">
                                    <span className="icon"><LuFileBadge2 /></span>
                                    <span className="text">Badge</span>
                                </Link>
                            </li>
                            <li className="sidebar-menu__item">
                                <Link to="" className="sidebar-menu__link">
                                    <span className="icon"><i className="ph ph-medal"></i></span>
                                    <span className="text">Certification</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default DashboardSidebar;
