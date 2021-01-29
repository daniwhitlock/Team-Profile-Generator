const inquirer = require('inquirer');


const managerQuestions = [
    {
        type: 'input',
        name: 'nameTeamManager',
        message: "What is the team manager's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerId',
        message: "What is the employee ID?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter ID.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "Enter the email for the team manager?",
        default: () => { },
        validate: function (email) {

            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

            if (valid) {
                console.log("Great job");
                return true;
            } else {
                console.log(".  Please enter a valid email")
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the office number?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter office number.');
                return false;
            }
        }
    }
];

const teamMenu = [
    {
        type: 'list',
        name: 'teamMemberChoice',
        message: 'What team member would you like to enter?',
        choices: ['Engineer', 'Intern', 'Finished building my team']
    }
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: "What is the engineer's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'engineerId',
        message: "What is the engineer's ID?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter ID number.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: "What is the engineer's email?",
        default: () => { },
        validate: function (email) {

            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

            if (valid) {
                console.log("Great job");
                return true;
            } else {
                console.log(".  Please enter a valid email")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'engineerGitHub',
        message: "What is the engineer's GitHub username?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter GitHub username.');
                return false;
            }
        }
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: "What is the intern's name?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your name.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'internId',
        message: "What is the intern's ID?",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter ID number.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'internEmail',
        message: "What is the intern's email?",
        default: () => { },
        validate: function (email) {

            valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)

            if (valid) {
                console.log("Great job");
                return true;
            } else {
                console.log(".  Please enter a valid email")
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'internSchool',
        message: "What is the intern's school",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter school.');
                return false;
            }
        }

    }
];

module.exports = { managerQuestions, teamMenu, engineerQuestions, internQuestions };