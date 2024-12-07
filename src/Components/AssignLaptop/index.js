import React, { useState, useEffect } from 'react';
import { getEmployees, assignLaptop } from '../services/api';

const AssignLaptop = () => {
  const [laptops, setLaptops] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [selectedLaptop, setSelectedLaptop] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState('');

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const employeesData = await getEmployees();
        setEmployees(employeesData);
      } catch (error) {
        console.error('Failed to load employees:', error);
      }
    };
    fetchEmployees();
  }, []);

  const handleAssignLaptop = async () => {
    const assignmentData = {
      laptopId: selectedLaptop,
      employeeId: selectedEmployee,
      assignedAt: new Date().toISOString(),
    };
    try {
      await assignLaptop(assignmentData);
      alert('Laptop assigned successfully!');
    } catch (error) {
      console.error('Failed to assign laptop:', error);
      alert('Error assigning laptop!');
    }
  };

  return (
    <div className="assign-laptop">
      <h2>Assign Laptop</h2>
      <select onChange={(e) => setSelectedLaptop(e.target.value)} value={selectedLaptop}>
        {laptops.map(laptop => (
          <option key={laptop.id} value={laptop.id}>{laptop.brand} - {laptop.model}</option>
        ))}
      </select>
      <select onChange={(e) => setSelectedEmployee(e.target.value)} value={selectedEmployee}>
        {employees.map(employee => (
          <option key={employee.id} value={employee.id}>{employee.name}</option>
        ))}
      </select>
      <button onClick={handleAssignLaptop}>Assign Laptop</button>
    </div>
  );
};

export default AssignLaptop;
