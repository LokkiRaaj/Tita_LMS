import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './componets/home';
import CreateCourses from './componets/create-courese';
import MyMeeting from './componets/mymeeting';
import TrainerPage from './componets/trainer';
import CreatenewTrainer from './layout/trainer/createnew-trainer';
import NewSchedule from './componets/new-schedule';
import TrainerDashboard from './componets/trainer-dashboardpage';
import Mystudents from './layout/trainer-dashboard/my students/mystudent';
import Mycourses from './layout/trainer-dashboard/my courses/mycoursespage';
import ViewCourse from './componets/view-course';




function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create-courses" element={<CreateCourses />} />
                <Route path='trainer' element={<TrainerPage />} />
                <Route path='create-new-trainer' element={<CreatenewTrainer />} />
                <Route path='my-meeting' element={<MyMeeting />} />
                <Route path='new-schedule' element={<NewSchedule />} />
                <Route path='/trainer-dashboard' element={<TrainerDashboard />} />
                <Route path='my-students' element={<Mystudents />} />
                <Route path='my-courses' element={<Mycourses />} />
                <Route path='view-course' element={<ViewCourse />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;