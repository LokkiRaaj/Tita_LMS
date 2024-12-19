import React from "react";
import { useNavigate } from "react-router-dom";


function AdminCategories() {

    const Categories = [
        {
            id: 1,
            image: "assets/images/thumbs/web-development.png",
            title: "Web Development",
            lessons: "24 Lesson",
            hours: "40 Hours",
            rating: "4.9",
            reviews: "(12k)",
        },
        {
            id: 2,
            image: "assets/images/thumbs/web-design.png",
            title: "Web Designing",
            lessons: "24 Lesson",
            hours: "40 Hours",
            rating: "4.9",
            reviews: "(12k)",
        },
        {
            id: 3,
            image: "assets/images/thumbs/data-science.png",
            title: "Data Science",
            lessons: "24 Lesson",
            hours: "40 Hours",
            rating: "4.9",
            reviews: "(12k)",
        },
        {
            id: 4,
            image: "assets/images/thumbs/ai.png",
            title: "Artificial Intelligence",
            lessons: "24 Lesson",
            hours: "40 Hours",
            rating: "4.9",
            reviews: "(12k)",
        },
        {
            id: 5,
            image: "assets/images/thumbs/cloud-computing.png",
            title: "Cloud Computing",
            lessons: "24 Lesson",
            hours: "40 Hours",
            rating: "4.9",
            reviews: "(12k)",
        },
        {
            id: 6,
            image: "assets/images/thumbs/database.png",
            title: "Database",
            lessons: "24 Lesson",
            hours: "40 Hours",
            rating: "4.9",
            reviews: "(12k)",
        },
        {
            id: 7,
            image: "assets/images/thumbs/software-testing.png",
            title: "Software Testing",
            lessons: "24 Lesson",
            hours: "40 Hours",
            rating: "4.9",
            reviews: "(12k)",
        },
        {
            id: 8,
            image: "assets/images/thumbs/data-analytics.png",
            title: "Data Analytics",
            lessons: "24 Lesson",
            hours: "40 Hours",
            rating: "4.9",
            reviews: "(12k)",
        },
        {
            id: 9,
            image: "assets/images/thumbs/mobile-app.png",
            title: "Mobile App",
            lessons: "24 Lesson",
            hours: "40 Hours",
            rating: "4.9",
            reviews: "(12k)",
        },
        {
            id: 10,
            image: "assets/images/thumbs/cyber-security.png",
            title: "Cyber Security",
            lessons: "24 Lesson",
            hours: "40 Hours",
            rating: "4.9",
            reviews: "(12k)",
        },
    ];

    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        navigate("/admin-courses", { state: { selectedCategory: category.title } });
    };


    return (
        <>
            <div className="card mt-24">
                <div className="card-body">
                    <div className="mb-20 flex-between flex-wrap gap-8">
                        <h4 className="mb-0">Categories</h4>
                    </div>
                    <div className="row g-20">
                        {Categories.map((category) => (
                            <div key={category.id} className="col-xxl-3 col-lg-4 col-sm-6">
                                <div className="card border border-gray-100">
                                    <div className="card-body p-8" onClick={() => handleCategoryClick(category)}>
                                        <a href={category.buttonLink} className="bg-main-100 rounded-8 overflow-hidden text-center mb-8 h-164 flex-center p-8">
                                            <img src={category.image} alt="category Image" />
                                        </a>
                                        <div className="p-8">
                                            <h5 className="mb-0">
                                                <a href={category.buttonLink} className="hover-text-main-600">
                                                    {category.title}
                                                </a>
                                            </h5>
                                            <div className="flex-between gap-4 flex-wrap mt-24">
                                                <div className="flex-align gap-4">
                                                    <span className="text-15 fw-bold text-warning-600 d-flex"><i className="ph-fill ph-star" /></span>
                                                    <span className="text-13 fw-bold text-gray-600">{category.rating}</span>
                                                    <span className="text-13 fw-bold text-gray-600">{category.reviews}</span>
                                                </div>
                                                <a href={category.buttonLink} className="btn btn-outline-main rounded-pill py-9">View Courses</a>
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

export default AdminCategories;