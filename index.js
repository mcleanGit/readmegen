// TODO: Include packages needed for this application -- node_modules including fs, inquirer, path to generateMarkdown
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// note: have not yet found a viable solution to rendering the license badge and link into the README
// Badges and license links are found within the generateMarkdown script and are all funcional on testing
// const renderBadgeLicense
// const renderLicenseLink


// TODO: Create an array of questions for user input -- done, decided for now to place array within inquirer.prompt []
// note: required responses re-prompt the user with repeat message!
inquirer
.prompt([
 {
  type: "input",
  name: "title",
  message: "Please enter your project title (required)",
  validate: titleInput => {
   if (titleInput) {
    return true;
   } else {
    console.log("Please enter your project title!");
    return false;
   }
   }
  },
 {
  type: "input",
  name: "description",
  message: "Please enter a brief description of your project (required)",
  validate: descriptionInput => {
   if (descriptionInput) {
    return true;
   } else {
    console.log("Please enter a brief description of your project!");
    return false;
   }
   }
 },
 { 
  type: "list",
  name: "licenseBadge",
  message: "Please select the license that applies to your project--a license badge will be applied",
  choices: [
   "Apache",
   "Boost",
   "BSD_3-Clause",
   "Creative_Commons_Zero (CC0) v.1.0",
   "GNU_GPL (General Public License) v.3.0",
   "MIT",
   "Mozilla",
   "",
  ]
 },
 {
  type: "input",
  name: "contents",
  message: "Please enter a Table of Contents (optional) for your project",
 },
 {
  type: "input",
  name: "installation",
  message: "Please provide installation instructions for your project",
 },
 {
  type: "input",
  name: "usage",
  message: "Please provide any usage guidelines or restrictions",
 },
 {
  type: "list",
  name: "licenseLink",
  message: "Please select the link to license information that applies to your project--matching the license badge above",
  choices: [
   "Apache",
   "Boost",
   "BSD_3-Clause",
   "Creative_Commons_Zero (CC0) v.1.0",
   "GNU_GPL (General Public License) v.3.0",
   "MIT",
   "Mozilla",
   "",
  ] 
 },
 {
  type: "input",
  name: "contributing",
  message: "Please indicate how others can participate in and contribute to this project",
 },
 {
  type: "input",
  name: "tests",
  message: "Please indicate any testing protocols applied to this project",
 },
 {
  type: "input",
  name: "questions",
  message: "Please indicate below where you may be contacted for Questions: git hub user name, repo link, email",
 },
 {
   type: "input",
   name: "userName",
   message: "Please provide your GitHub user name (required)",
   validate: usernameInput => {
    if (usernameInput) {
     return true;
    } else {
     console.log("Please enter your GitHub user Name!");
     return false;
    }
  }
 },
 {
  type: "input",
  name: "github",
  message: "Please enter your GitHub link (required)",
  validate: githubInput => {
   if (githubInput) {
    return true;
   } else {
    console.log("Please enter your GitHub repo link!");
    return false;
   }
   }
  },
  { type: "input",
    name: "email",
    message: "Please enter your email address",
  }
])
// note: initially checked inquirer answers (data) return in console.log, adding return to generateMarkdown(data)
.then ((data) => {
  console.log(data);
  return generateMarkdown(data);
})
// sends data as markdownText to writeFile "README.md"
.then((markdownText) => {
  console.log(markdownText);
  writeFile("README.md", markdownText);
})
.catch((error) => {
  if (error.isTtyError) {
  } else {
  }
});
// writeFile function using fs.writeFile to asynchronously write data to file
function writeFile (fileName, fileContent) {
    return new Promise((resolve, reject) => {
      fs.writeFile(fileName, fileContent, err => {
        if (err) {
          reject(err);
          return;
        }
        resolve({
          ok: true,
          message: `${fileName} created!`
        });
      });
    });
  };

module.exports = { writeFile }
      
// TODO: Create a function to initialize app -- researched various third-party suggestions // commented out
// note: although requisite in the assignment, the actions here are largely redundant as the node index.js initializes the app
/* async function init () {
  try { 
    const data = await inquirer.prompt(questions);
    let readmeData = generateMarkdown(data);
    await writeFileAsync("file README.md", readmeData);   
  } catch (err) {
    throw err;
  }
}
// similarly the init() call is not explicitly needed if the node index.js is considered sufficient intialization of the app
init();
*/