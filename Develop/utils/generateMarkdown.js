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
  markdown += `${answers.contribution}\n\n`;

  // Add tests section
  markdown += '## Tests\n\n';
  markdown += `${answers.tests}\n\n`;

  // Add questions section
  markdown += '## Questions\n\n';
  markdown += `For additional questions, contact me:\n`;
  markdown += `- GitHub: [${answers.github}](https://github.com/${answers.github})\n`;
  markdown += `- Email: ${answers.email}\n\n`;

  return markdown;
};

module.exports = { generateMarkdown };
