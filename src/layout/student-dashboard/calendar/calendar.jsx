import React from "react";
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CalendarHead from "./calendar-head";
import StudentDashboardSidebar from "../student-sidebar";
import Header from "../../../common/header";
import CalendarPage from "./calendar-page";



function MyMeetings() {


  return (
    <>
      <div className="meeting-container">
        <StudentDashboardSidebar />
        <div className="dashboard-main-wrapper">
          <Header />
          <div className="dashboard-body">
            <CalendarHead />
            <CalendarPage />
          </div>
        </div>
      </div>
    </>
  );
}

export default MyMeetings;