import React, { useState } from "react";

function StudentprojectPage() {
    const [selectedGroup, setSelectedGroup] = useState(""); // To track selected group project
    const [selectedProject, setSelectedProject] = useState(""); // To track selected project for single view

    const courses = [
        { id: 1, title: "Student Attendance Tracker", description: "UI/UX design for this landing page", buttonLink: "#", group: "Team Project" },
        { id: 2, title: "Student Portfolio Builder", description: "UI/UX design for this landing page", buttonLink: "#", group: "Team Project" },
        { id: 3, title: "Student Performance Analyzer", description: "UI/UX design for this landing page", buttonLink: "#", group: "Single Project" },
        { id: 4, title: "Student Enrollment System", description: "UI/UX design for this landing page", buttonLink: "#", group: "Single Project" },
        { id: 5, title: "Student Task Manager", description: "UI/UX design for this landing page", buttonLink: "#", group: "Single Project" },
        { id: 6, title: "Student Grade Tracker", description: "UI/UX design for this landing page", buttonLink: "#", group: "Single Project" },
        { id: 7, title: "Student Collaboration Platform", description: "UI/UX design for this landing page", buttonLink: "#", group: "Team Project" },
        { id: 8, title: "Student Virtual Classroom", description: "UI/UX design for this landing page", buttonLink: "#", group: "Team Project" },
        { id: 9, title: "Student Health Tracker", description: "UI/UX design for this landing page", buttonLink: "#", group: "Single Project" },
        { id: 10, title: "Student Career Path Finder", description: "UI/UX design for this landing page", buttonLink: "#", group: "Single Project" },
    ];

    const groups = ["Team Project", "Single Project"];

    const handleGroupChange = (event) => {
        const selected = event.target.value;
        setSelectedGroup(selected);
        setSelectedProject(""); // Reset selected project when switching groups
    };

    // Filter courses based on the selected group and project title
    const filteredCourses = courses.filter(course => {
        if (selectedGroup === "Single Project" && selectedProject) {
            return course.title === selectedProject; // Show only the selected project in "Single Project"
        } else if (selectedGroup === "Team Project") {
            return course.group === "Team Project"; // Show all Team Projects
        } else {
            return true; // Show all projects if no group is selected
        }
    });

    return (
        <div className="card mt-24">
            <div className="card-body">
                <div className="mb-20 flex-between flex-wrap gap-8">
                    <h4 className="mb-0">Projects</h4>
                    <div className="d-flex gap-4">
                        <select
                            className="form-select form-select-sm"
                            onChange={handleGroupChange}
                            value={selectedGroup}
                        >
                            <option value="">Select Group</option>
                            {groups.map((group, index) => (
                                <option key={index} value={group}>
                                    {group}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="row g-20">
                    {filteredCourses.map((course) => (
                        <div key={course.id} className="col-xxl-3 col-lg-4 col-sm-6">
                            <div className="card border border-gray-100">
                                <div className="card-body p-8">
                                    <div className="p-8">
                                        <h5 className="mb-0">
                                            <a href={course.buttonLink} className="hover-text-main-600">
                                                {course.title}
                                            </a>
                                        </h5>
                                        <span className={`text-13 py-2 px-10 rounded-pill bg-${course.group.toLowerCase()}-50 text-${course.group.toLowerCase()}-600 mb-16`}>
                                            {course.description}
                                        </span>
                                        <div className="flex-between gap-4 flex-wrap mt-24">
                                            <a href={course.buttonLink} className="btn btn-outline-main rounded-pill py-9">Project Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default StudentprojectPage;
