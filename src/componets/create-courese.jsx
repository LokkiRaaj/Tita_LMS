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
        courseImage: '',
        courseDuration: 0,
        courseSeat: 0,
        courseAmount: 0,
        courseVideoTitle: '',
        courseVideo: '',
        courseThumbnail: '',
        courseAttachment: ''
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
            'courseAmount'
        ];

        const missingFields = requiredFields.filter(field => !courseData[field]);

        if (missingFields.length > 0) {
            console.error("Missing required fields:", missingFields);
            return false;
        }

        return true;
    };

    const handlePublish = async (event) => {
        event.preventDefault();
        console.log("Publish button clicked");
        if (!validateCourseData()) {
            console.error("Please fill in all required fields");
            return;
        }
        try {
            // Create FormData object
            const formData = new FormData();

            // Append all course data
            Object.keys(courseData).forEach(key => {
                if (courseData[key] instanceof File) {
                    formData.append(key, courseData[key]);
                } else {
                    formData.append(key, courseData[key]);
                }
            });

            console.log("Submitting course data:", courseData);

            const response = await axios.post(
                'https://lms-be-ykft.onrender.com/course/createCourse',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            console.log("Server response:", response.data);

            if (response.data.success) {
                console.log("Course created successfully:", response.data.course);
                // Add success handling here (e.g., redirect or show success message)
            }
        } catch (error) {
            console.error("Error publishing course:", error.response?.data || error.message);
            // Add error handling here (e.g., show error message)
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
                        {currentStep === 1 && <CourseDetails onContinue={handleContinue} />}
                        {currentStep === 2 && <CourseVideo onContinue={handleContinue} onBack={() => setCurrentStep(currentStep - 1)} />}
                        {currentStep === 3 && <AboutCourse onContinue={handleContinue} onBack={() => setCurrentStep(currentStep - 1)} />}
                        {currentStep === 4 && <PublishCourse onContinue={handlePublish} />}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateCourses;

