import React from 'react';
import "./Register.css";
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import useAuth from '../../hooks/useAuth';

const Register = () => {
    const { GoogleSignIn } = useAuth();
    return (
        <div className='register-form'>

            <div>
                <Form>
                    <h2>Create an account</h2>
                    <Form.Group className="mb-3" >
                        <Form.Label>Name</Form.Label> <br />
                        <input type="name" placeholder="Enter name" />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label> <br />
                        <input type="email" placeholder="Enter email" />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label> <br />
                        <input type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Link to='/login'>Already have an account?</Link>
                <br /> <br />
                <Button variant="primary" onClick={GoogleSignIn} >Google SignIn</Button>

            </div>


        </div>
    );
};

export default Register;