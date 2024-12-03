import React from "react";

function Homebody1() {
    return (
        <>
            <div className="row gy-4">
                <div className="col-xxl-3 col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="mb-2">155+</h4>
                            <span className="text-gray-600">Completed Courses</span>
                            <div className="flex-between gap-8 mt-16">
                                <span className="flex-shrink-0 w-48 h-48 flex-center rounded-circle bg-main-600 text-white text-2xl"><i className="ph-fill ph-book-open" /></span>
                                <div id="complete-course" className="remove-tooltip-title rounded-tooltip-value" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-3 col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="mb-2">39+</h4>
                            <span className="text-gray-600">Earned Certificate</span>
                            <div className="flex-between gap-8 mt-16">
                                <span className="flex-shrink-0 w-48 h-48 flex-center rounded-circle bg-main-two-600 text-white text-2xl"><i className="ph-fill ph-certificate" /></span>
                                <div id="earned-certificate" className="remove-tooltip-title rounded-tooltip-value" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-3 col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="mb-2">25+</h4>
                            <span className="text-gray-600">Course in Progress</span>
                            <div className="flex-between gap-8 mt-16">
                                <span className="flex-shrink-0 w-48 h-48 flex-center rounded-circle bg-purple-600 text-white text-2xl"> <i className="ph-fill ph-graduation-cap" /></span>
                                <div id="course-progress" className="remove-tooltip-title rounded-tooltip-value" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xxl-3 col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="mb-2">18k+</h4>
                            <span className="text-gray-600">Community Support</span>
                            <div className="flex-between gap-8 mt-16">
                                <span className="flex-shrink-0 w-48 h-48 flex-center rounded-circle bg-warning-600 text-white text-2xl"><i className="ph-fill ph-users-three" /></span>
                                <div id="community-support" className="remove-tooltip-title rounded-tooltip-value" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Homebody1;