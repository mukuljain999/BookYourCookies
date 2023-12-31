import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Accordion, Button, Form, Row, Col } from 'react-bootstrap';
import '../css/ContactUs.css';


const ContactUs = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [question, setQuestion] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validate name and email
        const isNameValid = /^[a-zA-Z\s]*$/.test(name);
        const isEmailValid = email.includes("@") && email.split("@")[1].includes(".");

        if (!isNameValid || !isEmailValid) {
            // Handle validation error, e.g., display an error message or prevent form submission
            alert("Please enter a valid name and email.");
            return;
        }

        // Your logic to handle form submission when validation passes
        alert("Form submitted successfully!");
    };
    return (
        <Container className="Container">
            {/* Contact Us Card */}
            <Card className="Card">
                <Card.Header>Contact Us</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <strong>Email:</strong> contact@bookyourcookies.com <br />
                        <strong>Phone:</strong> +1234567890 <br />
                        <strong>Address:</strong> 123 Street, Mumbai, India
                    </Card.Text>
                </Card.Body>
            </Card>

            {/* Ask a Question Section */}
            <div className="AskQuestion">
                <h3>Ask a Question</h3>
                <div className="FormSection">
                
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="formName" className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter your name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group controlId="formEmail" className="mb-3">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter your email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Form.Group controlId="formQuestion" className="mb-3">
                            <Form.Label>Your Question</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter your question"
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Send
                        </Button>
                    </Form>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="FAQ">
                <h3>Frequently Asked Questions (FAQ)</h3>
                <Accordion>
                    <Accordion.Item eventKey="0" className='accordionItem'>
                        <Accordion.Header>How does the table reservation system work?</Accordion.Header>
                        <Accordion.Body>
                            BookYourCookies simplifies the process by allowing users to browse restaurants, select preferred dining times, and reserve tables in real-time. Users can explore available seating options, choose their desired table, and receive instant confirmation of their reservation.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className='accordionItem'>
                        <Accordion.Header>Can I modify or cancel my reservation?</Accordion.Header>
                        <Accordion.Body>
                            Yes, users can easily modify or cancel their reservations through the app. Simply access your booking details, select the option to modify, and adjust the date, time, or number of guests. Similarly, cancellations can be made effortlessly with just a few clicks.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className='accordionItem'>
                        <Accordion.Header>Are there any fees or charges for using the reservation system?</Accordion.Header>
                        <Accordion.Body>
                            BookYourCookies is free to use for diners. There are no additional charges or fees associated with making reservations through the platform. The service is designed to provide a seamless and convenient experience for users without any extra costs.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className='accordionItem'>
                        <Accordion.Header>How far in advance can I make a reservation?</Accordion.Header>
                        <Accordion.Body>
                            Users can make reservations based on the restaurant's availability. Typically, reservations can be made weeks or even months in advance, depending on the restaurant's policy and booking window.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" className='accordionItem'>
                        <Accordion.Header>Is my personal information secure when using the reservation system?</Accordion.Header>
                        <Accordion.Body>
                            Absolutely! We prioritize the security and confidentiality of users' data. BookYourCookies employs robust security measures to protect personal information, ensuring it remains safe and encrypted throughout the reservation process.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <div className='Testimonials'>
                <h3 className='my-4'>Testimonials</h3>
                <Row className='TestimonialContainer mb-5'>
                    {/* Testimonial 1 */}
                    <Col md={4}>
                        <Card className='TestimonialCard'>
                            <Card.Body>
                                <Card.Title>"Effortless Dining Planning!"</Card.Title>
                                <Card.Text>
                                    “BookYourCookies transformed how I approach dining out! It's incredibly easy to use and has given me access to a variety of restaurants. The ability to reserve tables seamlessly has made planning dinners with friends hassle-free. Highly recommended!”
                                </Card.Text>
                                <p>- Mohit Jain</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Testimonial 2 */}
                    <Col md={4}>
                        <Card className='TestimonialCard'>
                            <Card.Body>
                                <Card.Title>"Optimizing Restaurant Operations!"</Card.Title>
                                <Card.Text>
                                    “As a restaurant manager, integrating BookYourCookies has been a game-changer! The system's intuitive interface helps optimize our seating arrangements, ensuring better guest flow and satisfaction. It's a must-have for any restaurant aiming for efficiency and customer service.”
                                </Card.Text>
                                <p>- Nitish Patil</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className='TestimonialCard'>
                            <Card.Body>
                                <Card.Title>"Personalized Dining Experiences!"</Card.Title>
                                <Card.Text>
                                    I love how BookYourCookies offers personalized dining experiences! From exploring different cuisines to reserving the perfect table for date nights, this platform has never disappointed. It's my go-to for stress-free dining plans!”
                                </Card.Text>
                                <p>- Neeraj Kumar</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};




export default ContactUs;