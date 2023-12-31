// CustomerProfilePage.jsx
import React, { useState } from 'react';
import { Container, Row, Col, Image, Button, Card, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import customerImage from '../images/blankperson.png'
import { LinkContainer } from 'react-router-bootstrap';

const CustomerProfile = () => {
  // Sample customer data
  const [customerData, setCustomerData] = useState({
    name: 'Virat Kohli',
    password: '********',
    dateOfBirth: '1988-11-05',
    gender: 'Male',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400001',
    image: customerImage,
    details: {
      email: 'virat.kohli@gmail.com',
      phone: '9999999999',
      address: 'Nord Street, Mumbai',
    },
    tableBookings: {
      lastBooking: '2023-01-15',
      upcomingBooking: '2023-02-01',
    },
    orderStats: {
      totalOrders: 25,
      successfulOrders: 20,
      pendingOrders: 5,
    },
  });

  const [editDetails, setEditDetails] = useState(false);
  const navigate = useNavigate();

  const handleEditDetails = () => {
    // Redirect to the edit form page
    navigate('/edit-customer-details');
  };

  const handleSaveDetails = () => {
    // Implement your logic for saving customer details here
    console.log('Save button clicked');
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
        <Col md={4}>
          <Image
            src={customerData.image}
            alt={customerData.name}
            roundedCircle
            fluid
            style={{ maxWidth: '150px' }}
          />
          <h4 className="mt-2">{customerData.name}</h4>
        </Col>
        <Col md={8}>
          <Card>
            <Card.Header>
              <h5>Details</h5>
              {!editDetails && (
                <LinkContainer to={'/edit-customer'}>
                <Button variant="outline-primary" onClick={handleEditDetails}>
                  Edit
                </Button></LinkContainer>
              )}
              {editDetails && (
                <Button variant="success" onClick={handleSaveDetails}>
                  Save
                </Button>
              )}
            </Card.Header>
            <Card.Body>
              <dl className="row">
                <dt className="col-sm-3">Name:</dt>
                <dd className="col-sm-9">
                  {editDetails ? (
                    <Form.Control
                      type="text"
                      value={customerData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                    />
                  ) : (
                    customerData.name
                  )}
                </dd>

                <dt className="col-sm-3">Email:</dt>
                <dd className="col-sm-9">{customerData.details.email}</dd>

                <dt className="col-sm-3">Phone:</dt>
                <dd className="col-sm-9">{customerData.details.phone}</dd>

                <dt className="col-sm-3">Address:</dt>
                <dd className="col-sm-9">
                  {editDetails ? (
                    <Form.Control
                      type="text"
                      value={customerData.details.address}
                      onChange={(e) => handleChange('address', e.target.value)}
                    />
                  ) : (
                    customerData.details.address
                  )}
                </dd>

                <dt className="col-sm-3">Password:</dt>
                <dd className="col-sm-9">
                  {editDetails ? (
                    <Form.Control
                      type="password"
                      value={customerData.password}
                      onChange={(e) => handleChange('password', e.target.value)}
                    />
                  ) : (
                    customerData.password
                  )}
                </dd>

                <dt className="col-sm-3">Date of Birth:</dt>
                <dd className="col-sm-9">
                  {editDetails ? (
                    <Form.Control
                      type="date"
                      value={customerData.dateOfBirth}
                      onChange={(e) => handleChange('dateOfBirth', e.target.value)}
                    />
                  ) : (
                    customerData.dateOfBirth
                  )}
                </dd>

                <dt className="col-sm-3">Gender:</dt>
                <dd className="col-sm-9">
                  {editDetails ? (
                    <Form.Control
                      as="select"
                      value={customerData.gender}
                      onChange={(e) => handleChange('gender', e.target.value)}
                    >
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </Form.Control>
                  ) : (
                    customerData.gender
                  )}
                </dd>

                {editDetails && (
                  <>
                    <dt className="col-sm-3">City:</dt>
                    <dd className="col-sm-9">
                      <Form.Control
                        type="text"
                        value={customerData.city}
                        onChange={(e) => handleChange('city', e.target.value)}
                      />
                    </dd>

                    <dt className="col-sm-3">State:</dt>
                    <dd className="col-sm-9">
                      <Form.Control
                        type="text"
                        value={customerData.state}
                        onChange={(e) => handleChange('state', e.target.value)}
                      />
                    </dd>

                    <dt className="col-sm-3">Pincode:</dt>
                    <dd className="col-sm-9">
                      <Form.Control
                        type="text"
                        value={customerData.pincode}
                        onChange={(e) => handleChange('pincode', e.target.value)}
                      />
                    </dd>
                  </>
                )}
              </dl>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6} className="d-flex h-100">
          <Card>
            <Card.Header>
              <h5>Last and Upcoming Table Bookings</h5>
            </Card.Header>
            <Card.Body className="d-flex flex-column h-100">
              <dl className="row">
                <dt className="col-sm-6">Last Booking:</dt>
                <dd className="col-sm-6">{customerData.tableBookings.lastBooking}</dd>

                <dt className="col-sm-6">Upcoming Booking:</dt>
                <dd className="col-sm-6">{customerData.tableBookings.upcomingBooking}</dd>
              </dl>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6} className="d-flex h-100">
          <Card>
            <Card.Header>
              <h5>Order Statistics</h5>
            </Card.Header>
            <Card.Body className="d-flex flex-column h-100">
              <dl className="row">
                <dt className="col-sm-6">Total Orders:</dt>
                <dd className="col-sm-6">{customerData.orderStats.totalOrders}</dd>

                <dt className="col-sm-6">Successful Orders:</dt>
                <dd className="col-sm-6">{customerData.orderStats.successfulOrders}</dd>

                <dt className="col-sm-6">Pending Orders:</dt>
                <dd className="col-sm-6">{customerData.orderStats.pendingOrders}</dd>
              </dl>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CustomerProfile;
