// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const { generateMarkdown } = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const prompts = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter the description of your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter the installation instructions:',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage information:',
      },
      {
        type: 'input',
        name: 'contribution',
        message: 'Enter the contribution guidelines:',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter the test instructions:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
      },
]
// asyn init function that will prompt the user for input and then generate the README file using the generateMarkdown function, passing in the answers object as an argument
//will also log an error if one occurs
async function init() {
  try {
    const answers = await inquirer.prompt(prompts);
    const markdown = generateMarkdown(answers);

    fs.writeFile('README.md', markdown, (error) => {
      if (error) {
        console.error('Error occurred while writing the README file:', error);
      } else {
        console.log('README file generated successfully!');
      }
    });
  } catch (error) {
    console.error('Error occurred:', error);
  }
}

init();
