import React from "react";

// const courses = [
//     {
//         id: 1,
//         image: "assets/images/thumbs/course-img3.png",
//         category: "Web Development",
//         title: "React JS",
//         lessons: "24 Lesson",
//         hours: "40 Hours",
//         rating: "4.9",
//         reviews: "(12k)",
//         buttonLink: "#",
//     },
//     {
//         id: 2,
//         image: "assets/images/thumbs/course-img5.png",
//         category: "web Development",
//         title: "Node js",
//         lessons: "24 Lesson",
//         hours: "40 Hours",
//         rating: "4.9",
//         reviews: "(12k)",
//         buttonLink: "#",
//     },
//     {
//         id: 3,
//         image: "assets/images/thumbs/course-img6.png",
//         category: "Microsoft",
//         title: "Microsoft Office",
//         lessons: "24 Lesson",
//         hours: "40 Hours",
//         rating: "4.9",
//         reviews: "(12k)",
//         buttonLink: "#",
//     },
//     {
//         id: 4,
//         image: "assets/images/thumbs/course-img9.png",
//         category: "AI",
//         title: "Artificial Intelligence",
//         lessons: "24 Lesson",
//         hours: "40 Hours",
//         rating: "4.9",
//         reviews: "(12k)",
//         buttonLink: "#",
//     },
// ];

function ProjectsPage() {
    return (
        <div className="card mt-24">
            <div className="card-body">
                <div className="mb-20 flex-between flex-wrap gap-8">
                    <h4 className="mb-0">Projects</h4>
                </div>
                {/* <div className="row g-20">
                    {courses.map((course) => (
                        <div key={course.id} className="col-xxl-3 col-lg-4 col-sm-6">
                            <div className="card border border-gray-100">
                                <div className="card-body p-8">
                                    <a href={course.buttonLink} className="bg-main-100 rounded-8 overflow-hidden text-center mb-8 h-164 flex-center p-8">
                                        <img src={course.image} alt="Course Image" />
                                    </a>
                                    <div className="p-8">
                                        <span className={`text-13 py-2 px-10 rounded-pill bg-${course.category.toLowerCase()}-50 text-${course.category.toLowerCase()}-600 mb-16`}>
                                            {course.category}
                                        </span>
                                        <h5 className="mb-0">
                                            <a href={course.buttonLink} className="hover-text-main-600">
                                                {course.title}
                                            </a>
                                        </h5>
                                        <div className="flex-align gap-8 mt-12 pt-12 border-top border-gray-100">
                                            <div className="flex-align gap-4">
                                                <span className="text-sm text-main-600 d-flex"><i className="ph ph-video-camera" /></span>
                                                <span className="text-13 text-gray-600">{course.lessons}</span>
                                            </div>
                                            <div className="flex-align gap-4">
                                                <span className="text-sm text-main-600 d-flex"><i className="ph ph-clock" /></span>
                                                <span className="text-13 text-gray-600">{course.hours}</span>
                                            </div>
                                        </div>
                                        <div className="flex-between gap-4 flex-wrap mt-24">
                                            <div className="flex-align gap-4">
                                                <span className="text-15 fw-bold text-warning-600 d-flex"><i className="ph-fill ph-star" /></span>
                                                <span className="text-13 fw-bold text-gray-600">{course.rating}</span>
                                                <span className="text-13 fw-bold text-gray-600">{course.reviews}</span>
                                            </div>
                                            <a href={course.buttonLink} className="btn btn-outline-main rounded-pill py-9">View Details</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div> */}
            </div>
        </div>
    );
}

export default ProjectsPage;
