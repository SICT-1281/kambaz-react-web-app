import AssignmentControls from "./AssignmentControls";
import ListGroup from 'react-bootstrap/ListGroup';
import { BsGripVertical } from 'react-icons/bs';
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { TbNotebook } from "react-icons/tb";
import "./assignmentstyle.css"
import { Form} from 'react-bootstrap'; 
import { useParams } from "react-router";
import * as db from "../../Database";
import { Link } from "react-router-dom";
export default function Assignments() 
{
  const { cid } = useParams();
  const assignments = db.assignments;
    return (
      <div>
  <AssignmentControls /><br /><br /><br /><br />


  <ListGroup className="rounded-0" id="wd-modules">
    <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray bg-secondary">
    <div className="wd-title p-3 ps-2 bg-secondary">
    <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS <ModuleControlButtons />
    </div>



      <ListGroup className="wd-lessons rounded-0">

      {assignments
          .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (

            
      <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center">
      <BsGripVertical className="fs-3" /> 
      <TbNotebook className="me-2 fs-3 text-success" />

      <Form.Group controlId={`assignment-${assignment._id}`} className="mb-3">
          <Form.Label> <Link
                      to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                      className="wd-assignment-link text-decoration-none"
                    >
{assignment.title}
</Link>
      

</Form.Label>
          <br></br>
          <Form.Label>
          <p id={`wd-${assignment._id}`}>
  <span className="text-danger">{assignment.modules}</span> | <strong>Not available until</strong> {assignment.startdate} | &nbsp;
  <strong>Due</strong> {assignment.duedate} | {assignment.points}
</p>
            

          </Form.Label>
        </Form.Group>
        <div className="float-end ms-auto">
      <LessonControlButtons/>
      </div>
      
      </ListGroup.Item>
            ))}
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
  {/* <ListGroup className="rounded-0" id="wd-modules">
    <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray bg-secondary">
    <div className="wd-title p-3 ps-2 bg-secondary">
    <BsGripVertical className="me-2 fs-3" /> ASSIGNMENTS <ModuleControlButtons />
    </div>
      <ListGroup className="wd-lessons rounded-0">
      <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center">
      <BsGripVertical className="fs-3" /> 
      <TbNotebook className="me-2 fs-3 text-success" />
      


      <Form.Group controlId="assignmentName" className="mb-3">
          <Form.Label> <a 
  href="#/Kambaz/Courses/1234/Assignments/1"
  className="wd-assignment-link"
>
A1
</a></Form.Label>
          <br></br>
          <Form.Label>
          <p id="wd-A-1">
  <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00am | &nbsp;
  <strong>Due</strong> May 13 at 11:59pm | 100 pts
</p>
            

          </Form.Label>
        </Form.Group>
        <div className="float-end ms-auto">
      <LessonControlButtons/>
      </div>
      
    </ListGroup.Item>



    </ListGroup>



    <ListGroup className="wd-lessons rounded-0">
    <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center">
      <BsGripVertical className="fs-3" /> 
      <TbNotebook className="me-2 fs-3 text-success" />
      <Form.Group controlId="assignmentName" className="mb-3">
          <Form.Label> <a 
  href="#/Kambaz/Courses/1234/Assignments/2"
  className="wd-assignment-link"
>
  A2
</a></Form.Label>
          <br></br>
          <Form.Label><p id="wd-A-2">
  <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00am | &nbsp;
  <strong>Due</strong> May 13 at 11:59pm | 100 pts
</p></Form.Label>
        </Form.Group>
        <div className="float-end ms-auto">
      <LessonControlButtons/>
      </div>
      
    </ListGroup.Item>





    <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center">
      <BsGripVertical className="fs-3" /> 
      <TbNotebook className="me-2 fs-3 text-success" />
      <Form.Group controlId="assignmentName" className="mb-3">
          <Form.Label> <a 
  href="#/Kambaz/Courses/1234/Assignments/3"
  className="wd-assignment-link"
>
  A3
</a></Form.Label>
          <br></br>
          <Form.Label><p id="wd-A-3">
  <span className="text-danger">Multiple Modules</span> | <strong>Not available until</strong> May 6 at 12:00am | &nbsp;
  <strong>Due</strong> May 13 at 11:59pm | 100 pts
</p></Form.Label>
        </Form.Group>
        <div className="float-end ms-auto">
      <LessonControlButtons/>
      </div>
      
    </ListGroup.Item>
      </ListGroup>
    </ListGroup.Item>
  </ListGroup>  */}

  