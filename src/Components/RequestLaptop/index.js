import React, { useState } from 'react';

const RequestLaptop = () => {
  const [reason, setReason] = useState('');

  const handleRequestLaptop = () => {
    // Handle laptop request logic here (you can connect to an API endpoint)
    console.log('Laptop requested for reason:', reason);
  };

  return (
    <div className="request-laptop">
      <h3>Request a New Laptop</h3>
      <textarea
        placeholder="Reason for requesting"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
      />
      <button onClick={handleRequestLaptop}>Request Laptop</button>
    </div>
  );
};

export default RequestLaptop;
