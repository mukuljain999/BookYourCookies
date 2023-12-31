import mukul from "../images/mukul.jpg"
import aniruddh from "../images/aniruddh.jpg"

import kaveri from "../images/kaveri.jpg"
import farhaz from "../images/farhaz.jpg"
import monika from "../images/monika.png"



import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../css/Aboutus.css'
import aboutusgif from "../images/aboutus.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';



export const AboutUs = () => {
    return (
        <Container className='body'>


            <Row>
                <Col lg={12}>
                    <div class="gif-container">
                        <img src={aboutusgif} alt="Your GIF" class="fullscreen-gif" />
                        <h1 class="heading-over-gif">About us </h1>
                    </div>
                </Col>

            </Row>



            <Row className='mt-5'>
                <Col lg={12}>
                    <Card>
                        <Card.Header><b>Our Vision</b></Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    "<strong> BookYourCookies</strong> envisions transforming the dining landscape by offering a seamless and personalized table
                                    reservation system. The aim is to empower patrons, providing them with a hassle-free and delightful dining
                                    experience. This vision is rooted in the belief that dining out should be effortless, enjoyable,
                                    and catered to individual preferences..
                                </p>
                                <p>
                                    The vision revolves around the concept of empowerment—empowering diners to effortlessly discover, reserve, and relish exceptional culinary experiences at their preferred restaurants. BookYourCookies aims to remove the complexities associated with booking tables, making it a convenient and accessible process for everyone.
                                </p>

                                <p>
                                    Ultimately, <strong> BookYourCookies</strong> aims to bridge the gap between patrons and their desired dining destinations, redefining the standard of dining excellence. It visualizes a future where booking a table becomes synonymous with convenience, personalization, and delight, setting a new industry standard for seamless dining experiences."
                                </p>
                                <footer className="blockquote-footer">
                                    Someone famous in <cite title="Source Title">Book Your Cookiez</cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>


            <Row className='mt-5' >
                <Col lg={12}>
                    <Card>
                        <Card.Header> <b>Our Mission</b></Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    "At <strong> BookYourCookies</strong> our mission is to simplify and enrich the dining journey by providing an intuitive, user-friendly platform. We enable diners to explore diverse dining options, secure preferred tables conveniently, and relish memorable dining experiences. Simultaneously, we assist restaurants in optimizing seating arrangements for efficiency and customer satisfaction. We are committed to:
                                </p>
                                <p>
                                    Facilitating seamless reservations through a user-centric interface.
                                    Empowering diners with choices and customization for their dining preferences.
                                    Supporting restaurants in maximizing their seating capacity and enhancing guest satisfaction.
                                    Continuously innovating to adapt to evolving consumer needs and technological advancements.
                                    Fostering a vibrant dining community that celebrates culinary experiences.
                                </p>
                                <p>
                                    Through BookYourCookies, we aim to create an inclusive and efficient ecosystem that benefits both diners and restaurants, fostering mutually rewarding dining experiences for all stakeholders."
                                </p>
                                <footer className="blockquote-footer">
                                    Someone famous in <cite title="Source Title">Book Your Cookiez</cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

            <Row className="mt-5">
                <Col lg={12}>
                    <h1>Our Leaders</h1>
                </Col>
            </Row>
            <Row className="mb-5">
                <Col lg={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={kaveri} className="photo" />
                        <Card.Body>
                            <Card.Title>Kaveri Dhore</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.

                            </Card.Text>
                        </Card.Body>

                        <Card.Body>
                            <Card.Link href="https://www.linkedin.com/in/kaveridhore29/"><FontAwesomeIcon icon={faLinkedin} className="iconstyle" /></Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={mukul} className="photo" />
                        <Card.Body>
                            <Card.Title>Mukul Jain</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>

                        <Card.Body>
                            <Card.Link href="https://www.linkedin.com/in/mukul-jain-75538b20b/"><FontAwesomeIcon icon={faLinkedin} className="iconstyle" /></Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={aniruddh} className="photo" />
                        <Card.Body>
                            <Card.Title>Aniruddha Bansod</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>

                        <Card.Body>
                            <Card.Link href="https://www.linkedin.com/in/aniruddha-bansod-0762148a"><FontAwesomeIcon icon={faLinkedin} className="iconstyle" /></Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="justify-content-center offset-md-1">
                <Col xs={12} md={4} className="mb-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={monika} className="photo" />
                        <Card.Body>
                            <Card.Title style={{ textAlign: 'center' }}>Monika Rakate</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="https://www.linkedin.com/in/monika-rakate-715422244"><FontAwesomeIcon icon={faLinkedin} className="iconstyle" /></Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={4} className="mb-4">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={farhaz} className="photo" />
                        <Card.Body>
                            <Card.Title style={{ textAlign: 'center' }}>Faraz Ahmed Khan</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        <Card.Body>
                            <Card.Link href="https://www.linkedin.com/in/farazahmedkhan38/"><FontAwesomeIcon icon={faLinkedin} className="iconstyle" /></Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    );
};

export default AboutUs;

