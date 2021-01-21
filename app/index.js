const fs = require("fs");
const inquirer = require("inquirer");
let readMe;

const promise = inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title",
        },
        {
            type: "input",
            message: "Please give us a brief description about your project!",
            name: "description",
        },
        {
            type: "input",
            message: "Please complete the INSTALLATION section of your readme file!",
            name: "installation",
        },
        {
            type: "input",
            message: "Please complete the USAGE section of your readme file!",
            name: "usage",
        },
        {
            type: "input",
            message: "Please complete the CONTRIBUTING section of your readme file!",
            name: "contributing",
        },
        {
            type: "input",
            message: "Please complete the TEST section of your readme file!",
            name: "test",
        },
        {
            type: "list",
            message: "Please give us a brief description about your project!",
            choices: ["none", "BSD", "MIT", "GPL"],
            name: "license",
        },
]);

promise.then ((response) => {
    // console.log(response);
    const {title, description, installation, usage, contributing, test, license} = response;
    // console.log(title, description, installation, usage, contributing, test, licence);
    readMe = `# Title
${title}
      
## Description
${description}
      
## Table of Contents
          
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributing](#Contributing)
* [Test](#Test)
* [License](#License)
     
## Installation
${installation}
    
## Usage
${usage}
      
## Contributing
${contributing}
## Test
${test}
     
## License
         
The project uses the following licence: ${license}`;
console.log(readMe);

fs.writeFile('README.md', readMe, (err) => {
err ? console.error(err) : console.log('Success!')
    });
});