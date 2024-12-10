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
        courseVideoTitle: '',
        courseVideo: null,
        courseThumbnail: null,
        courseAttachment: [] // Assuming this is an empty array for now
      });


    const handleContinue = (data) => {
        setCourseData(prevData => ({
            ...prevData,
            ...data // Merge the new data into courseData
        }));
        setCurrentStep(currentStep + 1);
    };

    const validateCourseData = () => {
        const requiredFields = [
            'courseTitle',
            'courseDescription',
            'courseCategory',
        ];

        const missingFields = requiredFields.filter(field => !courseData[field]);

        if (missingFields.length > 0) {
            console.error("Missing required fields:", missingFields);
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        console.log(courseData)
        e.preventDefault();
        if (!validateCourseData()) {
            return;
        }

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
<<<<<<< HEAD
            const response = await axios.post('https://lms-guwtz37b.b4a.run/courses/createCourse', formData, {
=======
            const response = await axios.post('http://192.168.1.6:4000/courses/createCourse', formData, {
>>>>>>> 9603e86c4b3e79dd4c970a2026fc5d564bd6f39b
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Course submitted successfully:', response.data);
            // Optionally, reset the form or handle success feedback
        } catch (error) {
            if (error.response) {
              // The request was made and the server responded with a status code
              // that falls out of the range of 2xx
              console.error('Error data:', error.response.data);
              console.error('Error status:', error.response.status);
              console.error('Error headers:', error.response.headers);
            } else if (error.request) {
              // The request was made but no response was received
              console.error('Error request:', error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.error('Error message:', error.message);
            }
            console.error('Error config:', error.config);
          }
    };

    const handleback = () => {
        setCurrentStep(currentStep - 1)

    };

    return (
        <>
            <div>
                <DashboardSidebar />
                <div className="dashboard-main-wrapper">
                    <Header />
                    <div className="dashboard-body">
                        <CreatecourseHead currentStep={currentStep} />
                        {currentStep === 1 && <CourseDetails onContinue={handleContinue} />}
                        {currentStep === 2 && <CourseVideo onContinue={handleContinue} onBack={() => setCurrentStep(currentStep - 1)} />}
                        {currentStep === 3 && <AboutCourse onContinue={handleContinue} onBack={() => setCurrentStep(currentStep - 1)} />}
                        {currentStep === 4 && <PublishCourse onPublish={(e) => handleSubmit(e)} />}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateCourses;

