const inquirer = require('inquirer');
const figlet = require('figlet');
const fs = require('fs');
const questions = require('./utils/questions');
const startMsg = "Create a simple HTML webpage featuring your Team Directory.\n \nAnswer the questions below about your squad to get started: \n";
const endMsg = "Check the repository's output folder for your file.";

// ascii art style writing to start the UX
figlet('Dev Team Summary', function (err, data) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(`${data}\n${startMsg}`);
    }
    // node.js inquirer package collects user response, generates output
    inquirer.prompt(questions).then(answers => {
        let filePath = './output/team.html';
        // fs.writeFileSync(filePath, answers);
        // console.log(endMsg);
    })
});