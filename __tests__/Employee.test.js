const Employee = require('../lib/Employee');

test('test if class passes if it is an object', () => {
    const employee = new Employee();
    expect(typeof (employee)).toBe('object');

});

test('check to see the name goes into the constructor', () => {
    const name = 'Dave';
    const employee = new Employee(name);

    expect(employee.name).toBe(name);
});

test('check to see if id goes into constructor', () => {
    const id = 1048;
    const employee = new Employee('Dave', id);

    expect(employee.id).toBe(id);
});

test('check to see if email goes into constructor', () => {
    const email = 'test@gmail.com';
    const employee = new Employee('Dave', 1048, email);

    expect(employee.email).toBe(email);
});

test('check to see if getName() gets name', () => {
    const name = 'Dave';
    const employee = new Employee(name);

    expect(employee.getName()).toBe(name);
});

test('check to see if getId() gets id', () => {
    const id = 1048;
    const employee = new Employee('Dave', id);

    expect(employee.getId()).toBe(id);
});

test('check to see if getEmail() gets email', () => {
    const email = 'test@gmail.com';
    const employee = new Employee('Dave', 1048, email);

    expect(employee.getEmail()).toBe(email);
});

test('check to see if getRole returns "Employee" ', () => {
    const test = "Employee";
    const employee = new Employee('Dave', 1048, 'test@gmail.com');
    expect(employee.getRole()).toBe(test);
});



