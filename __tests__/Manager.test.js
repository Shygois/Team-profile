const Manager = require('../lib/Manager.js');

// Manager subclass with the following properties - name, id, email, and office number
test('creates Manager object', () => {
    const manager = new Manager('John Smith', 12345, 'johnsmith@email.com', 123);

    expect(typeof (manager)).toBe('object');
});

// testing office number
test('Manager office number is a Number', () => {
    const manager = new Manager('', 12345, '', 123);

    expect(manager.getOfficeNum()).toEqual(expect.any(Number));
});

// testing office number value
test('Manager office number is 123', () => {
    const manager = new Manager('', 12345, '', 123);

    expect(manager.getOfficeNum()).toBe(123);
});

// testing name string
test('Manager name is a string', () => {
    const manager = new Manager('John Smith');

    expect(manager.name).toEqual(expect.any(String));
});

// testing name value
test('Manager name is John Smith', () => {
    const manager = new Manager('John Smith');

    expect(manager.name).toBe('John Smith');
});

// testing id number
test('Manager id is a number', () => {
    const manager = new Manager('', 12345);

    expect(manager.id).toEqual(expect.any(Number));
});

// testing id value
test('Manager id is 12345', () => {
    const manager = new Manager('', 12345);

    expect(manager.id).toBe(12345);
});

// testing email string
test('Manager email is a string', () => {
    const manager = new Manager('', 12345, 'johnsmith@email.com');

    expect(manager.email).toEqual(expect.any(String));
});

// testing email value
test('Manager email is johnsmith@email.com', () => {
    const manager = new Manager('', 12345, 'johnsmith@email.com');

    expect(manager.email).toBe('johnsmith@email.com');
});

// testing manager role
test('Manager role is Manager', () => {
    const manager = new Manager();

    expect(manager.getRole()).toBe('Manager');
});