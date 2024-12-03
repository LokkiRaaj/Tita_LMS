import React, { useState } from "react";
import TrainerSidebar from "../common/sidebar";
import Header from "../common/header";
import CreatecourseHead from "../layout/create course/create-coursehead";
import CourseDetails from "../layout/create course/course-details";
import CourseVideo from "../layout/create course/course-video";
import AboutCourse from "../layout/create course/course-about";

function CreateCourses() {
    const [currentStep, setCurrentStep] = useState(1);

    const handleContinue = () => {
        setCurrentStep((prevStep) => {
           
                return prevStep + 1;
  
        });
    };

    return (
        <>
            <div>
                <TrainerSidebar />
                <div className="dashboard-main-wrapper">
                    <Header />
                    <div className="dashboard-body">
                        <CreatecourseHead currentStep={currentStep} />
                        {currentStep === 1 && <CourseDetails onContinue={handleContinue} />}
                        {currentStep === 2 && <CourseVideo onContinue={handleContinue} />}
                        {currentStep === 3 && <AboutCourse onContinue={handleContinue} />}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateCourses;