import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/loginForm';
import RobotList from './components/robotList';
import RobotDetail from './components/robotDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/robots" element={<RobotList />} />
          <Route path="/robots/:id" element={<RobotDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
