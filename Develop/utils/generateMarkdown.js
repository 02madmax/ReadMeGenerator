// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// // TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

// module.exports = generateMarkdown;

// function generateMarkdown(answers) {
//   // Construct the README content using template literals
//   // Include logic for license badge and other sections
//   return markdown;
// }

// module.exports = { generateMarkdown };


function generateMarkdown(answers) {
  let markdown = '';

  // Add title
  markdown += `# ${answers.title}\n\n`;

  // Add description section
  markdown += '## Description\n\n';
  markdown += `${answers.description}\n\n`;

  // Add table of contents
  markdown += '## Table of Contents\n\n';
  markdown += '- [Installation](#installation)\n';
  markdown += '- [Usage](#usage)\n';
  markdown += '- [License](#license)\n';
  markdown += '- [Contributing](#contributing)\n';
  markdown += '- [Tests](#tests)\n';
  markdown += '- [Questions](#questions)\n\n';

  // Add installation section
  markdown += '## Installation\n\n';
  markdown += `${answers.installation}\n\n`;

  // Add usage section
  markdown += '## Usage\n\n';
  markdown += `${answers.usage}\n\n`;

  // Add license section and badge
  markdown += '## License\n\n';
  markdown += `This application is covered under the ${answers.license} license.\n\n`;
  markdown += `![License Badge](https://img.shields.io/badge/license-${encodeURIComponent(answers.license)}-brightgreen)\n\n`;

  // Add contributing section
  markdown += '## Contributing\n\n';
  markdown += `${answers.contributing}\n\n`;

  // Add tests section
  markdown += '## Tests\n\n';
  markdown += `${answers.tests}\n\n`;

  // Add questions section
  markdown += '## Questions\n\n';
  markdown += `For additional questions, contact me:\n`;
  markdown += `- GitHub: [${answers.github}](https://github.com/${answers.github})\n`;
  markdown += `- Email: ${answers.email}\n\n`;

  return markdown;
}

module.exports = { generateMarkdown };
