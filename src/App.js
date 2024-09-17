import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import ChangePassword from './components/ChangePassword';
import Dashboard from './components/Dashboard';
import UpdateProfile from './components/UpdateProfile';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/changepassword" element={<ChangePassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/update-profile/:username" element={<UpdateProfile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
