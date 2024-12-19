import React, { useEffect, useState } from 'react'; 
import axios from "axios";
import { Link, useLocation } from "react-router-dom";

function AdminCoursesList() {
    const [categories, setCategories] = useState([]);
    const [courses, setCourses] = useState([]);
    const [filteredCourses, setFilteredCourses] = useState([]);

    const location = useLocation();
    const selectedCategory = location.state?.selectedCategory || null;

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get(
                    "https://lms-backend-ylpd.onrender.com/courses/getAllCourses"
                );
                const data = response.data;
                const uniqueCategories = [
                    ...new Set(data.courses.map((course) => course.level)),
                ];
                setCategories(uniqueCategories);
                setCourses(data.courses);

                // Filter courses by selected category
                if (selectedCategory) {
                    const filtered = data.courses.filter(
                        (course) => course.courseCategory === selectedCategory
                    );
                    setFilteredCourses(filtered);
                } else {
                    setFilteredCourses(data.courses);
                }
            } catch (error) {
                console.error("Error fetching course categories:", error);
            }
        };

        fetchCategories();
    }, [selectedCategory]);



    return (
        <>
            <div className="card mt-24">
                <div className="card-body">
                    <div className="mb-20 flex-between flex-wrap gap-8">
                        <h4 className="mb-0">Courses</h4>
                    </div>
                    <div className="row g-20">
                        {filteredCourses.map((course, index) => (
                            <div
                                className="col-xxl-3 col-lg-4 col-sm-6"
                                key={index}
                            >
                                <div className="card border border-gray-100">
                                    <div className="card-body p-8">
                                        <a
                                            href={course.link}
                                            className="bg-main-100 rounded-8 overflow-hidden text-center mb-8 h-164 flex-center p-8"
                                        >
                                            <img
                                                src={course.courseThumbnail}
                                                alt="Course Image"
                                            />
                                        </a>
                                        <div className="p-8">
                                            <span className="text-13 py-2 px-10 rounded-pill bg-success-50 text-success-600 mb-16">
                                                {course.courseCategory}
                                            </span>
                                            <h5 className="mb-0">
                                                <a
                                                    href={course.link}
                                                    className="hover-text-main-600"
                                                >
                                                    {course.courseTitle}
                                                </a>
                                            </h5>
                                            <div className="flex-align gap-8 mt-12 pt-12 border-top border-gray-100">
                                                <div className="flex-align gap-4">
                                                    <span className="text-sm text-main-600 d-flex">
                                                        <i className="ph ph-video-camera" />
                                                    </span>
                                                    <span className="text-13 text-gray-600">
                                                        {course.courseSeat} Seats
                                                    </span>
                                                </div>
                                                <div className="flex-align gap-4">
                                                    <span className="text-sm text-main-600 d-flex">
                                                        <i className="ph ph-clock" />
                                                    </span>
                                                    <span className="text-13 text-gray-600">
                                                        {course.courseDuration} Hours
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex-between gap-4 flex-wrap mt-24">
                                                <div className="flex-align gap-4">
                                                    <span className="text-15 fw-bold text-warning-600 d-flex">
                                                        <i className="ph-fill ph-star" />
                                                    </span>
                                                    <span className="text-13 fw-bold text-gray-600">
                                                        {course.rating}
                                                    </span>
                                                    <span className="text-13 fw-bold text-gray-600">
                                                        ({course.reviews})
                                                    </span>
                                                </div>
                                                <Link to="/admin-viewcourses"
                                                    className="btn btn-outline-main rounded-pill py-9"
                                                >
                                                    View Details
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminCoursesList;