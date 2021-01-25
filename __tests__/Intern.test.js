const Intern = require('../lib/Intern');

test('test if class passes if it is an object', () => {
    const intern = new Intern();
    expect(typeof (intern)).toBe('object');

});

test('check to see the name goes into the constructor', () => {
    const name = 'Dave';
    const intern = new Intern(name);

    expect(intern.name).toBe(name);
});

test('check to see if id goes into constructor', () => {
    const id = 1048;
    const intern = new Intern('Dave', id);

    expect(intern.id).toBe(id);
});

test('check to see if email goes into constructor', () => {
    const email = 'test@gmail.com';
    const intern = new Intern('Dave', 1048, email);

    expect(intern.email).toBe(email);
});

test('check to see if school goes into constructor', () => {
    const school = 'Utah University';
    const intern = new Intern('Dave', 1048, 'test@gmail.com', 'Utah University');

    expect(intern.school).toBe(school);
});

test('check to see if getName() gets name', () => {
    const name = 'Dave';
    const intern = new Intern(name);

    expect(intern.getName()).toBe(name);
});

test('check to see if getId() gets id', () => {
    const id = 1048;
    const intern = new Intern('Dave', id);

    expect(intern.getId()).toBe(id);
});

test('check to see if getEmail() gets email', () => {
    const email = 'test@gmail.com';
    const intern = new Intern('Dave', 1048, email);

    expect(intern.getEmail()).toBe(email);
});

test('check to see if getSchool() gets school', () => {
    const school = 'Utah University';
    const intern = new Intern('Dave', 1048, 'test@gmail.com', 'Utah University');

    expect(intern.getSchool()).toBe(school);
})

test('check to see if getRole returns "Intern" ', () => {
    const test = "Intern";
    const intern = new Intern('Dave', 1048, 'test@gmail.com');
    expect(intern.getRole()).toBe(test);
});

