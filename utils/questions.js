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
];

module.exports = questions;