import React from "react";

function TrainerHead() {
    return (
        <>
            <div className="breadcrumb-with-buttons mb-24 flex-between flex-wrap gap-8">
                {/* Breadcrumb Start */}
                <div className="breadcrumb mb-24">
                    <ul className="flex-align gap-4">
                        <li><a href="/" className="text-gray-200 fw-normal text-15 hover-text-main-600">Home</a></li>
                        <li> <span className="text-gray-500 fw-normal d-flex"><i className="ph ph-caret-right" /></span> </li>
                        <li><span className="text-main-600 fw-normal text-15">Trainer</span></li>
                    </ul>
                </div>
                {/* Breadcrumb End */}
                {/* Breadcrumb Right Start */}
               
                {/* Breadcrumb Right End */}
            </div>
        </>
    );
}

export default TrainerHead;