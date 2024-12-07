import React, { useState } from 'react';

const ReportIssue = ({ onReportIssue }) => {
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low');

  const handleSubmit = () => {
    const issueData = {
      laptopId: 1, // Use actual laptop ID
      description,
      priority,
      status: 'Open',
      reportedBy: 'Employee', // Use actual employee data
      reportedAt: new Date().toISOString(),
    };
    onReportIssue(issueData);
  };

  return (
    <div className="report-issue">
      <h3>Report an Issue</h3>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Describe the issue"
      ></textarea>
      <select onChange={(e) => setPriority(e.target.value)} value={priority}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button onClick={handleSubmit}>Report Issue</button>
    </div>
  );
};

export default ReportIssue;
