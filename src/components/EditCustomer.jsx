// EditFormPage.jsx
import React, { useState } from 'react';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../images/bgedit.jpg'; // Replace with the actual path
import '../css/EditCustomer.css';

const EditCustomer= () => {
  const navigate = useNavigate();

  // Sample customer data state
  const [customerData, setCustomerData] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  });

  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (field, value) => {
    // Update the customerData with the edited value
    setCustomerData((prevData) => ({
      ...prevData,
      [field]: value,
    }));

    // Clear validation errors for the current field
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [field]: '',
    }));

    // Additional handling for date field validation
    if (field === 'dateOfBirth' && value) {
      // Validate date is not in the future or more than 100 years ago
      const selectedDate = new Date(value);
      const currentDate = new Date();

      const isFutureDate = selectedDate > currentDate;
      const isMoreThan100YearsAgo = currentDate.getFullYear() - selectedDate.getFullYear() > 100;

      if (isFutureDate || isMoreThan100YearsAgo) {
        setValidationErrors((prevErrors) => ({
          ...prevErrors,
          dateOfBirth: 'Invalid Date of Birth',
        }));
      }
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validateName = (name) => {
    const regex = /^[A-Za-z]+$/;
    return regex.test(name);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(phoneNumber);
  };

  const validateCity = (city) => {
    const regex = /^[A-Za-z ]+$/;
    return regex.test(city);
  };

  const validatePassword = (password) => {
    // Password should contain at least one uppercase character
    const regex = /^(?=.*[A-Z]).+$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const errors = {};
    if (!validateEmail(customerData.email)) {
      errors.email = 'Invalid email format';
    }
    if (!validateName(customerData.name)) {
      errors.name = 'Invalid name format';
    }
    if (!validatePhoneNumber(customerData.phoneNumber)) {
      errors.phoneNumber = 'Invalid phone number format';
    }
    if (!validateCity(customerData.city)) {
      errors.city = 'Invalid city format';
    }
    if (!validatePassword(customerData.password)) {
      errors.password = 'Password must contain at least one uppercase character';
    }

    // If there are validation errors, update the state and prevent form submission
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    // Clear validation error for the date field
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      dateOfBirth: '',
    }));

    // Implement your logic for handling form submission here
    console.log('Form submitted with data:', customerData);

    // Redirect back to the customer profile page after saving
    navigate('/customer-profile');
  };

  const allIndianStates = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
    'Andaman and Nicobar Islands',
    'Chandigarh',
    'Dadra and Nagar Haveli and Daman and Diu',
    'Lakshadweep',
    'Delhi',
    'Puducherry',
  ];

  const backgroundStyle = {
    background: `url(${backgroundImage})`,
    backgroundSize: 'cover',  // Set to 'cover' for the image to cover the entire container
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={backgroundStyle}>
      <Container>
        <h2 className="text-white">Edit Customer Details</h2>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="formName">
                <Form.Label className="text-white">Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
                  value={customerData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  isInvalid={validationErrors.name}
                />
                <Form.Control.Feedback type="invalid" className="text-white">
                  {validationErrors.name}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="formEmail">
                <Form.Label className="text-white">Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={customerData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  isInvalid={validationErrors.email}
                />
                <Form.Control.Feedback type="invalid" className="text-white">
                  {validationErrors.email}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="formPassword">
                <Form.Label className="text-white">Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Enter your password"
                  value={customerData.password}
                  onChange={(e) => handleChange('password', e.target.value)}
                  isInvalid={validationErrors.password}
                />
                <Form.Control.Feedback type="invalid" className="text-white">
                  {validationErrors.password}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="formPhoneNumber">
                <Form.Label className="text-white">Phone Number</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Enter your phone number"
                  value={customerData.phoneNumber}
                  onChange={(e) => handleChange('phoneNumber', e.target.value)}
                  isInvalid={validationErrors.phoneNumber}
                />
                <Form.Control.Feedback type="invalid" className="text-white">
                  {validationErrors.phoneNumber}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="formDateOfBirth">
                <Form.Label className="text-white">Date of Birth</Form.Label>
                <Form.Control
                  type="date"
                  value={customerData.dateOfBirth}
                  onChange={(e) => handleChange('dateOfBirth', e.target.value)}
                  isInvalid={validationErrors.dateOfBirth}
                />
                <Form.Control.Feedback type="invalid" className="text-white">
                  {validationErrors.dateOfBirth}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="formGender">
                <Form.Label className="text-white">Gender</Form.Label>
                <Form.Control
                  as="select"
                  value={customerData.gender}
                  onChange={(e) => handleChange('gender', e.target.value)}
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="formAddress">
                <Form.Label className="text-white">Address</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your address"
                  value={customerData.address}
                  onChange={(e) => handleChange('address', e.target.value)}
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="formCity">
                <Form.Label className="text-white">City</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your city"
                  value={customerData.city}
                  onChange={(e) => handleChange('city', e.target.value)}
                  isInvalid={validationErrors.city}
                />
                <Form.Control.Feedback type="invalid" className="text-white">
                  {validationErrors.city}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="formState">
                <Form.Label className="text-white">State</Form.Label>
                <Form.Control
                  as="select"
                  value={customerData.state}
                  onChange={(e) => handleChange('state', e.target.value)}
                  isInvalid={validationErrors.state}
                >
                  <option value="">Select State</option>
                  {allIndianStates.map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </Form.Control>
                <Form.Control.Feedback type="invalid" className="text-white">
                  {validationErrors.state}
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="formPincode">
                <Form.Label className="text-white">Pincode</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your pincode"
                  value={customerData.pincode}
                  onChange={(e) => handleChange('pincode', e.target.value)}
                  style={{ width: '60%' }}
                />
              </Form.Group>
            </Col>
          </Row>

          <Button variant="primary" type="submit" className="mt-3">
            Save
          </Button>
        </Form>

        {/* Add some spacing between the Save button and the footer */}
        <div style={{ marginBottom: '20px' }}></div>
      </Container>
    </div>
  );
};

export default EditCustomer;
