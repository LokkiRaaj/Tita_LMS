import React from "react";
import StudentDashboardSidebar from "../student-sidebar";
import Header from "../../../common/header";
import DoubtSessionHead from "./doubt-head";
import DoubtSessionPage from "./doubt-page";


function DoubtSession() {
  return (
    <div>
      <StudentDashboardSidebar />
      <div className="dashboard-main-wrapper">
        <Header />
        <div className="dashboard-body">
          <DoubtSessionHead />
          <div className="row gy-4">
            <DoubtSessionPage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoubtSession;