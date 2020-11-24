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

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```