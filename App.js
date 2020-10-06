const inquirer = require('inquirer');
const figlet = require('figlet');
const fs = require('fs');
const path = require("path");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questions = require('./lib/Questions');
const startMsg = "Create a simple HTML webpage featuring your Team Directory.\n \nAnswer the questions below about your squad to get started: \n";
const endMsg = "Check the repository's output folder for your file.";
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
let peopleBank = [];

// ASCCII Art module to write title and start application
figlet('Dev Team Summary', function (err, data) {
    if (err) {
        console.log(err1);
    }
    else {
        console.log(`\n${data}\n${startMsg}`);
    }
    startApp();
});

function startApp() {

    // node inquirer package collects user response, generates output
    getInfo();


    function getInfo() {
        inquirer.prompt(questions).then(answers => {
            // console.log(Object.keys(answers)); 
            if (answers.hasMore !== false) {
                getInfo();
            }
        });
    }

    fs.writeFileSync(outputPath, answers);
    console.log(endMsg);
}