const apiUrl = 'http://localhost:5000'; // Your backend URL

const fetchData = async (url, options = {}) => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Something went wrong');
    }
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

// Get all laptops
export const getLaptops = async () => {
  return await fetchData(`${apiUrl}/laptops`);
};

// Get all employees
export const getEmployees = async () => {
  return await fetchData(`${apiUrl}/employees`);
};

// Add a laptop
export const addLaptop = async (laptopData) => {
  return await fetchData(`${apiUrl}/laptops`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(laptopData),
  });
};

// Assign a laptop
export const assignLaptop = async (assignmentData) => {
  return await fetchData(`${apiUrl}/assignments`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(assignmentData),
  });
};

// Report an issue
export const reportIssue = async (issueData) => {
  return await fetchData(`${apiUrl}/issues`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(issueData),
  });
};

// Get assignments for an employee
export const getAssignments = async (employeeId) => {
  return await fetchData(`${apiUrl}/assignments/${employeeId}`);
};

// Get maintenance history for a laptop
export const getMaintenanceHistory = async (laptopId) => {
  return await fetchData(`${apiUrl}/maintenance/${laptopId}`);
};

console.log('API file loaded');