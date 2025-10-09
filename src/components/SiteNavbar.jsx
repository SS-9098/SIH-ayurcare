import React, { useContext } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { FaLeaf, FaUserMd } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../App';
import '../App.css'; 

const SiteNavbar = () => {
  const { authState, setAuthState } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuthState({ isAuthenticated: false, userRole: null });
    navigate('/');
  };

  return (
    <Navbar expand="lg" variant="light" className="ayurvedic-navbar shadow-sm sticky-top">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <FaLeaf size={28} className="me-2 text-success" />
          <span className="fw-bold ayurvedic-brand-name">Ayurveda Wellness</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="ayurvedic-nav-link">Home</Nav.Link>
            <Nav.Link as={Link} to="/about" className="ayurvedic-nav-link">About</Nav.Link>
            <Nav.Link as={Link} to="/assessment" className="ayurvedic-nav-link">Dosha Assessment</Nav.Link>
            {!authState.isAuthenticated && (
              <Nav.Link as={Link} to="/doctor-login" className="ayurvedic-nav-link">Login</Nav.Link>
            )}
            {authState.isAuthenticated && (
              <>
                <Nav.Link as={Link} to="/dashboard" className="ayurvedic-nav-link">Dashboard</Nav.Link>
                <Button variant="outline-success" className="ms-2 ayurvedic-nav-btn" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default SiteNavbar;