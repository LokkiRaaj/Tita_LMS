import React, { useState } from "react";
import AdminSidebar from "../common/sidebar";
import AdminHeader from "../common/header";
import CreatecourseHead from "../layout/Create course/create-coursehead";
import CourseDetails from "../layout/Create course/course-details";
import CourseVideo from "../layout/Create course/course-video";
import AboutCourse from "../layout/Create course/course-about";
import PublishCourse from "../layout/Create course/course-publish";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function AdmincreateCourses() {
    const [currentStep, setCurrentStep] = useState(1);
    const [courseData, setCourseData] = useState({
        courseTitle: '',
        courseDescription: '',
        courseCategory: '',
        courseDuration: 0,
        courseVideoTitle: '',
        courseVideo: null,
        courseThumbnail: null,
        courseAttachment: [], // Assuming this is an empty array for now
        keyFeatures: [], // Added keyFeatures
        whoCanEnroll: [], // Added whoCanEnroll
        certification: [], // Added certifications
        itSkillsCovered: [], // Added itSkillsCovered
        whyShouldJoin: [], // Added whysShouldJoin
        whatYouWillLearn: [],
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
            const response = await axios.post(`http://148.135.138.203:4000/courses/createCourse`, formData, {
                // const response = await axios.post(`http://192.168.1.12:4000/courses/createCourse`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log('Course submitted successfully:', response.data);
            toast.success('Course submitted successfully!');
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
            toast.error('Error submitting course. Please try again.');
        }
    };

    const handleback = () => {
        setCurrentStep(currentStep - 1)

    };

    return (
        <>
            <ToastContainer />
            <div>
                <AdminSidebar />
                <div className="dashboard-main-wrapper">
                    <AdminHeader />
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

export default AdmincreateCourses;