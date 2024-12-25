import React from "react";
import AdminSidebar from "../common/sidebar";
import AdminHeader from "../common/header";
import ProfilesettingsHead from "../layout/Profile Settings/profilesettings-head";
import ProfileHeader from "../layout/Profile Settings/profile-header";
import AdmindmyDetails from "../layout/Profile Settings/my-details";
import AdminchangePassword from "../layout/Profile Settings/change-password";


function ProfileSettings() {
    return (
        <div>
            <div>
                <AdminSidebar />
                <div className="dashboard-main-wrapper">
                    <AdminHeader />
                    <div className="dashboard-body">
                        <ProfilesettingsHead />
                        <ProfileHeader />
                        <div className="tab-content" id="pills-tabContent">
                            <AdmindmyDetails />
                            <AdminchangePassword />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileSettings;