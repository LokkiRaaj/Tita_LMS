import React from "react";
import StudentSidebar from "../common/student-sidebar";
import StudentHeader from "../common/student-header";
import StudentdoubtsessionHead from "../layout/Doubt Session/doubt-head";
import StudentdoubtsessionPage from "../layout/Doubt Session/doubt-page";


function StudentDoubtSession() {
  return (
    <div>
      <StudentSidebar />
      <div className="dashboard-main-wrapper">
        <StudentHeader />
        <div className="dashboard-body">
          <StudentdoubtsessionHead />
          <div className="row gy-4">
            <StudentdoubtsessionPage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentDoubtSession;