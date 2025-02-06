import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
export default function Profile() {
  return (
    <div id="wd-signin-screen">
      <h1>Profile</h1>
      <Form.Control 
            defaultValue="alice" 
            placeholder="Username" 
            className="mb-2" 
          />
      <Form.Control 
            defaultValue="123" 
            placeholder="Password" 
            className="mb-2" 
          />
      <Form.Control 
            defaultValue="Alice" 
            placeholder="First Name" 
            className="mb-2" 
          />
      <Form.Control 
            defaultValue="Wonderland" 
            placeholder="Last Name" 
            className="mb-2" 
          />
      <Form.Control id="wd-dob"
             placeholder="mm/dd/yyyy" type="date"
             className="mb-2"/>
      <Form.Control  id="wd-email"
            defaultValue="alice@wonderland.com" 
            type="email" 
            placeholder="Email" 
            className="mb-2" 
          />
      <Form.Control as="select" id="wd-role" defaultValue="USER" className="mb-2">
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </Form.Control>
      <Link id="wd-signout-btn"
            to="/Kambaz/Account/Signin"
            className="btn btn-danger w-100 mb-2">
            Sign out</Link>
    </div> );}