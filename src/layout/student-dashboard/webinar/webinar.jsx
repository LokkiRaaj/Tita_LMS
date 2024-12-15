import React from "react";
import StudentDashboardSidebar from "../student-sidebar";
import Header from "../../../common/header";
import WebinarHead from "./webinar-head";
import WebinarPage from "./webinar-page";

function Webinar() {
  return (
    <div>
      <StudentDashboardSidebar />
      <div className="dashboard-main-wrapper">
        <Header />
        <div className="dashboard-body">
          <WebinarHead />
          <div className="row gy-4">
            <WebinarPage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Webinar;