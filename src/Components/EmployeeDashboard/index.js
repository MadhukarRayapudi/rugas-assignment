import React, { useState, useEffect } from 'react';
import { getAssignments, reportIssue } from '../../services/api';
import RequestLaptop from '../RequestLaptop';
import ReportIssue from '../ReportIssue';

const EmployeeDashboard = ({ employeeId }) => {
  const [assignedLaptop, setAssignedLaptop] = useState(null);
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchAssignedLaptop = async () => {
      try {
        const assignmentsData = await getAssignments(employeeId);
        setAssignedLaptop(assignmentsData[0]); // Assuming one laptop per employee
      } catch (error) {
        console.error('Failed to load assignments:', error);
      }
    };
    fetchAssignedLaptop();
  }, [employeeId]);

  const handleReportIssue = async (issueData) => {
    try {
      await reportIssue(issueData);
      alert('Issue reported successfully!');
    } catch (error) {
      console.error('Failed to report issue:', error);
      alert('Error reporting issue!');
    }
  };

  return (
    <div className="employee-dashboard">
      <h1>Employee Dashboard</h1>
      {assignedLaptop ? (
        <div>
          <h2>Assigned Laptop: {assignedLaptop.brand} - {assignedLaptop.model}</h2>
          <p>Serial Number: {assignedLaptop.serialNumber}</p>
        </div>
      ) : (
        <p>No laptop assigned yet</p>
      )}
      <RequestLaptop />
      <ReportIssue onReportIssue={handleReportIssue} />
    </div>
  );
};

export default EmployeeDashboard;
