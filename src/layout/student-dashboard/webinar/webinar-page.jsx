import React from "react";

const webinars = [
    {
        id: 1,
        image: "assets/images/thumbs/course-img3.png",
        category: "Web Development",
        title: "React JS Webinar",
        hours: "3 Hours",
        rating: "4.9",
        reviews: "(12k)",
        buttonLink: "https://example.com/webinar/1",
    },
    {
        id: 2,
        image: "assets/images/thumbs/course-img1.png",
        category: "Web Development",
        title: "Node.js Webinar",
        hours: "2 Hours",
        rating: "4.9",
        reviews: "(12k)",
        buttonLink: "#",
    },
    {
        id: 3,
        image: "assets/images/thumbs/course-img6.png",
        category: "Microsoft",
        title: "Microsoft Office Webinar",
        hours: "1 Hours",
        rating: "4.9",
        reviews: "(12k)",
        buttonLink: "#",
    },
    {
        id: 4,
        image: "assets/images/thumbs/course-img9.png",
        category: "AI",
        title: "AI Webinar",
        hours: "2 Hours",
        rating: "4.9",
        reviews: "(12k)",
        buttonLink: "#",
    },
];

function WebinarPage() {
    return (
        <div className="card mt-24">
            <div className="card-body">
                <div className="mb-20 flex-between flex-wrap gap-8">
                    <h4 className="mb-0">Upcoming Webinars</h4>
                    <p>Explore our upcoming live sessions, with expert instructors guiding you through key concepts in various technologies.</p>
                </div>
                <div className="row g-20">
                    {webinars.map((webinar) => (
                        <div key={webinar.id} className="col-xxl-3 col-lg-4 col-sm-6">
                            <div className="card border border-gray-100">
                                <div className="card-body p-8">
                                    <a href={webinar.buttonLink} className="bg-main-100 rounded-8 overflow-hidden text-center mb-8 h-164 flex-center p-8">
                                        <img src={webinar.image} alt="Webinar Image" />
                                    </a>
                                    <div className="p-8">
                                        <span className={`text-13 py-2 px-10 rounded-pill bg-${webinar.category.toLowerCase()}-50 text-${webinar.category.toLowerCase()}-600 mb-16`}>
                                            {webinar.category}
                                        </span>
                                        <h5 className="mb-0">
                                            <a href={webinar.buttonLink} className="hover-text-main-600">
                                                {webinar.title}
                                            </a>
                                        </h5>
                                        <div className="flex-align gap-8 mt-12 pt-12 border-top border-gray-100">
                                            <div className="flex-align gap-4">
                                                <span className="text-sm text-main-600 d-flex"><i className="ph ph-clock" /></span>
                                                <span className="text-13 text-gray-600">{webinar.hours}</span>
                                            </div>
                                        </div>
                                        <div className="flex-between gap-4 flex-wrap mt-24">
                                            <div className="flex-align gap-4">
                                                <span className="text-15 fw-bold text-warning-600 d-flex"><i className="ph-fill ph-star" /></span>
                                                <span className="text-13 fw-bold text-gray-600">{webinar.rating}</span>
                                                <span className="text-13 fw-bold text-gray-600">{webinar.reviews}</span>
                                            </div>
                                            <a href={webinar.buttonLink} className="btn btn-outline-main rounded-pill py-9">Join Webinar</a>
                                        </div>
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

export default WebinarPage;
