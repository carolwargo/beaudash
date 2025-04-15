import * as React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS  
import LoginForm from "../../components/Forms/LoginForm"; // Import LoginForm component 
import '../../App.css'; // Import global CSS

export default function HomePage() {
  return (
    <div className="container mt-5">
  <div className="row">
    <div className="col"></div>
    <div className="col">
      <LoginForm  />
    </div>
  </div>
    </div>
  );
}
