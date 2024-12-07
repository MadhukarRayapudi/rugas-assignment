import React, { useState } from 'react';
import { addLaptop } from '../../services/api';

const ManageLaptops = ({ laptops }) => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [serialNumber, setSerialNumber] = useState('');
  const [purchaseDate, setPurchaseDate] = useState('');

  const handleAddLaptop = async () => {
    const newLaptop = { brand, model, serialNumber, purchaseDate, status: 'available' };
    try {
      await addLaptop(newLaptop);
      alert('Laptop added successfully!');
    } catch (error) {
      console.error('Failed to add laptop:', error);
      alert('Error adding laptop!');
    }
  };

  return (
    <div className="manage-laptops">
      <h2>Manage Laptops</h2>
      <input type="text" placeholder="Brand" value={brand} onChange={(e) => setBrand(e.target.value)} />
      <input type="text" placeholder="Model" value={model} onChange={(e) => setModel(e.target.value)} />
      <input type="text" placeholder="Serial Number" value={serialNumber} onChange={(e) => setSerialNumber(e.target.value)} />
      <input type="date" value={purchaseDate} onChange={(e) => setPurchaseDate(e.target.value)} />
      <button onClick={handleAddLaptop}>Add Laptop</button>
    </div>
  );
};

export default ManageLaptops;
