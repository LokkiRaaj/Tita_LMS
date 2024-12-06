import React, { useState } from "react";
import DashboardSidebar from "../common/sidebar";
import Header from "../common/header";
import CreatecourseHead from "../layout/create course/create-coursehead";
import CourseDetails from "../layout/create course/course-details";
import CourseVideo from "../layout/create course/course-video";
import AboutCourse from "../layout/create course/course-about";
import PublishCourse from "../layout/create course/course-publish";
import axios from 'axios';

function CreateCourses() {
    const [currentStep, setCurrentStep] = useState(1);
    const [courseData, setCourseData] = useState({
        courseTitle: '',
        courseDescription: '',
        courseCategory: '',
        courseDuration: 0,
        courseSeat: 0,
        courseAmount: 0,
        courseVideoTitle: '',
        courseVideo: null,
        courseThumbnail: null,
        courseAttachment: []
      });

    const handleContinue = (data) => {
        setCourseData(prevData => ({
            ...prevData,
            ...data
        }));
        setCurrentStep(currentStep + 1);
    };

    const handleSubmit = async (e) => {
        console.log("clicked");
        console.log(courseData);
        e.preventDefault();
        const formData = new FormData();
        for (const key in courseData) {
          if (Array.isArray(courseData[key])) {
            courseData[key].forEach(file => {
              formData.append(key, file);
            });
          } else {
            formData.append(key, courseData[key]);
          }
        }
    
        try {
          const response = await axios.post('http://192.168.1.11:4000/courses/createCourse', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          });
          console.log('Course submitted successfully:', response.data);
          // Optionally, reset the form or handle success feedback
        } catch (error) {
          console.error('Error submitting course:', error);
          // Optionally, handle error feedback
        }
      };

    return (
        <>
            <div>
                <DashboardSidebar />
                <div className="dashboard-main-wrapper">
                    <Header />
                    <div className="dashboard-body">
                        <CreatecourseHead currentStep={currentStep} />
                        {currentStep === 1 && <CourseDetails onContinue={handleContinue} initialData={courseData} />}
                        {currentStep === 2 && <CourseVideo onContinue={handleContinue} onBack={() => setCurrentStep(currentStep - 1)} initialData={courseData} />}
                        {currentStep === 3 && <AboutCourse onContinue={handleContinue} onBack={() => setCurrentStep(currentStep - 1)} initialData={courseData} />}
                        {currentStep === 4 && <PublishCourse onPublish={(e) => handleSubmit(e)} courseData={courseData} />}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateCourses;

