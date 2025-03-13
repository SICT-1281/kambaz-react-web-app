import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import { v4 as uuidv4 } from "uuid";
import ProtectedRoute from "./Account/ProtectedRoute";
import EnrollProtectRoute from "./Courses/EnrollProtectRoute";
import { addCourse, deleteCourse, updateCourse, setCurrentCourse } from "./Courses/reducer";
import { useDispatch, useSelector } from "react-redux";
export default function Kambaz() {
  const { courses, currentCourse } = useSelector((state: any) => state.courseReducer);
  const dispatch = useDispatch();
  const AddCourse = () => {
    dispatch(addCourse({ ...currentCourse, _id: uuidv4() }));
  };
  const DeleteCourse = (courseId: string) => {
    dispatch(deleteCourse(courseId));
  };
  const UpdateCourse = (courseObj: any) => {
    dispatch(updateCourse(courseObj));
  };
  const handleSetCourse = (c: any) => {
    dispatch(setCurrentCourse(c));
  };
  return (
    <div id="wd-kambaz">
            <KambazNavigation />
            <div className="wd-main-content-offset p-3">
            <Routes>
                <Route path="/" element={<Navigate to="Account" />} />
                <Route path="/Account/*" element={<Account />} />
                <Route path="Dashboard" element={
            <ProtectedRoute><Dashboard
            addNewCourse={AddCourse}
            deleteCourse={DeleteCourse}
            updateCourse={UpdateCourse}
            setCourse={handleSetCourse}
          /></ProtectedRoute>
            } />
                <Route path="Courses/:cid/*" element={
                  <ProtectedRoute>
                    <EnrollProtectRoute>
                      <Courses courses={courses} />
                    </EnrollProtectRoute>
                    </ProtectedRoute>} />
                <Route path="/Calendar" element={<h1>Calendar</h1>} />
                <Route path="/Inbox" element={<h1>Inbox</h1>} />
            </Routes>
            </div>
    </div>
);}
