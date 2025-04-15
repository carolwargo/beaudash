import React from 'react';
import { Form } from 'react-bootstrap';
import './Test.css';

export default function TestInput() {
  return (
    <Form.Control type="text" className="custom-input" placeholder="Test" />
  );
}