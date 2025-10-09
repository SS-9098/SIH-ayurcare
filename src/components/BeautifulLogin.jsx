import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Form, Button, Card, Alert, Spinner } from "react-bootstrap";
import { 
  FaLeaf, FaUserMd, FaEye, FaEyeSlash, FaLock, FaEnvelope, FaHeart, FaShieldAlt, FaStar
} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../src/App'; 
import './BeautifulLogin.css';

const BeautifulLogin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const { setAuthState } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      if (formData.email === "doctor@ayurveda.com" && formData.password === "doctor123") {
        setSuccess("Login successful! Redirecting to dashboard...");
        setAuthState({ isAuthenticated: true, userRole: "doctor" });
        setTimeout(() => navigate('/dashboard'), 1000);
      } else {
        setError("Invalid email or password. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.animationDuration = (Math.random() * 3 + 2) + 's';
      particle.style.opacity = Math.random();
      particle.style.width = particle.style.height = Math.random() * 4 + 2 + 'px';
      
      document.querySelector('.particles')?.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
      }, 5000);
    };

    const interval = setInterval(createParticle, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="login-container">
      <div className="particles"></div>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} md={10} sm={12}>
            <Card className="login-card">
              <div className="login-header">
                <div className="login-logo floating">
                  <FaLeaf />
                </div>
                {/* Changed Name */}
                <h2 className="login-title">AyushAhar</h2>
                <div className="ayurveda-logo mb-3">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Ayurveda Symbol - Three Doshas */}
                    <circle cx="40" cy="40" r="35" fill="none" stroke="#8B4513" strokeWidth="3"/>
                    <circle cx="40" cy="25" r="8" fill="#FF6B35"/>
                    <circle cx="30" cy="45" r="8" fill="#4A90E2"/>
                    <circle cx="50" cy="45" r="8" fill="#7ED321"/>
                    {/* Connecting Lines */}
                    <line x1="40" y1="33" x2="30" y2="37" stroke="#8B4513" strokeWidth="2"/>
                    <line x1="40" y1="33" x2="50" y2="37" stroke="#8B4513" strokeWidth="2"/>
                    <line x1="30" y1="53" x2="50" y2="53" stroke="#8B4513" strokeWidth="2"/>
                    {/* Om Symbol */}
                    <path d="M35 55 Q40 50 45 55 Q40 60 35 55" fill="none" stroke="#8B4513" strokeWidth="2"/>
                  </svg>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-3">
                  <FaStar className="text-warning me-2" /><FaStar className="text-warning me-2" /><FaStar className="text-warning me-2" /><FaStar className="text-warning me-2" /><FaStar className="text-warning" />
                </div>
              </div>

              <div className="d-flex justify-content-center mb-4">
                <div className="btn-group" role="group">
                  <Button
                    variant="primary"
                    className="btn-ayurvedic"
                  >
                    <FaUserMd className="me-2" />Doctor Login
                  </Button>
                </div>
              </div>

              {error && (<Alert variant="danger" className="mb-4" dismissible onClose={() => setError("")}><FaShieldAlt className="me-2" />{error}</Alert>)}
              {success && (<Alert variant="success" className="mb-4" dismissible onClose={() => setSuccess("")}><FaHeart className="me-2" />{success}</Alert>)}

              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold text-ayurvedic"><FaEnvelope className="me-2" />Email Address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    required
                    className="form-control-lg"
                  />
                </Form.Group>

                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold text-ayurvedic"><FaLock className="me-2" />Password</Form.Label>
                  <div className="position-relative">
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="Enter your password"
                      required
                      className="form-control-lg"
                    />
                    <Button
                      type="button"
                      variant="link"
                      className="position-absolute end-0 top-50 translate-middle-y me-3"
                      onClick={togglePasswordVisibility}
                      style={{ zIndex: 10 }}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </Button>
                  </div>
                </Form.Group>

                <div className="d-flex justify-content-between align-items-center mb-4">
                  <Form.Check type="checkbox" label="Remember me" className="text-muted" />
                  <a href="#" className="text-ayurvedic text-decoration-none">Forgot Password?</a>
                </div>

                <Button
                  type="submit"
                  className="btn-ayurvedic w-100 mb-4"
                  disabled={loading}
                  size="lg"
                >
                  {loading ? (
                    <><Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />Signing In...</>
                  ) : (
                    <><FaUserMd className="me-2" />Sign In</>
                  )}
                </Button>

                <div className="text-center">
                  <p className="text-muted mb-0">Don't have an account? <a href="#" className="text-ayurvedic text-decoration-none fw-bold">Contact Admin</a></p>
                </div>
              </Form>

              <div className="mt-5 pt-4 border-top">
                <h6 className="text-center text-ayurvedic mb-3">Why Choose Our Platform?</h6>
                <Row className="text-center">
                  <Col xs={4}>
                    <div className="mb-2">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="8" fill="#8B4513"/>
                        <circle cx="10" cy="6" r="2" fill="#FF6B35"/>
                        <circle cx="7" cy="12" r="2" fill="#4A90E2"/>
                        <circle cx="13" cy="12" r="2" fill="#7ED321"/>
                      </svg>
                    </div>
                    <small className="text-muted">Patient Care</small>
                  </Col>
                  <Col xs={4}>
                    <div className="mb-2"><FaShieldAlt className="text-primary" size={20} /></div>
                    <small className="text-muted">Secure</small>
                  </Col>
                  <Col xs={4}>
                    <div className="mb-2"><FaStar className="text-warning" size={20} /></div>
                    <small className="text-muted">Reliable</small>
                  </Col>
                </Row>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BeautifulLogin;
