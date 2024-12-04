import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './componets/home';
import CreateCourses from './componets/create-courese';
import MyMeeting from './componets/mymeeting';
import NewSchedule from './componets/new-schedule';



function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="create-courses" element={<CreateCourses />} />
                <Route path='my-meeting' element={<MyMeeting/>}/>
                <Route path='new-schedule' element={<NewSchedule/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;