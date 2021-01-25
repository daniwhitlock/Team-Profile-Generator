const Employee = require("../lib/Employee")


let favCard = (data) => {
    return `
    // put data into a card
    ${data.name}
    `
}

let generateManager = ()=> {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
        <div class="card-title p-3 mb-2">
            <h2>
                ${employee}
            </h2>
            <h3 class="italics">
                Manager
            </h3>
        </div>

        <div class="employee-info">
            <p class="card-text">
                Id:
            </p>
            <p class="card-text">
                Email:
            </p>
            <p class="card-text">
                Office number:
            </p>
        </div>
    </div>
</div>`
}

let generateEngineer = () => {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
        <div class="card-title p-3 mb-2">
            <h2>
                Name
            </h2>
            <h3 class="italics">
                Intern
            </h3>
        </div>

        <div class="employee-info">
            <p class="card-text">
                Id:
            </p>
            <p class="card-text">
                Email:
            </p>
            <p class="card-text">
                School:
            </p>
        </div>
    </div>
</div>
`
}

let generateIntern = () => {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
        <div class="card-title p-3 mb-2">
            <h2>
                Name
            </h2>
            <h3 class="italics">
                Engineer
            </h3>
        </div>

        <div class="employee-info">
            <p class="card-text">
                Id:
            </p>
            <p class="card-text">
                Email:
            </p>
            <p class="card-text">
                Github:
                <!--insert github link--> <a href="https:// <!--githublink-->.github.io" target="_blank" </a>
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
        <link rel="stylesheet" href="./style.css" />
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

