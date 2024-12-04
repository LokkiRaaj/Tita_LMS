import React, { useState } from "react";
import DashboardSidebar from "../common/sidebar";
import Header from "../common/header";
import CreatecourseHead from "../layout/create course/create-coursehead";
import CourseDetails from "../layout/create course/course-details";
import CourseVideo from "../layout/create course/course-video";
import AboutCourse from "../layout/create course/course-about";
import PublishCourse from "../layout/create course/course-publish";

function CreateCourses() {
    const [currentStep, setCurrentStep] = useState(1);

    const handleContinue = () => {
        setCurrentStep(currentStep + 1)
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
                        {currentStep == 1 && <CourseDetails onContinue={handleContinue} />}
                        {currentStep == 2 && <CourseVideo onContinue={handleContinue} onBack={handleback} />}
                        {currentStep == 3 && <AboutCourse onContinue={handleContinue} onBack={handleback} />}
                        {currentStep == 4 && <PublishCourse onContinue={handleContinue} />}
                    </div>
                </div>
            </div>
        </>
    );
}

export default CreateCourses;