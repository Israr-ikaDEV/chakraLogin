import React from 'react';
import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import Home from './components/Home'; // Import the Home component
import Profile from './components/Profile'; // Import the Profile component
import Settings from './components/Settings'; // Import the Settings component
import PrivateRoute from './components/PrivateRoute';
import ProductsTable from './components/ProductsTable';

// Utility function for generating token (could be in a separate file)
const generateToken = (): string => {
  return Math.random().toString(36); // Generates a random token
};

const App: React.FC = () => {
  

  // Handle login - generate token and store in localStorage
  const handleLogin = () => {
    const token = generateToken();
    localStorage.setItem('auth_token', token); // Store token in localStorage
     // Redirect to the dashboard after login
  };

  // Handle logout - remove token from localStorage
  const handleLogout = () => {
    localStorage.removeItem('auth_token');
     // Redirect to login page after logout
  };

  return (
    <Router>
      <Routes>
        {/* Route for Login Form */}
        <Route path="/" element={<LoginForm onLogin={handleLogin} />} />

        {/* Protected routes (Dashboard, Home, Profile, Settings) */}
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard/*" element={<Dashboard onLogout={handleLogout} />}>
            <Route path="home" element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="settings" element={<Settings />} />
            <Route path="products" element={<ProductsTable/>} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;