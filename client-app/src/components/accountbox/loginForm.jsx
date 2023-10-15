import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../../context/AuthContext';
function LoginForm() {
  const [UserEmail, setEmail] = useState('');
  const [UserPassword, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/users/login', { UserEmail, UserPassword })
      .then(() => {
        login();
        navigate('/home')
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="text-center">
      <Card>
        <Card.Body>
          <Card.Title>Login to continue</Card.Title>
          <Form onSubmit={onSubmit}>
            <Form.Group controlId="Email">
              <Form.Control
                type="text"
                name="Email"
                value={UserEmail}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="Password">
              <Form.Control
                type="password"
                name="Password"
                value={UserPassword}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
            <Button variant="secondary m-2" onClick={() => navigate('/sign-up')}>
              Create User
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default LoginForm;
 