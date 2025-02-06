import AssignmentControls from "./AssignmentControls";
import ListGroup from 'react-bootstrap/ListGroup';
import { BsGripVertical } from 'react-icons/bs';
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { TbNotebook } from "react-icons/tb";
import "./assignmentstyle.css"
import { Form} from 'react-bootstrap'; 
export default function Assignments() {
    return (
      <div>
  <AssignmentControls /><br /><br /><br /><br />
  <ListGroup className="rounded-0" id="wd-modules">
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
      <LessonControlButtons />
      
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
      <LessonControlButtons />
      
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
      <LessonControlButtons />
      
    </ListGroup.Item>
      </ListGroup>
    </ListGroup.Item>
  </ListGroup>
</div>
);}




// export default function Assignments() {
//     return (
//       <div id="wd-assignments">
//         <input placeholder="Search for Assignments"
//                id="wd-search-assignment" />
//         &nbsp;<button id="wd-add-assignment-group">+ Group</button>
//         &nbsp;<button id="wd-add-assignment">+ Assignment</button>
//         <h3 id="wd-assignments-title">
//           ASSIGNMENTS 40% of Total <button>+</button> </h3>
//         <ul id="wd-assignment-list">
//           <li className="wd-assignment-list-item">
//             <a href="#/Kambaz/Courses/1234/Assignments/1"
//                className="wd-assignment-link" >
//               A1 - ENV + HTML
//             </a> 
//             <p id="wd-A-1">
//             Multiple Modules | <strong>Not available until</strong> May 6 at 12:00am |
//             <br />
//             <strong>Due</strong> May 13 at 11:59pm | 100 pts
//             </p>
//             </li>
            
//           <li className="wd-assignment-list-item">
//             <a href="#/Kambaz/Courses/1234/Assignments/2"
//                className="wd-assignment-link" >
//               A2 - CSS + BOOTSTRAP
//             </a>
//             <p id="wd-A-2">
//             Multiple Modules | <strong>Not available until</strong> May 13 at 12:00am |
//             <br />
//             <strong>Due</strong> May 20 at 11:59pm | 100 pts
//             </p>
//             </li>
        
//           <li className="wd-assignment-list-item">
//             <a href="#/Kambaz/Courses/1234/Assignments/3"
//                className="wd-assignment-link" >
//               A3 - JAVASCRIPT + REACT
//             </a>
//             <p id="wd-A-3">
//             Multiple Modules | <strong>Not available until</strong> May 20 at 12:00am |
//             <br />
//             <strong>Due</strong> May 27 at 11:59pm | 100 pts
//             </p>
//             </li>


//         </ul>
//       </div>
//   );}
  