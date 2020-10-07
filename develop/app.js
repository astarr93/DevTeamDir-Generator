const inquirer = require('inquirer');
const figlet = require('figlet');
const fs = require('fs');
const path = require("path");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questions = require('./lib/Questions');
const startMsg = "Create a simple HTML webpage featuring your Team Directory.\n \nAnswer the questions below about your squad, one at a time, to create your file: \n";
const endMsg = "Check the repository's output folder for your file.";
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
const team = [];


// ASCCII Art module to write title and start application
figlet('Dev Team Summary', function (err, data) {
    if (err) {
        console.log(err1);
    }
    else {
        console.log(`\n${data}\n${startMsg}`);
    }
    init();
});


function init() {

    // node inquirer package collects user response, generates output
    getInfo();

    function getInfo() {
        inquirer.prompt(questions).then(answers => {
            if (answers.hasMore !== false) {
                addPerson(answers);
                getInfo();
            }
            else {
                addPerson(answers);
                hasManager(team);
            };
        });
    };

    function addPerson(answers) {

        //Remove inquirer repeat valdiation check from object
        delete answers.hasMore

        //Create new employee type object and add it to the team
        switch (answers.role) {
            case "Engineer":
                team.push(Object.assign(new Engineer, answers));
                break;
            case "Intern":
                team.push(Object.assign(new Intern, answers));
                break;
            case "Manager":
                team.push(Object.assign(new Manager, answers));
                break;
        }

    }

    // Check if team has at least 1 Manager before creating output
    function hasManager(team) {
        const isManager = (Element) => Element.role === "Manager";

        if (team.some(isManager) !== true) {
            console.log("You need at least 1 employee with a Manager role to get your file!");
            getInfo();
        }
        else {
            fs.writeFileSync(outputPath, render(team), "utf-8");
            console.log(endMsg);
        }

    };

}