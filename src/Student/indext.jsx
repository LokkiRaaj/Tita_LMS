import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StudentHome from "./componets/student-categories";
import StudentCoursesPage from "./componets/courses-page";
import StudentmyCourses from "./componets/student-mycourses";
import StudentProjects from "./componets/student-projects";
import StudentMaterials from "./componets/materials";
import StudentCalendar from "./componets/student-calendar";
import StudentWebinar from "./componets/webinar";
import StudentDoubtSession from "./componets/doubt-session";
import StudentTests from "./componets/tests";
import StudentTechnicalSupport from "./componets/technical-support";
import StudentviewTest from "./componets/view-test";
import Studentviewcourse from "./componets/studentviewcourse";


function Students() {
    return (
        <Router>
            <Routes>
                <Route path="/student-dashboard" element={<StudentHome />} />
                <Route path="/student-courseslist" element={<StudentCoursesPage />} />
                <Route path="/student-mycourses" element={<StudentmyCourses />} />
                <Route path="/student-projects" element={<StudentProjects />} />
                <Route path="/student-readingmaterials" element={<StudentMaterials />} />
                <Route path="/student-calendar" element={<StudentCalendar />} />
                <Route path="/student-webinar" element={<StudentWebinar />} />
                <Route path="/student-doubtsession" element={<StudentDoubtSession />} />
                <Route path="/student-tests" element={<StudentTests />} />
                <Route path="/student-technicalsupport" element={<StudentTechnicalSupport />} />
                <Route path="/student-starttests" element={<StudentviewTest />} />
                <Route path="/student-viewcourses" element={<Studentviewcourse/>} />
                
            </Routes>
        </Router>
    );
}

export default Students;