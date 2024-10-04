// Initialize company structure with 4 departments and employees
const company = {
    departments: [
        {
            departmentName: 'Engineering',
            employees: [
                {
                    name: 'Alice',
                    salary: 100000,
                    subordinates: [
                        {
                            name: 'Bob',
                            salary: 80000,
                            subordinates: [
                                {
                                    name: 'Charlie',
                                    salary: 60000,
                                    subordinates: []
                                }
                            ]
                        }
                    ]
                },
                {
                    name: 'David',
                    salary: 90000,
                    subordinates: []
                },
                {
                    name: 'Eve',
                    salary: 120000,
                    subordinates: []
                }
            ]
        },
        {
            departmentName: 'HR',
            employees: [
                {
                    name: 'Frank',
                    salary: 75000,
                    subordinates: []
                },
                {
                    name: 'Grace',
                    salary: 85000,
                    subordinates: []
                },
                {
                    name: 'Heidi',
                    salary: 95000,
                    subordinates: []
                }
            ]
        },
        {
            departmentName: 'Sales',
            employees: [
                {
                    name: 'Ivan',
                    salary: 110000,
                    subordinates: [
                        {
                            name: 'Jack',
                            salary: 70000,
                            subordinates: []
                        }
                    ]
                },
                {
                    name: 'Karen',
                    salary: 95000,
                    subordinates: []
                },
                {
                    name: 'Leo',
                    salary: 105000,
                    subordinates: []
                }
            ]
        },
        {
            departmentName: 'Marketing',
            employees: [
                {
                    name: 'Mallory',
                    salary: 115000,
                    subordinates: []
                },
                {
                    name: 'Nina',
                    salary: 85000,
                    subordinates: []
                },
                {
                    name: 'Oscar',
                    salary: 95000,
                    subordinates: []
                }
            ]
        }
    ]
};

// Create recursive function to calculate department salary
/**
 * Recursively calculates the total salary expenditure for a department, including subordinates' salaries.
 * 
 * @param {Object} department - The department object containing employees and their subordinates.
 * @returns {number} - The total salary expenditure for the department.
 */
function calculateDepartmentSalary(department) {
    let totalSalary = 0;

    // Loop through each employee in the department
    department.employees.forEach(employee => {
        totalSalary += employee.salary; // Add the employee's salary to the total
        
        // Recursively add the salaries of all subordinates
        if (employee.subordinates.length > 0) {
            employee.subordinates.forEach(subordinate => {
                totalSalary += calculateEmployeeSalary(subordinate); // Helper function to handle subordinates
            });
        }
    });

    return totalSalary;
}

// Calculate total salary for all departments in the company
/**
 * Calculates the total salary expenditure for all departments in the company.
 * 
 * @param {Object} company - The company object containing multiple departments.
 * @returns {number} - The total salary expenditure for the entire company.
 */
function calculateCompanySalary(company) {
    let totalCompanySalary = 0;

    // Iterate over each department in the company
    company.departments.forEach(department => {
        totalCompanySalary += calculateDepartmentSalary(department); // Add the department's total salary
    });

    return totalCompanySalary;
}