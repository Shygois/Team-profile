const inquirer = require('inquirer');

const fs = require('fs');
const generatePage = require('./src/page-template');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
const { resolve } = require('path');

const managerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Please enter managers name."
    },
    {
        type: "input",
        name: "id",
        message: "Please enter managers id."
    },
    {
        type: "input",
        name: "email",
        message: "Please enter managers email address."
    },
    {
        type: "input",
        name: "officeNum",
        message: "Please enter managers office number."
    }
];

const engineerQuestions = [
    {
        type: "input",
        name: "name",
        message: "Please enter engineers name."
    },
    {
        type: "input",
        name: "id",
        message: "Please enter engineers id."
    },
    {
        type: "input",
        name: "email",
        message: "Please enter engineers email address."
    },
    {
        type: "input",
        name: "githubUser",
        message: "Please enter engineers github username."
    }
];

const internQuestions = [
    {
        type: "input",
        name: "name",
        message: "Please enter interns name."
    },
    {
        type: "input",
        name: "id",
        message: "Please enter interns id."
    },
    {
        type: "input",
        name: "email",
        message: "Please enter interns email address."
    },
    {
        type: "input",
        name: "school",
        message: "Please enter interns name of school."
    }
];

// Need an employees array to hold all the employees that get added
const employees = [];

const addManager = () => {
    inquirer.prompt(managerQuestions)
    .then(({ name, id, email, officeNum}) => {
        this.manager = new Manager (name, id, email, officeNum);
        console.log(this.manager);
        mainMenu();
    })
}

const addEngineer = () => {
    inquirer.prompt(engineerQuestions)
    .then(({ name, id, email, githubUser}) => {
        this.engineer = new Engineer (name, id, email, githubUser);
        console.log(this.engineer);
        mainMenu();
    })
}

const addIntern = () => {
    inquirer.prompt(internQuestions)
    .then(({ name, id, email, school}) => {
        this.intern = new Intern (name, id, email, school);
        console.log(this.intern);
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
            choices: ['Manager', 'Engineer', 'Intern', 'Quit']
        }
    ])
    .then((response) => {
        console.log(response)

        if (response.role === 'Manager') {
            addManager();
        } 
        if (response.role === 'Engineer') {
            addEngineer();
        } 
        if (response.role === 'Intern') {
            addIntern();
        } 
        if (response.role === 'Quit') {
            generatePage();
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
