// LoginForm.jsx
import * as React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import './LoginForm.css'; // Import CSS specific to this component

export default function LoginForm() {
  return (
    <div className="container mt-5">
      <Form>
        <Form.Group className="mb-4" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            className="custom-input"
          />
        </Form.Group>
        <Form.Group className="mb-4" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            className="custom-input"
          />
        </Form.Group>
        <Row className="mb-4">
          <Col className="d-flex justify-content-center">
            <Form.Check
              type="checkbox"
              label="Remember me"
              id="formRememberMe"
              defaultChecked
            />
          </Col>
          <Col className="text-end">
            <a href="#!" className="text-decoration-none">Forgot password?</a>
          </Col>
        </Row>
        <Button variant="primary" type="submit" className="btn-block mb-4">
          Sign in
        </Button>
        <div className="text-center">
          <p>Not a member? <a href="#!" className="text-decoration-none">Register</a></p>
          <p>or sign up with:</p>
          <Button variant="link" className="btn-floating mx-1">
            <i className="fab fa-facebook-f"></i>
          </Button>
          <Button variant="link" className="btn-floating mx-1">
            <i className="fab fa-google"></i>
          </Button>
          <Button variant="link" className="btn-floating mx-1">
            <i className="fab fa-twitter"></i>
          </Button>
          <Button variant="link" className="btn-floating mx-1">
            <i className="fab fa-github"></i>
          </Button>
        </div>
      </Form>
    </div>
  );
}