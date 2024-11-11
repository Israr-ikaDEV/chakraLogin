import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import Home from './components/Home'; // Import the Home component
import Profile from './components/Profile'; // Import the Profile component
import Settings from './components/Settings'; // Import the Settings component

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Route for Login Form */}
        <Route path="/" element={<LoginForm />} />

        {/* Route for Dashboard */}
        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
