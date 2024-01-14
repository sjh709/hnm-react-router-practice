import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const Login = () => {
  return (
    <Container className='login-area'>
      <Form className='login-form'>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control type='email' placeholder='Enter email' />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formBasicPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Password' />
        </Form.Group>
        <Button variant='danger' type='submit'>
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
