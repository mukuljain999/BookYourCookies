import React, { useState } from "react";
import image1 from "../images/restaurant_register.jpg";
import "../css/RestaurantRegistration.css";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export function RestaurantRegistration() {

  const navigate = useNavigate();
 
  const [errors, setErrors] = useState({
    restaurantName: "",
    ownerName: "",
    ownerEmailId: "",
    password: "",
    contactNumber: "",
  });

  

  const validateRestaurantName = (name) => {
    const namePattern = /^[a-zA-Z\s]+$/; // Updated regex to allow spaces
    return namePattern.test(name);
  };

  const validateOwnerName = (name) => {
    const namePattern = /^[a-zA-Z\s]+$/; // Updated regex to allow spaces
    return namePattern.test(name);
  };

  const validateOwnerEmailId = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    const passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordPattern.test(password);
  };

  const validateContactNumber = (number) => {
    const numberPattern = /^\d{10}$/;
    return numberPattern.test(number);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const restaurantName = event.target.restaurantName.value;
    const ownerName = event.target["ownerName"].value;
    const ownerEmailId = event.target["ownerEmailId"].value;
    const password = event.target.password.value;
    const contactNumber = event.target.contactNumber.value;

    let newErrors = {};

    if (!validateRestaurantName(restaurantName)) {
      newErrors.restaurantName = "Please enter a valid restaurant name.";
    }

    if (!validateOwnerName(ownerName)) {
      newErrors.ownerName = "Please enter a valid owner name.";
    }

    if (!validateOwnerEmailId(ownerEmailId)) {
      newErrors.ownerEmailId = "Please enter a valid email.";
    }

    if (!validatePassword(password)) {
      newErrors.password =
        "Password must contain at least one uppercase letter, one lowercase letter, one number, one special character, and be at least 8 characters long.";
    }

    if (!validateContactNumber(contactNumber)) {
      newErrors.contactNumber = "Please enter a valid contact number.";
    }

   
      
    console.log("hey");
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      let url = `http://localhost:9083/restaurant/register`;
      axios.post(url, { restaurantName, ownerName,ownerEmailId, password, contactNumber })
        .then((response) => {
          console.log(response.data);
          setErrors(response.data);
          if (response.data.status) {
           
            alert("Registered successfully!");
            navigate('/restaurant-login');
            
          } else {
            alert("Registration Unsuccessful!");
          }
        })
        .catch((error) => {
          console.error("Error during registration:", error);
          alert("Registration failed. Please try again.");
        });
    }
  };

  {
    /*password related state*/
  }
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <section className="h-100 bg-dark">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="col-xl-6 d-none d-xl-block">
                    <img
                      src={image1}
                      alt="Sample photo"
                      className="img-fluid"
                      style={{
                        borderTopLeftRadius: ".25rem",
                        borderBottomLeftRadius: ".25rem",
                      }}
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                      <h3 className="mb-5 text-uppercase">
                        Restaurant registration
                      </h3>

                      <form onSubmit={handleSubmit}>
                        <div className="select-input form-outline mb-4">
                          <input
                            type="text"
                            id="restaurantname"
                            name="restaurantName"
                            className="form-control form-control-lg"
                            placeholder="Restaurant Name"
                          />
                          {errors.restaurantName && (
                            <span className="error-message">
                              {errors.restaurantName}
                            </span>
                          )}
                        </div>

                        <div className="select-input form-outline mb-4">
                          <input
                            type="text"
                            id="ownername"
                            name="ownerName"
                            className="form-control form-control-lg"
                            placeholder="Owner Name"
                          />
                          {errors.ownerName && (
                            <span className="error-message">
                              {errors.ownerName}
                            </span>
                          )}
                        </div>

                        <div className="select-input form-outline mb-4">
                          <input
                            type="text"
                            id="Owneremail"
                            name="ownerEmailId"
                            className="form-control form-control-lg"
                            placeholder="Owner Email"
                          />
                          {errors.ownerEmailId && (
                            <span className="error-message">
                              {errors.ownerEmailId}
                            </span>
                          )}
                        </div>

                        <div className="select-input form-outline mb-4">
                          <input
                            type={showPassword ? "text" : "password"}
                            id="Password"
                            name="password"
                            className="form-control form-control-lg"
                            placeholder="Password"
                          />
                          {errors.password && (
                            <span className="error-message">
                              {errors.password}
                            </span>
                          )}
                        </div>

                        <div className="select-input form-outline mb-4">
                          <input
                            type="text"
                            id="contactnumber"
                            name="contactNumber"
                            className="form-control form-control-lg"
                            placeholder="Contact Number"
                          />
                          {errors.contactNumber && (
                            <span className="error-message">
                              {errors.contactNumber}
                            </span>
                          )}
                        </div>

                        <button
                          type="submit"
                          className="btn btn-warning btn-lg ms-2"
                        >
                          REGISTER
                        </button>
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
