import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ViewTestTable() {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Dummy course data - replace with an API call if needed
        const dummyCourses = [
            {
                id: 1,
                title: 'React JS',
                testTopic: 'React JS - Test 1',
                testDate: '12-12-2024',
                description: 'This is a test description',
                questions: '25',
                status: 'completed',
            },
            {
                id: 2,
                title: 'React JS',
                testTopic: 'React JS - Test 2',
                testDate: '12-12-2024',
                description: 'This is a test description',
                questions: '25',
                status: 'pending',
            },
            {
                id: 3,
                title: 'React JS',
                testTopic: 'React JS - Test 3',
                testDate: '12-12-2024',
                description: 'This is a test description',
                questions: '25',
                status: 'pending',
            },
        ];
        setCourses(dummyCourses);
    }, []);

    const handleViewTestDetails = (courseId) => {
        navigate(`/student-starttests?id=${courseId}`);
    };

    return (
        <div className="card mt-24">
            <div className="card-body">
                <div className="mb-20 flex-between flex-wrap gap-8">
                    <h4 className="mb-0">My Test</h4>
                </div>
                <div className="row g-20">
                    {courses.map((course) => (
                        <div key={course.id} className="col-xxl-3 col-lg-4 col-sm-6">
                            <div className="card border border-gray-100">
                                <div className="card-body p-8">
                                    <h5 className="mb-0">{course.title}</h5>
                                    <h3 className="text-13 mb-0">Topic: {course.testTopic}</h3>
                                    <h3 className="text-13 mb-0">Date: {course.testDate}</h3>
                                    <h3 className="text-13 mb-0">Description: {course.description}</h3>
                                    <h3 className="text-13 mb-0">Questions: {course.questions}</h3>
                                    <h3 className="text-13 mb-0" style={{ color: '#FF001E' }}>
                                        80% above to pass
                                    </h3>
                                    <span
                                        className={`text-13 py-2 px-8 ${course.status === "completed"
                                            ? "bg-success-50 text-success-600"
                                            : "bg-warning-50 text-warning-600"
                                            } d-inline-flex align-items-center gap-8 rounded-pill`}
                                    >
                                        <span
                                            className={`w-6 h-6 mt-2 ${course.status === "completed"
                                                ? "bg-success-600"
                                                : "bg-warning-600"
                                                } rounded-circle flex-shrink-0`}
                                        />
                                        {course.status === "completed" ? "Completed" : "Pending"}
                                    </span>
                                    <div className="p-8">
                                        <div className="flex-align gap-8 mt-12 pt-12 border-top border-gray-100" />
                                        <button
                                            className="btn btn-outline-main rounded-pill py-9"
                                            onClick={() => handleViewTestDetails(course.id)}
                                        >
                                            Begin Test
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ViewTestTable;