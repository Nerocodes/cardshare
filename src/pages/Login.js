import React from 'react';
import {
  Form, Button,
} from 'react-bootstrap';
import './login.css'
const Login = () => {
    return (
        <section className="login-page">
            <Form>
            <h2>Sign In</h2>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
            </Form>
        </section>
    )
}

export default Login;