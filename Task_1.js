// Task: Employee Management System
// Background:
// You are working on an Employee Management 
// System for a company. Each employee has a 
// unique ID, a name, and a department. The 
// system needs to handle various operations 
// related to employee data.

// Requirements:
// Create a Set to store unique employee IDs.
// Create a Map to store employee details where 
// the key is the employee ID and the value is 
// an object containing the name and department 
// of the employee. Implement functions to perform 
// the following operations: Add Employee: Accept 
// employee ID, name, and department. Ensure that 
// the ID is unique and add the employee to the 
// Set and Map.



// set
const employeeIdSet = new Set();

const employee = {name: "", department: "", detail : function(){return "Name :" + this.name + "\n" + "Department: "+this.department}};
// map
const employeeMap = new Map();

// add an employee
let addEmployee = (id, name, department) => {
  //validation check
  employeeIdSet.has(id) ? console.log(`An Employee ID  ${id} already exists.`) : null;

  employeeIdSet.add(id);
  employee.name = name;
  employee.department = department;
  employeeMap.set(id, employee);
}

// employee by id
let getEmployeeById = (id) => {
  const viewEmployee= employeeMap.get(id);
  viewEmployee ? console.log(`Employee with ID ${id}:`, viewEmployee):
    console.log(`Employee with ID ${id} not found.`);
}

//view all employees
let getAllEmployees = () => {
  console.log('All Employees:');
  employeeMap.forEach((employeeDetail, id) => {
    console.log(`ID: ${id}, Name: ${employeeDetail.name}, Department: ${employeeDetail.department}`);
  });
}

// testing
addEmployee(100, 'Macartti', 'Sales');


getAllEmployees();

getEmployeeById(100);

const result = employee.detail();

console.log(result);