import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaHeart, FaSeedling, FaHandsHelping } from 'react-icons/fa';
import './App.css';

const About = () => {
    return (
        <div className="about-container py-5">
            <Container>
                <Row className="justify-content-center text-center mb-5">
                    <Col md={8}>
                        <h1 className="display-4 fw-bold text-ayurvedic">Our Philosophy</h1>
                        <p className="lead text-muted">
                            At Ayurveda Wellness, we believe in a holistic approach to health, focusing on the harmony of mind, body, and spirit.
                        </p>
                    </Col>
                </Row>
                <Row className="g-4">
                    <Col md={4}>
                        <Card className="h-100 about-card text-center shadow-sm">
                            <Card.Body>
                                <div className="about-icon mb-3"><FaHeart size={50} className="text-danger" /></div>
                                <h4 className="fw-bold text-ayurvedic">Authentic Ayurveda</h4>
                                <p className="text-muted">
                                    We provide a platform that upholds the ancient principles of Ayurveda, connecting you with verified practitioners.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="h-100 about-card text-center shadow-sm">
                            <Card.Body>
                                <div className="about-icon mb-3"><FaSeedling size={50} className="text-success" /></div>
                                <h4 className="fw-bold text-ayurvedic">Growth & Harmony</h4>
                                <p className="text-muted">
                                    Our goal is to help you achieve a balanced state of health, promoting growth and harmony within your life.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="h-100 about-card text-center shadow-sm">
                            <Card.Body>
                                <div className="about-icon mb-3"><FaHandsHelping size={50} className="text-primary" /></div>
                                <h4 className="fw-bold text-ayurvedic">Community & Support</h4>
                                <p className="text-muted">
                                    We foster a supportive community for both patients and doctors, ensuring everyone is on the path to wellness.
                                </p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;