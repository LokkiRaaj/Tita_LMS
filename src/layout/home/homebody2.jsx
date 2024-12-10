import React, { useEffect, useState } from "react";
import axios from 'axios';

function Homebody2() {
    const [categories, setCategories] = useState([]);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
<<<<<<< HEAD
                const response = await axios.get("https://lms-guwtz37b.b4a.run/courses/getAllCourses");
=======
                const response = await axios.get("http://192.168.1.6:4000/courses/getAllCourses");
>>>>>>> 9603e86c4b3e79dd4c970a2026fc5d564bd6f39b
                const data = response.data;
                console.log(data)
                const uniqueCategories = [...new Set(data.courses.map(course => course.level))];
                setCategories(uniqueCategories);
                setCourses(data.courses);
            } catch (error) {
                console.error("Error fetching course categories:", error);
            }
        };

        fetchCategories();
    }, []);

    return (
        <>
            <div className="card mt-24">
                <div className="card-body">
                    <div className="mb-20 flex-between flex-wrap gap-8">
                        <h4 className="mb-0">Courses</h4>
                        <div className="flex-align gap-8 flex-wrap">
                            <div className="position-relative">
                                <select id="courseLevel" className="form-select py-9 placeholder-13 text-15">
                                    <option value={1} disabled selected>Select course level</option>
                                    {categories.map((level, index) => (
                                        <option key={index} value={level}>{level}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row g-20">
                        {courses.map((course, index) => (
                            <div className="col-xxl-3 col-lg-4 col-sm-6" key={index}>
                                <div className="card border border-gray-100">
                                    <div className="card-body p-8">
                                        <a href={course.link} className="bg-main-100 rounded-8 overflow-hidden text-center mb-8 h-164 flex-center p-8">
                                            <img src={course.courseThumbnail} alt="Course Image" />
                                        </a>
                                        <div className="p-8">
                                            <span className="text-13 py-2 px-10 rounded-pill bg-success-50 text-success-600 mb-16">{course.courseCategory}</span>
                                            <h5 className="mb-0"><a href={course.link} className="hover-text-main-600">{course.courseTitle}</a></h5>
                                            <div className="flex-align gap-8 mt-12 pt-12 border-top border-gray-100">
                                                <div className="flex-align gap-4">
                                                    <span className="text-sm text-main-600 d-flex"><i className="ph ph-video-camera" /></span>
                                                    <span className="text-13 text-gray-600">{course.courseSeat} Seats</span>
                                                </div>
                                                <div className="flex-align gap-4">
                                                    <span className="text-sm text-main-600 d-flex"><i className="ph ph-clock" /></span>
                                                    <span className="text-13 text-gray-600">{course.courseDuration} Hours</span>
                                                </div>
                                            </div>
                                            <div className="flex-between gap-4 flex-wrap mt-24">
                                                <div className="flex-align gap-4">
                                                    <span className="text-15 fw-bold text-warning-600 d-flex"><i className="ph-fill ph-star" /></span>
                                                    <span className="text-13 fw-bold text-gray-600">{course.rating}</span>
                                                    <span className="text-13 fw-bold text-gray-600">({course.reviews})</span>
                                                </div>
                                                <a href={course.link} className="btn btn-outline-main rounded-pill py-9">View Details</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex-between flex-wrap gap-8 mt-20">
                        <a href="" className="btn btn-outline-gray rounded-pill py-9 flex-align gap-4">
                            <span className="d-flex text-xl"><i className="ph ph-arrow-left" /></span>
                            Previous
                        </a>
                        <ul className="pagination flex-align flex-wrap">
                            <li className="page-item active">
                                <a className="page-link h-44 w-44 flex-center text-15 rounded-8 fw-medium" href="">1</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link h-44 w-44 flex-center text-15 rounded-8 fw-medium" href="">2</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link h-44 w-44 flex-center text-15 rounded-8 fw-medium" href="">3</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link h-44 w-44 flex-center text-15 rounded-8 fw-medium" href="">...</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link h-44 w-44 flex-center text-15 rounded-8 fw-medium" href="">8</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link h-44 w-44 flex-center text-15 rounded-8 fw-medium" href="">9</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link h-44 w-44 flex-center text-15 rounded-8 fw-medium" href="">10</a>
                            </li>
                        </ul>
                        <a href="" className="btn btn-outline-main rounded-pill py-9 flex-align gap-4">
                            Next <span className="d-flex text-xl"><i className="ph ph-arrow-right" /></span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Homebody2;