import React from "react";

function CertificatesPage() {
    // Corrected array of certificate image URLs
    const certificateImages = [
        "/assets/images/thumbs/certificates.png", 
    ];

    return (
        <div className="card mt-24">
            <div className="card-body">
                <div className="mb-20 flex-between flex-wrap gap-8">
                    <h4 className="mb-0">Certificates</h4>
                </div>
                <div className="row g-20">
                    {certificateImages.map((imageUrl, index) => (
                        <div className="col-md-12" key={index} style={{ display: 'flex', justifyContent: 'center' }}>
                            <img
                                src={imageUrl} // Corrected the image path
                                alt={`Certificate ${index + 1}`}
                                className="img-fluid"
                                style={{
                                    maxWidth: '100%',  // Ensures the image does not overflow
                                    height: 'auto',    // Maintains the aspect ratio
                                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Optional shadow for better visibility
                                    borderRadius: '8px', // Optional: rounded corners for the image
                                    marginBottom: '20px', // Adds space between image and other content
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CertificatesPage;
