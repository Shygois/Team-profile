const inquirer = require('inquirer');

const fs = require('fs');
const generatePage = require('./src/page-template');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Please enter managers name. (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter managers name!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "Please enter managers id. (Required)",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter managers id!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Please enter managers email address. (Required)",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter managers email address!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "officeNum",
        message: "Please enter managers office number. (Required)",
        validate: officeNumInput => {
            if (officeNumInput) {
                return true;
            } else {
                console.log('Please enter managers office number!');
                return false;
            }
        }
    }
];

const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Please enter engineers name. (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter engineers name!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "Please enter engineers id. (Required)",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter engineers id!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Please enter engineers email address. (Required)",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter engineers email address!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "githubUser",
        message: "Please enter engineers github username. (Required)",
        validate: githubUserInput => {
            if (githubUserInput) {
                return true;
            } else {
                console.log('Please enter engineers github username!');
                return false;
            }
        }
    }
];

const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "Please enter interns name. (Required)",
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter interns name!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "id",
        message: "Please enter interns id. (Required)",
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter interns id!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Please enter interns email address. (Required)",
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter interns email address!');
                return false;
            }
        }
    },
    {
        type: "input",
        name: "school",
        message: "Please enter interns name of school. (Required)",
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            } else {
                console.log('Please enter interns name of school!');
                return false;
            }
        }
    }
];

// Need an employees array to hold all the employees that get added
const teamData = [];

const addManager = () => {
    inquirer.prompt(managerQuestions)
    .then(({ name, id, email, officeNum}) => {
        this.manager = new Manager (name, id, email, officeNum);
        console.log(this.manager);
        teamData.push(this.manager);
        console.log(teamData);
        mainMenu();
    })
}

const addEngineer = () => {
    inquirer.prompt(engineerQuestions)
    .then(({ name, id, email, githubUser}) => {
        this.engineer = new Engineer (name, id, email, githubUser);
        console.log(this.engineer);
        teamData.push(this.engineer);
        console.log(teamData);
        mainMenu();
    })
}

const addIntern = () => {
    inquirer.prompt(internQuestions)
    .then(({ name, id, email, school}) => {
        this.intern = new Intern (name, id, email, school);
        console.log(this.intern);
        teamData.push(this.intern);
        console.log(teamData);
        mainMenu();
    })
}

// Inquirer for the main menu
// Main Menu
const mainMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: 'What type of employee do you wish to add?',
            choices: ['Manager', 'Engineer', 'Intern', "I'm done. Generate my team profile!"]
        }
    ])
    .then((response) => {
        console.log('You selected ' + response.role + '.')

        if (response.role === 'Manager') {
            addManager();
        } 
        if (response.role === 'Engineer') {
            addEngineer();
        } 
        if (response.role === 'Intern') {
            addIntern();
        } 
        if (response.role === "I'm done. Generate my team profile!") {
            if (!teamData) {
                teamData = [];
            }
            const pageContent = generatePage(teamData);
            fs.writeFile('./dist/index.html', pageContent, err => {
                if (err) throw err;
                console.log('Team Page complete! Check out the HTML.index to see the output!');
            });
        }
    })
};



// function to initialize app
const init = () => {
    console.log("Welcome to Team Profile Generator!");
    mainMenu();
};


// call to initialize app
init();
