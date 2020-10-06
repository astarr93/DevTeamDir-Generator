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
const { createInflate } = require('zlib');

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
    const employees = [];

    // node inquirer package collects user response, generates output
    getInfo();

    function getInfo() {
        inquirer.prompt(questions).then(answers => {
            // console.log(Object.keys(answers)); 
            addPerson(answers);
            if (answers.hasMore !== false) {
                getInfo();
            }
            managerCheck();
        });
    };

    function managerCheck(employees) {
        const hasManager = (Element) => Element.role === "Manager";

        if (employees.some(hasManager) !== true) {
            console.log("You need at least 1 employee with a Manager role to get your file!");
            getInfo();
        }

        else {
            fs.writeFileSync(outputPath, answers);
            console.log(endMsg);
        }

    };

    function addPerson(answers) {
        switch (answers.role) {
            case "Engineer":
                const e = new Engineer([...answers]);
                employees.push(e);
                break;
            case "Intern":
                const i = new Intern([...answers]);
                employees.push(i);
                break;
            case "Manager":
                const m = new Manager([...answers]);
                employees.push(m);
                break;
        }
        console.log(employees);
    }
}