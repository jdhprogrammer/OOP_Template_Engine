const questions = [{
        type: 'list',
        name: 'role',
        message: 'Which Role of new Employee would you like to add to the Engineering Team Chart?',
        choices: [{
                name: 'Manager',
                value: 'Manager',
            },
            {
                name: 'Engineer',
                value: 'Engineer',
            },
            {
                name: 'Intern',
                value: 'Intern',
            }
        ],
    },
    {
        type: 'confirm',
        name: 'pizza',
        message: 'Ok... Do you like pizza?',
        when: function(answers) {
            return !likesFood('bacon')(answers);
        },
    },

    {

        type: 'input',
        name: 'name',
        message: 'Enter you FULL name:',
        validate: function(name) {
            let pass = name.match(/^[a-zA-Z]+ [a-zA-Z]+$/g);
            if (pass) {
                return true;
            }
            return 'Please enter a valid FULL name:';
        },
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email',
        validate: function(email) {
            let pass = email.match(/\S+@\S+\.\S+/g);
            if (pass) {
                return true;
            }
            return 'Please enter a valid email:';
        },
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
        validate: function(github) {
            if (github) {
                return true;
            }
            return 'It is required to enter your github username:';
        },
    },
    {
        type: 'input',
        name: 'linkedin',
        message: 'Enter you Linkedin profile link:',
        validate: function(linkedin) {
            let pass = linkedin.match(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm);
            if (pass) {
                return true;
            }
            return 'Provide the valid Linked in Profile url including the http(s):';
        }

    },
    {
        type: 'input',
        name: 'repo',
        message: 'Enter your GitHub Project Repo name:',
        validate: function(reponame) {
            if (reponame) {
                return true;
            }
            return 'It is required to enter your Github Project Repo name.';
        },
    },
    {
        type: 'confirm',
        name: 'askMoreLinks',
        message: 'Besides the Project Repo link, would you like to add additional project link(s)?',
    },
    {
        type: 'input',
        name: 'moreLinks',
        message: 'Enter the additional project link(s) using the entire link, including the http(s): (* Use commas "," to separate each link)',
        when: function(answers) {
            return answers.askMoreLinks !== false;
        },
        validate: function(moreLinks) {
            for (let i = 0; i < moreLinks.split(',').length; i++) {
                let pass = moreLinks.split(',')[i].trim().match(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm);

                if (pass) {
                    return true;
                } else {
                    moreLinks = ""
                }
                return 'Provide the valid links of the project using the entire link, including the http(s):';
            }
        },
    },
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title:',
        validate: function(title) {
            if (title) {
                return true;
            }
            return 'A professional README has a project title.';
        },
    },
    {
        type: 'confirm',
        name: 'askImgs',
        message: 'Would you like to add screenshots or demo to README?',
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'Enter the image paths or urls of screenshots or demo.  (* Use commas "," to separate each path or url):',
        when: function(answers) {
            return answers.askImgs !== false;
        },
        validate: function(screenshot) {
            if (screenshot) {
                return true;
            }
            return 'Provide the image paths or urls of screenshots or demo. ';
        },
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a brief Description of your Project:',
        validate: function(description) {
            if (description) {
                return true;
            }
            return 'A professional README provides the project objective.';
        },
    },
    {
        type: 'input',
        name: 'userStory',
        message: 'Write out the User Story of you Project:',
        validate: function(userStory) {
            if (userStory) {
                return true;
            }
            return 'A professional README provides the User Story for the propject.';
        },
    },
    {
        type: 'input',
        name: 'tools',
        message: 'List the technologies used for the Project. (* Use commas "," to separate each technology):',
        validate: function(tools) {
            if (tools) {
                return true;
            }
            return 'A professional README lists technologies used for the Project.';
        },
    },
    {
        type: 'input',
        name: 'prereqs',
        message: 'What prerequisites will someone need on computer before install?',
        validate: function(preregs) {
            if (preregs) {
                return true;
            }

            return 'A professional README lists prerequisites required for the Project.';
        },
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the steps required to Install your Project/Application?',
        validate: function(install) {
            if (install) {
                return true;
            }

            return 'A professional README provides steps on how to install the project.';
        },
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions on how you use your Project/Application:',
        validate: function(usage) {
            if (usage) {
                return true;
            }

            return 'A professional README provides instructions on how to use the project.';
        },
    },
    {
        type: 'input',
        name: 'credit',
        message: 'Enter the People and/or Sites you want to reference/give credit to:',
        validate: function(credit) {
            if (credit) {
                return true;
            }

            return 'There has got to be somebody you need to Thank and give Credit to.';
        },
    },


];

module.exports = questions;