const Manager = require('../lib/Manager');

test('test if class passes if it is an object', () => {
    const manager = new Manager();
    expect(typeof(manager)).toBe('object');
});

test('check to see the name goes into the constructor', () => {
    const name = 'Dave';
    const manager = new Manager(name);

    expect(manager.name).toBe(name);
});

test('check to see if id goes into constructor', () => {
    const id = 1048;
    const manager = new Manager('Dave', id);

    expect(manager.id).toBe(id);
});

test('check to see if email goes into constructor', () => {
    const email = 'dani@gmail.com';
    const manager = new Manager('Dave', 1048, email);

    expect(manager.email).toBe(email);
});

test('check to see if office number goes into constructor', () => {
    const officeNumber = 123;
    const manager = new Manager('Dave', 1048, 'dani@gmail.com', officeNumber);

    expect(manager.officeNumber).toBe(officeNumber);
});

test('check to see if getName() gets name', () => {
    const name = 'Dave';
    const manager = new Manager(name);

    expect(manager.getName()).toBe(name);
});

test('check to see if getId() gets id', () => {
    const id = 1048;
    const manager = new Manager('Dave', id);

    expect(manager.getId()).toBe(id);
});

test('check to see if getEmail() gets email', () => {
    const email = 'dani@gmail.com';
    const manager = new Manager('Dave', 1048, email);

    expect(manager.getEmail()).toBe(email);
});

test('check to seee if getOfficeNumber() gets office number', () => {
    const officeNumber = 123;
    const manager = new Manager('Dave', 1048, 'dani@gmail.com', officeNumber);

    expect(manager.getOfficeNumber()).toBe(officeNumber);
});

test('check to see if getRole() returns "Manager" ', () => {
    const test = "Manager";
    const manager = new Manager('Dave', 1048, 'testing@gmail.com');
    expect(manager.getRole()).toBe(test);
});

