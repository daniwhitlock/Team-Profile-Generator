const inquirer = require('inquirer');


const managerQuestions = [
    {
        type: 'input',
        name: 'nameTeamManager',
        message: "What is the team manager's name?",
    },
    {
        type: 'input',
        name: 'managerId',
        message: "What is the employee ID?"
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: "Enter the email for the team manager?"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the office number?'
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
        message: "What is the engineer's name?"
    },
    {
        type: 'input',
        name: 'engineerId',
        message: "What is the engineer's ID?"
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: "What is the engineer's email?"
    },
    {
        type: 'input',
        name: 'engineerGitHub',
        message: "What is the engineer's GitHub username?"
    }
];

const internQuestions =  [
    {
        type: 'input',
        name: 'internName',
        message: "What is the intern's name?"
    },
    {
        type: 'input',
        name: 'internId',
        message: "What is the intern's ID?"  
    },
    {
        type: 'input',
        name: 'internEmail',
        message: "What is the intern's email?"
    },
    {
        type: 'input',
        name: 'internSchool',
        message: "What is the intern's school"
    }
];

module.exports = {managerQuestions, teamMenu, engineerQuestions, internQuestions};