

let generateManager = (Manager)=> {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
        <div class="card-title p-3 mb-2">
            <h2>
                ${Manager.getName()}
            </h2>
            <h3 class="italics">
                Manager
            </h3>
        </div>

        <div class="employee-info">
            <p class="card-text">
                Id: ${Manager.getId()}
            </p>
            <p class="card-text">
                Email: <a href="mailto:${Manager.getEmail()}">${Manager.getEmail()}</a>
            </p>
            <p class="card-text">
                Office number: ${Manager.getOfficeNumber()}
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
                ${Engineer.getName()}
            </h2>
            <h3 class="italics">
                Engineer
            </h3>
        </div>

        <div class="employee-info">
            <p class="card-text">
                Id: ${Engineer.getId()}
            </p>
            <p class="card-text">
                Email: <a href="mailto:${Engineer.getEmail()}">${Engineer.getEmail()}</a>
            </p>
            <p class="card-text">
             Github: <a href="https://${Engineer.getGitHub()}.github.io" target="_blank" >${Engineer.getGitHub()} </a>
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
                ${Intern.getName()}
            </h2>
            <h3 class="italics">
                Intern
            </h3>
        </div>

        <div class="employee-info">
            <p class="card-text">
                Id: ${Intern.getId()}
            </p>
            <p class="card-text">
                Email: <a href="mailto:${Intern.getEmail()}">${Intern.getEmail()}</a>
            </p>
            <p class="card-text">
                School: ${Intern.getSchool()}
            </p>
        </div>
    </div>
</div>
`
}

// export function to generate entire page
module.exports = employees => {
    // console.table(employees);
    let team = [];
    for (let i = 0; i < employees.length; i++ ) {
        console.log(employees[i]);

        switch (employees[i].getRole()) {
            case 'Manager':
                let manager = generateManager(employees[i]);
                team.push(manager);
                break;

            case 'Engineer':
                let engineer = generateEngineer(employees[i]);
                team.push(engineer);
                break;

            case 'Intern':
               let intern = generateIntern(employees[i]);
                team.push(intern);
                break;
            default:
                console.log('Sorry, could not find employees job title');
                break;
        }

    }
    // take the comma out and add a blank space so it all looks like straight html
    let teamMembers = team.join('');
  
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
        ${teamMembers}
        </main>
    </body>
    </html>
    `
}

