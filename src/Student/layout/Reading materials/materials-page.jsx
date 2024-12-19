import React from "react";

function StudentMaterialsPage() {
    return (
        <div className="card">
            <div className="card-header border-bottom border-gray-100 flex-align gap-8">
                <h5 className="mb-0">Reading Materials</h5>
            </div>
            <div className="card-body">
                <form >
                    <div className="row gy-20">
                        <div className="col-xxl-9 col-md-8 col-sm-7">
                            <div className="row g-20">
                                <div className="col-sm-12">
                                    <label htmlFor="title" className="h5 mb-8 fw-semibold font-heading">Title</label>
                                    <h3>React JS</h3>
                                </div>

                                <div className="col-sm-12">
                                    <label htmlFor="file" className="h5 mb-8 fw-semibold font-heading">Upload Document</label>
                                   <p>PDF</p>
                                </div>

                                <div className="col-sm-12">
                                    <label htmlFor="file" className="h5 mb-8 fw-semibold font-heading">Upload Video</label>
                                   <p>Video</p>
                                </div>

                                <div className="col-sm-12">
                                    <label htmlFor="description" className="h5 mb-8 fw-semibold font-heading">Description</label>
                                  <p>Lorem ipsum dolor sit amet.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default StudentMaterialsPage;