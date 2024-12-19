import AdminSidebar from "../common/sidebar";
import AdminHeader from "../common/header";
import AdminviewCoursesPage from "../layout/View Course/viewcourses-page";

function AdminviewCourses() {

    return (
        <>
            <div className="meeting-container">
                <AdminSidebar />
                <div className="dashboard-main-wrapper">
                    <AdminHeader />
                    <AdminviewCoursesPage />
                </div>
            </div>
        </>
    );
}

export default AdminviewCourses;