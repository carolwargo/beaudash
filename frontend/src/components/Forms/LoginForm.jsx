import * as React from 'react';
import { Button, Form, Row, Col } from 'react-bootstrap';
import styles from './Forms.module.css'; // Import custom CSS module
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export default function LoginForm() {
  return (
    <div className="container mt-5">
      <Form>
        {/* Email input */}
        <Form.Group 
        className="mb-4" 
        controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
          type="email" 
          placeholder="Enter your email" 
          className={`${styles.customInput}`}
          />
        </Form.Group>

        {/* Password input */}
        <Form.Group className="mb-4" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
          type="password" 
          placeholder="Enter your password" 
          className={`${styles.customInput}`}
          />
        </Form.Group>

        {/* 2 column grid layout for inline styling */}
        <Row className="mb-4">
          <Col className="d-flex justify-content-center">
            {/* Remember me checkbox */}
            <Form.Check
              type="checkbox"
              label="Remember me"
              id="formRememberMe"
              defaultChecked
            />
          </Col>

          <Col className="text-end">
            {/* Forgot password link */}
            <a href="#!" className="text-decoration-none">Forgot password?</a>
          </Col>
        </Row>

        {/* Submit button */}
        <Button variant="primary" type="submit" className="btn-block mb-4">
          Sign in
        </Button>

        {/* Register and social buttons */}
        <div className="text-center">
          <p>Not a member? <a href="#!" className="text-decoration-none">Register</a></p>
          <p>or sign up with:</p>

          {/* Social media login buttons */}
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
