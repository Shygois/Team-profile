const Employee = require('../lib/Employee.js');

//Employee parent class with the following properties - name, id, email)
test('creates Employee object', () => {
    const employee = new Employee('John Smith', 12345, 'johnsmith@email.com');

    expect(typeof (employee)).toBe('object');
});

test('Employee name is a string', () => {
    const employee = new Employee('John Smith');

    expect(employee.name).toEqual(expect.any(String));
});

test('Employee name is John Smith', () => {
    const employee = new Employee('John Smith');

    expect(employee.name).toBe('John Smith');
});

test('Employee id is a number', () => {
    const employee = new Employee('', 12345);

    expect(employee.id).toEqual(expect.any(Number));
});

test('Employee id is 12345', () => {
    const employee = new Employee('', 12345);

    expect(employee.id).toBe(12345);
});

test('Employee email is a string', () => {
    const employee = new Employee('', 12345, 'johnsmith@email.com');

    expect(employee.email).toEqual(expect.any(String));
});

test('Employee email is johnsmith@email.com', () => {
    const employee = new Employee('', 12345, 'johnsmith@email.com');

    expect(employee.email).toBe('johnsmith@email.com');
});

test('Employee role is Employee', () => {
    const employee = new Employee();

    expect(employee.getRole()).toBe('Employee');
});