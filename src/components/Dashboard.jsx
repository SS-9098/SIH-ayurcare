import React, { useContext } from 'react';
import { Container, Row, Col, Card, Button, Table, Badge, ProgressBar } from 'react-bootstrap';
import { FaUserMd, FaUser, FaSignOutAlt, FaLeaf, FaCalendarAlt, FaChartLine, FaBell, FaFileAlt } from 'react-icons/fa';
import { AuthContext } from '../App';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Dashboard = () => {
  const { authState, setAuthState } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuthState({ isAuthenticated: false, userRole: null });
    navigate('/');
  };

  // Sample data for the dashboard
  const recentPatients = [
    { id: 1, name: 'Priya Sharma', condition: 'Digestive Issues', lastVisit: '2023-12-15', status: 'Active' },
    { id: 2, name: 'Rajesh Kumar', condition: 'Stress Management', lastVisit: '2023-12-14', status: 'Follow-up' },
    { id: 3, name: 'Anita Patel', condition: 'Joint Pain', lastVisit: '2023-12-13', status: 'Completed' },
    { id: 4, name: 'Vikram Singh', condition: 'Sleep Disorders', lastVisit: '2023-12-12', status: 'Active' },
  ];

  const upcomingAppointments = [
    { id: 1, patient: 'Meera Gupta', time: '10:00 AM', date: '2023-12-16', type: 'Consultation' },
    { id: 2, patient: 'Arjun Reddy', time: '2:30 PM', date: '2023-12-16', type: 'Follow-up' },
    { id: 3, patient: 'Kavya Nair', time: '4:00 PM', date: '2023-12-16', type: 'New Patient' },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Active':
        return <Badge bg="success">{status}</Badge>;
      case 'Follow-up':
        return <Badge bg="warning">{status}</Badge>;
      case 'Completed':
        return <Badge bg="secondary">{status}</Badge>;
      default:
        return <Badge bg="primary">{status}</Badge>;
    }
  };

  const getAppointmentTypeBadge = (type) => {
    switch (type) {
      case 'Consultation':
        return <Badge bg="primary">{type}</Badge>;
      case 'Follow-up':
        return <Badge bg="info">{type}</Badge>;
      case 'New Patient':
        return <Badge bg="success">{type}</Badge>;
      default:
        return <Badge bg="secondary">{type}</Badge>;
    }
  };

  return (
    <div className="dashboard-container py-5">
      <Container fluid>
        {/* Header */}
        <Row className="mb-4">
          <Col>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h1 className="dashboard-title mb-1">
                  <FaLeaf className="me-3 text-success" />
                  Doctor Dashboard
                </h1>
                <p className="text-muted">Welcome back, Dr. Ayurveda Practitioner</p>
              </div>
              <Button 
                variant="outline-danger" 
                onClick={handleLogout}
                className="dashboard-btn-logout"
              >
                <FaSignOutAlt className="me-2" />
                Logout
              </Button>
            </div>
          </Col>
        </Row>

        {/* Stats Cards */}
        <Row className="g-4 mb-5">
          <Col lg={3} md={6}>
            <Card className="h-100 text-center">
              <Card.Body>
                <FaUser size={40} className="text-primary mb-3" />
                <h3 className="fw-bold text-primary">127</h3>
                <p className="text-muted mb-0">Total Patients</p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6}>
            <Card className="h-100 text-center">
              <Card.Body>
                <FaCalendarAlt size={40} className="text-success mb-3" />
                <h3 className="fw-bold text-success">8</h3>
                <p className="text-muted mb-0">Today's Appointments</p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6}>
            <Card className="h-100 text-center">
              <Card.Body>
                <FaChartLine size={40} className="text-warning mb-3" />
                <h3 className="fw-bold text-warning">94%</h3>
                <p className="text-muted mb-0">Patient Satisfaction</p>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={3} md={6}>
            <Card className="h-100 text-center">
              <Card.Body>
                <FaBell size={40} className="text-info mb-3" />
                <h3 className="fw-bold text-info">5</h3>
                <p className="text-muted mb-0">Pending Reviews</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Main Content */}
        <Row className="g-4">
          {/* Recent Patients */}
          <Col lg={8}>
            <Card className="h-100">
              <Card.Header className="bg-light">
                <h5 className="mb-0">
                  <FaUser className="me-2 text-primary" />
                  Recent Patients
                </h5>
              </Card.Header>
              <Card.Body>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th>Patient Name</th>
                      <th>Condition</th>
                      <th>Last Visit</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentPatients.map((patient) => (
                      <tr key={patient.id}>
                        <td className="fw-semibold">{patient.name}</td>
                        <td>{patient.condition}</td>
                        <td>{patient.lastVisit}</td>
                        <td>{getStatusBadge(patient.status)}</td>
                        <td>
                          <Button variant="outline-primary" size="sm">
                            View Details
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>

          {/* Upcoming Appointments */}
          <Col lg={4}>
            <Card className="h-100">
              <Card.Header className="bg-light">
                <h5 className="mb-0">
                  <FaCalendarAlt className="me-2 text-success" />
                  Today's Appointments
                </h5>
              </Card.Header>
              <Card.Body>
                <div className="d-grid gap-3">
                  {upcomingAppointments.map((appointment) => (
                    <div key={appointment.id} className="border rounded p-3">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h6 className="mb-1 fw-semibold">{appointment.patient}</h6>
                        {getAppointmentTypeBadge(appointment.type)}
                      </div>
                      <p className="text-muted mb-2">
                        <small>
                          <FaCalendarAlt className="me-1" />
                          {appointment.date} at {appointment.time}
                        </small>
                      </p>
                      <Button variant="outline-success" size="sm" className="w-100">
                        Start Consultation
                      </Button>
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Additional Sections */}
        <Row className="g-4 mt-4">
          {/* Treatment Progress */}
          <Col lg={6}>
            <Card>
              <Card.Header className="bg-light">
                <h5 className="mb-0">
                  <FaChartLine className="me-2 text-warning" />
                  Treatment Progress Overview
                </h5>
              </Card.Header>
              <Card.Body>
                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span>Digestive Health Treatments</span>
                    <span className="fw-semibold">75%</span>
                  </div>
                  <ProgressBar now={75} variant="success" />
                </div>
                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span>Stress Management Programs</span>
                    <span className="fw-semibold">60%</span>
                  </div>
                  <ProgressBar now={60} variant="info" />
                </div>
                <div className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span>Joint Pain Therapies</span>
                    <span className="fw-semibold">85%</span>
                  </div>
                  <ProgressBar now={85} variant="warning" />
                </div>
                <div>
                  <div className="d-flex justify-content-between mb-2">
                    <span>Sleep Disorder Treatments</span>
                    <span className="fw-semibold">45%</span>
                  </div>
                  <ProgressBar now={45} variant="danger" />
                </div>
              </Card.Body>
            </Card>
          </Col>

          {/* Quick Actions */}
          <Col lg={6}>
            <Card>
              <Card.Header className="bg-light">
                <h5 className="mb-0">
                  <FaFileAlt className="me-2 text-info" />
                  Quick Actions
                </h5>
              </Card.Header>
              <Card.Body>
                <div className="d-grid gap-3">
                  <Button variant="outline-primary" className="text-start">
                    <FaUser className="me-3" />
                    Add New Patient
                  </Button>
                  <Button variant="outline-success" className="text-start">
                    <FaCalendarAlt className="me-3" />
                    Schedule Appointment
                  </Button>
                  <Button variant="outline-warning" className="text-start">
                    <FaFileAlt className="me-3" />
                    Create Prescription
                  </Button>
                  <Button variant="outline-info" className="text-start">
                    <FaChartLine className="me-3" />
                    View Reports
                  </Button>
                  <Button variant="outline-secondary" className="text-start">
                    <FaBell className="me-3" />
                    Manage Notifications
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