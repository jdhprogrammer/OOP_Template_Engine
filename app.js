const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questions = require("./lib/Questions");
const { prompt } = require('inquirer');
const path = require("path");
const { writeFile } = require('fs');
const { promisify } = require('util');
const writeFileAsync = promisify(writeFile);

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer_2");

let employees = [];

const promptManager = () => {
    return prompt(questions);
};

const init = async() => {
    console.log('Use the following prompts to build an Organizational Chart Website for you Engineering Team.');
    try {
        const answers = await promptManager();

        const { name, id, email, role } = answers;

        //Check employee's roll and create correspending class instance
        switch (role) {
            case 'Manager':
                let manager = new Manager(name, id, email, answers.officeNumber);
                employees.push(manager);
                break;
            case 'Engineer':
                let engineer = new Engineer(name, id, email, answers.github);
                employees.push(engineer);
                break;
            case 'Intern':
                let intern = new Intern(name, id, email, answers.school);
                employees.push(intern);
        }

        //Prompt the questions again when adding team member is chosen
        if (answers.moreEmployees) {
            init();
        } else {
            console.log(JSON.stringify(employees, null, '\t'));

            const html = render(employees);

            await writeFileAsync(outputPath, html);

            console.log('Successfully wrote to team.html');
        };

    } catch (err) {
        console.log(err);
    }
};

init();