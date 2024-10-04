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