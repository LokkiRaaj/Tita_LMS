import React from "react";


const courseBadges = [
    { id: 1,  image: "assets/images/thumbs/course-img5.png" },
    { id: 2,  image: "assets/images/thumbs/course-img9.png" },
    { id: 3,  image: "assets/images/thumbs/course-img9.png" },
    
];

function BadgesPage() {
    return (
        <div className="card mt-24">
            <div className="card-body">
                <div className="mb-20 flex-between flex-wrap gap-8">
                    <h4 className="mb-0">Badges</h4>
                </div>

                <div className="row g-20">
                    {courseBadges.map((badge) => (
                        <div key={badge.id} className="col-xxl-3 col-lg-4 col-sm-6">
                            <div className="card border border-gray-100">
                                <div className="card-body p-8">
                                    <div className="p-8">
                                        <div className="flex-align gap-8 mt-12 pt-12 border-top border-gray-100">
                                            <img
                                                src={badge.image} // Directly use badge.image here
                                                alt={badge.title}
                                                className="badge-image"
                                            />
                                            <p className="badge-title">{badge.title}</p>
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

export default BadgesPage;
