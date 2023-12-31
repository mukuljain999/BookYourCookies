// CustomerProfilePage.jsx
import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Card,
  Form,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import customerImage from "../images/blankperson.png";
import { LinkContainer } from "react-router-bootstrap";
import axios from "axios";

const CustomerProfile = () => {
  const [customerData, setCustomerData] = useState({
    name: "",
    password: "",
    dateOfBirth: "",
    gender: "",
    city: "",
    state: "",
    pincode: "",
    email: "",
    phoneNumber: "",
    address: " ",
  });

  const populateCustomerState = async () => {
    try {
      const customerId = sessionStorage.getItem("customerId");
      console.log(customerId);
      const response = await axios.get(
        `http://localhost:9083/customer/fetch/${customerId}`
      );
      console.log(response.data);
      setCustomerData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    populateCustomerState();
  }, []);

  const [editDetails, setEditDetails] = useState(false);
  const navigate = useNavigate();

  const handleEditDetails = () => {
    // Redirect to the edit form page
    navigate("/edit-customer");
  };

  const handleSaveDetails = () => {
    // Implement your logic for saving customer details here
    console.log("Save button clicked");
    setEditDetails(false);
  };

  const handleChange = (field, value) => {
    // Update the customerData with the edited value
    setCustomerData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={8}>
          <Card>
            <Card.Header>
              <h5>Customer Details</h5>
            </Card.Header>
            <Card.Body>
              {customerData ? (
                <Form>
                  <Form.Group as={Row} controlId="formName">
                    <Form.Label column sm={3}>
                      Name:
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        type="text"
                        readOnly
                        value={customerData.name}
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formEmail">
                    <Form.Label column sm={3}>
                      Email:
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        type="text"
                        readOnly
                        value={customerData.email}
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formPhone">
                    <Form.Label column sm={3}>
                      Phone:
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        type="text"
                        readOnly
                        value={customerData.phoneNumber}
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formAddress">
                    <Form.Label column sm={3}>
                      Address:
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        type="text"
                        readOnly
                        value={customerData.address}
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formPassword">
                    <Form.Label column sm={3}>
                      Password:
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        type="password"
                        readOnly
                        value={customerData.password}
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formDateOfBirth">
                    <Form.Label column sm={3}>
                      Date of Birth:
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        type="date"
                        readOnly
                        value={customerData.dateOfBirth}
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId="formGender">
                    <Form.Label column sm={3}>
                      Gender:
                    </Form.Label>
                    <Col sm={9}>
                      <Form.Control
                        as="select"
                        readOnly
                        value={customerData.gender}
                      >
                        <option>Male</option>
                        <option>Female</option>
                        <option>Other</option>
                      </Form.Control>
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row}>
                    <Col sm={{ span: 9, offset: 3 }}>
                      <LinkContainer to={'/edit-customer'}>
                        
                        <Button variant="primary" onClick={handleEditDetails}>
                          Edit
                        </Button>
                      </LinkContainer>
                    </Col>
                  </Form.Group>
                </Form>
              ) : (
                <p>No data</p>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomerProfile;
