import { Form, Row, Col, Button, Card } from 'react-bootstrap'; 

export default function EditAssignment() {
  return (
    <div className="p-4">
      
      {/* Assignment Form */}
      <Form>
        {/* Assignment Name */}
        <Form.Group controlId="assignmentName" className="mb-3">
          <Form.Label>Assignment Name</Form.Label>
          <br></br>
          <Form.Control type="text" defaultValue="A1" />
        </Form.Group>

        {/* Description */}
        <Form.Group controlId="assignmentDescription" className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control 
            as="textarea" 
            rows={4} 
            defaultValue="The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section. Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories. The Kanbas application should include a link to navigate back to the landing page.
"
          />
        </Form.Group>

        <Form.Group controlId="points" className="mb-3">
        <Row>
          <Col sm={3}>
          <Form.Label className="d-flex justify-content-end">Points</Form.Label>

          </Col>
          <Col sm={9}>
            <Form.Control type="number" defaultValue={100} />
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
            </Form.Control>
      </Form.Group>

      {/* Due, Available from, Until Section */}
      <Row className="mb-3">
          {/* Due Date */}
          <Col>
            <Form.Group controlId="dueDate">
              <Form.Label>Due</Form.Label>
              <Form.Control type="datetime-local" />
            </Form.Group>
          </Col>
          </Row>
          <Row className="mb-3">

          {/* Available from Date */}
          <Col sm={6}>
            <Form.Group controlId="availableFrom">
              <Form.Label>Available from</Form.Label>
              <Form.Control type="datetime-local" />
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
          <Button variant="secondary" className="me-2">Cancel</Button>
          <Button variant="danger">Save</Button>
        </div>
      </Form>
    </div>
  );
}
