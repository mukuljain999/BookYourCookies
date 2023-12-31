import bookyourtablecarousel from "../images/bookyourtablecarousel.png";
import {
  Container,
  Navbar,
  Nav,
  Row,
  Col,
  Carousel,
  Card,
  Button,
  Accordion,
  Form,
} from "react-bootstrap";
import DatePicker from "react-datepicker";
import TimePicker from "react-bootstrap-time-picker";
import "react-datepicker/dist/react-datepicker.css";

import { useState, useEffect } from "react";

export function BookYourTable() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('10:00');
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    updateAvailableTimes();
  }, [selectedDate]);

  const updateAvailableTimes = () => {
    const currentDate = new Date();
    const isSameDay = selectedDate.getDate() === currentDate.getDate() &&
      selectedDate.getMonth() === currentDate.getMonth() &&
      selectedDate.getFullYear() === currentDate.getFullYear();

    let times = [];
    if (isSameDay) {
      let currentHour = currentDate.getHours();
      let currentMinute = currentDate.getMinutes();

      for (let i = currentHour; i <= 22; i++) {
        for (let j = (i === currentHour ? currentMinute : 0); j < 60; j += 15) {
          times.push(`${i.toString().padStart(2, '0')}:${j.toString().padStart(2, '0')}`);
        }
      }
    } else {

      for (let i = 0; i <= 22; i++) {
        for (let j = 0; j < 60; j += 15) {
          times.push(`${i.toString().padStart(2, '0')}:${j.toString().padStart(2, '0')}`);
        }
      }
    }
    setAvailableTimes(times);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime('00:00'); // Reset the time whenever the date changes.
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation details:', selectedDate, selectedTime);
  };

  return (
    <>
      {/* Navigation Bar starts */}
      {/* <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
      {/*Navigation Bar starts */}
      {/*Carousel starts */}
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={bookyourtablecarousel} alt="First slide" />

          <Carousel.Caption>
            <h3>BOOK YOUR COOKIES!</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      {/*Carousel ends */}

      {/* CARDS -1 restaurant booking */}
      <Container>
        <Row className="mt-5 ">
          <Col lg={7}>
            <Card border="danger" style={{ width: "36rem" }}>
              <Card.Header style={{ fontWeight: "BOLDER", color: "#ffffff", backgroundColor: "#DC143C" }} className="d-flex justify-content-around">SHAHI DARBAR</Card.Header>
              <Card.Body>
                <Card.Text style={{ fontSize: "13px" }}>Shahi Darbar isn't just a restaurant, it's a royal culinary experience. Step into a regal ambiance with intricate decor and warm lighting. The menu boasts flavors inspired by royal kitchens, each dish a masterpiece.</Card.Text>
                <Card.Text style={{ fontSize: "15px" }}>
                  <b>Address:</b> 123 Main Street, Ghansoli, Maharashtra,400701 <br />
                  <b>Contact Information:</b> <br />
                  Phone Number: (222) 123-4567 <br />
                  Email: info@shahidarbar.com<br />
                  <b>Operating Hours:</b><br />
                  Monday to Sunday<br />
                  Lunch: 12:00 PM - 3:00 PM
                  Dinner: 6:00 PM - 10:00 PM<br />
                  <b>Cuisine Type:</b>
                  Indian Fine Dining <br />
                  <b> Menu:</b>
                  <a href="#">View Menu </a><br />
                  <b>Special Features:</b> | Outdoor Seating: Yes | Private Dining: Available for special events|
                  Bar: Full bar with a selection of cocktails and wines

                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={5}>
            <Card border="danger" style={{ width: "30rem" }}>
              <Card.Header style={{ fontWeight: "bold", backgroundColor: "white" }} className="d-flex justify-content-around">
                MAKE YOUR RESERVATION
              </Card.Header>
              <Card.Body className="d-flex flex-column align-items-center" style={{ fontWeight: "80px" }}>
                <Form onSubmit={handleSubmit}>
                  <Form.Group as={Col} controlId="formpartySize">
                    <Form.Label>Party Size</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter number of people"
                      min="1"
                      max="25"
                      required
                    />
                  </Form.Group>


                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Label className="mt-2">Date</Form.Label>
                      <DatePicker
                        selected={selectedDate}
                        onChange={handleDateChange}
                        minDate={new Date()}
                        dateFormat="MMMM d, yyyy"
                      />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Label className="mt-2">Time</Form.Label>
                      <Form.Select onChange={handleTimeChange} value={selectedTime}>
                        {availableTimes.map((time, index) => (
                          <option key={index} value={time}>
                            {time}
                          </option>
                        ))}
                      </Form.Select>
                    </Form.Group>
                  </Row>

                  <Button style={{ backgroundColor: "#DC143C", color: "white" }} type="submit" className="mt-1 mx-auto d-block">
                    Book Your Table
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>

      {/* CARDS-2  customer reviews*/}
      <Container className="mt-5">
        <hr></hr>
        <h3>REVIEWS</h3>
        <Row>
          <Col lg={4}>
            <Card border="warning" style={{ width: "18rem" }}>

              <Card.Body>
                <Card.Title className="d-flex justify-content-around">Aarav Mehta: Ratings:⭐⭐⭐⭐</Card.Title><hr></hr>
                <Card.Text>
                  The serene ambiance of this place instantly transported me. The soft Indian melodies playing in the background coupled with the attentive staff made our evening truly special. From the moment we entered until our departure, every interaction with the staff was warm and genuine, enhancing our dining experience          </Card.Text>

              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <Card border="warning" style={{ width: "18rem" }}>

              <Card.Body>
                <Card.Title className="d-flex justify-content-around">Priya Patel: Ratings:⭐⭐⭐⭐⭐</Card.Title><hr></hr>
                <Card.Text>
                  From the moment we walked in, we were greeted with warmth and hospitality. The restaurant has a lovely environment that's perfect for both intimate dinners and gatherings. The staff went above and beyond to cater to our needs. A must-visit for those seeking an authentic Indian experience.                </Card.Text>

              </Card.Body>
            </Card>
          </Col>
          <Col lg={4}>
            <Card border="warning" style={{ width: "18rem" }}>

              <Card.Body>
                <Card.Title className="d-flex justify-content-around"> Sanjay Gupta: Ratings:⭐⭐⭐⭐⭐</Card.Title><hr></hr>
                <Card.Text>
                  The ambiance of this restaurant is simply mesmerizing. The subtle Indian decor and soft lighting create a calming atmosphere. The staff is exceptionally helpful and ensured our dining experience was memorable. Truly a gem in the city.The flavors of the dishes were perfectly balanced.             </Card.Text>

              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* FAQs */}
      <Container className="mt-5">
        <hr></hr>
        <h3>FAQs</h3>
        <Row>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                What is the specialty cuisine at Shahi Darbar?
              </Accordion.Header>
              <Accordion.Body>
                Shahi Darbar specializes in Mughlai cuisine, offering a regal dining experience with dishes inspired by the rich culinary traditions of the royal Mughal kitchens.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Does Shahi Darbar offer vegetarian options?
              </Accordion.Header>
              <Accordion.Body>
                Yes, Shahi Darbar provides a diverse menu that includes a variety of vegetarian options. Our chefs craft flavorful and authentic vegetarian dishes to cater to different preferences.

              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Is there a dress code at Shahi Darbar?</Accordion.Header>
              <Accordion.Body>
                While there is no strict dress code, we recommend smart casual attire to enhance the overall dining experience. Many guests choose to dress up for the regal ambiance

              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Can I make a reservation for a special occasion or a large group at Shahi Darbar?</Accordion.Header>
              <Accordion.Body>
                Absolutely! Shahi Darbar welcomes reservations for special occasions and large groups. Please contact us in advance, and our team will be happy to assist in making your celebration memorable.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Does Shahi Darbar accommodate dietary restrictions or allergies?</Accordion.Header>
              <Accordion.Body>
                Yes, we understand the importance of catering to dietary restrictions and allergies. Please inform our staff about any specific requirements when making a reservation, and our chefs will do their best to accommodate your needs.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Row>
      </Container>
    </>
  );
}