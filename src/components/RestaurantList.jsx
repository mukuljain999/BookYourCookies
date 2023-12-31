import {
  Container,
  Navbar,
  Nav,
  Row,
  Col,
  Card,
  Button,
  CardTitle,
} from "react-bootstrap";
import image1 from "../images/row2.jpg";
import image2 from "../images/row2.jpg";
import image3 from "../images/row3.jpg";
import image4 from "../images/row4.jpg";
import bannerImage from "../images/banner.jpg";
import { LinkContainer } from "react-router-bootstrap";

export function RestaurantList() {
  const cardTitleStyle = {
    fontSize: "24px", // Adjust the font size as needed
    fontWeight: "bold", // Optional: Add bold styling
  };
  return (
    <>

      <img src={bannerImage} alt="Banner" className="img-fluid mx-auto d-block" style={{ height: '200px', width: '77%' }} />

      <Container>
        <Card className="mt-5" style={{ backgroundColor: "#F5F5F5" }}>
          <Row className="mt-2">
            <Col lg={3} >
              {" "}
              <img src={image1} className="mb-2 ml-2" style={{ marginLeft: '10px' }} />{" "}
            </Col>
            <Col lg={7} className="mt-2">
              <CardTitle style={cardTitleStyle}>
                Shahi Darbar
              </CardTitle>
              <p>Ghansoli,Navi Mumbai</p>
              <p>Cuisine Beverages,Desserts,Fast</p>
              <a href="#">View Menu</a>
            </Col>
            <Col lg={2} className="mt-5 mb-5  ">
              <LinkContainer to={'/book-your-table'}>
                <Button variant="primary" size="md" className="mt-4 mx-auto d-block">Book a Table</Button>
              </LinkContainer>
            </Col>
          </Row>
        </Card>


        <Card className="mt-5" style={{ backgroundColor: "#F5F5F5" }}>
          <Row className="mt-2">
            <Col lg={3} >
              {" "}
              <img src={image2} className="mb-2 ml-2" style={{ marginLeft: '10px' }} />{" "}
            </Col>
            <Col lg={7} className="mt-2">
              <CardTitle style={cardTitleStyle}>
                Ganesh Restaurant
              </CardTitle>
              <p>Kharghar,Navi Mumbai</p>
              <p>Cuisine Beverages,Desserts,Fast</p>
              <a href="#">View Menu</a>
            </Col>
            <Col lg={2} className="mt-5 mb-5"  >
              <LinkContainer to={'/book-your-table'}>
                <Button variant="primary" size="md" className="mt-4 mx-auto d-block">Book a Table</Button>
              </LinkContainer>            </Col>
          </Row>
        </Card>
        <Card className="mt-5" style={{ backgroundColor: "#F5F5F5" }}>
          <Row className="mt-2">
            <Col lg={3} >
              {" "}
              <img src={image3} className="mb-2 ml-2" style={{ marginLeft: '10px' }} />{" "}
            </Col>
            <Col lg={7} className="mt-2">
              <CardTitle style={cardTitleStyle}>
                Rike - Terrace Bar & Grill
              </CardTitle>
              <p>Juhu, Mumbai</p>
              <p>Cuisine Beverages,Desserts,Fast</p>
              <a href="#">View Menu</a>
            </Col>
            <Col lg={2} className="mt-5 mb-5  ">
              <LinkContainer to={'/book-your-table'}>
                <Button variant="primary" size="md" className="mt-4 mx-auto d-block">Book a Table</Button>
              </LinkContainer>            </Col>
          </Row>
        </Card><Card className="mt-5" style={{ backgroundColor: "#F5F5F5" }}>
          <Row className="mt-2">
            <Col lg={3} >
              {" "}
              <img src={image4} className="mb-2 ml-2" style={{ marginLeft: '10px' }} />{" "}
            </Col>
            <Col lg={7} className="mt-2">
              <CardTitle style={cardTitleStyle}>
                Sigree Global Grill
              </CardTitle>
              <p>Cst,Mumbai</p>
              <p>Cuisine Beverages,Desserts,Fast</p>
              <a href="#">View Menu</a>
            </Col>
            <Col lg={2} className="mt-5 mb-5  ">
              <LinkContainer to={'/book-your-table'}>
                <Button variant="primary" size="md" className="mt-4 mx-auto d-block">Book a Table</Button>
              </LinkContainer>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
}