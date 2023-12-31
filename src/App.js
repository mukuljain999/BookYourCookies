import logo from './logo.svg';
import './App.css';
import { NavigationBar } from './components/NavigationBar';
import { Footer } from './components/Footer';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import { RestaurantList } from './components/RestaurantList';
import { RestaurantRegistration } from './components/RestaurantRegistration';
import CustomerProfile from './components/CustomerProfile';
import {RestaurantLogin} from './components/RestaurantLogin';
import CustomerRegistration from './components/CustomerRegistration';
import { BookYourTable } from './components/BookYourTable';
import EditCustomer from './components/EditCustomer';
import { CustomerLogin } from './components/CustomerLogin';
function App() {
  return (
    <BrowserRouter>
      <NavigationBar></NavigationBar>

      <Routes>

        <Route path="/" element={<Home />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/contact-us" element={<ContactUs />}></Route>
        <Route path="/restaurant-list" element={<RestaurantList />}></Route>
        <Route path="/restaurant-login" element={<RestaurantLogin />}></Route>
        <Route path="/restaurant-registration" element={<RestaurantRegistration />}></Route>
        <Route path="/customer-registration" element={<CustomerRegistration />}></Route>
        <Route path="/book-your-table" element={<BookYourTable />}></Route>
        <Route path="/customer-profile" element={<CustomerProfile />}></Route>
        <Route path="/edit-customer" element={<EditCustomer />}></Route>
        <Route path="/customer-login" element={<CustomerLogin />}></Route>
      </Routes>
      
      <Footer />

    </BrowserRouter>
  );
}

export default App;
