import React from "react";

function PublishCourse({ onContinue, courseData }) {
    const handlePublish = (e) => {
        e.preventDefault(); // Prevent default action
        alert("Course published successfully!");
        onContinue(courseData); // Call onContinue with courseData
    };

    return (
        <>
            <div className="card">
                <div className="card-body pt-0">
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px' }}>
                        <a href="#" className="btn btn-main rounded-pill py-9" onClick={handlePublish}>
                            Publish Now
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PublishCourse;