import React, { useState } from 'react';
import image1 from "../images/restaurant_register.jpg";
import "../css/RestaurantRegistration.css";

export function RestaurantRegistration() {
  
  const [errors, setErrors] = useState({
    restaurantName: '',
    ownerName: '',
    ownerEmail: '',
    password: '',
    contactNumber: ''
  });

  const validateRestaurantName = (name) => {
    const namePattern = /^[a-zA-Z\s]+$/; // Updated regex to allow spaces
    return namePattern.test(name);
  }
  
  const validateOwnerName = (name) => {
    const namePattern = /^[a-zA-Z\s]+$/; // Updated regex to allow spaces
    return namePattern.test(name);
  }

  const validateOwnerEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }

  const validatePassword = (password) => {
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
  }

  const validateContactNumber = (number) => {
    const numberPattern = /^\d{10}$/;
    return numberPattern.test(number);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const restaurantName = event.target.restaurantname.value;
    const ownerName = event.target['Owner Name'].value;
    const ownerEmail = event.target['Owner email'].value;
    const password = event.target.Password.value;
    const contactNumber = event.target.contactnumber.value;

    let newErrors = {};

    if (!validateRestaurantName(restaurantName)) {
      newErrors.restaurantName = 'Please enter a valid restaurant name.';
    }

    if (!validateOwnerName(ownerName)) {
      newErrors.ownerName = 'Please enter a valid owner name.';
    }

    if (!validateOwnerEmail(ownerEmail)) {
      newErrors.ownerEmail = 'Please enter a valid email.';
    }

    if (!validatePassword(password)) {
      newErrors.password = 'Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long.';
    }

    if (!validateContactNumber(contactNumber)) {
      newErrors.contactNumber = 'Please enter a valid contact number.';
    }

    setErrors(newErrors);
  }

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  }

  return (
    <>
      <section className="h-100 bg-dark">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img src={image1} alt="Sample photo" className="img-fluid" style={{ borderTopLeftRadius: '.25rem', borderBottomLeftRadius: '.25rem' }} />
                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase">Restaurant registration</h3>
                      
                      <form onSubmit={handleSubmit}>
                        <div className="select-input form-outline mb-4">
                          <input 
                            type="text" 
                            id="restaurantname" 
                            name="restaurantname" 
                            className="form-control form-control-lg" 
                            placeholder="Restaurant Name" 
                          />
                          {errors.restaurantName && <span className="error-message">{errors.restaurantName}</span>}
                        </div>
                        
                        <div className="select-input form-outline mb-4">
                          <input 
                            type="text" 
                            id="Owner Name" 
                            name="Owner Name" 
                            className="form-control form-control-lg" 
                            placeholder="Owner Name" 
                          />
                          {errors.ownerName && <span className="error-message">{errors.ownerName}</span>}
                        </div>
                        
                        <div className="select-input form-outline mb-4">
                          <input 
                            type="text" 
                            id="Owner email" 
                            name="Owner email" 
                            className="form-control form-control-lg" 
                            placeholder="Owner Email" 
                          />
                          {errors.ownerEmail && <span className="error-message">{errors.ownerEmail}</span>}
                        </div>
                        
                        <div className="select-input form-outline mb-4">
                          <input 
                            type={showPassword ? "text" : "password"} 
                            id="Password" 
                            name="Password" 
                            className="form-control form-control-lg" 
                            placeholder="Password" 
                          />
                          {errors.password && <span className="error-message">{errors.password}</span>}
                        </div>
                        
                        <div className="select-input form-outline mb-4">
                          <input 
                            type="text" 
                            id="contactnumber" 
                            name="contactnumber" 
                            className="form-control form-control-lg" 
                            placeholder="Contact Number" 
                          />
                          {errors.contactNumber && <span className="error-message">{errors.contactNumber}</span>}
                        </div>

                        <button type="submit" className="btn btn-warning btn-lg ms-2">REGISTER</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}