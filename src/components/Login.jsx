import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card as BootstrapCard } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../images/loginimg.jpg';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    const [selectedUser, setSelectedUser] = useState('customer');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');

    const handleLogin = () => {
        // Email validation
        if (!email.includes('@')) {
            setEmailError('Invalid email format');
            return;
        }

        // Your login logic goes here based on selectedUser, email, and password
        console.log(`Logging in as ${selectedUser} with Email: ${email} and Password: ${password}`);
    };

    const handleRegisterCustomer = () => {
        console.log('Register as a Customer');
        // Add logic for customer registration
    };

    const handleRegisterRestaurant = () => {
        console.log('Register as a Restaurant');
        // Add logic for restaurant registration
    };

    return (
        <Container fluid className="login-container" style={{ backgroundColor: 'beige' }}>
            <Row className="align-items-center" style={{ height: '80vh' }}>
                <Col md={6} className="mx-auto position-relative">
                    <BootstrapCard className="login-card" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', height: '70%', width: '70%' }}>
                        <BootstrapCard.Body className="p-4 login-card-body">
                            <Form>
                                <div className="login-heading text-uppercase text-center">
                                    <h2 className="fw-bold">Login</h2>
                                </div>

                                <Form.Group controlId="formLoginAs">
                                    <Form.Label className="fw-bold">Login as</Form.Label>
                                    <Form.Control
                                        as="select"
                                        value={selectedUser}
                                        onChange={(e) => setSelectedUser(e.target.value)}
                                    >
                                        <option value="customer">Customer</option>
                                        <option value="restaurant">Restaurant</option>
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label className="fw-bold">Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            setEmailError(''); // Clear email error when the user types
                                        }}
                                    />
                                    {emailError && <div className="text-danger">{emailError}</div>}
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label className="fw-bold">Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Form.Group>

                                <div className="mb-3"></div>

                                <Button variant="primary" type="button" onClick={handleLogin} className="d-block mx-auto">
                                    Login
                                </Button>

                                <div className="mt-3 text-center">
                                    <div>
                                        <LinkContainer to={'/customer-registration'}>
                                            <Button variant="success" type="button" onClick={handleRegisterCustomer}>
                                                Register as Customer
                                            </Button>
                                        </LinkContainer>
                                    </div>
                                    <div>
                                        <LinkContainer to={'/restaurant-registration'}>
                                            <Button variant="info" type="button" onClick={handleRegisterRestaurant}>
                                                Register as Restaurant
                                            </Button>
                                        </LinkContainer>
                                    </div>
                                </div>
                            </Form>
                        </BootstrapCard.Body>
                    </BootstrapCard>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
