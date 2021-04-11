const Employee = require('../lib/Employee.js');

//Employee parent class with the following properties - name, id, email)
test('creates Employee object', () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe('object');
});
