import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLeaf, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './App.css';

const SiteFooter = () => {
    return (
        <footer className="ayurvedic-footer mt-auto">
            <Container>
                <Row className="text-center text-md-start py-4 border-bottom">
                    <Col md={4} className="mb-3 mb-md-0">
                        <div className="d-flex align-items-center justify-content-center justify-content-md-start mb-2">
                            <FaLeaf size={28} className="me-2 text-success" />
                            {/* Changed Name */}
                            <span className="fw-bold ayurvedic-brand-name">AyurCare</span>
                        </div>
                        <small className="d-block text-muted">
                            Embracing ancient wisdom for modern wellness.
                        </small>
                    </Col>
                    <Col md={4} className="mb-3 mb-md-0">
                        <h6 className="fw-bold text-uppercase mb-3">Quick Links</h6>
                        <ul className="list-unstyled">
                            <li><Link to="/about" className="text-decoration-none">About Us</Link></li>
                            <li><Link to="/login" className="text-decoration-none">Login</Link></li>
                            <li><Link to="#" className="text-decoration-none">Contact</Link></li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h6 className="fw-bold text-uppercase mb-3">Connect With Us</h6>
                        <div className="social-icons">
                            <a href="#" className="me-3"><FaFacebook size={24} /></a>
                            <a href="#" className="me-3"><FaTwitter size={24} /></a>
                            <a href="#" className="me-3"><FaInstagram size={24} /></a>
                        </div>
                    </Col>
                </Row>
                <div className="text-center py-3">
                    <small className="text-muted">
                        © 2023 AyurCare. All Rights Reserved.
                    </small>
                </div>
            </Container>
        </footer>
    );
};

export default SiteFooter;