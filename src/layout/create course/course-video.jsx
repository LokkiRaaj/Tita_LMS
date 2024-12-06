import React, { useState } from "react";

function CourseVideo({ onContinue, onBack, initialData }) {
    const [courseData, setCourseData] = useState({
      
        courseVideoTitle: '',
        courseVideo: null,
      
      });

      const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (files) {
          if (name === 'courseAttachment') {
            setCourseData({
              ...courseData,
              [name]: Array.from(files)
            });
          } else {
            setCourseData({
              ...courseData,
              [name]: files[0]
            });
          }
        } else {
          setCourseData({
            ...courseData,
            [name]: value
          });
        }
      
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        onContinue(courseData);
      };
    

    return (
        <>
            <div className="card">
                <div className="card-header border-bottom border-gray-100 flex-align gap-8">
                    <h5 className="mb-0">Upload Videos</h5>
                    <button type="button" className="text-main-600 text-md d-flex" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Upload Videos">
                        <i className="ph-fill ph-question" />
                    </button>
                </div>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <input type="text" name="courseVideoTitle" placeholder="Course Video Title" onChange={handleChange} required style={{ margin: '10px', padding: '10px', width: '300px', borderRadius: '5px', border: '1px solid #ccc' }} />
          <input type="file" name="courseVideo" onChange={handleChange} required style={{ margin: '10px', padding: '10px', width: '300px', borderRadius: '5px', border: '1px solid #ccc' }} />
          <button type="submit" style={{ margin: '10px', padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#61dafb', color: '#282c34', fontWeight: 'bold', cursor: 'pointer' }}>Submit Course</button>
        </form>
            </div>
        </>
    );
}

export default CourseVideo;


