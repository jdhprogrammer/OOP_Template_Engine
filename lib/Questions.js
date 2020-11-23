const questions = [{
        type: 'list',
        name: 'role',
        message: `Please Select this Employee's Role on your Engineering Team:`,
        choices: ['Manager', 'Engineer', 'Intern'],
    },
    {
        type: 'input',
        message: 'Enter the employee\'s FULL name',
        name: 'name',
        validate: name => {
            let pass = name.match(/^[a-zA-Z]+ [a-zA-Z]+$/g);
            if (pass) {
                return true;
            }
            return 'Please enter a valid FULL name.';
        },
    },
    {
        type: 'input',
        message: 'Enter the employee\'s ID',
        name: 'id',
        validate: id => {
            let pass = id.match(/^[0-9a-zA-Z]+$/g);
            if (pass) {
                return true;
            }
            return 'Please enter a valid ID.';
        },
    },
    {
        type: 'input',
        message: 'Enter the employee\'s email',
        name: 'email',
        validate: email => {
            let pass = email.match(/\S+@\S+\.\S+/g);
            if (pass) {
                return true;
            }
            return 'Please enter a valid email.';
        },
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: `Please enter the Manager's Office Number:`,
        when: function(answers) {
            return answers.role === 'Manager';
        },
        validate: officeNumber => {
            let pass = officeNumber.match(/^[0-9]+$/g);
            if (pass) {
                return true;
            }
            return 'Please enter a valid Office Number.';
        },
    },
    {
        type: 'input',
        name: 'github',
        message: `Please enter the Engineer's GitHub Username:`,
        when: function(answers) {
            return answers.role === 'Engineer';
        },
        validate: github => {
            if (github) {
                return true;
            }
            return `Please enter the Engineer's GitHub Username.`;
        },
    },
    {
        type: 'input',
        name: 'school',
        message: `Please enter Intern's School Name:`,
        when: function(answers) {
            return answers.role === 'Intern';
        },
        validate: school => {
            if (school) {
                return true;
            }
            return `Please enter the Intern's School Name.`;
        },
    },
    {
        type: 'confirm',
        name: 'moreEmployees',
        message: 'Would you like to add another Employee to your Engineering Team?',
        default: true,
    },
];

module.exports = questions;