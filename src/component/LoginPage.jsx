import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function LoginPage() {
  
  const handleLogin = (e) => {
    e.preventDefault();
    // Logica di autenticazione qui...
  };

  return (
    <Container className="login-container mt-5">
      <h1 className="login-title">Login</h1>
      <Form className="login-form" onSubmit={handleLogin}>
        <Form.Group controlId="formEmail">
          <Form.Label className="login-label">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            className="login-input"
          />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label className="login-label">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            className="login-input"
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="login-button">
          Login
        </Button>
      </Form>
    </Container>
  );
}

export default LoginPage;
