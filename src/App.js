import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from './Components/AdminDashboard';
import EmployeeDashboard from './Components/EmployeeDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/employee/:id" component={EmployeeDashboard} />
      </Routes>
    </Router>
  );
}

export default App;
