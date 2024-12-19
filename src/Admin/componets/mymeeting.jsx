import React, { useEffect, useState } from "react";
import AdminSidebar from "../common/sidebar";
import AdminHeader from "../common/header";
import MymeetingsHead from "../layout/Meetings/mymeetings-head";
import MyMeetingCalendar from "../layout/Meetings/calendar";

function MyMeeting() {
  return (
    <>
      <div className="meeting-container">
        <AdminSidebar />
        <div className="dashboard-main-wrapper">
          <AdminHeader />
          <div className="dashboard-body">
            <MymeetingsHead />
            <MyMeetingCalendar />
          </div>
        </div>
      </div>
    </>
  );
}

export default MyMeeting;