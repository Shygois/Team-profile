const Engineer = require('../lib/Engineer.js');

// Engineer subclass with the following properties - name, id, email, github username
test('creates Engineer object', () => {
    const engineer = new Engineer('John Smith', 12345, 'johnsmith@email.com', 'johnsmith');

    expect(typeof (engineer)).toBe('object');
});

// testing github username string
test('Engineer github user name is a string', () => {
    const engineer = new Engineer('', 12345, '', 'johnsmith');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

// testing github username value
test('Engineer github user name is johnsmith', () => {
    const engineer = new Engineer('', 12345, '', 'johnsmith');

    expect(engineer.getGithub()).toBe('johnsmith');
});

// testing name string
test('Engineer name is a string', () => {
    const engineer = new Engineer('John Smith');

    expect(engineer.name).toEqual(expect.any(String));
});

// testing name value
test('Engineer name is John Smith', () => {
    const engineer = new Engineer('John Smith');

    expect(engineer.name).toBe('John Smith');
});

// testing id number
test('Engineer id is a number', () => {
    const engineer = new Engineer('', 12345);

    expect(engineer.id).toEqual(expect.any(Number));
});

// testing id value
test('Engineer id is 12345', () => {
    const engineer = new Engineer('', 12345);

    expect(engineer.id).toBe(12345);
});

// testing email string
test('Engineer email is a string', () => {
    const engineer = new Engineer('', 12345, 'johnsmith@email.com');

    expect(engineer.email).toEqual(expect.any(String));
});

// testing email value
test('Engineer email is johnsmith@email.com', () => {
    const engineer = new Engineer('', 12345, 'johnsmith@email.com');

    expect(engineer.email).toBe('johnsmith@email.com');
});

// testing engineer role
test('Engineer role is Engineer', () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toBe('Engineer');
});