import React, { useState } from "react";

function CourseDetails({ onContinue, initialData }) {
    const [courseData, setCourseData] = useState({
        courseTitle: '',
        courseDescription: '',
        courseCategory: '',
        courseDuration: 0,
        courseSeat: 0,
        courseAmount: 0,
        courseThumbnail: null,
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
                    <h5 className="mb-0">Course Details</h5>
                    <button type="button" className="text-main-600 text-md d-flex" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Course Details">
                        <i className="ph-fill ph-question" />
                    </button>
                </div>
                <div className="card-body">
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <input type="text" name="courseTitle" placeholder="Course Title" onChange={handleChange} required style={{ margin: '10px', padding: '10px', width: '300px', borderRadius: '5px', border: '1px solid #ccc' }} />
          <input type="text" name="courseDescription" placeholder="Course Description" onChange={handleChange} required style={{ margin: '10px', padding: '10px', width: '300px', borderRadius: '5px', border: '1px solid #ccc' }} />
          <input type="text" name="courseCategory" placeholder="Course Category" onChange={handleChange} required style={{ margin: '10px', padding: '10px', width: '300px', borderRadius: '5px', border: '1px solid #ccc' }} />
          <input type="number" name="courseDuration" placeholder="Course Duration" onChange={handleChange} required style={{ margin: '10px', padding: '10px', width: '300px', borderRadius: '5px', border: '1px solid #ccc' }} />
          <input type="number" name="courseSeat" placeholder="Course Seats" onChange={handleChange} required style={{ margin: '10px', padding: '10px', width: '300px', borderRadius: '5px', border: '1px solid #ccc' }} />
          <input type="number" name="courseAmount" placeholder="Course Amount" onChange={handleChange} required style={{ margin: '10px', padding: '10px', width: '300px', borderRadius: '5px', border: '1px solid #ccc' }} />
            <input type="file" name="courseThumbnail" onChange={handleChange} required style={{ margin: '10px', padding: '10px', width: '300px', borderRadius: '5px', border: '1px solid #ccc' }} />
          <button  type="submit" style={{ margin: '10px', padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#61dafb', color: '#282c34', fontWeight: 'bold', cursor: 'pointer'  } }>Submit Course</button>
        </form>
                </div>
            </div>
        </>
    );
}

export default CourseDetails;




