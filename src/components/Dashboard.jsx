import React, { useContext } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaUserMd, FaUser, FaSignOutAlt, FaLeaf } from 'react-icons/fa';
import { AuthContext } from '../App';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // For general styling

const Dashboard = () => {
  const { authState, setAuthState } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuthState({ isAuthenticated: false, userRole: null });
    navigate('/');
  };

  return (
    <div className="dashboard-container py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8}>
            <Card className="dashboard-card text-center">
              <Card.Body>
                <div className="mb-4">
                  <FaLeaf size={60} className="text-success mb-3 floating" />
                  <h1 className="dashboard-title">Welcome to Your Dashboard</h1>
                  <p className="text-muted">
                    Manage your Ayurvedic practice with our comprehensive tools
                  </p>
                </div>

                <Row className="g-4 mb-4">
                  <Col md={4}>
                    <Card className="h-100 bg-light-green">
                      <Card.Body className="text-center">
                        <FaUser size={40} className="text-success mb-3" />
                        <h5>Patient Management</h5>
                        <p className="text-muted">View and manage patient records</p>
                        <Button variant="outline-success" size="sm">
                          View Patients
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="h-100 bg-light-green">
                      <Card.Body className="text-center">
                        <FaUserMd size={40} className="text-primary mb-3" />
                        <h5>Consultations</h5>
                        <p className="text-muted">Schedule and manage consultations</p>
                        <Button variant="outline-primary" size="sm">
                          View Schedule
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col md={4}>
                    <Card className="h-100 bg-light-green">
                      <Card.Body className="text-center">
                        <FaLeaf size={40} className="text-warning mb-3" />
                        <h5>Treatments</h5>
                        <p className="text-muted">Manage treatment plans</p>
                        <Button variant="outline-warning" size="sm">
                          View Treatments
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>

                <div className="mt-4">
                  <Button 
                    variant="danger" 
                    onClick={handleLogout}
                    className="dashboard-btn-logout"
                  >
                    <FaSignOutAlt className="me-2" />
                    Logout
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;