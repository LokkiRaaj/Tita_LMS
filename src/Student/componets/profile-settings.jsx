import React from "react";
import StudentSidebar from "../common/student-sidebar";
import StudentHeader from "../common/student-header";
import StudentProfilesHeader from "../layout/profile settings/profile-head";
import StudentprofileHead from "../layout/profile settings/profilesettings-head";
import StudentmyDetails from "../layout/profile settings/my-details";
import StudentchangePassword from "../layout/profile settings/change-password";



function StudentprofileSettings() {
    return (
        <div>
            <div>
                <StudentSidebar />
                <div className="dashboard-main-wrapper">
                    <StudentHeader />
                    <div className="dashboard-body">
                        <StudentprofileHead />
                        <StudentProfilesHeader />
                        <div className="tab-content" id="pills-tabContent">
                            <StudentmyDetails />
                            <StudentchangePassword />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudentprofileSettings;