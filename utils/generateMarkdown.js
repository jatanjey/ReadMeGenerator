function generateMarkdown(data) {
    // License badge and link based on user's choice
    const licenseBadge = renderLicenseBadge(data.license);
    const licenseLink = renderLicenseLink(data.license);
  
    return `
    # ${data.title}
  
    ## Description
    ${data.description}
  
    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
  
    ## Installation
    ${data.installation}
  
    ## Usage
    ${data.usage}
  
    ## License
    ${licenseBadge}
  
    This project is licensed under the [${data.license}](${licenseLink}) license.
  
    ## Contributing
    ${data.contributing}
  
    ## Tests
    ${data.tests}
  
    ## Questions
    If you have any questions, you can reach out to me on GitHub:
    [${data.github}](https://github.com/${data.github})
  
    You can also contact me via email: ${data.email}
    `;
  }
  
  // Function to render a license badge
  function renderLicenseBadge(license) {
    if (license === 'None') {
      return '';
    }
    return `![License](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  
  // Function to render a license link
  function renderLicenseLink(license) {
    if (license === 'None') {
      return '';
    }
    return `https://choosealicense.com/licenses/${license.toLowerCase()}/`;
  }
  
  module.exports = generateMarkdown;
  