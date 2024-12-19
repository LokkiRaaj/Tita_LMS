import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

function StudentcalendarPage() {
  const [meetings, setMeetings] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);

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

  const handleEventSelect = (event) => {
    setSelectedEvent(event);
    setPopupVisible(true);
  };

  return (
    <>
            <div className="card mt-24 bg-transparent">
              <div className="card-body p-0">
                <Calendar
                  localizer={localizer}
                  events={events}
                  startAccessor="start"
                  endAccessor="end"
                  style={{ height: 600 }}
                  onSelectEvent={handleEventSelect}
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

            {isPopupVisible && selectedEvent && (
              <div
                style={{
                  position: 'fixed',
                  top: 0,
                  right: 0,
                  height: '100vh', // Full height
                  width: '320px',
                  backgroundColor: '#f9f9f9',
                  borderLeft: '4px solid #4A90E2',
                  boxShadow: '-4px 0 15px rgba(0, 0, 0, 0.2)',
                  zIndex: 1000,
                  transition: 'transform 0.4s ease, opacity 0.4s ease',
                  transform: isPopupVisible ? 'translateX(0)' : 'translateX(100%)',
                  opacity: isPopupVisible ? 1 : 0,
                  display: 'flex', // Use flexbox
                  flexDirection: 'column',
                  justifyContent: 'space-between', // Space out content
                  overflowY: 'auto', // Enable scrolling for long content
                }}
              >
                <div style={{ padding: '20px' }}>
                  <h2 style={{ fontSize: '1.6rem', marginBottom: '15px', color: '#333' }}>
                    {selectedEvent.title}
                  </h2>
                  <p style={{ margin: '5px 0', color: '#555', fontSize: '0.95rem' }}>
                    <strong>Start Time:</strong> {selectedEvent.start.toString()}
                  </p>
                  <p style={{ margin: '5px 0', color: '#555', fontSize: '0.95rem' }}>
                    <strong>End Time:</strong> {selectedEvent.end.toString()}
                  </p>

                  <p style={{ margin: '5px 0', color: '#555', fontSize: '0.95rem' }}>
                    <strong>Start Date:</strong> {moment(selectedEvent.start).format('MMMM Do YYYY')}
                  </p>
                  <p style={{ margin: '5px 0', color: '#555', fontSize: '0.95rem' }}>
                    <strong>End Date:</strong> {moment(selectedEvent.end).format('MMMM Do YYYY')}
                  </p>
                </div>
                <div
                  style={{
                    padding: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px', // Add spacing between buttons
                  }}
                >
                  <a
                    href={selectedEvent.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'block',
                      padding: '12px',
                      backgroundColor: 'linear-gradient(to right, #4A90E2, #007BFF)',
                      color: 'red',
                      borderRadius: '6px',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      fontWeight: 'bold',
                      textAlign: 'center',
                      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseOver={(e) =>
                      (e.target.style.backgroundColor = 'linear-gradient(to right, #007BFF, #0056B3)')
                    }
                    onMouseOut={(e) =>
                      (e.target.style.backgroundColor = 'linear-gradient(to right, #4A90E2, #007BFF)')
                    }
                  >
                    Join Meeting
                  </a>
                  <button
                    onClick={() => setPopupVisible(false)}
                    style={{
                      padding: '10px 15px',
                      backgroundColor: '#FF4757',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '5px',
                      fontSize: '1rem',
                      cursor: 'pointer',
                      textAlign: 'center',
                      transition: 'background-color 0.3s ease, transform 0.2s',
                    }}
                    onMouseOver={(e) => (e.target.style.backgroundColor = '#E84141')}
                    onMouseOut={(e) => (e.target.style.backgroundColor = '#FF4757')}
                    onMouseDown={(e) => (e.target.style.transform = 'scale(0.95)')}
                    onMouseUp={(e) => (e.target.style.transform = 'scale(1)')}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          
    </>
  );
}




export default StudentcalendarPage;