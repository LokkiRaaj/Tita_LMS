import React from "react";
import { FaBook, FaFilePdf, FaVideo } from "react-icons/fa";

function ReadingMaterialsPage({ materials }) {
    const getIcon = (type) => {
        switch (type) {
            case "book":
                return <FaBook className="icon" />;
            case "pdf":
                return <FaFilePdf className="icon" />;
            case "video":
                return <FaVideo className="icon" />;
            default:
                return <FaBook className="icon" />;
        }
    };

    return (
        <div className="card mt-24">
            <div className="card-body">
                <div className="mb-20 flex-between flex-wrap gap-8">
                    <h4 className="mb-0">Reading Materials</h4>
                </div>
                <div className="materials-list">
                    {materials && materials.length > 0 ? (
                        <ul>
                            {materials.map((material, index) => (
                                <li key={index} className="material-item">
                                    <h5>{getIcon(material.type)} {material.title}</h5>
                                    <p>{material.description}</p>
                                    {material.link && (
                                        <a href={material.link} target="_blank" rel="noopener noreferrer">
                                            Read More
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No materials available.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ReadingMaterialsPage;
