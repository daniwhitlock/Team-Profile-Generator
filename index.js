const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const Manager = require('./lib/Manager.js');
const questions = require('./lib/Questions.js');

let employees = [];

createManager = function () {
    inquirer
        .prompt (
            questions.managerQuestions
        )
        .then( ( answers ) => {
            const manager = new Manager (answers.nameTeamManager, answers.managerId, answers.managerEmail, answers.officeNumber);
            console.log(manager);
            //push manager into global array
            employees.push(manager);

            mainMenu();
        })
}

mainMenu = function () {
    inquirer
        .prompt (
            questions.teamMenu
        )
        .then ((answers) => {
            if (answers.teamMemberChoice === 'Engineer' ) {
                createEngineer();
            } else if (answers.teamMemberChoice === 'Intern') {
                createIntern();
            } else {
                finishedBuildingMyTeam();
            }
        })
}


createIntern = function () {
    inquirer
        .prompt (
           questions.internQuestions 
        )
        .then ((answers) => {
            const intern = new Intern (answers.internName, answers.internId, answers.internEmail, answers.internSchool);

            //push all new employees into global array
            employees.push(intern);
            
            //call back main menu function 
            mainMenu();
        })
}

createEngineer = function () {
    inquirer 
        .prompt (
            questions.engineerQuestions
        )
        .then ((answers) => {
            const engineer = new Engineer (answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGitHub);

            //push all new employees into global array
            employees.push(engineer);

            //call back main menu funciton
            mainMenu();
        })
}

finishedBuildingMyTeam = function () {
    console.log("You've reached the end! Here's your team members");
    console.table(employees);
}

createManager();

module.exports = employees; //need to make sure the correct thing is exporting-- or do I need to??


