// TODO: Include packages needed for this application

const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown");

const inquirer = require("inquirer");





function validationOfInput(value) {
    if (value = null )
        return;

    else {
        return "Please answer the question"
    }

}




// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'The title of the project is?',
        validation: validationOfInput,
    },

    {


        type: 'input',
        name: 'install',
        messageOuput: 'Explanation of installation process',
        validation: validationOfInput,
    },

    {
        type: 'input',
        name: 'use',
        message: 'Explanation of how to use:',
        validation: validationOfInput,
    },

    {
        type: 'input',
        name: 'description',
        message: 'The description of the project:',
        validation: validationOfInput,


    },

    {
        type: 'input',
        name: 'test',
        message: 'Any testing instructions?:',
        validation: validationOfInput,
    },

    {
        type: 'input',
        name: 'contribution',
        message: 'How can a user contribute to the project?:',
        validation: validationOfInput,

    },

    {
        type: 'input',
        name: 'email',
        message: 'An email user can contact?:',
        validation: validationOfInput,

    },

    {
        type: 'input',
        name: 'user',
        message: 'GitHub username?:',
        validation: validationOfInput,
    },

    {
        type: 'input',
        name: 'license',
        message: 'Please choose license: MIT, GNU GPL v3, GNU GPL v2:',
        validation: validationOfInput,
    }






];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            return console.error(err);
        }
    });
    
 }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("./README.md", data)
    });
};
 

 

// Function call to initialize app
init();
