const inquirer = require('inquirer');
const figlet = require('figlet');
const fs = require('fs');
const os = require('os');
const path = require('path');
const questions = require('./utils/questions');
const startMsg = "Create a simple HTML webpage featuring your Team Directory. \nAnswer the questions below about your squad to get started: \n";
const endMsg = "Check your downloads folder for your file.";

figlet('Dev Team Summary', function (err, data) {
    if (err) {
        console.log(err);
    }
    else {
        console.log(`${data}\n${startMsg}`);
    }
    // node.js inquirer package collects user response
    inquirer.prompt(questions).then(answers => {
        const filePath = path.normalize(`${os.homedir}\\downloads\\Test.txt`);
        fs.writeFileSync(filePath, answers);
        console.log(endMsg);
    })
})