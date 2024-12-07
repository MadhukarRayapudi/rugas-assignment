import React, { useState, useEffect } from 'react';
import { getLaptops } from '../../services/api';
import ManageLaptops from '../ManageLaptops';

const AdminDashboard = () => {
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    const fetchLaptops = async () => {
      try {
        const laptopsData = await getLaptops();
        setLaptops(laptopsData);
      } catch (error) {
        console.error('Failed to load laptops:', error);
      }
    };
    fetchLaptops();
  }, []);

  const totalLaptops = laptops.length;
  const assignedLaptops = laptops.filter(laptop => laptop.status === 'assigned').length;
  const availableLaptops = laptops.filter(laptop => laptop.status === 'available').length;
  const maintenanceLaptops = laptops.filter(laptop => laptop.status === 'maintenance').length;

  return (
    <div className="dashboard">
      <h1>Admin Dashboard</h1>
      <div className="overview">
        <div className="card">Total Laptops: {totalLaptops}</div>
        <div className="card">Assigned Laptops: {assignedLaptops}</div>
        <div className="card">Available Laptops: {availableLaptops}</div>
        <div className="card">Laptops in Maintenance: {maintenanceLaptops}</div>
      </div>
      <ManageLaptops laptops={laptops} />
    </div>
  );
};

export default AdminDashboard;
