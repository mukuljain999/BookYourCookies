import image1 from "../images/custlogin.jpeg"
import { useState } from "react";
import axios from "axios";

import { useNavigate } from 'react-router-dom';


export function CustomerLogin(){
   
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState();

  const [loginData, setLoginData] = useState({
      email: '',
      password: ''
  })

  function handleInput(event) {
      setLoginData(prevData => {
          return {
              ...prevData,
              [event.target.name] : event.target.value
          }
      })        
  }

  function login(event) {
      event.preventDefault();
      axios.post('http://localhost:9083/customer/login', loginData).then((response => {
          console.log(response);
          console.log(response.data);
          if(response.data.status) {
              sessionStorage.setItem('customerId', response.data.customerId);
              sessionStorage.setItem('name', response.data.name);
              navigate('/book-your-table')
          }
          else {
            alert("Invalid Login Details");
              setErrorMessage(response.data.messageIfAny);
          }
      }))
  }
    return(
        <>

    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: '1rem' }}>
              <div className="row g-0">
                
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">

                    <form onSubmit={login}>

                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                        <span className="h1 fw-bold mb-0">Customer Login</span>
                      </div>

                     

                      <div className="form-outline mb-4">
                        <input type="email" name="customerEmailId" className="form-control form-control-lg" onChange={handleInput} />
                        <label className="form-label" htmlFor="form2Example17">Email address</label>
                      </div>

                      <div className="form-outline mb-4">
                        <input type="password" name="password" className="form-control form-control-lg" onChange={handleInput} />
                        <label className="form-label" htmlFor="form2Example27">Password</label>
                      </div>

                      <div className="pt-1 mb-4">
                        <button type = "submit" className="btn btn-dark btn-lg btn-block">Login</button>
                      </div>

                      
                      <p className="mb-5 pb-lg-2" style={{ color: '#393f81' }}>Don't have an account? <a href="customer-registration"
                          style={{ color: '#393f81' }}>Register here</a></p>
                    
                    </form>

                  </div>
                </div>
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img src={image1}
                    alt="login form" className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem' , height:"80vhh"}} />
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