import React from "react";
import { Link } from "react-router-dom";

function DashboardSidebar() {
    return (
        <>


<aside class="sidebar">
      
        <button type="button"
            class="sidebar-close-btn text-gray-500 hover-text-white hover-bg-main-600 text-md w-24 h-24 border border-gray-100 hover-border-main-600 d-xl-none d-flex flex-center rounded-circle position-absolute"><i
                class="ph ph-x"></i></button>
      

        <a href="index.html"
            class="sidebar__logo text-center p-20 position-sticky inset-block-start-0 bg-white w-100 z-1 pb-10">
            <img src="assets/images/logo/logo.png" alt="Logo"/>
        </a>

        <div class="sidebar-menu-wrapper overflow-y-auto scroll-sm">
            <div class="p-20 pt-10">
                <ul class="sidebar-menu">
                    
                        <a href="javascript:void(0)" class="sidebar-menu__link">
                            <span class="icon"><i class="ph ph-squares-four"></i></span>
                            <span class="text">Dashboard</span>
                            
                        </a>
                        
                        
                      
                    <li class="sidebar-menu__item has-dropdown">
                        <a href="javascript:void(0)" class="sidebar-menu__link">
                            <span class="icon"><i class="ph ph-graduation-cap"></i></span>
                            <span class="text">Courses</span>
                        </a>
                      
                        <ul class="sidebar-submenu">
                            <li class="sidebar-submenu__item">
                                <a href="#" class="sidebar-submenu__link"> Create Courses </a>
                            </li>
                            <li class="sidebar-submenu__item">
                                <a href="#" class="sidebar-submenu__link"> Edit Courses </a>
                            </li>
                            
                        </ul>
                     
                    </li>
                    <li class="sidebar-menu__item has-dropdown">
                        <a href="javascript:void(0)" class="sidebar-menu__link">
                            <span class="icon"><i class="ph ph-users-three"></i></span>
                            <span class="text">People</span>
                        </a>
                      
                        <ul class="sidebar-submenu">
                            <li class="sidebar-submenu__item">
                                <a href="#" class="sidebar-submenu__link"> Trainer </a>
                            </li>
                            <li class="sidebar-submenu__item">
                                <a href="#" class="sidebar-submenu__link"> Student </a>
                            </li>
                            <li class="sidebar-submenu__item">
                                <a href="#" class="sidebar-submenu__link"> Admin </a>

                            </li>
                            
                        </ul>

                     
                    </li>
                    <li class="sidebar-menu__item has-dropdown">
                        <a href="javascript:void(0)" class="sidebar-menu__link">
                            <span class="icon"><i class="ph ph-calendar-blank"></i></span>
                            <span class="text">Meeting</span>
                        </a>
                      
                        <ul class="sidebar-submenu">
                            <li class="sidebar-submenu__item">
                                <a href="#" class="sidebar-submenu__link"> My Meeting </a>
                            </li>
                            <li class="sidebar-submenu__item">
                                <a href="#" class="sidebar-submenu__link"> New Schedule </a>
                            </li>
                            
                        </ul>
                     
                    </li>
                    <li class="sidebar-menu__item has-dropdown">
                        <a href="javascript:void(0)" class="sidebar-menu__link">
                            <span class="icon"><i class="ph ph-credit-card"></i></span>
                            <span class="text">Payments</span>
                        </a>
                      
                        <ul class="sidebar-submenu">
                            <li class="sidebar-submenu__item">
                                <a href="#" class="sidebar-submenu__link"> Payment Keys </a>
                            </li>
                            <li class="sidebar-submenu__item">
                                <a href="#" class="sidebar-submenu__link"> Transactions </a>
                            </li>
                            
                        </ul>
                     
                    </li>
                    
                </ul>
            </div>
            
        </div>

    </aside>
            

        </>
    );
}

export default DashboardSidebar;