const Manager = require('../lib/Manager.js');

// Manager subclass with the following properties - name, id, email, and office number
test('creates Manager object', () => {
    const manager = new Manager('John Smith', 12345, 'johnsmith@email.com', 123);

    expect(typeof (manager)).toBe('object');
});

test('Manager office number is a Number', () => {
    const manager = new Manager('', 12345, '', 123);

    expect(manager.getOfficeNum()).toEqual(expect.any(Number));
});

test('Manager office number is 123', () => {
    const manager = new Manager('', 12345, '', 123);

    expect(manager.getOfficeNum()).toBe(123);
});

test('Manager name is a string', () => {
    const manager = new Manager('John Smith');

    expect(manager.name).toEqual(expect.any(String));
});

test('Manager name is John Smith', () => {
    const manager = new Manager('John Smith');

    expect(manager.name).toBe('John Smith');
});

test('Manager id is a number', () => {
    const manager = new Manager('', 12345);

    expect(manager.id).toEqual(expect.any(Number));
});

test('Manager id is 12345', () => {
    const manager = new Manager('', 12345);

    expect(manager.id).toBe(12345);
});

test('Manager email is a string', () => {
    const manager = new Manager('', 12345, 'johnsmith@email.com');

    expect(manager.email).toEqual(expect.any(String));
});

test('Manager email is johnsmith@email.com', () => {
    const manager = new Manager('', 12345, 'johnsmith@email.com');

    expect(manager.email).toBe('johnsmith@email.com');
});

test('Manager role is Manager', () => {
    const manager = new Manager();

    expect(manager.getRole()).toBe('Manager');
});