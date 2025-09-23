@@ .. @@
 import React, { useContext } from 'react';
 import { Container, Row, Col, Card, Button } from 'react-bootstrap';
 import { FaUserMd, FaUser, FaSignOutAlt, FaLeaf } from 'react-icons/fa';
 import { AuthContext } from '../App';
 import { useNavigate } from 'react-router-dom';
-import './App.css'; // For general styling
+import '../App.css'; // For general styling
 
 const Dashboard = () => {