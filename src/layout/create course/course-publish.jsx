import React from "react";

function PublishCourse({ onPublish, courseData }) {
    const handlePublish = (e) => {
        onPublish(e);
    };

    return (
        <>
            <div className="card">
                <div className="card-body pt-0">
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '24px' }}>
                        <button className="btn btn-main rounded-pill py-9" onClick={handlePublish}>
                            Publish Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PublishCourse;