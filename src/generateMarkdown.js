// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  } else {
  switch(license) {
      case 'MIT License':
        licenseBadge = "[![MIT License](https://img.shields.io/badge/License-MIT-blue)](https://choosealicense.com/licenses/mit/)"
        return licenseBadge;
      case 'Mozilla Public License 2.0':
        licenseBadge = "[![Mozilla Public License 2.0 License](https://img.shields.io/badge/License-Mozilla%20Public%20License%202.0-orange)](https://choosealicense.com/licenses/mpl-2.0/)"
        return licenseBadge;
      case 'Apache License 2.0':
        licenseBadge = "[![Apache License 2.0](https://img.shields.io/badge/License-Apache%20License%202.0-red)](https://choosealicense.com/licenses/apache-2.0/)"
        return licenseBadge;
      case 'GNU AGPLv3':
        licenseBadge = "[![GNU AGPLv3 License](https://img.shields.io/badge/License-GNU%20AGPLv3-brightgreen)](https://choosealicense.com/licenses/agpl-3.0/)"
        return licenseBadge;
      case 'GNU GPLv3':
        licenseBadge = "[![GNU GPLv3 License](https://img.shields.io/badge/License-GNU%20GPLv3-green)](https://choosealicense.com/licenses/gpl-3.0/)"
        return licenseBadge;
      case 'GNU LGPLv3':
        licenseBadge = "[![GNU LGPLv3 License](https://img.shields.io/badge/License-GNU%20LGPLv3-yellowgreen)](https://choosealicense.com/licenses/lgpl-3.0/)"
        return licenseBadge;
      case 'Boost Software License 1.0':
        licenseBadge = "[![Boost Software License 1.0](https://img.shields.io/badge/License-Boost%20Software%20License%201.0-yellow)](https://choosealicense.com/licenses/bsl-1.0/)"
        return licenseBadge;
      case 'The Unlicense':
        licenseBadge = "[![Unlicense License 1.0]https://img.shields.io/badge/License-The%20Unlicense-lightgrey)](https://choosealicense.com/licenses/unlicense/"
        return licenseBadge;
    };
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
var licenseText
const renderLicenseSection = license => {
  if (!license) {
    return '';
  } else {
    switch(license) {
      case 'MIT License':
        licenseText = "Licensed under the [MIT License](https://choosealicense.com/licenses/mit/)"
        return licenseText;
      case 'Mozilla Public License 2.0':
        licenseText = "Licensed under the [Mozilla Public License 2.0 License](https://choosealicense.com/licenses/mpl-2.0/)"
        return licenseText;
      case 'Apache License 2.0':
        licenseText = "Licensed under the [Apache License 2.0](https://choosealicense.com/licenses/apache-2.0/)"
        return licenseText;
      case 'GNU AGPLv3':
        licenseText = "Licensed under the [GNU AGPLv3 License](https://choosealicense.com/licenses/agpl-3.0/)"
        return licenseText;
      case 'GNU GPLv3':
        licenseText = "Licensed under the [GNU GPLv3 License](https://choosealicense.com/licenses/gpl-3.0/)"
        return licenseText;
      case 'GNU LGPLv3':
        licenseText = "Licensed under the [GNU LGPLv3 License](https://choosealicense.com/licenses/lgpl-3.0/)"
        return licenseText;
      case 'Boost Software License 1.0':
        licenseText = "Licensed under the [Boost Software License 1.0](https://choosealicense.com/licenses/bsl-1.0/)"
        return licenseText;
      case 'The Unlicense':
        licenseText = "Licensed under the [Unlicense License 1.0](https://choosealicense.com/licenses/unlicense/"
        return licenseText;
    }
  }
}

// TODO: Create a function to generate markdown for README
module.exports = data => {
  return `
  
  # ${data.title}

  ${renderLicenseBadge(data.license)}
  
  ## Description 

  ${data.discription}
  
  ## Table of Contents
  
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage 
  
  ${data.usage}
  
  ![alt text](./assets/images/screenshot.png)
  
  ## License
  
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  
  ${data.contribution}
  
  ## Tests
  
  ${data.test}

  ## Questions

  For questions please reachout
  GitHub: ${data.github}
  Email: ${data.email}
  
`;
};