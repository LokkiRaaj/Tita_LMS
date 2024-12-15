import React from "react";
import StudentDashboardSidebar from "../student-sidebar";
import Header from "../../../common/header";
import ProjectsHead from "./projects-head";
import ProjectsPage from "./projects-page";

function Projects() {
    return (
        <div>
            <StudentDashboardSidebar />
            <div className="dashboard-main-wrapper">
                <Header />
                <div className="dashboard-body">
                    <ProjectsHead />
                    <div className="row gy-4">
                        <ProjectsPage />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;