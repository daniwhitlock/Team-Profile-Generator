const Engineer = require('../lib/Engineer');

test('test if class passes if it is an object', () => {
    const engineer = new Engineer();
    expect(typeof (engineer)).toBe('object');

});

test('check to see the name goes into the constructor', () => {
    const name = 'Dave';
    const engineer = new Engineer(name);

    expect(engineer.name).toBe(name);
});

test('check to see if id goes into constructor', () => {
    const id = 1048;
    const engineer = new Engineer('Dave', id);

    expect(engineer.id).toBe(id);
});

test('check to see if email goes into constructor', () => {
    const email = 'test@gmail.com';
    const engineer = new Engineer('Dave', 1048, email);

    expect(engineer.email).toBe(email);
});

test('check to see if github username goes into contstructor', () => {
    const gitHub = 'testgithub';
    const engineer = new Engineer('Dave', 1048, 'test@gmail.com', gitHub);

    expect(engineer.gitHub).toBe(gitHub);
});

test('check to see if getName() gets name', () => {
    const name = 'Dave';
    const engineer = new Engineer(name);

    expect(engineer.getName()).toBe(name);
});

test('check to see if getId gets id', () => {
    const id = 1048;
    const engineer = new Engineer('Dave', id);

    expect(engineer.getId()).toBe(id);
});

test('check to see if getEmail() gets email', () => {
    const email = 'test@gmail.com';
    const engineer = new Engineer('Dave', 1048, email);

    expect(engineer.getEmail()).toBe(email);
});

test('check to see if getGitHub() gets gitHub username', () => {
    const gitHub = 'testgithub';
    const engineer = new Engineer('Dave', 1048, 'test@gmail.com', gitHub);

    expect(engineer.getGitHub()).toBe(gitHub);
});

test('check to see if getRole returns "Engineer" ', () => {
    const test = "Engineer";
    const engineer = new Engineer('Dave', 1048, 'test@gmail.com');
    expect(engineer.getRole()).toBe(test);
});

