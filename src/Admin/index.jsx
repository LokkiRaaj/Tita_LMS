import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminHome from "./componets/home";
import AdminCourses from "./componets/admin-courses";
import AdmincreateCourses from "./componets/create-courese";
import AdminTrainerPage from "./componets/trainer";
import CreatenewTrainer from "./layout/Trainers List/createnew-trainer";
import Studentspage from "./componets/student-page";
import MyMeeting from "./componets/mymeeting";
import NewSchedule from "./componets/new-schedule";
import PaymentHistory from "./componets/payment-history";
import AdminWebinarPage from "./componets/webinar";
import AdmincreateWebinar from "./componets/createnew-webinar";
import AdminTechnicalSupport from "./componets/technical-support";
import AdminviewCourses from "./componets/view-courses";
import ProfileSettings from "./componets/profile-settings";


function Admin() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AdminHome />} />
                <Route path="admin-courses" element={<AdminCourses />} />
                <Route path="admin-createcourses" element={<AdmincreateCourses />} />
                <Route path="admin-trainer" element={<AdminTrainerPage />} />
                <Route path="admin-createtrainer" element={<CreatenewTrainer />} />
                <Route path="admin-students" element={<Studentspage />} />
                <Route path="admin-calendar" element={<MyMeeting />} />
                <Route path="admin-createnewschedule" element={<NewSchedule />} />
                <Route path="admin-paymenthistory" element={<PaymentHistory />} />
                <Route path="admin-webinar" element={<AdminWebinarPage />} />
                <Route path="admin-createwebinar" element={<AdmincreateWebinar />} />
                <Route path="admin-technicalsupport" element={<AdminTechnicalSupport />} />
                <Route path="admin-viewcourses" element={<AdminviewCourses />} />
                <Route path="admin-profilesettings" element={<ProfileSettings />} />
            </Routes>
        </Router>
    );
}

export default Admin;
