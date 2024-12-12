import React, { useEffect, useState } from "react";
import DashboardSidebar from "../common/sidebar";
import Header from "../common/header";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

function MyMeeting() {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    const fetchMeetings = async () => {
      const response = await fetch("https://lms-backend-ylpd.onrender.com/meeting/getMeeting");
      const data = await response.json();
      setMeetings(data);
    };
    fetchMeetings();
  }, []);

  // Transform meetings data to fit the calendar format
  const events = meetings.map(meeting => ({
    id: meeting._id,
    title: meeting.meetingTitle,
    start: new Date(meeting.date), // Assuming meeting.date is in a valid date format
    end: new Date(new Date(meeting.date).getTime() + 60 * 60 * 1000), // Assuming 1-hour duration
    allDay: true,
    url: meeting.joinUrl,
  }));

  const scheduleMeeting = async (meetingDetails) => {
    const { title, date, duration } = meetingDetails; // Assume date is in local time
    const utcDate = moment(date).utc().format(); // Convert to UTC

    const response = await fetch("https://lms-backend-ylpd.onrender.com/meeting/createMeeting", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        meetingTitle: title,
        date: utcDate, // Store in UTC
        duration: duration, // Duration in hours
        joinUrl: meetingDetails.joinUrl,
      }),
    });

    const data = await response.json();
    // Handle response
  };

  return (
    <>
      <div className="meeting-container">
        <DashboardSidebar />
        <div className="dashboard-main-wrapper">
          <Header />
          <div className="dashboard-body">
            <div className="breadcrumb mb-24">
              <ul className="flex-align gap-4">
                <li><a href="/" className="text-gray-200 fw-normal text-15 hover-text-main-600">Home</a></li>
                <li><span className="text-gray-500 fw-normal d-flex"><i className="ph ph-caret-right" /></span></li>
                <li><span className="text-main-600 fw-normal text-15">My Meetings</span></li>
              </ul>
            </div>

            <div className="card mt-24 bg-transparent">
              <div className="card-body p-0">
                <Calendar
                  localizer={localizer}
                  events={events}
                  startAccessor="start"
                  endAccessor="end"
                  style={{ height: 600 }}
                  onSelectEvent={event => window.open(event.url, "_blank")} // Open meeting URL on click
                  eventPropGetter={(event) => ({
                    style: {
                      backgroundColor: '#FF001E',
                      color: 'white',
                      borderRadius: '5px',
                      padding: '10px',
                    },
                  })}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default MyMeeting;