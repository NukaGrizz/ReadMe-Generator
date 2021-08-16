const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./src/generateMarkdown');

// TODO: Create an array of questions for user input
const promptQuestions = questions => {
    
    return inquirer
        .prompt([
    {
        type: 'input',
        name: 'github',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'title',
        message: "What is your project's name?"
    },
    {
        type: 'input',
        name: 'discription',
        message: 'Input a discription for your project'
    },
    { 
        type: 'input',
        name: 'installation',
        message: 'input installation instructions for your project'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information for your project?'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'what is the contribution guidelines for your project?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions for your project'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license are you using for this project',
        choices: ['MIT License', 'Mozilla Public License 2.0', 'Apache License 2.0', 'GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Boost Software License 1.0', 'The Unlicense']
    }
]);
};

// TODO: Create a function to write README file
fs.writeToFile('./output.README.md', data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
promptUser()
    .then(promptQuestions)
    .then();
