import React from 'react';
import Sidebar from '../Components/Sidebar';
import Dashboard from '../pages/Dashboard'; 
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
