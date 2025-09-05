import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Card, Alert, Spinner } from "react-bootstrap";
import { 
  FaLeaf, FaUserMd, FaEye, FaEyeSlash, FaLock, FaEnvelope, FaUser, FaIdCard, 
  FaBuilding, FaMapMarkerAlt, FaCalendarAlt, FaShieldAlt, FaHeart, FaStar
} from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import './BeautifulLogin.css';

const DoctorRegistration = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    doctorLicenseNumber: "",
    issuingCouncil: "",
    stateOfRegistration: "",
    registrationDate: "",
    registrationValidityDate: "",
    aadharNumber: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return false;
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return false;
    }
    if (formData.aadharNumber.length !== 12) {
      setError("Aadhar number must be 12 digits");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    if (!validateForm()) {
      setLoading(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 3000));
      
      setSuccess("Registration successful! Your account is under review. You will receive an email once approved.");
      setTimeout(() => navigate('/doctor-login'), 2000);
    } catch (err) {
      setError("An error occurred during registration. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
  ];

  return (
    <div className="login-container">
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} md={12} sm={12}>
            <Card className="login-card">
              <div className="login-header">
                <div className="login-logo floating">
                  <FaUserMd />
                </div>
                <h2 className="login-title">Doctor Registration</h2>
                <div className="ayurveda-logo mb-3">
                  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Medical Cross with Ayurveda Elements */}
                    <circle cx="40" cy="40" r="35" fill="none" stroke="#4CAF50" strokeWidth="3"/>
                    <rect x="35" y="20" width="10" height="40" fill="#4CAF50" rx="2"/>
                    <rect x="20" y="35" width="40" height="10" fill="#4CAF50" rx="2"/>
                    <circle cx="40" cy="15" r="5" fill="#FF6B35"/>
                    <circle cx="15" cy="40" r="5" fill="#4A90E2"/>
                    <circle cx="65" cy="40" r="5" fill="#7ED321"/>
                    <circle cx="40" cy="65" r="5" fill="#FF6B35"/>
                  </svg>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-3">
                  <FaStar className="text-warning me-2" /><FaStar className="text-warning me-2" /><FaStar className="text-warning me-2" /><FaStar className="text-warning me-2" /><FaStar className="text-warning" />
                </div>
              </div>

              {error && (<Alert variant="danger" className="mb-4" dismissible onClose={() => setError("")}><FaShieldAlt className="me-2" />{error}</Alert>)}
              {success && (<Alert variant="success" className="mb-4" dismissible onClose={() => setSuccess("")}><FaHeart className="me-2" />{success}</Alert>)}

              <Form onSubmit={handleSubmit}>
                <Row>
                  {/* Personal Information */}
                  <Col md={6}>
                    <h5 className="text-ayurvedic mb-3"><FaUser className="me-2" />Personal Information</h5>
                    
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold text-ayurvedic">First Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Enter your first name"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold text-ayurvedic">Last Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Enter your last name"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold text-ayurvedic"><FaEnvelope className="me-2" />Email Address</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold text-ayurvedic"><FaLock className="me-2" />Password</Form.Label>
                      <div className="position-relative">
                        <Form.Control
                          type={showPassword ? "text" : "password"}
                          name="password"
                          value={formData.password}
                          onChange={handleInputChange}
                          placeholder="Enter your password"
                          required
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

                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold text-ayurvedic"><FaLock className="me-2" />Confirm Password</Form.Label>
                      <div className="position-relative">
                        <Form.Control
                          type={showConfirmPassword ? "text" : "password"}
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          placeholder="Confirm your password"
                          required
                        />
                        <Button
                          type="button"
                          variant="link"
                          className="position-absolute end-0 top-50 translate-middle-y me-3"
                          onClick={toggleConfirmPasswordVisibility}
                          style={{ zIndex: 10 }}
                        >
                          {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                        </Button>
                      </div>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold text-ayurvedic"><FaIdCard className="me-2" />Aadhar Number</Form.Label>
                      <Form.Control
                        type="text"
                        name="aadharNumber"
                        value={formData.aadharNumber}
                        onChange={handleInputChange}
                        placeholder="Enter 12-digit Aadhar number"
                        maxLength="12"
                        pattern="[0-9]{12}"
                        required
                      />
                    </Form.Group>
                  </Col>

                  {/* Professional Information */}
                  <Col md={6}>
                    <h5 className="text-ayurvedic mb-3"><FaUserMd className="me-2" />Professional Information</h5>
                    
                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold text-ayurvedic">Doctor License Number</Form.Label>
                      <Form.Control
                        type="text"
                        name="doctorLicenseNumber"
                        value={formData.doctorLicenseNumber}
                        onChange={handleInputChange}
                        placeholder="Enter your license number"
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold text-ayurvedic"><FaBuilding className="me-2" />Issuing Council</Form.Label>
                      <Form.Select
                        name="issuingCouncil"
                        value={formData.issuingCouncil}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select Issuing Council</option>
                        <option value="Medical Council of India (MCI)">Medical Council of India (MCI)</option>
                        <option value="Central Council of Indian Medicine (CCIM)">Central Council of Indian Medicine (CCIM)</option>
                        <option value="Central Council of Homoeopathy (CCH)">Central Council of Homoeopathy (CCH)</option>
                        <option value="State Medical Council">State Medical Council</option>
                        <option value="Other">Other</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold text-ayurvedic"><FaMapMarkerAlt className="me-2" />State of Registration</Form.Label>
                      <Form.Select
                        name="stateOfRegistration"
                        value={formData.stateOfRegistration}
                        onChange={handleInputChange}
                        required
                      >
                        <option value="">Select State</option>
                        {states.map((state) => (
                          <option key={state} value={state}>{state}</option>
                        ))}
                      </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold text-ayurvedic"><FaCalendarAlt className="me-2" />Registration Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="registrationDate"
                        value={formData.registrationDate}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label className="fw-bold text-ayurvedic"><FaCalendarAlt className="me-2" />Registration Validity Date</Form.Label>
                      <Form.Control
                        type="date"
                        name="registrationValidityDate"
                        value={formData.registrationValidityDate}
                        onChange={handleInputChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <div className="mb-4 mt-4">
                  <Form.Check 
                    type="checkbox" 
                    label={
                      <span className="text-muted">
                        I agree to the{' '}
                        <a 
                          href="#" 
                          className="text-ayurvedic text-decoration-none fw-bold"
                          onClick={(e) => {
                            e.preventDefault();
                            const termsWindow = window.open('', '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');
                            termsWindow.document.write(`
                              <!DOCTYPE html>
                              <html>
                              <head>
                                <title>Terms and Conditions - AyurPractice</title>
                                <style>
                                  body { 
                                    font-family: Arial, sans-serif; 
                                    line-height: 1.6; 
                                    margin: 40px; 
                                    background-color: #f8f9fa;
                                  }
                                  .container { 
                                    max-width: 800px; 
                                    margin: 0 auto; 
                                    background: white; 
                                    padding: 30px; 
                                    border-radius: 10px; 
                                    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                                  }
                                  h1 { 
                                    color: #2E7D32; 
                                    text-align: center; 
                                    margin-bottom: 30px;
                                    border-bottom: 2px solid #4CAF50;
                                    padding-bottom: 10px;
                                  }
                                  p { 
                                    margin-bottom: 15px; 
                                    text-align: justify;
                                  }
                                  .highlight { 
                                    background-color: #E8F5E8; 
                                    padding: 15px; 
                                    border-left: 4px solid #4CAF50; 
                                    margin: 20px 0;
                                  }
                                </style>
                              </head>
                              <body>
                                <div class="container">
                                  <h1>Terms and Conditions - AyurPractice</h1>
                                  <div class="highlight">
                                    <p><strong>Welcome to AyurPractice.</strong> We want to assure you that your personal and medical information is safe and secure with us. AyurPractice is committed to protecting your privacy and ensuring that your data is never shared with unauthorized third parties under any circumstances.</p>
                                  </div>
                                  
                                  <p>Our organisation strictly manages all patient data in accordance with applicable healthcare laws and industry standards. This means that your medical records, treatment history, and personal details are stored securely and accessed only by authorized AyurPractice medical professionals who are directly involved in your care. We take every precaution to prevent any unauthorized access, alteration, disclosure, or destruction of your sensitive information.</p>
                                  
                                  <p>We understand the importance of confidentiality and have implemented robust security measures, including encryption, secure data storage, and regular audits, to maintain the integrity of your information. AyurPractice does not sell, rent, or trade your data, nor do we give your information to advertisers or other external organizations.</p>
                                  
                                  <p>If you have any concerns or questions regarding the security of your data or how it is used, please feel free to contact our support team. We are dedicated to transparency and will gladly provide you with detailed information about our privacy practices.</p>
                                  
                                  <div class="highlight">
                                    <p><strong>By choosing AyurPractice, you entrust us with your health, and we take that responsibility very seriously. Your privacy and trust are our top priorities.</strong></p>
                                  </div>
                                  
                                  <p>Thank you for being a valued member of AyurPractice.</p>
                                </div>
                              </body>
                              </html>
                            `);
                            termsWindow.document.close();
                          }}
                        >
                          Terms and Conditions
                        </a>
                      </span>
                    }
                    required 
                  />
                </div>

                <Button
                  type="submit"
                  className="btn-ayurvedic w-100 mb-4"
                  disabled={loading}
                  size="lg"
                >
                  {loading ? (
                    <><Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />Registering...</>
                  ) : (
                    <><FaUserMd className="me-2" />Register as Doctor</>
                  )}
                </Button>

                <div className="text-center">
                  <p className="text-muted mb-0">
                    Already have an account? 
                    <a href="/doctor-login" className="text-ayurvedic text-decoration-none fw-bold ms-1">Login here</a>
                  </p>
                </div>
              </Form>

              <div className="mt-5 pt-4 border-top">
                <h6 className="text-center text-ayurvedic mb-3">Why Join Our Platform?</h6>
                <Row className="text-center">
                  <Col xs={4}>
                    <div className="mb-2">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="10" cy="10" r="8" fill="#4CAF50"/>
                        <rect x="8" y="6" width="4" height="8" fill="white"/>
                        <rect x="6" y="8" width="8" height="4" fill="white"/>
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
                    <small className="text-muted">Professional</small>
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

export default DoctorRegistration;
