import { Form, Row, Col, Button, Card } from 'react-bootstrap'; 
import { Link } from "react-router-dom";
import { useParams , useLocation } from "react-router";
import * as db from "../../Database";
export default function EditAssignment() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const pathSegments = pathname.split("/");
  const assignmentId = pathSegments[pathSegments.length - 1];
  const assignment = db.assignments.find((assignment) => assignment._id === assignmentId);


  function convertToDatetimeLocal(dateString: string): string {
    const [monthStr, day, , timeStr] = dateString.split(" "); 
    const months: { [key: string]: string } = {
      "January": "01", "February": "02", "March": "03", "April": "04",
      "May": "05", "June": "06", "July": "07", "August": "08",
      "September": "09", "October": "10", "November": "11", "December": "12"
    };
    const month = months[monthStr as keyof typeof months] || "01";
    let [hour, minute] = timeStr.match(/\d+/g) ?? ["00", "00"]; 
    const isPM = timeStr.includes("pm");
    if (isPM && hour !== "12") hour = String(Number(hour) + 12); 
    if (!isPM && hour === "12") hour = "00"; 
    const year = new Date().getFullYear();
    return `${year}-${month}-${day.padStart(2, "0")}T${hour.padStart(2, "0")}:${minute}`;
  }


  return (
    <div className="p-4">
      
      {/* Assignment Form */}
      <Form>
        {/* Assignment Name */}
        <Form.Group controlId="assignmentName" className="mb-3">
          <Form.Label>Assignment Name</Form.Label>
          <br></br>
          <Form.Control type="text" defaultValue={assignment ? assignment.title : ""} />
        </Form.Group>

        {/* Description */}
        <Form.Group controlId="assignmentDescription" className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={4} 
            defaultValue={assignment ? assignment.description : ""}
          />
        </Form.Group>

        <Form.Group controlId="points" className="mb-3">
        <Row>
          <Col sm={3}>
          <Form.Label className="d-flex justify-content-end">Points</Form.Label>

          </Col>
          <Col sm={9}>
            <Form.Control type="number" defaultValue={assignment ? parseInt(assignment.points) || 0 : 0} />
          </Col>
        </Row>
      </Form.Group>

        {/* Assignment Group */}
      <Form.Group controlId="assignmentGroup" className="mb-3">
        <Row>
          <Col sm={3}>
            <Form.Label className="d-flex justify-content-end">Assignment Group</Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Control as="select" defaultValue="ASSIGNMENTS">
              <option>QUIZZES</option>
              <option>ASSIGNMENTS</option>
              <option>EXAMS</option>
              <option>PROJECTS</option>
            </Form.Control>
          </Col>
        </Row>
      </Form.Group>

        <Form.Group controlId="displayGrade" className="mb-3">
        <Row>
          <Col sm={3}>
            <Form.Label className="d-flex justify-content-end">Display Grade as</Form.Label>
          </Col>
          <Col sm={9}>
            <Form.Control as="select" defaultValue="Percentage">
              <option>Percentage</option>
              <option>Points</option>
            </Form.Control>
          </Col>
        </Row>
      </Form.Group>


        <Row>
          <Col sm={3}>
            <Form.Label className="d-flex justify-content-end">Submission Type</Form.Label>
          </Col>
          <Col sm={9}>
        <Card className="mb-3">
      <Card.Body>
        <Form.Group controlId="submissionType" className="mb-3">
          <Form.Label >Submission Type</Form.Label>
          <Form.Control as="select">
            <option>Online</option>
            <option>In Person</option>
          </Form.Control>
        </Form.Group>

  
        <Form.Group controlId="onlineEntryOptions" className="mb-3">
          <Form.Label>Online Entry Options</Form.Label>
          <div>
            <Form.Check label="Text Entry" />
            <Form.Check label="Website URL" defaultChecked />
            <Form.Check label="Media Recordings" />
            <Form.Check label="Student Annotation" />
            <Form.Check label="File Uploads" />
          </div>
        </Form.Group>
      </Card.Body>
    </Card>
    </Col>
    </Row>


    <Row>
          <Col sm={3}>
            <Form.Label className="d-flex justify-content-end">Assign</Form.Label>
          </Col>
          <Col sm={9}>
          <Card className="mb-3">
          <Card.Body>
      <Form.Group controlId="assignTo" className="mb-3">
        <Form.Label>Assign to</Form.Label>
        <Form.Control as="select" defaultValue="Everyone">
              <option>Everyone</option>
              <option>Section 101</option>
              <option>Section 102</option>
              <option>Section 103</option>
            </Form.Control>
      </Form.Group>

      {/* Due, Available from, Until Section */}
      <Row className="mb-3">
          {/* Due Date */}
          <Col>
            <Form.Group controlId="dueDate">
              <Form.Label>Due</Form.Label>
              <Form.Control type="datetime-local" defaultValue={assignment ? convertToDatetimeLocal(assignment.duedate) : ""}/>
            </Form.Group>
          </Col>
          </Row>
          <Row className="mb-3">

          {/* Available from Date */}
          <Col sm={6}>
            <Form.Group controlId="availableFrom">
              <Form.Label>Available from</Form.Label>
              <Form.Control type="datetime-local" defaultValue={assignment ? convertToDatetimeLocal(assignment.startdate) : ""}/>
            </Form.Group>
          </Col>

          {/* Until Date */}
          <Col sm={6}>
            <Form.Group controlId="untilDate">
              <Form.Label>Until</Form.Label>
              <Form.Control type="datetime-local" />
            </Form.Group>
          </Col>
        </Row>
      </Card.Body>
      </Card>
    </Col>
    </Row>

        <hr />
        <div style={{ textAlign: 'right' }} className="justify-content-between">
        <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
        <Button variant="secondary" className="me-2">Cancel</Button>
          </Link>
          <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
          <Button variant="danger">Save</Button>
          </Link>
          
        </div>
      </Form>
    </div>
  );
}
