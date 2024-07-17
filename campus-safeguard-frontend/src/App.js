// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from '@mui/material';
import { AuthProvider } from './context/AuthContext';
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import PanicButton from './components/PanicButton';
import Settings from './components/Settings';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Container>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/panic" element={<PanicButton />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Container>
      </Router>
    </AuthProvider>
  );
}

export default App;
