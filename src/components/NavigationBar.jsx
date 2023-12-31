import { Container, Nav, Navbar, NavLink } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
//import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logoimg from "../images/logo.png"
//import { isAuthenticated, logout } from "../utils/TokenUtils";


export function NavigationBar() {

    //const [isLoggedIn, setLoggedIn] = useState(false);
    // Handler for simulating login
    //const handleLogin = () => {
    // setLoggedIn(true);
    // };
    const navigate = useNavigate();
    // Handler for simulating logout

    const handleLogout = () => {
        //logout(); // Call the logout function from TokenUtils
        // Redirect to the login page after logout


        navigate('#');
    };
    ///const handleLogout = () => {
    //logout();
    // };
    return (
        <Navbar expand="lg" bg="danger" data-bs-theme="dark">
            <Container>
                <div>
                    <img
                        src={logoimg}
                        width="50"
                        height="50" alt='oops!'></img>
                    <Navbar.Brand href="#home">Book Your Cookies</Navbar.Brand>
                </div>
                <div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about-us">
                            <Nav.Link>About</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact-us">
                            <Nav.Link>Contact us</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/customer-profile">
                            <Nav.Link>Profile</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to="/login">
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer>

                        {/* Conditionally render Login/Logout based on authentication status */}
                        {/*  <Nav>
                            
                            {isAuthenticated() ? (
                                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                            ) : (
                                <LinkContainer to="/log-in">
                                    <Nav.Link>Login</Nav.Link>
                                </LinkContainer>
                            )}
                        </Nav> */}


                    </Nav>
                </Navbar.Collapse>
                </div>
            </Container>
        </Navbar>

    );
}