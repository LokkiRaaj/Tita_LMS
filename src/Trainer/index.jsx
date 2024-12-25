import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TrainerHome from "./components/trainer-home";
import TrainerCourses from "./components/trainer-coursepage";
import TrainerMycourses from "./components/mycourses-page";
import TrainerMymeetings from "./components/mymeeting";
import TrainerNewSchedule from "./components/new-schedule";
import TrainermyStudents from "./components/mystudent";
import TrainerWebinarPage from "./components/webinar-page";
import TrainerTeachnicalsupports from "./components/technical-support";
import TrainerMaterials from "./components/materials";
import TrainercreateProjects from "./components/create-projects";
import SubmittedProjects from "./components/submit-projects";
import TrainerviewMaterials from "./components/view-materilas";
import CreateTest from "./components/create-test";
import Trainerviewcourse from "./components/trainercourseview";
import DoubtSession from "./components/doubt-session";
import TrainerprofileSettings from "./components/profile-settings";



function Trainer() {
    return (
        <Router>
            <Routes>
                <Route path="/trainer-dashboard" element={<TrainerHome />} />
                <Route path="/trainer-courseslist" element={<TrainerCourses />} />
                <Route path="trainer-mycourses" element={<TrainerMycourses />} />
                <Route path="trainer-calendar" element={<TrainerMymeetings />} />
                <Route path="trainer-newschedule" element={<TrainerNewSchedule />} />
                <Route path="trainer-mystudents" element={<TrainermyStudents />} />
                <Route path="trainer-webinar" element={<TrainerWebinarPage />} />
                <Route path="trainer-technicalsupports" element={<TrainerTeachnicalsupports />} />
                <Route path="trainer-creatematerials" element={<TrainerMaterials />} />
                <Route path="trainer-readingmaterials" element={<TrainerviewMaterials />} />
                <Route path="trainer-createprojects" element={<TrainercreateProjects />} />
                <Route path="trainer-submittedprojects" element={<SubmittedProjects />} />
                <Route path="trainer-createtests" element={<CreateTest />} />
                <Route path="/trainer-viewcourses" element={<Trainerviewcourse />} />
                <Route path="trainer-doubtsession" element={<DoubtSession />} />
                <Route path="trainer-profilesettings" element={<TrainerprofileSettings />} />
            </Routes>
        </Router>
    );
}

export default Trainer;