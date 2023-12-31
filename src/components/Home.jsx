//import CardSection from "./home_components/CardSection";
//import Carousels from "./home_components/Carousels";
//import { Counters } from "./home_components/Counters";
//import { TypeOfDonation } from "./home_components/TypeOfDonation";
//import '../css/baground.css'
//import searchbg from '../images/searchbg.jpeg';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Navbar, Form, FormControl, Button, InputGroup, Card } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
//import carousel1 from '../images/carousel1.jpeg';
import carousel2 from '../images/carousel2.jpeg';
//import carousel3 from '../images/carousel3.jpeg';
import carousel4 from '../images/carousel4.jpeg';
import carousel5 from '../images/carousel5.avif';
import carousel6 from '../images/carousel6.jpg';
//import '../css/Home.css'
import { LinkContainer } from 'react-router-bootstrap';
import { BsSearch } from 'react-icons/bs'; // Import the search icon from react-icons

export function Home() {
    /**************************************************************/
    const [donors, setDonors] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Increment the counter by 1 on each interval
            setDonors(prevCounter => prevCounter + 1);
        }, 1); // Adjust the interval duration as needed

        // Stop the interval when the counter reaches 1000
        if (donors >= 534) {
            clearInterval(interval);
        }

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, [donors]); // Empty dependency array ensures useEffect runs only once


    /****************************************************************/

    /***************************************************************/
    const [camp, setCamp] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            // Increment the counter by 1 on each interval
            setCamp(prevCounter => prevCounter + 1);
        }, 500); // Adjust the interval duration as needed

        // Stop the interval when the counter reaches 1000
        if (camp >= 204) {
            clearInterval(interval);
        }

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, [camp]); // Empty dependency array ensures useEffect runs only once

    /*********************************************************************/

    /**************************************************************/


    return (
        <>
            {/*Carousels */}
            <div style={home} >
                <Container style={{ width: '100%', overflow: 'hidden' }}>
                    <Row height={500}>
                        <Col lg={12}>
                            <Carousel style={{ height: '300px' }}>


                                <Carousel.Item>
                                    <img src={carousel4} className="d-block w-100"></img>
                                    <Carousel.Caption>

                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={carousel5} className="d-block w-100"></img>
                                    <Carousel.Caption>

                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={carousel6} className="d-block w-100"></img>
                                    <Carousel.Caption>

                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>




                {/*Search Option */}
                <div style={searchcss}>
                    <h1 style={h1Style}>Find your table for any occasion</h1>
                    <Navbar expand="lg" variant="dark">
                        <Container>
                            <Form className="d-flex flex-grow-1">
                                <InputGroup style={inputStyle}>
                                    <FormControl type="search" placeholder="Search" aria-label="Search" />
                                    <Button variant="danger">
                                        <BsSearch /> {/* Search icon */}
                                    </Button>
                                </InputGroup>
                            </Form>

                            <LinkContainer to="/restaurant-list">
                                <Button variant="light" className="ms-4" style={buttonStyle} variant="danger">let's Gooo</Button>
                            </LinkContainer>
                        </Container>
                    </Navbar>
                </div>




                {/*Counters*/}
                <Container className="p-2">
                    <Row className="mt-4 mb-2 justify-content-center">
                        <Col className=''> 
                            <Card border="success" bg="success" style={{ width: '18rem', margin: "10px auto", marginRight: "40px" }}>
                                <Card.Header><b>Our Restaurant Community</b></Card.Header>
                                <Card.Body>
                                    <Card.Title><h1>{donors}</h1></Card.Title>
                                    <Card.Text>
                                        Commitment to saving lives is truly appreciated
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>
                        <Col lg={6}>
                            <Card border="warning" bg="warning" style={{ width: '18rem', margin: "10px auto", marginLeft: "40px" }}>
                                <Card.Header><b>Customer Served</b></Card.Header>
                                <Card.Body>
                                    <Card.Title><h1>{camp}</h1></Card.Title>
                                    <Card.Text>
                                        Successful blood donation camps empower health
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                        </Col>
                    </Row>
                </Container>









                {/**CARD section */}

                <Row className="mb-5">
                    <Col lg={4}>
                        <Card style={{ width: '18rem' }}>
                            {/* <Card.Img variant="top" className="photo" /> */}
                            <Card.Body>
                                <Card.Title> Honey never spoils</Card.Title>
                                <Card.Text>
                                    Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible!
                                    Due to its low water content and acidic pH, honey creates an environment where bacteria and microorganisms cannot survive, contributing to its eternal shelf life
                                </Card.Text>
                            </Card.Body>

                            <Card.Body>
                                
                                <Card.Link href="#">Learn More</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={4}>
                        <Card style={{ width: '18rem' }}>
                            {/* <Card.Img variant="top"  className="photo" /> */}
                            <Card.Body>
                                <Card.Title>The world's largest pizza was over 122 feet long.</Card.Title>
                                <Card.Text>
                                    This massive pizza was created in Italy and measured 122 feet and 8 inches long, setting a world record for the longest pizza ever made.
                                    Crafted in Italy, this record-setting pizza measured an astounding 122 feet and 8 inches, requiring nearly 20,000 pounds of flour.
                                </Card.Text>
                            </Card.Body>

                            <Card.Body>
                                
                                <Card.Link href="#">Learn More</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg={4}>
                        <Card style={{ width: '18rem' , backgroundColor: 'AppWorkspace'}}>
                            <Card.Body>
                                <Card.Title>The most expensive coffee comes from the feces of a civet cat.
                                </Card.Title>
                                <Card.Text>
                                    Kopi Luwak is made from coffee beans that have been eaten and then excreted by civet cats. This unique process supposedly creates a smooth and less acidic coffee, making it one of the most expensive in the world
                                </Card.Text>
                            </Card.Body>

                            <Card.Body>
                                
                                <Card.Link href="#">Learn More</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </>
    );
};


const searchcss = {
    backgroundColor: '#f4f4f4', // Light background color
    padding: '20px',
    textAlign: 'center',
};

const h1Style = {
    fontFamily: 'Arial, sans-serif', // Change font family
    fontSize: '32px', // Change font size
    marginBottom: '20px', // Add space below the h1
};

const buttonStyle = {
    backgroundColor: 'orange', // Change button color
    borderColor: 'orange', // Change button border color
    color: 'white', // Change button text color
    marginLeft: '-5px', // Adjust the margin to remove the gap
};

const inputStyle = {
    width: 'calc(80% - 5px)', // Adjust search bar width and compensate for button margin
    marginRight: '-5px', // Adjust the margin to remove the gap
};


const home  = {
    backgroundColor:'#FFEBCD'
}
