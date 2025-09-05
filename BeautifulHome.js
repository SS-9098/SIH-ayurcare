import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaStar, FaLeaf } from 'react-icons/fa';
import './App.css';

const BeautifulHome = () => {
    return (
        <div className="home-container d-flex align-items-center py-5">
            <Container>
                <Row className="align-items-center">
                    <Col lg={6} className="text-center text-lg-start mb-4 mb-lg-0">
                        <div className="home-header">
                            <FaLeaf size={80} className="text-success mb-3 floating" />
                            {/* Changed Name */}
                            <h1 className="display-4 fw-bold text-ayurvedic">Discover Your Path to AyurCare Wellness</h1>
                            <p className="lead text-muted my-4">
                                Embrace a healthier life through the wisdom of Ayurveda. Our platform connects you with experienced doctors and personalized care plans, all in one secure place.
                            </p>
                            <Button as={Link} to="/doctor-login" className="btn-ayurvedic-lg">
                                Login
                            </Button>
                        </div>
                    </Col>
                    <Col lg={6} className="d-flex justify-content-center">
                        <div className="home-image-card p-4 rounded-3 text-center">
                            <div className="ayurveda-main-icon mb-3">
                                <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {/* AyurCare Leaf Logo */}
                                    {/* Main Leaf */}
                                    <path d="M60 20 Q80 15 100 25 Q95 40 80 50 Q70 45 60 50 Q50 45 40 50 Q25 40 20 25 Q40 15 60 20" 
                                          fill="#4CAF50" stroke="#2E7D32" strokeWidth="2"/>
                                    
                                    {/* Leaf Veins */}
                                    <path d="M60 20 L60 50" stroke="#2E7D32" strokeWidth="2"/>
                                    <path d="M60 25 Q70 30 75 35" stroke="#2E7D32" strokeWidth="1.5"/>
                                    <path d="M60 25 Q50 30 45 35" stroke="#2E7D32" strokeWidth="1.5"/>
                                    <path d="M60 30 Q80 35 85 40" stroke="#2E7D32" strokeWidth="1.5"/>
                                    <path d="M60 30 Q40 35 35 40" stroke="#2E7D32" strokeWidth="1.5"/>
                                    
                                    {/* Leaf Shine/Highlight */}
                                    <path d="M60 20 Q70 18 75 22 Q70 30 60 30 Q50 30 45 22 Q50 18 60 20" 
                                          fill="#66BB6A" opacity="0.6"/>
                                    
                                    {/* Stem */}
                                    <rect x="58" y="50" width="4" height="15" fill="#8BC34A" rx="2"/>
                                    
                                    {/* Small Decorative Leaves */}
                                    <ellipse cx="25" cy="70" rx="6" ry="3" fill="#66BB6A" transform="rotate(-30 25 70)"/>
                                    <ellipse cx="95" cy="75" rx="6" ry="3" fill="#66BB6A" transform="rotate(30 95 75)"/>
                                    
                                    {/* Brand Name "AyurCare" */}
                                    <text x="60" y="95" textAnchor="middle" fill="#2E7D32" fontSize="12" fontWeight="bold" fontFamily="Arial, sans-serif">
                                        AyurCare
                                    </text>
                                </svg>
                            </div>
                            <h4 className="fw-bold">Holistic Health</h4>
                            <p className="text-muted">A balanced mind, body, and spirit are key to vitality.</p>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-5 pt-5">
                    <Col md={4} className="text-center mb-4">
                        <div className="feature-icon mb-3">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {/* Ayurveda Care Symbol */}
                                <circle cx="20" cy="20" r="18" fill="none" stroke="#4CAF50" strokeWidth="2"/>
                                <circle cx="20" cy="15" r="4" fill="#FF6B35"/>
                                <circle cx="15" cy="22" r="4" fill="#4A90E2"/>
                                <circle cx="25" cy="22" r="4" fill="#7ED321"/>
                                <path d="M15 28 Q20 25 25 28" fill="none" stroke="#4CAF50" strokeWidth="2"/>
                            </svg>
                        </div>
                        <h5 className="fw-bold">Personalized Care</h5>
                        <p className="text-muted">Connect with doctors who understand your unique needs.</p>
                    </Col>
                    <Col md={4} className="text-center mb-4">
                        <div className="feature-icon mb-3"><FaShieldAlt size={40} className="text-primary" /></div>
                        <h5 className="fw-bold">Secure & Private</h5>
                        <p className="text-muted">Your health data is protected with state-of-the-art security.</p>
                    </Col>
                    <Col md={4} className="text-center mb-4">
                        <div className="feature-icon mb-3"><FaStar size={40} className="text-warning" /></div>
                        <h5 className="fw-bold">Expert Guidance</h5>
                        <p className="text-muted">Access a network of trusted Ayurvedic practitioners.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default BeautifulHome;