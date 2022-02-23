// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]";
  } else if (license === "Boost") {
    return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]";
  } else if (license === "BSD_3-clause") {
    return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]";
  } else if (license == "Creative Commons") {
    return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)]";
  } else if (license === "GNU_GPLv3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
  } else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  } else if (license === "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]";
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "Apache") {
    return "(https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "Boost") {
    return "(https://www.boost.org/LICENSE_1_0.txt)";
  } else if (license === "BSD_3-clause") {
    return "(https://opensource.org/licenses/BSD-3-Clause)";
  } else if (license == "Creative Commons") {
    return "(http://creativecommons.org/publicdomain/zero/1.0/)";
  } else if (license === "GNU_GPLv3") {
    return "(https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "MIT") {
    return "(https://opensource.org/licenses/MIT)";
  } else if (license === "Mozilla") {
    return "(https://opensource.org/licenses/MPL-2.0)";
  } else {
    return '';
  }
}

renderLicenseBadge ()
renderLicenseLink ()

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  writeToFile 

// TODO: Create a function to generate markdown for README
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
  ## ${data.github}

`;

}

module.exports = generateMarkdown;
