import React, { useState } from "react";

function CourseVideo({ onContinue, onBack }) {
    const [uploadedVideoName, setUploadedVideoName] = useState("");
    const [videoFile, setVideoFile] = useState(null);
    const [error, setError] = useState("");
    const [keyFeatures, setKeyFeatures] = useState([""]);
    const [whoCanEnroll, setWhoCanEnroll] = useState([""]);
    const [certification, setCertification] = useState([""]);
    const [itSkillsCovered, setItSkillsCovered] = useState([""]);
    const [whyShouldJoin, setWhyShouldJoin] = useState([""]);
    const [whatYouWillLearn, setWhatYouWillLearn] = useState([""]);

    const handleDrop = (event) => {
        event.preventDefault();
        const files = event.dataTransfer.files;
        if (files.length > 0) {
            handleFileUpload(files[0]);
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleFileChange = (event) => {
        const files = event.target.files;
        if (files.length > 0) {
            handleFileUpload(files[0]);
        }
    };

    const handleFileUpload = (file) => {
        if (file.size > 100 * 1024 * 1024) { // 100MB limit
            setError("File size exceeds 100MB.");
            setUploadedVideoName("");
            setVideoFile(null);
        } else {
            setError("");
            setVideoFile(file);
            setUploadedVideoName(file.name);
        }
    };

    const displayUploadedVideoName = () => {
        return uploadedVideoName ? (
            <span className="uploaded-video-name">{uploadedVideoName}</span>
        ) : null;
    };

    const addKeyFeature = () => {
        setKeyFeatures([...keyFeatures, ""]);
    };

    const handleKeyFeatureChange = (index, value) => {
        const newKeyFeatures = [...keyFeatures];
        newKeyFeatures[index] = value;
        setKeyFeatures(newKeyFeatures);
    };

    const addWhoCanEnroll = () => {
        setWhoCanEnroll([...whoCanEnroll, ""]);
    };

    const handleWhoCanEnrollChange = (index, value) => {
        const newWhoCanEnroll = [...whoCanEnroll];
        newWhoCanEnroll[index] = value;
        setWhoCanEnroll(newWhoCanEnroll);
    };

    const handleCertificationChange = (index, value) => {
        const newCertification = [...certification];
        newCertification[index] = value;
        setCertification(newCertification);
    };

    const addItSkill = () => {
        setItSkillsCovered([...itSkillsCovered, ""]);
    };

    const handleItSkillChange = (index, value) => {
        const newItSkills = [...itSkillsCovered];
        newItSkills[index] = value;
        setItSkillsCovered(newItSkills);
    };

    const addWhyJoin = () => {
        setWhyShouldJoin([...whyShouldJoin, ""]);
    };

    const handleWhyJoinChange = (index, value) => {
        const newWhys = [...whyShouldJoin];
        newWhys[index] = value;
        setWhyShouldJoin(newWhys);
    };

    const addWhatYouWillLearn = () => {
        setWhatYouWillLearn([...whatYouWillLearn, ""]);
    };

    const handleWhatYouWillLearnChange = (index, value) => {
        const newWhatYouWillLearn = [...whatYouWillLearn];
        newWhatYouWillLearn[index] = value;
        setWhatYouWillLearn(newWhatYouWillLearn);
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
                <div className="card-body">
                    <div 
                        className="upload-card-item p-16 rounded-12 bg-main-50 mb-20" 
                        onDrop={handleDrop} 
                        onDragOver={handleDragOver}
                    >
                        <div className="flex-align gap-10 flex-wrap">
                            <span className="w-36 h-36 text-lg rounded-circle bg-white flex-center text-main-600 flex-shrink-0">
                                <i className="ph-fill ph-video-camera" />
                            </span>
                            <div>
                                <p className="text-15 text-gray-500">
                                    Drag &amp; drop your single/multiple videos of course, or
                                    <label htmlFor="video" className="text-main-600 cursor-pointer">Browse</label>
                                    <input 
                                        type="file" 
                                        id="video" 
                                        accept="video/mp4,video/x-m4v,video/*" 
                                        hidden 
                                        onChange={handleFileChange} 
                                    />
                                    {displayUploadedVideoName()}
                                </p>
                                <p className="text-13 text-gray-600">Mp4 format with 16:9 aspect ratio (max file size 100MB each)</p>
                                {error && <p className="text-danger">{error}</p>}
                            </div>
                        </div>
                    </div>
                        <div>
                            <h5 className="mb-2">Key Features</h5>
                            {keyFeatures.map((feature, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    value={feature}
                                    onChange={(e) => handleKeyFeatureChange(index, e.target.value)}
                                    placeholder="Enter key feature"
                                    className="form-control mb-2"
                                />
                            ))}
                            <a style={{color:"#FF001E", fontSize: "12px"}} onClick={addKeyFeature}>
                                Add Key Feature
                            </a>
                        </div>
                        
                      
                    <div>
                            <h5 className="mb-2">Who Can Enroll</h5>
                            {whoCanEnroll.map((enrollee, index) => (
                                <input
                                    key={index}
                                    type="text"
                                    value={enrollee}
                                    onChange={(e) => handleWhoCanEnrollChange(index, e.target.value)}
                                    placeholder="Enter who can enroll"
                                    className="form-control mb-2"
                                />
                            ))}
                            <a style={{color:"#FF001E", fontSize: "12px"}} onClick={addWhoCanEnroll}>
                                Add Who Can Enroll
                            </a>
                        </div>
                    <div>
                        <h5 className="mb-2">Certifications</h5>
                        {certification.map((certification, index) => (
                            <input
                                key={index}
                                type="text"
                                value={certification}
                                onChange={(e) => handleCertificationChange(index, e.target.value)}
                                placeholder="Enter certification"
                                className="form-control mb-2"
                            />
                        ))}
                      
                    </div>
                    <div>
                        <h5 className="mb-2">IT Skills Covered</h5>
                        {itSkillsCovered.map((skill, index) => (
                            <input
                                key={index}
                                type="text"
                                value={skill}
                                onChange={(e) => handleItSkillChange(index, e.target.value)}
                                placeholder="Enter IT skill covered"
                                className="form-control mb-2"
                            />
                        ))}
                        <a style={{color:"#FF001E", fontSize: "12px"}} onClick={addItSkill}>
                            Add IT Skill Covered
                        </a>
                    </div>
                    <div>
                        <h5 className="mb-2">Why You Should Join</h5>
                        {whyShouldJoin.map((reason, index) => (
                            <input
                                key={index}
                                type="text"
                                value={reason}
                                onChange={(e) => handleWhyJoinChange(index, e.target.value)}
                                placeholder="Enter reason to join"
                                className="form-control mb-2"
                            />
                        ))}
                        <a style={{color:"#FF001E", fontSize: "12px"}} onClick={addWhyJoin}>
                            Add Why Should Join
                        </a>
                    </div>
                    <div>
                        <h5 className="mb-2">What You Will Learn</h5>
                        {whatYouWillLearn.map((item, index) => (
                            <input
                                key={index}
                                type="text"
                                value={item}
                                onChange={(e) => handleWhatYouWillLearnChange(index, e.target.value)}
                                placeholder="Enter what you will learn"
                                className="form-control mb-2"
                            />
                        ))}
                        <a style={{color:"#FF001E", fontSize: "12px"}} onClick={addWhatYouWillLearn}>
                            Add What You Will Learn
                        </a>
                    </div>
                    <div className="flex-align justify-content-end gap-8">
                        <a href="#" className="btn btn-outline-main rounded-pill py-9" onClick={(e) => { e.preventDefault(); onBack(); }}>Back</a>
                        <button 
                            type="button" 
                            className="btn btn-main rounded-pill py-9" 
                            onClick={(e)  => {
                                e.preventDefault();
                                const videoData = {
                                    courseVideoTitle: uploadedVideoName,
                                    courseVideo: videoFile,
                                    keyFeatures: keyFeatures,
                                    whoCanEnroll: whoCanEnroll,
                                     certification: certification ,
                                     itSkillsCovered: itSkillsCovered ,
                                     whyShouldJoin: whyShouldJoin,
                                     whatYouWillLearn: whatYouWillLearn
                                };
                                
                                console.log("Video upload data:", videoData);
                                onContinue(videoData);
                            }}
                        >
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CourseVideo;