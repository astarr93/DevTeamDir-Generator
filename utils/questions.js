const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Engineer");
const Intern = require("../lib/Engineer");
const Manager = require("../lib/Engineer");

const questions = [{
    type: "input",
    name: "name",
    message: "What is your name?: "
},
{
    type: "input",
    name: "email",
    message: "What is your email address?: "
},
{
    type: "input",
    name: "pid",
    message: "Please enter your personnel identification number",
},
{
    type: "list",
    name: "role",
    message: "What would you say you do here?: ",
    choices: ["Engineer, Intern, Manager"]
},
{
    type: "input",
    name: "github",
    message: "What is your github username?: ",
    when: (answers) => answers.role === "Engineer"
},
{
    type: "input",
    name: "school",
    message: "What school are you interning at?: ",
    when: (answers) => answers.role === "Intern"
},
{
    type: "input",
    name: "officeNumber",
    message: "What is your office number?: ",
    when: (answers) => answers.role === "Manager"
},
];

module.exports = questions;