import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './componets/home';
import CreateCourses from './componets/create-courese';
import MyMeeting from './componets/mymeeting';
import TrainerPage from './componets/trainer';
import CreatenewTrainer from './layout/trainer/createnew-trainer';
import NewSchedule from './componets/new-schedule';
import TrainerDashboard from './componets/trainer-dashboardpage';
import TrainerCourses from './layout/trainer-dashboard/courses';




function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="create-courses" element={<CreateCourses />} />
                <Route path='trainer' element={<TrainerPage />} />
                <Route path='create-new-trainer' element={<CreatenewTrainer />} />
                <Route path='my-meeting' element={<MyMeeting />} />
                <Route path='new-schedule' element={<NewSchedule />} />
                <Route path='/trainer-dashboard' element={<TrainerDashboard />} />
                <Route path='courses' element={<TrainerCourses />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;