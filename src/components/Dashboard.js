import React, { useContext } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaUserMd, FaUser, FaSignOutAlt, FaLeaf } from 'react-icons/fa';
import { AuthContext } from '../App';
import { useNavigate } from 'react-router-dom';
import './App.css'; // For general styling

const Dashboard = () => {
    const { authState, setAuthState } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        setAuthState({ isAuthenticated: false, userRole: null });
        navigate('/');
    };

    const userIcon = authState.userRole === 'doctor' ? <FaUserMd size={50} /> : <FaUser size={50} />;
    const roleText = authState.userRole === 'doctor' ? 'Doctor' : 'Patient';

    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="p-4 dashboard-card text-center">
                        <div className="dashboard-header mb-4">
                            <FaLeaf size={70} className="text-success floating" />
                            <h2 className="dashboard-title mt-3">Welcome to your Dashboard, {roleText}!</h2>
                        </div>
                        <div className="d-flex justify-content-center mb-4">
                            <div className="dashboard-icon p-4 rounded-circle bg-light-green shadow-sm">
                                {userIcon}
                            </div>
                        </div>
                        <p className="text-muted">This is a protected page. Your role is: <span className="fw-bold text-success">{roleText}</span>.</p>
                        <Button variant="danger" onClick={handleLogout} className="mt-4 dashboard-btn-logout">
                            <FaSignOutAlt className="me-2" /> Logout
                        </Button>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;