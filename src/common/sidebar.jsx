import React from "react";
import { Link } from "react-router-dom";

function TrainerSidebar() {
    return (
        <>
            <aside className="sidebar">
                {/* sidebar close btn */}
                <button type="button" className="sidebar-close-btn text-gray-500 hover-text-white hover-bg-main-600 text-md w-24 h-24 border border-gray-100 hover-border-main-600 d-xl-none d-flex flex-center rounded-circle position-absolute"><i className="ph ph-x" /></button>
                {/* sidebar close btn */}
                <a href="" className="sidebar__logo text-center p-20 position-sticky inset-block-start-0 bg-white w-100 z-1 pb-10">
                    <img src="assets/images/logo/logo.png" alt="Logo" />
                </a>
                <div className="sidebar-menu-wrapper overflow-y-auto scroll-sm">
                    <div className="p-20 pt-10">
                        <ul className="sidebar-menu">
                            <li className="sidebar-menu__item ">
                                <Link to="/" className="sidebar-menu__link">
                                    <span className="icon"><i className="ph ph-squares-four" /></span>
                                    <span className="text">Dashboard</span>
                                </Link>
                               
                            </li>
                            <li className="sidebar-menu__item has-dropdown">
                                <a href="" className="sidebar-menu__link">
                                    <span className="icon"><i className="ph ph-graduation-cap" /></span>
                                    <span className="text">Courses</span>
                                </a>
                                {/* Submenu start */}
                                <ul className="sidebar-submenu">
                                    <li className="sidebar-submenu__item">
                                        <Link to="create-courses" className="sidebar-submenu__link"> Create Courses </Link>
                                    </li>
                                    <li className="sidebar-submenu__item">
                                        <a href="" className="sidebar-submenu__link"> Edit Courses </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-menu__item has-dropdown">
                                <a href="" className="sidebar-menu__link">
                                    <span className="icon"><i className="ph ph-graduation-cap" /></span>
                                    <span className="text">People</span>
                                </a>
                                {/* Submenu start */}
                                <ul className="sidebar-submenu">
                                    <li className="sidebar-submenu__item">
                                        <a href="" className="sidebar-submenu__link"> Trainer </a>
                                    </li>
                                    <li className="sidebar-submenu__item">
                                        <a href="" className="sidebar-submenu__link"> Student </a>
                                    </li>
                                    <li className="sidebar-submenu__item">
                                        <a href="" className="sidebar-submenu__link"> Admin </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-menu__item has-dropdown">
                                <a href="" className="sidebar-menu__link">
                                    <span className="icon"><i className="ph ph-graduation-cap" /></span>
                                    <span className="text">Meeting</span>
                                </a>
                                {/* Submenu start */}
                                <ul className="sidebar-submenu">
                                    <li className="sidebar-submenu__item">
                                        <a href="" className="sidebar-submenu__link"> My meetings </a>
                                    </li>
                                    <li className="sidebar-submenu__item">
                                        <a href="" className="sidebar-submenu__link"> Shedule New </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-menu__item has-dropdown">
                                <a href="" className="sidebar-menu__link">
                                    <span className="icon"><i className="ph ph-graduation-cap" /></span>
                                    <span className="text">Payments</span>
                                </a>
                                {/* Submenu start */}
                                <ul className="sidebar-submenu">
                                    <li className="sidebar-submenu__item">
                                        <a href="" className="sidebar-submenu__link"> Payment Keys </a>
                                    </li>
                                    <li className="sidebar-submenu__item">
                                        <a href="" className="sidebar-submenu__link"> Transactions </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="p-20 pt-80">
                        <div className="bg-main-50 p-20 pt-0 rounded-16 text-center mt-74">
                            <span className="border border-5 bg-white mx-auto border-primary-50 w-114 h-114 rounded-circle flex-center text-success-600 text-2xl translate-n74">
                                <img src="assets/images/icons/certificate.png" alt className="centerised-img" />
                            </span>
                            <div className="mt-n74">
                                <h5 className="mb-4 mt-22">Get Pro Certificate</h5>
                                <p className>Explore 400+ courses with lifetime members</p>
                                <a href="" className="btn btn-main mt-16 rounded-pill">Get Access</a>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default TrainerSidebar;