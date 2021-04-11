const Employee = require('../lib/Employee.js');

//Employee parent class with the following properties - name, id, email)
test('creates Employee object', () => {
    const employee = new Employee('John Smith', 12345, 'johnsmith@email.com');

    expect(typeof (employee)).toBe('object');
});

// testing name string
test('Employee name is a string', () => {
    const employee = new Employee('John Smith');

    expect(employee.name).toEqual(expect.any(String));
});

// testing name value
test('Employee name is John Smith', () => {
    const employee = new Employee('John Smith');

    expect(employee.name).toBe('John Smith');
});

// testing id number
test('Employee id is a number', () => {
    const employee = new Employee('', 12345);

    expect(employee.id).toEqual(expect.any(Number));
});

// testing id value
test('Employee id is 12345', () => {
    const employee = new Employee('', 12345);

    expect(employee.id).toBe(12345);
});

// testing email string
test('Employee email is a string', () => {
    const employee = new Employee('', 12345, 'johnsmith@email.com');

    expect(employee.email).toEqual(expect.any(String));
});

// testing email value
test('Employee email is johnsmith@email.com', () => {
    const employee = new Employee('', 12345, 'johnsmith@email.com');

    expect(employee.email).toBe('johnsmith@email.com');
});

// testing employee role
test('Employee role is Employee', () => {
    const employee = new Employee();

    expect(employee.getRole()).toBe('Employee');
});