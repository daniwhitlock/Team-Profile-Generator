const Employee = require("../lib/Employee"); //haven't actually used employee, just manager, engineer, and intern
const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

let generateManager = (Manager)=> {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
        <div class="card-title p-3 mb-2">
            <h2>
                ${Manager.nameTeamManager}
            </h2>
            <h3 class="italics">
                Manager
            </h3>
        </div>

        <div class="employee-info">
            <p class="card-text">
                Id: ${Manager.managerId}
            </p>
            <p class="card-text">
                Email: ${Manager.managerEmail}
            </p>
            <p class="card-text">
                Office number: ${Manager.officeNumber}
            </p>
        </div>
    </div>
</div>`
}

let generateEngineer = (Engineer) => {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
        <div class="card-title p-3 mb-2">
            <h2>
                ${Engineer.engineerName}
            </h2>
            <h3 class="italics">
                Intern
            </h3>
        </div>

        <div class="employee-info">
            <p class="card-text">
                Id: ${Engineer.engineerId}
            </p>
            <p class="card-text">
                Email: ${Engineer.engineerEmail}
            </p>
            <p class="card-text">
                Github: ${Engineer.engineerGitHub} <a href="https://${Engineer.engineerGitHub}.github.io" target="_blank" </a>
            </p>
        </div>
    </div>
</div>
`
}

let generateIntern = (Intern) => {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
        <div class="card-title p-3 mb-2">
            <h2>
                ${Intern.internName}
            </h2>
            <h3 class="italics">
                Intern
            </h3>
        </div>

        <div class="employee-info">
            <p class="card-text">
                Id: ${Intern.internId}
            </p>
            <p class="card-text">
                Email: ${intern.internEmail}
            </p>
            <p class="card-text">
                School: ${Intern.internSchool}
            </p>
        </div>
    </div>
</div>
`
}

// export function to generate entire page
module.exports = templateData => {
    // destructure page data by section

    const { }
    return `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="../dist/style.css" />
        <title>Document</title>
    </head>

    <body>
        <header>
            <h1>
                My Team
            </h1>
        </header>
        <main class=container>
        ${generateManager(Manager)}    
        ${generateEngineer(Engineer)}
        ${generateIntern(Intern)}
        </main>
    </body>
    </html>
    `
}

