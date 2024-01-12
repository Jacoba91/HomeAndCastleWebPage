import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Navbar, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import HomePage from './pages/HomePage';
import AreasOfPractice from './pages/AreasOfPractice';
import AboutUsPage from './pages/AboutUsPage';
import ContactUs from './pages/ContactUs';
import Links from './pages/Links';
import LawBlog from './pages/LawBlog';
import Articles from './pages/Articles';
import './App.css'

function App() {
  return (
    <Router>
      <div className="main-container">
        <div className="content-wrap">


          <Navbar bg="light" expand="lg">
            <Container className="navbar-container">
              <Navbar.Brand href="#home">
              <Link to="/">
                <img 
                  src='src/assets/home-and-castle-law-firm.png'
                  className="logo-image"
                  alt="Home and Castle Law Firm Logo"
                />
              </Link>
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end"></Navbar.Collapse>
              <Nav className="me-auto">

                <LinkContainer to="/">
                  <Nav.Link>Home</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/about-us">
                  <Nav.Link>About Us</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/areas-of-practice">
                  <Nav.Link>Areas of Practice</Nav.Link>
                </LinkContainer>
              </Nav>

              <Nav className="me-auto">
                <NavDropdown title="Resources" id="nav-dropdown-dark-example">
                  <NavDropdown.Item href="/articles">Articles</NavDropdown.Item>
                  <NavDropdown.Item href="/law-blog">Law Blog</NavDropdown.Item>
                  <NavDropdown.Item href="/links">Links</NavDropdown.Item>
                </NavDropdown>

                <LinkContainer to="/contact-us">
                  <Nav.Link>Contact Us</Nav.Link>
                </LinkContainer>

              </Nav>
            </Container>
          </Navbar>


          {/* Routes */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/areas-of-practice" element={<AreasOfPractice />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/law-blog" element={<LawBlog />} />
            <Route path="/links" element={<Links />} />
            {/* ... other routes ... */}
          </Routes>
        </div>


        {/* Footer */}
        <footer className="footer bg-dark text-light py-4 mt-auto">
          <Container>
            <Row>
              <Col>
                <h5>Location</h5>
                <p>940 The East Mall, Suite 202, 
                  <br></br>Toronto, ON, M9B 6J7</p>
              </Col>
              <Col>
                <h5>Contact Info</h5>
                <ul className="list-unstyled">
                  <li><a href="mailto:info@homeandcastlelawfirm.com" className="email-link">info@homeandcastlelawfirm.com</a></li>
                  <li><a href="#" className="text-light">416-247-6000</a></li>
                </ul>
              </Col>
              <Col>
                <h5>Follow Us</h5>
                <a href="https://www.linkedin.com/in/home-and-castle-law-firm-81998213a">LinkedIn</a>
              </Col>
            </Row>
          </Container>
        </footer>
      </div>
    </Router> 
  );
}

export default App
