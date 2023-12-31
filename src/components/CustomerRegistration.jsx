import React, { useState } from 'react';
import { Form, Row, Button, Col } from 'react-bootstrap';
import '../css/CustomerRegistration.css';
import 'bootstrap/dist/css/bootstrap.css';
import customerregistration from '../images/customerregistration.jpg';
import axios from 'axios';
const CustomerRegistration = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        gender: '',
        dateOfBirth: '',
        phoneNumber: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [validationErrors, setValidationErrors] = useState({});

    const validateForm = () => {
        const errors = {};

        // Validate Name
        const nameRegex = /^[a-zA-Z\s]+$/;
        if (!nameRegex.test(formData.name.trim())) {
            errors.name = 'Name should contain only alphabets and spaces';
        }

        // Validate Email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            errors.email = 'Invalid email address';
        }

        // Validate Password
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (!passwordRegex.test(formData.password)) {
            errors.password = 'Password should contain at least one special character, one uppercase letter, and one lowercase letter';
        }

        // Validate Phone Number
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(formData.phoneNumber)) {
            errors.phoneNumber = 'Invalid phone number';
        }

        // Validate Date of Birth
        if (!formData.dateOfBirth) {
            errors.dateOfBirth = 'Date of Birth is required';
        }

        setValidationErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleDateChange = (event) => {
        setFormData({ ...formData, dateOfBirth: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (validateForm()) {
            try {
                setIsSubmitted(true);
                console.log('Form data:::', formData);
                const response = await axios.post('http://localhost:9083/customer/register', formData);
                if (response.ok) {
                    // Form data successfully sent to the server
                    // Handle success or reset the form
                    setFormData({
                        name: '',
                        email: '',
                        password: '',
                        gender: '',
                        dateOfBirth: '',
                        phoneNumber: '',
                    });
                } else {
                    // Handle the case when the server returns an error
                    console.log('Server error:', response.statusText);
                }

                setTimeout(() => {
                    setIsSubmitted(false);
                }, 1500);
            } catch (error) {
                console.log(error);
            }
            console.log('Form data:', formData);
        } else {
            console.log('Form validation failed');
        }
    };

    const genderOptions = ['Male', 'Female', 'Other'];

    return (
        <div>
            <section className="h-100 bg-dark">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card card-registration my-4">
                                <div className="row g-0">
                                    <div className="col-xl-6 d-none d-xl-block">
                                        <img
                                            src={customerregistration}
                                            alt="Sample photo"
                                            className="img-fluid"
                                            style={{ borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem' }}
                                        />
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="card-body p-md-5 text-black">
                                            <h3 className="mb-5 text-uppercase">Register Yourself</h3>

                                            {/* Display Validation Errors */}
                                            {Object.keys(validationErrors).length > 0 && (
                                                <div className="alert alert-danger">
                                                    {Object.values(validationErrors).map((error, index) => (
                                                        <p key={index}>{error}</p>
                                                    ))}
                                                </div>
                                            )}

                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input
                                                            type="text"
                                                            id="form3Example1m"
                                                            className="form-control form-control-lg"
                                                            name="name"
                                                            value={formData.name}
                                                            onChange={handleInputChange}
                                                        />
                                                        <label className="form-label" htmlFor="form3Example1m">
                                                            Name
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <select
                                                            className="form-control form-control-lg"
                                                            name="gender"
                                                            value={formData.gender}
                                                            onChange={handleInputChange}
                                                        >
                                                            <option value="" disabled>
                                                                Select Gender
                                                            </option>
                                                            {genderOptions.map((option) => (
                                                                <option key={option} value={option.toLowerCase()}>
                                                                    {option}
                                                                </option>
                                                            ))}
                                                        </select>
                                                        <label className="form-label" htmlFor="gender">
                                                            Gender
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input
                                                            type="email"
                                                            id="form3Example1n"
                                                            className="form-control form-control-lg"
                                                            name="email"
                                                            value={formData.email}
                                                            onChange={handleInputChange}
                                                        />
                                                        <label className="form-label" htmlFor="form3Example1n">
                                                            Email
                                                        </label>
                                                    </div>
                                                </div>

                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input
                                                            type="password"
                                                            id="form3Example1m1"
                                                            className="form-control form-control-lg"
                                                            name="password"
                                                            value={formData.password}
                                                            onChange={handleInputChange}
                                                        />
                                                        <label className="form-label" htmlFor="form3Example1m1">
                                                            Password
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-outline mb-4">
                                                <input
                                                    type="tel"
                                                    id="form3Example8"
                                                    className="form-control form-control-lg"
                                                    name="phoneNumber"
                                                    value={formData.phoneNumber}
                                                    onChange={handleInputChange}
                                                />
                                                <label className="form-label" htmlFor="form3Example8">
                                                    Phone Number
                                                </label>
                                            </div>

                                            <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                                                <h6 className="mb-0 me-4">Date of Birth: </h6>
                                                <div className="form-outline">
                                                    <input
                                                        type="date"
                                                        id="form3Example9"
                                                        className="form-control form-control-lg"
                                                        name="dateOfBirth"
                                                        value={formData.dateOfBirth}
                                                        onChange={handleDateChange}
                                                        max="2023-12-31" // Set the maximum date
                                                    />
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-end pt-3">
                                                <button type="button" className="btn btn-light btn-lg">
                                                    Reset all
                                                </button>
                                                <button type="button" className="btn btn-warning btn-lg ms-2" onClick={handleSubmit}>
                                                    Submit form
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CustomerRegistration;