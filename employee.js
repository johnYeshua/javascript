// Set to store unique employee IDs
const employeeIdSet = new Set();

// Map to store employee details (ID as key, {name, department} as value)
const employeeDetailsMap = new Map();

// Function to add an employee
function addEmployee(employeeId, name, department) {
  // Check if the employee ID is unique
  if (employeeIdSet.has(employeeId)) {
    console.log(`Employee with ID ${employeeId} already exists.`);
    return;
  }

  // Add the employee ID to the set
  employeeIdSet.add(employeeId);

  // Add the employee details to the map
  employeeDetailsMap.set(employeeId, { name, department });

  console.log(`Employee added successfully: ID - ${employeeId}, Name - ${name}, Department - ${department}`);
}

// Function to get employee details by ID
function getEmployeeDetails(employeeId) {
  const employeeDetails = employeeDetailsMap.get(employeeId);

  if (employeeDetails) {
    console.log(`Employee details for ID ${employeeId}:`, employeeDetails);
  } else {
    console.log(`Employee with ID ${employeeId} not found.`);
  }
}

// Function to display all employees
function displayAllEmployees() {
  console.log('All Employees:');
  employeeDetailsMap.forEach((details, id) => {
    console.log(`ID: ${id}, Name: ${details.name}, Department: ${details.department}`);
  });
}

// Example usage
addEmployee(1, 'John Doe', 'IT');
addEmployee(2, 'Jane Smith', 'HR');
addEmployee(3, 'Bob Johnson', 'Finance');

displayAllEmployees();

getEmployeeDetails(2);
getEmployeeDetails(4); // Non-existent employee
