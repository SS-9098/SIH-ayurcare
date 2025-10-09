import React, { useState, createContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SiteNavbar from './components/SiteNavbar';
import SiteFooter from './components/SiteFooter';
import BeautifulHome from './components/BeautifulHome';
import About from './components/About';
import DoctorLogin from './components/DoctorLogin';
import DoctorRegistration from './components/DoctorRegistration';
import AyurvedaPracticeApp from './components/dashboard2';
import DoshaAssessment from './components/DoshaAssessment';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const AuthContext = createContext(null);

const PrivateRoute = ({ children, authState }) => {
  return authState.isAuthenticated ? children : <Navigate to="/doctor-login" />;
};

function App() {
  const [authState, setAuthState] = useState({ isAuthenticated: false, userRole: null });

  return (
    <AuthContext.Provider value={{ authState, setAuthState }}>
      <div className="d-flex flex-column min-vh-100">
        <SiteNavbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<BeautifulHome />} />
            <Route path="/about" element={<About />} />
            <Route path="/doctor-login" element={<DoctorLogin />} />
            <Route path="/doctor-registration" element={<DoctorRegistration />} />
            <Route 
              path="/dashboard" 
              element={
                <PrivateRoute authState={authState}>
                  <AyurvedaPracticeApp />
                </PrivateRoute>
              } 
            />
            <Route path="/assessment" element={<DoshaAssessment />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <SiteFooter />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
