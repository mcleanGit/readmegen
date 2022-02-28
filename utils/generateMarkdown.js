// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
  } else if (data === "Boost") {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`;
  } else if (data === "BSD_3-clause") {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`;
  } else if (data == "Creative Commons") {
    return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)]`;
  } else if (data === "GNU_GPLv3") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
  } else if (data === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;
  } else if (data === "Mozilla") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`;
  } else {
      `" "`;
  }
}
renderLicenseBadge()

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data === "Apache") {
    return `(https://opensource.org/licenses/Apache-2.0)`;
  } else if (data === "Boost") {
    return `(https://www.boost.org/LICENSE_1_0.txt)`;
  } else if (data === "BSD_3-clause") {
    return `(https://opensource.org/licenses/BSD-3-Clause)`;
  } else if (data == "Creative Commons") {
    return `(http://creativecommons.org/publicdomain/zero/1.0/)`;
  } else if (data === "GNU_GPLv3") {
    return `(https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (data === "MIT") {
    return `(https://opensource.org/licenses/MIT)`;
  } else if (data === "Mozilla") {
    return `(https://opensource.org/licenses/MPL-2.0)`;
  } else {
     `" "`;
  }
}
renderLicenseLink()

/* TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// note: although requisite in the assignment, this license section is split in the app into license badge and license link
function renderLicenseSection(data) {
  return `
    ## ${data.license.licenseBadge},
    ## ${data.license.licenseLink},
    `
};
// note: although it would be preferable in revision, the number of modular elements were minimized in the app at this stage
module.exports = {
  licenseBadge: this.licenseBadge,
  licenseLink: this.licenseLink,
}
*/
// This is the main functino to generate the markdown data that is sent to the generated README file
// It is possible to combine various hard-coded descriptors with the data arising from the user's inquirer responses
// In the interest of simplicity, the same {data.name} format was used throughout
function generateMarkdown(data) {
  return `
  # Project Title: 
    ${data.title}  

  ## Description: 
    ${data.description}  

  ## License Badge:  
  - User-chosen license-badge. If specific license chosen, license badge displayed. If no license chosen, returns empty string.
    ${value.licenseBadge}
   
  ---
  ## Table of Contents: 
    ${data.contents}   
    #### [Description](#description)  
    - [Installation](#installation) 
    - [Usage](#usage) 
    - [License](#license) 
    - [Contributing](#contributing) 
    - [Tests](#tests) 
    - [Questions](#questions)

  ---
  ## Installation: 
    ${data.installation} 

  ## Usage: 
    ${data.usage} 

  ## Licence Link: 
    - User-chosen license. If specific license chosen, link to license information is displayed. If no license chosen, returns empty string.
    ${value.licenseLink} 
    
  ## Contributions: 
    ${data.contributing}   

  ## Tests: 
    ${data.tests}    

  ---
  ## Questions: 
    ${data.questions}  

  ### GitHub userName: 
    ${data.userName}     

  ### GitHub repo link: 
    ${data.github}   

  ### Email: 
    ${data.email}    
  `
};

// generateMarkdown()

module.exports = generateMarkdown;

