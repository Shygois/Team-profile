const generateManager = (name, id, email, officeNum) => {
    return `
    <div class="row">
            <div class="col s12 m6">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title">${name}</span>
                  <p>Role</p>
                </div>
                <div class="card-action">
                    <ul>
                        <li>ID: ${id}</li>
                        <li> Email: ${email}</li>
                        <li>Office number: ${officeNum}</li>
                    </ul>
                </div>
              </div>
            </div>
          </div>`
};

const generateEngineer = (name, id, email, githubUser) => {
    return `
    <div class="row">
            <div class="col s12 m6">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title">${name}</span>
                  <p>Role</p>
                </div>
                <div class="card-action">
                    <ul>
                        <li>ID: ${id}</li>
                        <li> Email: ${email}</li>
                        <li>Github Username: ${githubUser}</li>
                    </ul>
                </div>
              </div>
            </div>
          </div>`
};

const generateIntern = (name, id, email, school) => {
    return `
    <div class="row">
            <div class="col s12 m6">
              <div class="card blue-grey darken-1">
                <div class="card-content white-text">
                  <span class="card-title">${name}</span>
                  <p>Role</p>
                </div>
                <div class="card-action">
                    <ul>
                        <li>ID: ${id}</li>
                        <li> Email: ${email}</li>
                        <li>School: ${school}</li>
                    </ul>
                </div>
              </div>
            </div>
          </div>`
};

const generatePage = teamData => {
    const { manager, engineer, intern } = teamData;
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <header>
        <h1> My Team </h1>
    </header>

    <main>
       ${generateManager(manager)}
       ${generateEngineer(engineer)}
       ${generateIntern(intern)}
    </main>

  </body>
  </html>`
};

module.exports = generatePage;
