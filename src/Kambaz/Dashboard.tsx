import { Link } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FormControl } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { enrollInCourse, unenrollFromCourse } from "./Courses/reducer"
import { useState } from "react";
export default function Dashboard({
  addNewCourse,
  deleteCourse,
  updateCourse,
  setCourse,
}: {
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: (c: any) => void;
  setCourse: (c: any) => void;
}) {
  const { courses, currentCourse, enrollments} = useSelector(
    (state: any) => state.courseReducer
  );
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrolledCourses = courses.filter((course: { _id: string; }) =>
    enrollments.some(
      (enrollment: { user: any; course: string; }) =>
        enrollment.user === currentUser._id && enrollment.course === course._id
    )
  );
  const [showAll, setShowAll] = useState(false);
  const displayedallCourses = !showAll ? enrolledCourses : courses;
  const isFaculty = currentUser?.role === "FACULTY";
  

  const isEnrolled = (courseId: string) => {
    if (!currentUser) return false;
    return enrollments.some(
      (enrollment: { user: string; course: string }) =>
        enrollment.user === currentUser._id && enrollment.course === courseId
    );
  };

  const dispatch = useDispatch();
  console.log(displayedallCourses)


  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard
      <button
              className="btn btn-primary float-end"
              onClick={() =>setShowAll(!showAll)}
            >
              Enrollments
            </button></h1> 
            
            <hr />
      {isFaculty && (
      <>
      <h5>New Course
          <button className="btn btn-primary float-end"
                  id="wd-add-new-course-click"
                  onClick={addNewCourse} > Add </button>
          <button className="btn btn-warning float-end me-2"
                onClick={() => updateCourse(currentCourse)} 
                id="wd-update-course-click">
          Update
        </button>
      </h5>
      <br />
      <FormControl value={currentCourse.name} className="mb-2"
             onChange={(e) => setCourse({ ...currentCourse, name: e.target.value }) } />
      <FormControl as="textarea" value={currentCourse.description} rows={3}
             onChange={(e) => setCourse({ ...currentCourse, description: e.target.value }) } />
      <hr />
      </>
    )}


   <h2 id="wd-dashboard-published">
      Published Courses ({enrolledCourses.length}) (Total {courses.length})
    </h2> 
    <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
        {displayedallCourses.map((course: any) => (
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
               <Card>
                <Link to={`/Kambaz/Courses/${course._id}/Home`}
                className="wd-dashboard-course-link text-decoration-none text-dark" >
                <Card.Img src="/images/reactjs.jpg" variant="top" width="100%" height={160} />
                <Card.Body className="card-body">
                  <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                    {course.name} </Card.Title>
                  <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                    {course.description} </Card.Text>
                  <Button variant="primary"> Go </Button>
              {isFaculty && (
                  <>  
                  <button onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }} className="btn btn-danger float-end"
                    id="wd-delete-course-click">
                    Delete
                </button>

                <button id="wd-edit-course-click"
                    onClick={(event) => {
                    event.preventDefault();
                    setCourse(course);
                  }}
                  className="btn btn-warning me-2 float-end" >
                  Edit
                </button>
                </>
              )}
                <hr />
                <Link to={`/Kambaz/Dashboard`}>
                      <Button
                        variant={isEnrolled(course._id) ? "danger" : "success"}
                        onClick={() => {
                          if (isEnrolled(course._id)) {
                            dispatch(unenrollFromCourse({ 
                              user: currentUser._id, 
                              course: course._id 
                            }));
                          } else {
                            dispatch(enrollInCourse({ 
                              user: currentUser._id, 
                              course: course._id 
                            }));
                          }
                        }}
                      >
                        {isEnrolled(course._id) ? "Unenroll" : "Enroll"}
                      </Button>
                      </Link>
                
                </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  </div>
  );}