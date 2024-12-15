import React from "react";

// Sample test data
const tests = [
    {
        id: 1,
        title: "React js",
        category: "Web Development",
        description: "",
        duration: "1 hour",
        questions: "20",
        difficulty: "Medium",
        image: "assets/images/thumbs/course-img3.png",
    },
    {
        id: 2,
        title: "UI/UX",
        category: "Web Design",
        description: "",
        duration: "1.5 hours",
        questions: "25",
        difficulty: "Hard",
        image: "assets/images/thumbs/course-img2.png",
    },
];

function TestsPage() {
    return (
        <div className="card mt-24">
            <div className="card-body">
                <div className="mb-20 flex-between flex-wrap gap-8">
                    <h4 className="mb-0">Tests</h4>
                </div>
                <div className="row g-20">
                    {tests.map((test) => (
                        <div key={test.id} className="col-xxl-3 col-lg-4 col-sm-6">
                            <div className="card border border-gray-100">
                                <div className="card-body p-8">
                                    <a href={test.buttonLink} className="bg-main-100 rounded-8 overflow-hidden text-center mb-8 h-164 flex-center p-8">
                                        <img src={test.image} alt="Test Image" />
                                    </a>
                                    <div className="p-8">
                                        <span className={`text-13 py-2 px-10 rounded-pill bg-${test.category.toLowerCase()}-50 text-${test.category.toLowerCase()}-600 mb-16`}>
                                            {test.category}
                                        </span>
                                        <h5 className="mb-0">
                                            <a href={test.buttonLink} className="hover-text-main-600">
                                                {test.title}
                                            </a>
                                        </h5>
                                        <p className="text-13 text-gray-600 mb-12">{test.description}</p>
                                        <div className="flex-align gap-8 mt-12 pt-12 border-top border-gray-100">
                                            <div className="flex-align gap-4">
                                                <span className="text-sm text-main-600 d-flex"><i className="ph ph-clock" /></span>
                                                <span className="text-13 text-gray-600">{test.duration}</span>
                                            </div>
                                            <div className="flex-align gap-4">
                                                <span className="text-sm text-main-600 d-flex"><i className="ph ph-question" /></span>
                                                <span className="text-13 text-gray-600">{test.questions} questions</span>
                                            </div>
                                        </div>
                                        <div className="flex-between gap-4 flex-wrap mt-24">
                                            <div className="flex-align gap-4">
                                                <span className="text-15 fw-bold text-warning-600 d-flex"><i className="ph-fill ph-star" /></span>
                                                <span className="text-13 fw-bold text-gray-600">{test.difficulty}</span>
                                            </div>
                                            <a href={test.buttonLink} className="btn btn-outline-main rounded-pill py-9">Start Test</a>
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

export default TestsPage;
