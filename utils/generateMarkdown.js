// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(value) {
  if (value === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
  } else if (value === "Boost") {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]";
  } else if (value === "BSD_3-clause") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]";
  } else if (value == "Creative Commons") {
    return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)]";
  } else if (value === "GNU_GPLv3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
  } else if (value === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  } else if (value === "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]";
  } else {
      " ";
  }
}

renderLicenseBadge()

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(value) {
  if (value === "Apache") {
    return "(https://opensource.org/licenses/Apache-2.0)";
  } else if (value === "Boost") {
    return "(https://www.boost.org/LICENSE_1_0.txt)";
  } else if (value === "BSD_3-clause") {
    return "(https://opensource.org/licenses/BSD-3-Clause)";
  } else if (value == "Creative Commons") {
    return "(http://creativecommons.org/publicdomain/zero/1.0/)";
  } else if (value === "GNU_GPLv3") {
    return "(https://www.gnu.org/licenses/gpl-3.0)";
  } else if (value === "MIT") {
    return "(https://opensource.org/licenses/MIT)";
  } else if (value === "Mozilla") {
    return "(https://opensource.org/licenses/MPL-2.0)";
  } else {
     " ";
  }
}

renderLicenseLink ()

/* TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(data) {
  return `
    ## ${data.license.licenseBadge},
    ## ${data.license.licenseLink},
    `
};

module.exports = {
  licenseBadge: this.licenseBadge,
  licenseLink: this.licenseLink,
}
*/
function generateMarkdown(data) {
  return `

    # ${data.title},
  ## ${data.description},
  ## ${data.licenseBadge},
  ---
  ## ${data.contents},
  ---
  ## ${data.installation},
  ## ${data.usage},
  ## ${data.licenseLink},
  ## ${data.contributing},
  ## ${data.tests},
  ---
  ## ${data.questions},
  ### ${data.userName},
  ### ${data.github},
  ### ${data.email},
  `;
}

// generateMarkdown()

module.exports = generateMarkdown;

