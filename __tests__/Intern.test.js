const Intern = require('../lib/Intern.js');

// Intern subclass with the following properties - name, id, email, school
test('creates Intern object', () => {
    const intern = new Intern('John Smith', 12345, 'johnsmith@email.com', 'Coding Academy');

    expect(typeof (intern)).toBe('object');
});

// testing school string
test('Intern school name is a string', () => {
    const intern = new Intern('', 12345, '', 'Coding Academy');

    expect(intern.getSchool()).toEqual(expect.any(String));
});

// testing school value
test('Intern school name is Coding Academy', () => {
    const intern = new Intern('', 12345, '', 'Coding Academy');

    expect(intern.getSchool()).toBe('Coding Academy');
});

// testing name string
test('Intern name is a string', () => {
    const intern = new Intern('John Smith');

    expect(intern.name).toEqual(expect.any(String));
});

// testing name value
test('Intern name is John Smith', () => {
    const intern = new Intern('John Smith');

    expect(intern.name).toBe('John Smith');
});

// testing id number
test('Intern id is a number', () => {
    const intern = new Intern('', 12345);

    expect(intern.id).toEqual(expect.any(Number));
});

// testing id value
test('Intern id is 12345', () => {
    const intern = new Intern('', 12345);

    expect(intern.id).toBe(12345);
});

// testing email string
test('Intern email is a string', () => {
    const intern = new Intern('', 12345, 'johnsmith@email.com');

    expect(intern.email).toEqual(expect.any(String));
});

// testing email value
test('Intern email is johnsmith@email.com', () => {
    const intern = new Intern('', 12345, 'johnsmith@email.com');

    expect(intern.email).toBe('johnsmith@email.com');
});

// testing Intern role
test('Intern role is Intern', () => {
    const intern = new Intern();

    expect(intern.getRole()).toBe('Intern');
});