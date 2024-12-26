import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

function WebinarCalendar() {
    const [webinars, setWebinars] = useState([]);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isPopupVisible, setPopupVisible] = useState(false);

    useEffect(() => {
        const fetchMeetings = async () => {
            try {
                const response = await fetch(`http://192.168.1.12:4000/webinar/getWebinar`);
                if (!response.ok) throw new Error("Failed to fetch meetings");
                const data = await response.json();
                setWebinars(data);
            } catch (error) {
                console.error("Error fetching meetings:", error);
            }
        };
        fetchMeetings();
    }, []);

    // Transform webinars data to fit the calendar format
    const events = webinars.map(webinar => ({
        id: webinar._id,
        title: webinar.webinarTitle,
        start: new Date(webinar.date),
        end: new Date(new Date(webinar.date).getTime() + 60 * 60 * 1000), // Assuming 1-hour duration
        allDay: false,
        url: webinar.joinUrl,
    }));

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
                        eventPropGetter={() => ({
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
                        height: '100vh',
                        width: '320px',
                        backgroundColor: '#f9f9f9',
                        borderLeft: '4px solid #4A90E2',
                        boxShadow: '-4px 0 15px rgba(0, 0, 0, 0.2)',
                        zIndex: 1000,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        overflowY: 'auto',
                    }}
                >
                    <div style={{ padding: '20px' }}>
                        <h2 style={{ fontSize: '1.6rem', marginBottom: '15px', color: '#333' }}>
                            {selectedEvent.title}
                        </h2>
                        <p style={{ margin: '5px 0', color: '#555', fontSize: '0.95rem' }}>
                            <strong>Start Time:</strong> {moment(selectedEvent.start).format('h:mm A')}
                        </p>
                        <p style={{ margin: '5px 0', color: '#555', fontSize: '0.95rem' }}>
                            <strong>End Time:</strong> {moment(selectedEvent.end).format('h:mm A')}
                        </p>
                        <p style={{ margin: '5px 0', color: '#555', fontSize: '0.95rem' }}>
                            <strong>Start Date:</strong> {moment(selectedEvent.start).format('MMMM Do YYYY')}
                        </p>
                    </div>
                    <div
                        style={{
                            padding: '20px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '15px',
                        }}
                    >
                        <a
                            href={selectedEvent.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'block',
                                padding: '12px',
                                backgroundColor: '#4A90E2',
                                color: '#fff',
                                borderRadius: '6px',
                                textDecoration: 'none',
                                fontSize: '1rem',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
                                transition: 'background-color 0.3s ease',
                            }}
                            onMouseOver={(e) => (e.target.style.backgroundColor = '#007BFF')}
                            onMouseOut={(e) => (e.target.style.backgroundColor = '#4A90E2')}
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

export default WebinarCalendar;