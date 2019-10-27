import React from 'react';
import {
    Form, Button,
  } from 'react-bootstrap';
  import './register.css'

const Register = () => {
    return (
        <section className="register-page">
            <Form>
            <h2>Register</h2>
                    <Form.Group >
                        <Form.Control type="text" placeholder="Enter first name" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Control type="text" placeholder="Enter last name" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Control type="text" placeholder="Enter Phone Number" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Control type="password" placeholder="Enter Password" />
                    </Form.Group>
                    <Form.Group>
                        <Form.Control type="password" placeholder="Confirm Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
            </Form>
        </section>
    )
}

export default Register;